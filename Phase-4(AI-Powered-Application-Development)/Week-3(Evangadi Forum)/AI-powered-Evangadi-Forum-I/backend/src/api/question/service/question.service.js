import crypto from "crypto";
import { db, safeExecute } from "../../../../db/config.js";
import {
  BadRequestError,
  NotFoundError,
  ServiceUnavailableError,
} from "../../../utils/errors/index.js";
import {
  findSimilarQuestionsByQuestionId,
  findSimilarQuestionsByText,
  generateQuestionEmbedding,
  normalizeQuestionText,
  normalizeVectorSearchOptions,
  storeQuestionVector,
} from "./vector.service.js";

const generateQuestionHash = () => crypto.randomBytes(8).toString("hex");

/**
- Creates a new question and stores its vector embedding for semantic search.
- @param {Object} payload - The question data
- @param {string} payload.userId - ID of the user creating the question
- @param {string} payload.title - Title of the question
- @param {string} payload.content - Content/body of the question
- @returns {Promise<Object>} Object containing the created question
 */
export const createQuestionWithVectorService = async (
  payload,
  embeddingGenerator = generateQuestionEmbedding,
) => {
  const { userId, title, content } = payload;
  const sourceText = normalizeQuestionText({ title, content });
  const insertQuestionSql =
    "INSERT INTO questions (question_hash, user_id, title, content) VALUES (?, ?, ?, ?)";
  const questionHash = generateQuestionHash();

  let embeddingResult;
  try {
    embeddingResult = await embeddingGenerator(sourceText);
  } catch (error) {
    console.error("Failed to generate question embedding:", error);
    throw new ServiceUnavailableError(
      "Question embedding is unavailable; the question was not created.",
    );
  }

  const connection = await db.getConnection();
  let transactionStarted = false;
  try {
    await connection.beginTransaction();
    transactionStarted = true;
    const [questionResult] = await connection.execute(insertQuestionSql, [
      questionHash,
      userId,
      title,
      content,
    ]);
    const questionId = questionResult.insertId;

    await storeQuestionVector({
      questionId,
      sourceText,
      embedding: embeddingResult.embedding,
      status: "ready",
      connection,
    });

    await connection.commit();
    transactionStarted = false;

    return {
      question: {
        id: questionId,
        questionHash,
        title,
        content,
        userId,
      },
    };
  } catch (error) {
    if (transactionStarted) {
      try {
        await connection.rollback();
      } catch (rollbackError) {
        console.error("Failed to roll back question creation:", rollbackError);
        throw new AggregateError(
          [error, rollbackError],
          "Question creation failed and its transaction could not be rolled back.",
        );
      }
    }

    if (error?.code === "ER_NO_REFERENCED_ROW_2") {
      throw new BadRequestError("User does not exist.");
    }

    throw error;
  } finally {
    connection.release();
  }
};

const buildQuestionFilters = (filters) => {
  const conditions = [];
  const params = [];

  if (filters.search) {
    conditions.push("(q.title LIKE ? OR q.content LIKE ?)");
    const searchTerm = `%${filters.search}%`;
    params.push(searchTerm, searchTerm);
  }

  if (filters.mine === true && filters.userId) {
    conditions.push("q.user_id = ?");
    params.push(filters.userId);
  }

  if (conditions.length === 0) {
    return { whereClause: "", params };
  }

  return {
    whereClause: `WHERE ${conditions.join(" AND ")}`,
    params,
  };
};

export const getQuestionsService = async (filters) => {
  const normalizedLimit = 100; // Fixed max limit
  const sortColumn = "q.created_at";
  const normalizedSortOrder = "DESC";

  const { whereClause, params } = buildQuestionFilters(filters);

  const listSql = `
    SELECT
      q.question_id AS id,
      q.question_hash AS questionHash,
      q.title,
      q.content,
      q.created_at AS createdAt,
      q.updated_at AS updatedAt,
      u.user_id AS userId,
      u.first_name AS firstName,
      u.last_name AS lastName,
      COUNT(DISTINCT a.answer_id) AS answerCount
    FROM questions q
    JOIN users u ON u.user_id = q.user_id
    LEFT JOIN answers a ON a.question_id = q.question_id
    ${whereClause}
    GROUP BY q.question_id, u.user_id
    ORDER BY ${sortColumn} ${normalizedSortOrder}
    LIMIT ${normalizedLimit}
  `;

  const rows = await safeExecute(listSql, params);

  return {
    data: rows.map((question) => ({
      id: question.id,
      questionHash: question.questionHash,
      title: question.title,
      content: question.content,
      answerCount: question.answerCount,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
      author: {
        id: question.userId,
        firstName: question.firstName,
        lastName: question.lastName,
      },
    })),
    meta: {
      limit: normalizedLimit,
      total: rows.length,
      sortBy: "newest",
      sortOrder: normalizedSortOrder,
    },
  };
};

export const getSingleQuestionService = async ({ questionHash }) => {
  const normalizedAnswerLimit = 100; // Fixed max 100 records

  const questionSql = `
    SELECT
      q.question_id AS id,
      q.question_hash AS questionHash,
      q.title,
      q.content,
      q.created_at AS createdAt,
      q.updated_at AS updatedAt,
      u.user_id AS userId,
      u.first_name AS firstName,
      u.last_name AS lastName,
      COUNT(DISTINCT a.answer_id) AS answerCount
    FROM questions q
    JOIN users u ON u.user_id = q.user_id
    LEFT JOIN answers a ON a.question_id = q.question_id
    WHERE q.question_hash = ?
    GROUP BY q.question_id, u.user_id
  `;
  const questionRows = await safeExecute(questionSql, [questionHash]);

  if (questionRows.length === 0) {
    throw new NotFoundError("Question not found");
  }

  const question = questionRows[0];
  const questionId = question.id;
  const answersSql = `
    SELECT
      a.answer_id AS id,
      a.content,
      a.created_at AS createdAt,
      a.updated_at AS updatedAt,
      au.user_id AS userId,
      au.first_name AS firstName,
      au.last_name AS lastName
    FROM answers a
    JOIN users au ON au.user_id = a.user_id
    WHERE a.question_id = ?
    ORDER BY a.created_at DESC
    LIMIT ${normalizedAnswerLimit}
  `;
  const answers = await safeExecute(answersSql, [questionId]);
  return {
    question: {
      id: question.id,
      questionHash: question.questionHash,
      title: question.title,
      content: question.content,
      answerCount: question.answerCount,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
      author: {
        id: question.userId,
        firstName: question.firstName,
        lastName: question.lastName,
      },
    },
    answers: answers.map((answer) => ({
      id: answer.id,
      content: answer.content,
      createdAt: answer.createdAt,
      updatedAt: answer.updatedAt,
      author: {
        id: answer.userId,
        firstName: answer.firstName,
        lastName: answer.lastName,
      },
    })),
    answersMeta: {
      limit: normalizedAnswerLimit,
      total: answers.length,
    },
  };
};

/**
 * Performs semantic search on questions using vector similarity.
 * @param {Object} params - Search parameters
 * @param {string} params.query - The search query text
 * @param {number} [params.k] - Maximum number of similar questions to return
 * @param {number} [params.threshold] - Similarity threshold (uses config default if not provided)
 * @returns {Promise<Object>} Object containing similar questions and search metadata
 */
export const searchQuestionsSemanticService = async ({
  query,
  k,
  threshold,
}) => {
  const sourceText = normalizeQuestionText({ title: query });
  const options = normalizeVectorSearchOptions({ k, threshold });
  const result = await findSimilarQuestionsByText({
    sourceText,
    ...options,
  });
  return {
    data: result.similarQuestions,
    meta: {
      query,
      ...options,
      total: result.similarQuestions.length,
    },
  };
};

// ger similar  question   service

export const getSimilarQuestionsService = async ({
  questionHash,
  k,
  threshold,
}) => {
  const questionRows = await safeExecute(
    "SELECT question_id AS id FROM questions WHERE question_hash = ? LIMIT 1",
    [questionHash],
  );

  if (questionRows.length === 0) {
    throw new NotFoundError("Question not found");
  }

  const questionId = questionRows[0].id;
  const options = normalizeVectorSearchOptions({ k, threshold });

  const similarQuestions = await findSimilarQuestionsByQuestionId({
    questionId,
    ...options,
  });

  return {
    data: similarQuestions,
    meta: {
      questionHash,
      ...options,
      total: similarQuestions.length,
    },
  };
};
