import { apiClient } from "../core/api.client.js";

export const ANSWER_FIT_TIMEOUT_MS = 60_000;

async function createQuestion({ title, content }) {
  const response = await apiClient.post("/api/questions", { title, content });
  return response.data;
}

async function generateQuestionDraftCoach({ title, content }) {
  const response = await apiClient.post("/api/questions/draft-coach", {
    title,
    content,
  });
  return response.data;
}

async function assessAnswerFit(questionHash, answerText) {
  const response = await apiClient.post(
    `/api/questions/${encodeURIComponent(questionHash)}/answer-fit`,
    { answerText },
    { timeout: ANSWER_FIT_TIMEOUT_MS },
  );
  return response.data;
}

async function getQuestions({ search, mine } = {}) {
  const response = await apiClient.get("/api/questions", {
    params: { search, mine },
  });
  return response.data;
}

async function getQuestionByHash(questionHash) {
  const response = await apiClient.get(
    `/api/questions/${encodeURIComponent(questionHash)}`,
  );
  return response.data;
}

async function searchQuestions({ query, k, threshold }) {
  const response = await apiClient.get("/api/questions/search", {
    params: { query, k, threshold },
  });
  return response.data;
}

async function getSimilarQuestions(questionHash, { k, threshold } = {}) {
  const response = await apiClient.get(
    `/api/questions/${encodeURIComponent(questionHash)}/similar`,
    { params: { k, threshold } },
  );
  return response.data;
}

/**
 * Question API methods return the backend JSON envelope unchanged. Failed
 * requests reject with the original Axios error, including status and response.
 */
export const questionService = {
  createQuestion,
  generateQuestionDraftCoach,
  assessAnswerFit,
  getQuestions,
  getQuestionByHash,
  searchQuestions,
  getSimilarQuestions,
};
