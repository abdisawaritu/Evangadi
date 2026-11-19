// Import required dependencies and database/error utilities
import { GoogleGenAI } from '@google/genai';
import { safeExecute } from '../../../../db/config.js';
import { ServiceUnavailableError } from '../../../utils/errors/index.js';

// Load Gemini embedding model and API key from environment variables
const GEMINI_EMBEDDING_MODEL =
  process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';
const EMBEDDING_DIMENSIONS = 768;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const configuredThreshold = process.env.RECOMMEND_THRESHOLD?.trim();
const parsedThreshold = Number(configuredThreshold);
const RECOMMEND_THRESHOLD =
  configuredThreshold &&
  Number.isFinite(parsedThreshold) &&
  parsedThreshold >= 0 &&
  parsedThreshold <= 1
    ? parsedThreshold
    : 0.75;

const configuredK = process.env.RECOMMEND_K?.trim();
const parsedK = Number(configuredK);
const RECOMMEND_K =
  configuredK && Number.isInteger(parsedK) && parsedK > 0
    ? Math.min(parsedK, 20)
    : 5;

// Initialize the Google Generative AI client and embedding model instance
const ai = GEMINI_API_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;




/**
 * Utility to collapse consecutive whitespace characters into a single space
 * and trim leading/trailing whitespace for consistent text formatting.
 * @param {string} value - The input text to normalize.
 * @returns {string} The normalized text with collapsed whitespace and trimmed ends.
 */
function normalizeWhitespace(value) {
  return value.replace(/\s+/g, ' ').trim();
}

/**
 * Normalize question text by applying Unicode NFKC normalization, lowercasing,
 * and collapsing whitespace.
 * @param {{title?: string, content?: string}} param - Question title and body.
 * @returns {string} The normalized question text.
 */
export function normalizeQuestionText({ title, content }) {
  const text = `${title || ''} ${content || ''}`;
  return normalizeWhitespace(text.normalize('NFKC').toLowerCase());
}

/**
 * Calculate cosine similarity between two embedding vectors.
 * Formula: cos(θ) = (A · B) / (||A|| * ||B||)
 *
 * @param {number[]} vectorA - First embedding vector
 * @param {number[]} vectorB - Second embedding vector
 * @returns {number} Similarity score between -1 and 1 (typically 0 to 1 for embeddings)
 * @throws {Error} If vectors have different lengths
 */
export function calculateCosineSimilarity(vectorA, vectorB) {
  // Validate vectors have same length
  if (vectorA.length !== vectorB.length) {
    throw new Error(
      `Vectors must have the same length. Got ${vectorA.length} and ${vectorB.length}`,
    );
  }

  // Calculate dot product (sum of element-wise multiplication)
  let dotProduct = 0;
  for (let i = 0; i < vectorA.length; i++) {
    dotProduct += vectorA[i] * vectorB[i];
  }

  // Calculate magnitude of vectorA (square root of sum of squares)
  let magnitudeA = 0;
  for (let i = 0; i < vectorA.length; i++) {
    magnitudeA += vectorA[i] * vectorA[i];
  }
  magnitudeA = Math.sqrt(magnitudeA);

  // Calculate magnitude of vectorB (square root of sum of squares)
  let magnitudeB = 0;
  for (let i = 0; i < vectorB.length; i++) {
    magnitudeB += vectorB[i] * vectorB[i];
  }
  magnitudeB = Math.sqrt(magnitudeB);

  // Handle edge case: return 0 if either magnitude is 0
  if (magnitudeA === 0 || magnitudeB === 0) {
    return 0;
  }

  // Return dot product divided by product of magnitudes
  return dotProduct / (magnitudeA * magnitudeB);
}








































/* Generate a normalized embedding for the provided question text using the Gemini API.
 *
 * @param {string} sourceText - The text to embed.
 * @param {Object} [options] - Optional parameters to customize the embedding generation.
 * @param {string} [options.taskType='RETRIEVAL_DOCUMENT'] - The specific Gemini task type.
 * Use 'RETRIEVAL_QUERY' when generating embeddings for user searches.
 * @returns {Promise<{embedding: Array<number>}>} The normalized embedding vector.
 * @throws {Error} If the embedding response is invalid or missing values.
 */
export async function generateQuestionEmbedding(sourceText, options = {}) {
  const { taskType = 'RETRIEVAL_DOCUMENT' } = options;

  if (!ai) {
    throw new ServiceUnavailableError(
      'Gemini embedding service is not configured.',
    );
  }

  try {
    const response = await ai.models.embedContent({
      model: GEMINI_EMBEDDING_MODEL,
      contents: sourceText,
      config: {
        taskType,
        outputDimensionality: EMBEDDING_DIMENSIONS,
      },
    });

    const values = response.embeddings?.[0]?.values;

    if (
      !Array.isArray(values) ||
      values.length !== EMBEDDING_DIMENSIONS ||
      !values.every(Number.isFinite)
    ) {
      throw new Error(
        `Gemini embedding response must contain ${EMBEDDING_DIMENSIONS} finite values`,
      );
    }

    return {
      embedding: values,
    };
  } catch (error) {
    console.error('Error:', error);
    console.error('==============================');
    throw error;
  }
}
/**
 * Validate that an embedding is a valid array of numbers.
 * @param {*} embedding - The embedding to validate.
 * @throws {Error} If embedding is invalid.
 */
function validateEmbedding(embedding) {
  if (!Array.isArray(embedding)) {
    throw new Error('Embedding must be an array');
  }
  if (embedding.length === 0) {
    throw new Error('Embedding cannot be empty');
  }
  if (!embedding.every(Number.isFinite)) {
    throw new Error('Embedding must contain only valid numbers');
  }
}

function parseStoredEmbedding(value) {
  const embedding = typeof value === 'string' ? JSON.parse(value) : value;
  validateEmbedding(embedding);
  if (embedding.length !== EMBEDDING_DIMENSIONS) {
    throw new Error(
      `Stored embedding must contain ${EMBEDDING_DIMENSIONS} values`,
    );
  }
  return embedding;
}












/**
 * Store or update embedding vector in MySQL question_vectors table.
 * Uses INSERT ... ON DUPLICATE KEY UPDATE for upsert behavior.
 *
 * @param {Object} payload - The payload containing question and embedding data.
 * @param {number|string} payload.questionId - The ID of the question.
 * @param {string} payload.sourceText - The normalized source text used for embedding.
 * @param {Array<number>} [payload.embedding=[]] - The full-dimensional embedding vector from Gemini.
 * @param {string} [payload.status='ready'] - The status of the vector (e.g., 'ready', 'failed').
 * @returns {Promise<void>}
 */
export async function storeQuestionVector({
  questionId,
  sourceText,
  embedding = [],
  status = 'ready',
  connection,
}) {
  const execute = connection
    ? async (sql, params) => {
        const [result] = await connection.execute(sql, params);
        return result;
      }
    : safeExecute;

  if (status === 'failed') {
    const sql = `
      INSERT INTO question_vectors (question_id, source_text, embedding, status)
      VALUES (?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        source_text = VALUES(source_text),
        embedding = VALUES(embedding),
        status = VALUES(status),
        updated_at = CURRENT_TIMESTAMP
    `;
    await execute(sql, [
      questionId,
      sourceText,
      JSON.stringify([]),
      'failed',
    ]);
    return;
  }
  //  validate  embedding    before storage 

  validateEmbedding(embedding);



  // Store embedding as JSON string using JSON.stringify()
  const embeddingJson = JSON.stringify(embedding);

  // Implement MySQL INSERT ... ON DUPLICATE KEY UPDATE for upsert
  const sql = `
    INSERT INTO question_vectors (question_id, source_text, embedding, status)
    VALUES (?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      source_text = VALUES(source_text),
      embedding = VALUES(embedding),
      status = VALUES(status),
      updated_at = CURRENT_TIMESTAMP
  `;

  try {
    await execute(sql, [questionId, sourceText, embeddingJson, status]);
  } catch (error) {
    console.error('=== MYSQL UPSERT ERROR ===');
    console.error('Operation: storeQuestionVector');
    console.error(`Question ID: ${questionId}`);
    console.error(`Embedding length: ${embedding.length}`);
    console.error(`Status: ${status}`);
    console.error('SQL:', sql.trim().replace(/\s+/g, ' '));
    console.error('Error:', error);
    console.error('==========================');
    throw error;
  }
}

/**
 * Retrieve all ready embeddings from MySQL question_vectors table.
 * Parses JSON embedding strings to JavaScript arrays and validates them.
 * Invalid embeddings are skipped with a warning logged.
 *
 * @returns {Promise<Array<{questionId: number, embedding: number[]}>>} Array of question embeddings
 */
async function retrieveReadyEmbeddings() {
  // Query question_vectors table with status='ready' filter
  const sql = `
    SELECT question_id, embedding
    FROM question_vectors
    WHERE status = ?
  `;

  try {
    const rows = await safeExecute(sql, ['ready']);

    // Parse and validate embeddings
    const embeddings = [];
    for (const row of rows) {
      try {
        const embedding = parseStoredEmbedding(row.embedding);
        embeddings.push({
          questionId: row.question_id,
          embedding,
        });
      } catch (parseError) {
        console.warn(
          `Skipping question ${row.question_id}: invalid stored embedding`,
          parseError,
        );
        continue;
      }
    }

    return embeddings;
  } catch (error) {
    console.error('=== MYSQL RETRIEVE EMBEDDINGS ERROR ===');
    console.error('Operation: retrieveReadyEmbeddings');
    console.error('Error:', error);
    console.error('=======================================');
    throw error;
  }
}

/**
 * Normalize search options using the configured defaults and endpoint limits.
 */
export function normalizeVectorSearchOptions({ k, threshold } = {}) {
  const requestedK = k === undefined || k === null ? RECOMMEND_K : Number(k);
  const requestedThreshold =
    threshold === undefined || threshold === null
      ? RECOMMEND_THRESHOLD
      : Number(threshold);

  return {
    k:
      Number.isInteger(requestedK) && requestedK > 0
        ? Math.min(requestedK, 20)
        : RECOMMEND_K,
    threshold:
      Number.isFinite(requestedThreshold) &&
      requestedThreshold >= 0 &&
      requestedThreshold <= 1
        ? requestedThreshold
        : RECOMMEND_THRESHOLD,
  };
}

function rankSimilarEmbeddings(
  queryEmbedding,
  storedEmbeddings,
  { k, threshold, excludeQuestionId },
) {
  const similarities = [];

  for (const stored of storedEmbeddings) {
    if (
      excludeQuestionId !== undefined &&
      String(stored.questionId) === String(excludeQuestionId)
    ) {
      continue;
    }

    try {
      const score = calculateCosineSimilarity(queryEmbedding, stored.embedding);
      if (Number.isFinite(score) && score >= threshold) {
        similarities.push({ questionId: stored.questionId, score });
      }
    } catch (error) {
      console.warn(
        `Failed to calculate similarity for question ${stored.questionId}:`,
        error.message,
      );
    }
  }

  return similarities
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}

async function fetchQuestionDetails(similarities) {
  if (similarities.length === 0) {
    return [];
  }

  const questionIds = similarities.map((result) => result.questionId);
  const placeholders = questionIds.map(() => '?').join(',');

  const sql = `
    SELECT
      q.question_id AS questionId,
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
    WHERE q.question_id IN (${placeholders})
    GROUP BY q.question_id, u.user_id
  `;

  let rows;
  try {
    rows = await safeExecute(sql, questionIds);
  } catch (error) {
    console.error('Failed to fetch question details for vector search:', error);
    throw error;
  }

  const questionMap = new Map(
    rows.map((row) => [
      String(row.questionId),
      {
        id: row.questionId,
        questionHash: row.questionHash,
        title: row.title,
        content: row.content,
        answerCount: row.answerCount,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
        author: {
          id: row.userId,
          firstName: row.firstName,
          lastName: row.lastName,
        },
      },
    ]),
  );

  return similarities
    .filter((result) => questionMap.has(String(result.questionId)))
    .map((result) => ({
      score: Number(result.score.toFixed(6)),
      ...questionMap.get(String(result.questionId)),
    }));
}

/**
 * Finds similar questions based on input text using vector embeddings.
 *
 * @param {Object} params - Search parameters.
 * @param {string} params.sourceText - The text to search for similar questions.
 * @param {number} [params.threshold] - Minimum similarity score threshold.
 * @param {number} [params.k] - Maximum number of results to return.
 * @returns {Promise<Object>} The generated embedding and similar questions.
 */
export async function findSimilarQuestionsByText({ sourceText, threshold, k }) {
  const options = normalizeVectorSearchOptions({ k, threshold });
  let embeddingResult;
  try {
    embeddingResult = await generateQuestionEmbedding(sourceText, {
      taskType: 'RETRIEVAL_QUERY',
    });
  } catch (error) {
    console.error('Failed to generate search-query embedding:', error);
    throw new ServiceUnavailableError(
      'Failed to generate embedding for search query. Please try again later.',
    );
  }

  const storedEmbeddings = await retrieveReadyEmbeddings();
  const similarities = rankSimilarEmbeddings(
    embeddingResult.embedding,
    storedEmbeddings,
    options,
  );

  return {
    ...embeddingResult,
    similarQuestions: await fetchQuestionDetails(similarities),
  };
}

/**
 * Find similar questions using the pre-calculated embedding of an existing question from MySQL.
 * @param {Object} params - Search parameters.
 * @param {number|string} params.questionId - The ID of the question to find similarities for.
 * @param {number} [params.threshold] - Minimum similarity score threshold.
 * @param {number} [params.k] - Maximum number of results to return.
 * @returns {Promise<Array<Object>>} A list of similar questions.
 */
export async function findSimilarQuestionsByQuestionId({
  questionId,
  threshold,
  k,
}) {
  const options = normalizeVectorSearchOptions({ k, threshold });
  const targetRows = await safeExecute(
    'SELECT embedding FROM question_vectors WHERE question_id = ? AND status = ? LIMIT 1',
    [questionId, 'ready'],
  );

  if (targetRows.length === 0) {
    throw new ServiceUnavailableError(
      'Question embedding is not available for similarity search.',
    );
  }

  let queryEmbedding;
  try {
    queryEmbedding = parseStoredEmbedding(targetRows[0].embedding);
  } catch (error) {
    console.warn(`Question ${questionId} has an invalid stored embedding:`, error);
    throw new ServiceUnavailableError(
      'Question embedding is invalid and cannot be used for similarity search.',
    );
  }

  const storedEmbeddings = await retrieveReadyEmbeddings();
  const similarities = rankSimilarEmbeddings(
    queryEmbedding,
    storedEmbeddings,
    { ...options, excludeQuestionId: questionId },
  );

  return fetchQuestionDetails(similarities);
}




















































































































































































































































































































































/**
 * Get the current vector search configuration values from environment variables or defaults.
 * @returns {Object} The current vector configuration values.
 */
export function getVectorConfig() {
  return {
    recommendThreshold: RECOMMEND_THRESHOLD,
    recommendK: RECOMMEND_K,
  };
}
 


















