# Evangadi Forum

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Implemented Milestones](#implemented-milestones)
- [Backend API](#backend-api)
- [Installation and Setup](#installation-and-setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Known Limitations and Pending Work](#known-limitations-and-pending-work)
- [Future Development](#future-development)

## Project Overview

Evangadi Forum is a learner-focused technical Q&A application. It gives learners
a place to post questions with useful context, find existing discussions, and
share answers. Keyword search, similarity search, and optional AI writing
assistance help users discover relevant discussions and improve drafts.

The project addresses common learning-community problems: questions being hard
to find again, repeated questions, incomplete problem descriptions, and answers
that are difficult to associate with the original discussion.

## Key Features

- **Authentication:** Register and sign in with email and password. Passwords
  are hashed on the backend, and protected API requests use a JWT.
- **Dashboard:** View the newest questions, reply counts, and loading, empty, or
  error states.
- **Question search:** Filter questions by keyword or use semantic search based
  on question embeddings.
- **My Questions:** View the signed-in user's questions.
- **Question management:** Create a question, view its detail page and answers,
  and navigate between related questions.
- **Answers:** Submit answers to other users' questions. The backend rejects
  attempts to answer one's own question.
- **AI Draft Coach:** Request suggestions for a question draft. Suggestions are
  presented for review and do not automatically replace the draft.
- **AI Answer Fit:** Request an AI assessment of how well an answer draft
  addresses its question. The assessment is guidance, not grading. Provider
  errors leave the draft available for normal submission.
- **Responsive interface:** The frontend uses CSS Modules and shared design
  tokens. Reference designs are under `frontend/ui-designs/`.

## Technology Stack

| Area | Technologies present in the project |
|---|---|
| Frontend | React, React DOM, React Router, Vite |
| UI and presentation | CSS Modules, Framer Motion, Lucide React, React Markdown |
| HTTP client | Axios |
| Backend | Node.js (ES modules), Express |
| Database | MySQL, accessed with `mysql2/promise` |
| Authentication and validation | `jsonwebtoken`, `bcryptjs`, `express-validator` |
| AI integration | Google GenAI SDK (`@google/genai`) for text generation and embeddings |
| Other backend dependencies | `cors`, `dotenv`, `http-status-codes`, `multer`, `pdf-parse` |
| Development and verification | npm scripts, ESLint, Vite build, Node's built-in test runner, Postman collection |

`multer` and `pdf-parse` are listed as backend dependencies, but document/RAG
API routes are not currently wired into the backend.

## Project Architecture

The repository has separate frontend and backend packages; run npm commands
from the relevant package directory.

```text
AI-powered-Evangadi-Forum-I/
├── backend/
│   ├── db/
│   │   ├── config.js
│   │   └── schema.sql
│   ├── postman/
│   │   ├── Evangadi_Milestone2_Collection.json
│   │   ├── Evangadi_Milestone2_Environment.json
│   │   └── POSTMAN_TESTING_GUIDE.md
│   ├── src/
│   │   ├── api/
│   │   │   ├── auth/          # Registration and login
│   │   │   ├── question/      # Questions, search, similarity, AI assistance
│   │   │   ├── answer/        # Answer creation
│   │   │   └── routes.js
│   │   ├── middleware/        # JWT, validation, and error handling
│   │   └── utils/errors/
│   ├── test/                  # Node test-runner tests
│   └── index.js               # Express startup and API mount
└── frontend/
    ├── index.html
    ├── public/
    ├── src/
    │   ├── components/        # Footer, layout, navigation, route guard
    │   ├── contexts/          # AuthContext
    │   ├── pages/             # Landing, Auth, Dashboard, question flows
    │   ├── services/          # Shared API client and auth/question/answer APIs
    │   ├── styles/            # Shared page-state styles
    │   ├── App.jsx
    │   └── main.jsx
    └── ui-designs/            # Reference UI screenshots
```

### Application flow

- `frontend/src/main.jsx` mounts the React application and global CSS.
- `frontend/src/App.jsx` defines public routes (`/`, `/auth`) and protected
  forum routes. Protected pages use the shared layout and `ProtectedRoute`.
- `frontend/src/contexts/AuthContext.jsx` restores the user from local storage
  and exposes login, registration, and logout actions.
- `frontend/src/services/core/api.client.js` configures Axios, adds the stored
  JWT to requests, and handles unauthorized responses.
- Frontend page components call the question, answer, and authentication
  services rather than calling backend endpoints directly.
- `backend/index.js` loads environment configuration, verifies a database
  connection, mounts `/api`, and installs the shared error handler.
- `backend/src/api/routes.js` mounts the auth, question, and answer routers.
  Controllers validate request data, call services, and return JSON responses.

### Frontend routes

| Route | Access | Page |
|---|---|---|
| `/` | Public | Landing page |
| `/auth` | Public | Registration and login |
| `/dashboard` | Protected | Question feed and search |
| `/my-questions` | Protected | Signed-in user's questions |
| `/questions/ask` | Protected | Question creation and Draft Coach |
| `/question/:questionHash` | Protected | Question, answers, similar questions, Answer Fit |
| `/rag-documents` | Protected | Placeholder page; document/RAG workflows are not implemented |

## Implemented Milestones

The current source implements the project foundation and the Milestone 2 forum
workflows:

1. **Project foundation:** React/Vite frontend, Express API, MySQL schema,
   authentication context, route protection, and the shared API client.
2. **Question and answer services:** Reusable frontend services match the
   backend question and answer contracts.
3. **Dashboard and search:** The feed uses backend question data; keyword and
   semantic search are connected to their respective API endpoints.
4. **My Questions:** The page requests the authenticated user's questions with
   `mine=true`.
5. **Question creation and Draft Coach:** Question creation uses backend
   validation and the returned question hash. Draft Coach suggestions are
   optional and do not automatically alter the user's text.
6. **Question details and answers:** Details, similar-question navigation,
   answer submission, self-answer rejection, and AI Answer Fit are connected.
7. **Integration and UI polish:** Error/loading states and API contracts were
   reviewed; the landing and authenticated layouts use a shared responsive
   footer.

## Backend API

All API paths are mounted under `/api`. Protected endpoints require:

```http
Authorization: Bearer <JWT>
```

Registration and login are public. The JWT is returned by login and stored by
the frontend in local storage. Registration does not automatically sign the
user in.

| Method and path | Access | Purpose and request |
|---|---|---|
| `POST /api/auth/register` | Public | Register with JSON `{ "firstName", "lastName", "email", "password" }`. Names must be at least 3 characters; password at least 8. Returns `201` and a user object (no token). |
| `POST /api/auth/login` | Public | Login with `{ "email", "password" }`. Returns `200` with `user` and `token`. |
| `POST /api/questions` | JWT | Create a question with `{ "title", "content" }`. Title is 5–255 characters; content is at least 10. Returns `201` with the question in `data`. |
| `GET /api/questions` | JWT | List newest questions. Optional query parameters: `search` for keyword matching and `mine=true` for the authenticated user's questions. Returns `data` and `meta`; maximum 100 questions. |
| `GET /api/questions/search` | JWT | Semantic search. Required `query` is at least 5 characters; optional `k` is 1–20 and `threshold` is 0–1. Returns matches in `data` and search details in `meta`. |
| `GET /api/questions/:questionHash` | JWT | Fetch a question and its answers. Hash must be 16 lowercase hexadecimal characters. Returns `question`, `answers`, and `answersMeta`; maximum 100 answers. |
| `GET /api/questions/:questionHash/similar` | JWT | Find similar questions using the stored question embedding. Optional `k` is 1–20 and `threshold` is 0–1. Returns matches in `data` and details in `meta`. |
| `POST /api/questions/draft-coach` | JWT | Generate question-draft suggestions with `{ "title", "content" }`; the question length rules apply. Returns `data.tips` (3–5 suggestions). |
| `POST /api/questions/:questionHash/answer-fit` | JWT | Assess an answer draft with `{ "answerText" }`; text must be at least 20 characters. Returns `data.level` (`strong`, `partial`, or `weak`) and `data.note`. |
| `POST /api/answers` | JWT | Create an answer with `{ "questionId", "content" }`; ID must be positive and content at least 20 characters. Returns `201` with the saved answer in `data`. A user cannot answer their own question. |
| `GET /health` | JWT | Returns a status and timestamp. This health route is authenticated in the current backend. |

Typical status codes include `201` for creation, `400` for validation or
business-rule errors, `401` for invalid/missing authentication, `404` for a
missing question, `500` for unhandled server errors, and `503` when a required
AI service is unavailable. API errors use a JSON object with a `msg` field.

### Database

`backend/db/schema.sql` defines:

- `users`, `questions`, `answers`, and `question_vectors` for the forum.
- `documents`, `document_chunks`, and `document_chunk_vectors` for a future
  document/RAG workflow; those tables do not imply that corresponding API
  functionality is complete.

Question records and their vectors are written in one transaction. If embedding
generation fails, question creation returns an unavailable-service error and
does not persist the question.

## Installation and Setup

### Prerequisites

- Node.js and npm compatible with the installed Vite 8 release. The project was
  last exercised with Node.js 24.
- MySQL with permission to create the `evangadi_forum` database.
- A Gemini API key for embedding and text-generation features. Keep it on the
  backend only.
- Optional: Postman to run the included Milestone 2 collection.

### Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

There is no root-level package manifest; install dependencies in both packages.

### Create and initialize the database

Create the database first; `schema.sql` does not create or select a database.
For example:

```bash
mysql -u <mysql-user> -p -e "CREATE DATABASE evangadi_forum CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -u <mysql-user> -p evangadi_forum < backend/db/schema.sql
```

On Windows, these commands can be run from Git Bash, or create the database and
execute `backend/db/schema.sql` against it in MySQL Workbench.

> **Warning:** `schema.sql` drops and recreates its tables. Import it only into
> a new or disposable development database. Re-running it will delete existing
> data in those tables.

No seed-data script is included.

### Configure environment variables

Create `backend/.env` locally. The backend environment example file currently
does not contain a populated variable list. The following names are read by the
source; set values for your own machine and never commit credentials:

```dotenv
PORT=3777

DB_HOST=localhost
DB_PORT=3306
DB_NAME=evangadi_forum
DB_USER=<mysql-user>
DB_PASS=<mysql-password>

JWT_SECRET=<long-random-secret>
JWT_EXPIRES_IN=1d

GEMINI_API_KEY=<server-side-gemini-api-key>
GEMINI_EMBEDDING_MODEL=gemini-embedding-001
GEMINI_TEXT_MODEL=gemini-3.8-flash
RECOMMEND_K=5
RECOMMEND_THRESHOLD=0.75
```

The code defaults to MySQL port `8889` if `DB_PORT` is omitted; use the port
configured by your MySQL installation (commonly `3306`). `PORT` defaults to
`3777`. `JWT_SECRET` is required. Model and recommendation variables are
optional and have the defaults shown above. Never put `GEMINI_API_KEY` in the
frontend environment or commit it to source control.

Create `frontend/.env` from the provided example and configure the API base URL:

```dotenv
VITE_API_BASE_URL=http://localhost:3777
```

If the backend uses another port or host, update this URL. `api.client.js`
defaults to `http://localhost:3777` when the variable is absent.

## Running the Application

Start MySQL first. In one terminal, start the backend:

```bash
cd backend
npm start
```

The server checks its MySQL connection before listening. The default API URL is
`http://localhost:3777`.

In another terminal, start the frontend:

```bash
cd frontend
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). Sign up,
then sign in; protected pages require a valid JWT.

The backend package also has an `npm run dev` script, but it invokes `nodemon`,
which is not declared or installed by the current backend package. `npm start`
is the available script that uses Node directly.

## Testing

### Backend

Run the Node built-in test suite:

```bash
cd backend
npm test
```

The tests cover question creation and transaction failures, answer creation and
self-answer rejection, API validation/authentication, and AI service response
handling. The suite uses controlled test dependencies; it does not prove live
Gemini availability or a complete database-backed browser workflow.

### Frontend

```bash
cd frontend
npm run lint
npm run build
```

The build checks production bundling. The lint script is present; check its
output for existing source lint issues.

`npm test` and `npm run test:watch` are listed in the frontend package scripts,
but Vitest is not included in the frontend dependencies or lockfile. The test
command therefore cannot currently run without first restoring/configuring the
test runner. No frontend test files are currently present.

### Postman

Import the collection and environment in `backend/postman/`. The guide at
`backend/postman/POSTMAN_TESTING_GUIDE.md` explains ordering, required
environment values, expected responses, and test data behavior. The collection
creates users, questions, and answers that remain in the database; use only a
disposable development database. Do not put Gemini credentials in Postman.

## Known Limitations and Pending Work

- **Gemini availability:** Draft Coach, Answer Fit, question embeddings, and
  semantic search depend on Gemini configuration and provider availability.
  Provider outages, quota/rate limits, missing configuration, or malformed
  provider output can result in `503` responses. AI results were not verified
  against a live Gemini response as part of this documentation.
- **Different timeout limits:** Answer Fit uses a 60-second frontend request
  timeout and a 55-second Gemini request timeout. Other requests use the shared
  10-second Axios default; Draft Coach does not override that frontend default.
- **Question creation depends on embeddings:** A question is not saved when
  embedding generation fails.
- **RAG is incomplete:** `/rag-documents` is currently a placeholder page.
  Although the schema includes document tables and the landing page describes
  RAG concepts, no document upload, retrieval, or RAG API routes are mounted.
- **List limits:** Question feeds return at most 100 records; question details
  return at most 100 answers. Pagination is not implemented.
- **Frontend automated tests:** The Vitest scripts are configured without a
  declared Vitest dependency, and no frontend test files are present.
- **Branding asset:** The interface uses its existing MessageSquare icon and
  Evangadi Forum text branding. An official Evangadi logo/fav-icon asset is not
  included.
- **Postman data persists:** The included collection creates synthetic users
  and forum records and does not clean them up.

## Future Development

Milestone 3 is planned, but the repository does not define its detailed scope.
No Milestone 3 functionality is claimed as implemented here. Confirm its
requirements before treating the placeholder RAG page or schema tables as
finished features.
