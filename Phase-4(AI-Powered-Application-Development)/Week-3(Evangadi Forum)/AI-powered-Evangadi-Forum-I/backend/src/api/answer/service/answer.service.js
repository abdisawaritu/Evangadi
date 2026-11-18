import { safeExecute } from "../../../../db/config.js";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../../../utils/errors/index.js";

/**
 * Maps a raw database row to a structured answer object.
 *
 * @param {Object} row - The database row containing answer and user data.
 * @returns {Object} The formatted answer object.
 */
const mapAnswer = (row) => ({
  id: row.id,
  questionId: row.questionId,
  content: row.content,
  createdAt: row.createdAt,
  updatedAt: row.updatedAt,
  author: {
    id: row.userId,
    firstName: row.firstName,
    lastName: row.lastName,
  },
});

/**
 * Retrieves the owner of a specific question.
 * Throws a NotFoundError if the question does not exist.
 *
 * @param {number|string} questionId - The ID of the question.
 * @returns {Promise<Object>} An object containing question_id and user_id.
 * @throws {NotFoundError} If the question is not found.
 */
const getQuestionOwner = async (questionId) => {
  const rows = await safeExecute(
    "SELECT question_id, user_id FROM questions WHERE question_id = ? LIMIT 1",
    [questionId],
  );
  if (rows.length === 0) {
    throw new NotFoundError("Question not found");
  }
  return rows[0];
};

/**
 * Creates a new answer for a specific question.
 * Validates that the user is not answering their own question.
 *
 * @param {Object} params - The answer creation parameters.
 * @param {number|string} params.questionId - The ID of the question being answered.
 * @param {number|string} params.userId - The ID of the user creating the answer.
 * @param {string} params.content - The content of the answer.
 * @returns {Promise<Object>} The newly created answer object.
 * @throws {BadRequestError} If the user attempts to answer their own question.
 */
export const createAnswerService = async ({ questionId, userId, content }) => {
  const question = await getQuestionOwner(questionId);
  if (question.user_id === userId) {
    throw new BadRequestError("You cannot answer your own question");
  }

  const insertSql =
    "INSERT INTO answers (question_id, user_id, content) VALUES (?, ?, ?)";
  const result = await safeExecute(insertSql, [questionId, userId, content]);

  return getSingleAnswerService(result.insertId);
};

/**
 * Generates the SQL ORDER BY clause for answers based on the sort criteria.
 *
 * @param {string} sortBy - The sort criteria ('newest' or 'oldest').
 * @returns {string} The SQL ORDER BY string.
 */
const getAnswerSortSql = (sortBy) => {
  if (sortBy === "oldest") {
    return "a.created_at ASC";
  }
  return "a.created_at DESC";
};

// retrives list of answer   for a specific question   goes here

/**
 * Retrieves a single answer by its ID.
 *
 * @param {number|string} answerId - The ID of the answer.
 * @returns {Promise<Object>} The formatted answer object.
 * @throws {NotFoundError} If the answer is not found.
 */
export const getSingleAnswerService = async (answerId) => {
  const sql = `
    SELECT
      a.answer_id AS id,
      a.question_id AS questionId,
      a.content,
      a.created_at AS createdAt,
      a.updated_at AS updatedAt,
      u.user_id AS userId,
      u.first_name AS firstName,
      u.last_name AS lastName
    FROM answers a
    JOIN users u ON u.user_id = a.user_id
    WHERE a.answer_id = ?
    LIMIT 1
  `;
  const rows = await safeExecute(sql, [answerId]);
  if (rows.length === 0) {
    throw new NotFoundError("Answer not found");
  }
  return mapAnswer(rows[0]);
};

// retires  hte owner  of a specific answer gooes here
