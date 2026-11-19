import assert from "node:assert/strict";
import { after, test } from "node:test";
import express from "express";
import { ServiceUnavailableError } from "../src/utils/errors/index.js";

process.env.JWT_SECRET ||= "gemini-question-services-test-secret";

const { db } = await import("../db/config.js");
const { default: questionRoutes } = await import(
  "../src/api/question/routes/question.routes.js"
);
const { errorHandler } = await import("../src/middleware/error-handler.js");
const {
  assessAnswerAgainstQuestionService,
  generateQuestionDraftCoachService,
} = await import("../src/api/question/service/geminiTextCoach.service.js");
const jwt = (await import("jsonwebtoken")).default;

const app = express();
app.use(express.json());
app.use("/api/questions", questionRoutes);
app.use(errorHandler);

const server = app.listen(0, "127.0.0.1");
await new Promise((resolve) => server.once("listening", resolve));

after(async () => {
  await new Promise((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
});

const createToken = () => jwt.sign({ id: 7 }, process.env.JWT_SECRET);

const withDatabase = async (execute, action) => {
  const originalExecute = db.execute;
  db.execute = execute;
  try {
    return await action();
  } finally {
    db.execute = originalExecute;
  }
};

const withGeminiApiKey = async (apiKey, action) => {
  const originalApiKey = process.env.GEMINI_API_KEY;
  if (apiKey === undefined) {
    delete process.env.GEMINI_API_KEY;
  } else {
    process.env.GEMINI_API_KEY = apiKey;
  }
  try {
    return await action();
  } finally {
    if (originalApiKey === undefined) {
      delete process.env.GEMINI_API_KEY;
    } else {
      process.env.GEMINI_API_KEY = originalApiKey;
    }
  }
};

const request = async ({ path, method = "POST", body, token = createToken() }) => {
  const response = await fetch(
    `http://127.0.0.1:${server.address().port}${path}`,
    {
      method,
      headers: {
        "content-type": "application/json",
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    },
  );
  return { status: response.status, body: await response.json() };
};

test("draft coach returns valid constructive suggestions from Gemini", async () => {
  let receivedPrompt = "";
  const result = await generateQuestionDraftCoachService(
    { title: "Why does this fail?", content: "The request returns an error." },
    async (prompt) => {
      receivedPrompt = prompt;
      return JSON.stringify({
        tips: [
          "Include the exact error message.",
          "Describe the expected and actual behavior.",
          "List the steps needed to reproduce the issue.",
        ],
      });
    },
  );

  assert.equal(result.tips.length, 3);
  assert.match(receivedPrompt, /Why does this fail\?/);
  assert.match(receivedPrompt, /The request returns an error\./);
});

test("draft coach rejects malformed AI suggestions instead of returning fallbacks", async () => {
  for (const response of [
    "not-json",
    JSON.stringify({ tips: ["Only one suggestion"] }),
    JSON.stringify({ tips: ["", "Second", "Third"] }),
  ]) {
    await assert.rejects(
      generateQuestionDraftCoachService(
        { title: "Why does this fail?", content: "The request returns an error." },
        async () => response,
      ),
      { statusCode: 503 },
    );
  }
});

test("answer-fit returns each supported level and includes all input in the prompt", async () => {
  const input = {
    questionTitle: "How do I handle a failed request?",
    questionContent: "Explain the expected error handling behavior.",
    answerText: "Check the response status and handle failures explicitly.",
  };

  for (const level of ["strong", "partial", "weak"]) {
    let receivedPrompt = "";
    const result = await assessAnswerAgainstQuestionService(input, async (prompt) => {
      receivedPrompt = prompt;
      return JSON.stringify({ level, note: `This answer is a ${level} fit.` });
    });

    assert.deepEqual(result, {
      level,
      note: `This answer is a ${level} fit.`,
    });
    assert.match(receivedPrompt, /How do I handle a failed request\?/);
    assert.match(receivedPrompt, /Explain the expected error handling behavior\./);
    assert.match(receivedPrompt, /Check the response status and handle failures explicitly\./);
  }
});

test("answer-fit rejects malformed or unsupported AI evaluations", async () => {
  for (const response of [
    "not-json",
    JSON.stringify({ level: "unknown", note: "Not a supported level." }),
    JSON.stringify({ level: "partial", note: "" }),
    JSON.stringify({ level: "strong", note: "x".repeat(200) }),
  ]) {
    await assert.rejects(
      assessAnswerAgainstQuestionService(
        {
          questionTitle: "A question title",
          questionContent: "A question body",
          answerText: "A sufficiently long answer draft.",
        },
        async () => response,
      ),
      { statusCode: 503 },
    );
  }
});

test("Gemini network failures return service unavailable", async () => {
  await assert.rejects(
    generateQuestionDraftCoachService(
      { title: "Why does this fail?", content: "The request returns an error." },
      async () => {
        throw new Error("simulated network error");
      },
    ),
    { statusCode: 503 },
  );
  await assert.rejects(
    assessAnswerAgainstQuestionService(
      {
        questionTitle: "A question title",
        questionContent: "A question body",
        answerText: "A sufficiently long answer draft.",
      },
      async () => {
        throw new Error("simulated Gemini API error");
      },
    ),
    { statusCode: 503 },
  );
});

test("missing API key returns service unavailable without failing module loading", async () => {
  await withGeminiApiKey("", async () => {
    await assert.rejects(
      generateQuestionDraftCoachService({
        title: "Why does this fail?",
        content: "The request returns an error.",
      }),
      { statusCode: 503 },
    );
    await assert.rejects(
      assessAnswerAgainstQuestionService({
        questionTitle: "A question title",
        questionContent: "A question body",
        answerText: "A sufficiently long answer draft.",
      }),
      { statusCode: 503 },
    );
  });
});

test("draft coach endpoint validates input and requires authentication", async () => {
  const unauthenticated = await request({
    path: "/api/questions/draft-coach",
    body: { title: "A valid title", content: "A valid body for the draft." },
    token: null,
  });
  assert.equal(unauthenticated.status, 401);

  const invalid = await request({
    path: "/api/questions/draft-coach",
    body: { title: " ", content: "" },
  });
  assert.equal(invalid.status, 400);
});

test("answer-fit endpoint validates hashes and handles nonexistent questions", async () => {
  const invalidHash = await request({
    path: "/api/questions/not-a-hash/answer-fit",
    body: { answerText: "A sufficiently detailed answer to the question." },
  });
  assert.equal(invalidHash.status, 400);

  const missingQuestion = await withDatabase(
    async () => [[], undefined],
    () =>
      request({
        path: "/api/questions/0123456789abcdef/answer-fit",
        body: { answerText: "A sufficiently detailed answer to the question." },
      }),
  );
  assert.equal(missingQuestion.status, 404);
  assert.equal(missingQuestion.body.msg, "Question not found");
});

test("AI endpoints surface missing configuration as 503 responses", async () => {
  await withGeminiApiKey("", async () => {
    const draftResult = await request({
      path: "/api/questions/draft-coach",
      body: {
        title: "Why does this fail?",
        content: "The request returns an error.",
      },
    });
    assert.equal(draftResult.status, 503);

    let questionQueryCount = 0;
    const answerFitResult = await withDatabase(
      async (sql) => {
        if (sql.includes("FROM questions q")) {
          questionQueryCount += 1;
          return [
            [
              {
                id: 12,
                questionHash: "0123456789abcdef",
                title: "A database question",
                content: "Question details for answer-fit evaluation.",
                answerCount: 0,
                userId: 2,
                firstName: "Test",
                lastName: "Author",
              },
            ],
            undefined,
          ];
        }
        if (sql.includes("FROM answers a")) {
          return [[], undefined];
        }
        assert.fail(`Unexpected SQL query: ${sql}`);
      },
      () =>
        request({
          path: "/api/questions/0123456789abcdef/answer-fit",
          body: {
            answerText: "A sufficiently detailed answer to the question.",
          },
        }),
    );

    assert.equal(answerFitResult.status, 503);
    assert.equal(questionQueryCount, 1);
  });
});
