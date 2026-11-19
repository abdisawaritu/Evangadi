# Evangadi Forum Milestone 2 — Postman Testing Guide

This package tests the eight Milestone 2 API endpoints. Registration and login requests are included as setup because the question and answer routes require a JWT.

## Files

- `Evangadi_Milestone2_Collection.json` — Postman Collection v2.1 with ordered requests and response tests.
- `Evangadi_Milestone2_Environment.json` — local environment and sample request data.

## Prerequisites

1. Use a local or dedicated development database. The collection creates test users, questions, vectors, and an answer; it does not delete records.
2. Configure the backend's own `.env` with its database settings and `JWT_SECRET`. Do not put backend secrets in Postman.
3. Configure `GEMINI_API_KEY` in the backend environment for question embedding, semantic search, draft coaching, and answer-fit requests.
4. Start the backend from the `backend` directory:

   ```powershell
   npm run dev
   ```

   The default API base is `http://localhost:3777`; update the Postman `baseUrl` environment variable if `PORT` is different.
5. Confirm the server starts and can connect to MySQL before running the collection.

The two password values in the imported environment are dummy examples, not real account credentials. Change them if desired. Registration generates unique `@example.test` emails each time its request runs.

## Import and configure Postman

1. Open Postman and choose **Import**.
2. Import both `Evangadi_Milestone2_Collection.json` and `Evangadi_Milestone2_Environment.json`.
3. Select **Evangadi Forum - Local Milestone 2** in the environment selector.
4. Check `baseUrl`. Leave `token`, IDs, hashes, and generated email fields empty; collection tests populate them as requests succeed.
5. Keep `GEMINI_API_KEY` in the backend only. It is intentionally absent from the collection and environment.

## Run the collection

Open the collection's **Run** option and run all folders in order. The order is intentional:

1. **00 — Setup and Authentication:** registers two synthetic users and logs them in. Login tests save `authorToken`, `contributorToken`, and the active `token`.
2. **01 — T-09:** creates the target question as the question author, then creates a second question as the contributor. Successful responses populate the question IDs and hashes.
3. **02 — T-10:** tests keyword search, `mine=true` and `mine=false`, question details, invalid/nonexistent hashes, and authentication.
4. **03 — T-11:** runs semantic search and similar-question search. The target and comparison questions need stored embeddings.
5. **04 — T-12:** checks self-answer rejection, invalid content, answer creation by another user, and the answer displayed on the target question. The successful request includes a client `userId` deliberately; the backend must use the JWT author instead.
6. **05 — T-17:** runs valid and invalid draft-coach requests.
7. **06 — T-18:** runs valid answer-fit and invalid hash/body requests.

Run requests in sequence rather than individually at first. Requests that depend on a question hash or ID will not work until the corresponding create request succeeds. The test scripts check expected HTTP status codes and response shapes, and save IDs, hashes, tokens, and answer IDs into the selected environment.

## Endpoint contracts covered

| Endpoint | Success expectation | Included negative cases |
|---|---|---|
| `POST /api/questions` | `201`; question in `data`, with ID and 16-character hash | Invalid title/content: `400` |
| `GET /api/questions` | `200`; question array in `data`, `meta` present | Invalid `mine`: `400`; missing token: `401` |
| `GET /api/questions/:questionHash` | `200`; question and associated answers | Invalid hash: `400`; unknown hash: `404` |
| `GET /api/questions/search` | `200`; semantic matches in `data`, metadata present | Missing/short query or out-of-range options: `400` |
| `GET /api/questions/:questionHash/similar` | `200`; similar results exclude the target | Invalid hash: `400` |
| `POST /api/answers` | `201`; saved answer and author in `data` | Short content: `400`; own question: `400`; nonexistent question: `404` |
| `POST /api/questions/draft-coach` | `200`; `data.tips` has 3–5 suggestions | Invalid/empty draft: `400` |
| `POST /api/questions/:questionHash/answer-fit` | `200`; `data.level` is `strong`, `partial`, or `weak` with a note | Invalid hash/body: `400` |

Protected requests inherit Bearer authentication from the collection's `token` variable. The two login requests set the author-specific and contributor-specific tokens used by their respective ownership checks.

Validation rules represented in the requests follow the backend: question titles are 5–255 characters; question content is at least 10 characters; answer content and answer-fit text are at least 20 characters; semantic queries are at least 5 characters; `k` is 1–20; threshold is 0–1; and question hashes are 16 lowercase hexadecimal characters.

## Expected response examples

Successful question creation:

```json
{
  "success": true,
  "message": "Question posted successfully.",
  "data": {
    "id": 123,
    "questionHash": "0123456789abcdef",
    "title": "How do I handle a JavaScript API error?",
    "content": "When my request fails, how should I inspect and handle the error response?"
  }
}
```

Successful answer creation:

```json
{
  "success": true,
  "message": "Answer posted successfully.",
  "data": {
    "id": 456,
    "questionId": 123,
    "content": "Check the response status, handle error codes explicitly, and show a useful message when a request fails.",
    "author": {
      "id": 789,
      "firstName": "Forum",
      "lastName": "Contributor"
    }
  }
}
```

Successful AI responses use the controller's existing success envelope. The draft coach returns `data.tips`; answer-fit returns `data.level` and `data.note`. Validation and service errors use the backend error format, for example:

```json
{ "msg": "..." }
```

AI requests expect `200` in the collection tests. If Gemini is unavailable or returns malformed output, the backend should return `503`; this is an explicit service failure, not a successful evaluation. A `503` will fail the positive-response test so it is not mistaken for a passed AI integration.

## Data safety and troubleshooting

- Use only a local or dedicated development database. Each collection run registers two new users and creates questions; those records persist.
- No request in this collection deletes database records. Do not use a production database for these tests. If you later clean up test data, identify only the exact generated `@example.test` accounts and their test questions/answers; do not delete unrelated records.
- `401` usually means the login request did not succeed or its token was not saved.
- `400` indicates validation or a business-rule rejection. Check the `msg` field.
- `404` indicates the requested question or answer target does not exist. If the `nonexistentQuestionId` default happens to exist in your database, change it to an unused positive ID.
- A `503` from T-09/T-11 may indicate embedding-service availability. A `503` from T-17/T-18 may indicate unavailable Gemini text generation or a malformed AI response. Confirm backend environment configuration and server logs; never paste API keys into Postman.
- Similar search needs a stored target embedding. The comparison question is included to provide another candidate, but it must also be created successfully with an embedding.
- To independently verify database associations in a SQL client, use read-only queries with the IDs saved in Postman:

  ```sql
  SELECT q.question_id, q.user_id, q.question_hash,
         v.status, JSON_LENGTH(v.embedding) AS embedding_dimensions
  FROM questions q
  LEFT JOIN question_vectors v ON v.question_id = q.question_id
  WHERE q.question_id = <questionId>;

  SELECT answer_id, question_id, user_id, content
  FROM answers
  WHERE answer_id = <answerId>;
  ```

  Check that `questions.user_id` matches `authorId`, the vector is `ready` and has 768 dimensions, and the answer's `question_id` and `user_id` match `questionId` and `contributorId`.
- The collection was prepared and its JSON files are syntax-validated; **it has not been executed in Postman**.
