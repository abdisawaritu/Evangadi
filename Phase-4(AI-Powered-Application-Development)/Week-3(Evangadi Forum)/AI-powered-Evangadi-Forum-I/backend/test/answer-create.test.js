import assert from "node:assert/strict";
import { after, test } from "node:test";
import express from "express";

process.env.JWT_SECRET ||= "answer-create-test-secret";

const { db } = await import("../db/config.js");
const { default: answerRoutes } = await import(
  "../src/api/answer/routes/answer.routes.js"
);
const { errorHandler } = await import("../src/middleware/error-handler.js");
const jwt = (await import("jsonwebtoken")).default;

const app = express();
app.use(express.json());
app.use("/api/answers", answerRoutes);
app.use(errorHandler);

const server = app.listen(0, "127.0.0.1");
await new Promise((resolve) => server.once("listening", resolve));

after(async () => {
  await new Promise((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
});

const createToken = (id = 7) =>
  jwt.sign({ id }, process.env.JWT_SECRET);

const withDatabase = async (execute, action) => {
  const originalExecute = db.execute;
  db.execute = execute;
  try {
    return await action();
  } finally {
    db.execute = originalExecute;
  }
};

const postAnswer = async ({ body, token = createToken() }) => {
  const response = await fetch(
    `http://127.0.0.1:${server.address().port}/api/answers`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    },
  );
  return {
    status: response.status,
    body: await response.json(),
  };
};

const answerRow = {
  id: 91,
  questionId: 501,
  content: "A detailed answer explaining the solution.",
  createdAt: "2026-11-19T10:00:00.000Z",
  updatedAt: "2026-11-19T10:00:00.000Z",
  userId: 7,
  firstName: "Ada",
  lastName: "Lovelace",
};

const successfulDatabase = (calls) => async (sql, params) => {
  calls.push({ sql, params });
  if (sql.includes("SELECT question_id, user_id FROM questions")) {
    return [[{ question_id: 501, user_id: 20 }], undefined];
  }
  if (sql.includes("INSERT INTO answers")) {
    return [{ insertId: 91 }, undefined];
  }
  if (sql.includes("FROM answers a")) {
    return [[answerRow], undefined];
  }
  assert.fail(`Unexpected SQL query: ${sql}`);
};

test("creates an answer for another user's question with authenticated ownership", async () => {
  const calls = [];
  const content = "A detailed answer explaining the solution.";
  const result = await withDatabase(successfulDatabase(calls), () =>
    postAnswer({ body: { questionId: "501", content, userId: 999 } }),
  );

  assert.equal(result.status, 201);
  assert.deepEqual(result.body.data, {
    id: 91,
    questionId: 501,
    content,
    createdAt: answerRow.createdAt,
    updatedAt: answerRow.updatedAt,
    author: { id: 7, firstName: "Ada", lastName: "Lovelace" },
  });
  const insert = calls.find(({ sql }) => sql.includes("INSERT INTO answers"));
  assert.deepEqual(insert.params, [501, 7, content]);
  assert.match(insert.sql, /INSERT INTO answers \(question_id, user_id, content\) VALUES \(\?, \?, \?\)/);
});

test("rejects absent and invalid question IDs without database access", async () => {
  for (const body of [
    { content: "A detailed answer explaining the solution." },
    { questionId: 0, content: "A detailed answer explaining the solution." },
    { questionId: "not-an-id", content: "A detailed answer explaining the solution." },
  ]) {
    let databaseAccessed = false;
    const result = await withDatabase(
      async () => {
        databaseAccessed = true;
        return [[], undefined];
      },
      () => postAnswer({ body }),
    );
    assert.equal(result.status, 400);
    assert.equal(databaseAccessed, false);
  }
});

test("rejects answer content shorter than 20 characters", async () => {
  let databaseAccessed = false;
  const result = await withDatabase(
    async () => {
      databaseAccessed = true;
      return [[], undefined];
    },
    () => postAnswer({ body: { questionId: 501, content: "  too short  " } }),
  );

  assert.equal(result.status, 400);
  assert.match(result.body.msg, /at least 20 characters/);
  assert.equal(databaseAccessed, false);
});

test("requires a valid authenticated user", async () => {
  const result = await withDatabase(
    async () => assert.fail("unauthenticated request must not access the database"),
    () =>
      postAnswer({
        body: {
          questionId: 501,
          content: "A detailed answer explaining the solution.",
        },
        token: null,
      }),
  );

  assert.equal(result.status, 401);
});

test("returns 404 when the referenced question does not exist", async () => {
  const result = await withDatabase(
    async () => [[], undefined],
    () =>
      postAnswer({
        body: {
          questionId: 501,
          content: "A detailed answer explaining the solution.",
        },
      }),
  );

  assert.equal(result.status, 404);
  assert.equal(result.body.msg, "Question not found");
});

test("rejects answering one's own question when the JWT ID is a string", async () => {
  let insertAttempted = false;
  const result = await withDatabase(
    async (sql) => {
      if (sql.includes("SELECT question_id, user_id FROM questions")) {
        return [[{ question_id: 501, user_id: 7 }], undefined];
      }
      if (sql.includes("INSERT INTO answers")) {
        insertAttempted = true;
      }
      assert.fail(`Unexpected SQL query: ${sql}`);
    },
    () =>
      postAnswer({
        body: {
          questionId: 501,
          content: "A detailed answer explaining the solution.",
        },
        token: createToken("7"),
      }),
  );

  assert.equal(result.status, 400);
  assert.equal(result.body.msg, "You cannot answer your own question");
  assert.equal(insertAttempted, false);
});

test("returns a server error when answer insertion fails", async () => {
  const originalError = console.error;
  console.error = () => {};
  try {
    const result = await withDatabase(
      async (sql) => {
        if (sql.includes("SELECT question_id, user_id FROM questions")) {
          return [[{ question_id: 501, user_id: 20 }], undefined];
        }
        if (sql.includes("INSERT INTO answers")) {
          throw new Error("simulated answer insert failure");
        }
        assert.fail(`Unexpected SQL query: ${sql}`);
      },
      () =>
        postAnswer({
          body: {
            questionId: 501,
            content: "A detailed answer explaining the solution.",
          },
        }),
    );

    assert.equal(result.status, 500);
    assert.equal(result.body.msg, "Something went wrong try again later");
  } finally {
    console.error = originalError;
  }
});
