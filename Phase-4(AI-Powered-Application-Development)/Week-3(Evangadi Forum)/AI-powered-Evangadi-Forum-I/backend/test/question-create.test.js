import assert from "node:assert/strict";
import { test } from "node:test";

process.env.JWT_SECRET ||= "question-create-test-secret";

const { db } = await import("../db/config.js");
const { createQuestionWithVectorService } = await import(
  "../src/api/question/service/question.service.js"
);
const { createQuestionValidation } = await import(
  "../src/api/question/validations/question.validation.js"
);
const { authenticateUser } = await import(
  "../src/middleware/authentication.js"
);
const { validationResult } = await import("express-validator");
const jwt = (await import("jsonwebtoken")).default;

const payload = {
  userId: 7,
  title: "Why does Node crash?",
  content: "Error: ENOENT when opening a file.",
};

const createConnection = (failure) => {
  const calls = [];
  const connection = {
    committed: false,
    rolledBack: false,
    released: false,
    async beginTransaction() {
      calls.push({ type: "begin" });
    },
    async execute(sql, params) {
      calls.push({ type: "execute", sql, params });
      if (failure === "question" && sql.includes("INSERT INTO questions")) {
        throw new Error("question insert failed");
      }
      if (
        failure === "vector" &&
        sql.includes("INSERT INTO question_vectors")
      ) {
        throw new Error("vector storage failed");
      }
      return [
        sql.includes("INSERT INTO questions")
          ? { insertId: 41 }
          : { affectedRows: 1 },
        undefined,
      ];
    },
    async commit() {
      this.committed = true;
    },
    async rollback() {
      this.rolledBack = true;
    },
    release() {
      this.released = true;
    },
  };
  return { connection, calls };
};

const withConnection = async (connection, action) => {
  const originalGetConnection = db.getConnection;
  db.getConnection = async () => connection;
  try {
    return await action();
  } finally {
    db.getConnection = originalGetConnection;
  }
};

const runQuestionValidation = async (body) => {
  const req = { body, params: {}, query: {} };
  await Promise.all(createQuestionValidation.slice(0, -1).map((chain) => chain.run(req)));
  return { req, errors: validationResult(req).array() };
};

test("question validation rejects blank fields and trims valid fields", async () => {
  const missing = await runQuestionValidation({});
  assert.equal(missing.errors.length, 2);

  const blank = await runQuestionValidation({
    title: "     ",
    content: "          ",
  });
  assert.equal(blank.errors.length, 2);

  const valid = await runQuestionValidation({
    title: "  Clear title  ",
    content: "  Detailed question content.  ",
  });
  assert.deepEqual(valid.errors, []);
  assert.equal(valid.req.body.title, "Clear title");
  assert.equal(valid.req.body.content, "Detailed question content.");
});

test("question authentication rejects absent and invalid bearer tokens", () => {
  for (const authorization of [undefined, "Bearer invalid"]) {
    let caughtError;
    try {
      authenticateUser(
        { headers: { authorization } },
        {},
        () => assert.fail("unauthenticated request must not continue"),
      );
    } catch (error) {
      caughtError = error;
    }
    assert.equal(caughtError?.statusCode, 401);
  }

  const token = jwt.sign({ id: 7 }, process.env.JWT_SECRET);
  const req = { headers: { authorization: `Bearer ${token}` } };
  authenticateUser(req, {}, () => {});
  assert.equal(req.user.id, 7);
});

test("question and vector are saved together with title and content embedded", async () => {
  const { connection, calls } = createConnection();
  const result = await withConnection(connection, () =>
    createQuestionWithVectorService(payload, async (sourceText) => {
      assert.equal(
        sourceText,
        "why does node crash? error: enoent when opening a file.",
      );
      return { embedding: [0.25, 0.75] };
    }),
  );

  const questionInsert = calls.find(
    (call) => call.type === "execute" && call.sql.includes("INSERT INTO questions"),
  );
  const vectorInsert = calls.find(
    (call) =>
      call.type === "execute" && call.sql.includes("INSERT INTO question_vectors"),
  );
  assert.equal(questionInsert.params[1], payload.userId);
  assert.equal(vectorInsert.params[0], 41);
  assert.equal(vectorInsert.params[1], "why does node crash? error: enoent when opening a file.");
  assert.deepEqual(JSON.parse(vectorInsert.params[2]), [0.25, 0.75]);
  assert.equal(vectorInsert.params[3], "ready");
  assert.match(vectorInsert.sql, /ON DUPLICATE KEY UPDATE/);
  assert.equal(connection.committed, true);
  assert.equal(connection.rolledBack, false);
  assert.equal(connection.released, true);
  assert.deepEqual(result.question, {
    id: 41,
    questionHash: result.question.questionHash,
    ...payload,
  });
});

test("embedding failure returns 503 without opening a database transaction", async () => {
  let connectionRequested = false;
  const originalGetConnection = db.getConnection;
  db.getConnection = async () => {
    connectionRequested = true;
    throw new Error("database must not be used");
  };
  try {
    await assert.rejects(
      createQuestionWithVectorService(payload, async () => {
        throw new Error("embedding failed");
      }),
      { statusCode: 503 },
    );
    assert.equal(connectionRequested, false);
  } finally {
    db.getConnection = originalGetConnection;
  }
});

for (const failure of ["question", "vector"]) {
  test(`${failure} database failure rolls back and does not report success`, async () => {
    const { connection } = createConnection(failure);
    await assert.rejects(
      withConnection(connection, () =>
        createQuestionWithVectorService(payload, async () => ({
          embedding: [0.25, 0.75],
        })),
      ),
      new RegExp(`${failure === "question" ? "question insert" : "vector storage"} failed`),
    );
    assert.equal(connection.committed, false);
    assert.equal(connection.rolledBack, true);
    assert.equal(connection.released, true);
  });
}

test("empty embeddings cannot be committed as a successful question", async () => {
  const { connection } = createConnection();
  await assert.rejects(
    withConnection(connection, () =>
      createQuestionWithVectorService(payload, async () => ({ embedding: [] })),
    ),
    /Embedding cannot be empty/,
  );
  assert.equal(connection.committed, false);
  assert.equal(connection.rolledBack, true);
  assert.equal(connection.released, true);
});
