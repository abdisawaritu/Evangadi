import { apiClient } from "../core/api.client.js";

async function createAnswer({ questionId, content }) {
  const response = await apiClient.post("/api/answers", {
    questionId,
    content,
  });
  return response.data;
}

/**
 * Answer API methods return the backend JSON envelope unchanged. Failed
 * requests reject with the original Axios error, including status and response.
 */
export const answerService = {
  createAnswer,
};
