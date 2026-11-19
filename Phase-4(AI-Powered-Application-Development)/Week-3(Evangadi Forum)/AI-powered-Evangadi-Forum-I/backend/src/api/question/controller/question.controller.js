import { StatusCodes } from "http-status-codes";
import {
  createQuestionWithVectorService,
  getSimilarQuestionsService,
  getQuestionsService,
  searchQuestionsSemanticService,
  getSingleQuestionService,
} from "../service/question.service.js";

/**
 * Handles creating a new question.
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 * @returns {Promise<void>}
 */
export const createQuestionController = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const result = await createQuestionWithVectorService({
      userId: req.user.id, // author id (authenticated user)
      title,
      content,
    });

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Question posted successfully.",
      data: result.question,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Handles listing questions with optional search filtering. Max 100 records.
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 * @returns {Promise<void>}
 */
/**
 * Handles listing questions with optional search filtering. Max 100 records.
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 * @returns {Promise<void>}
 */
export const getQuestionsController = async (req, res, next) => {
  try {
    const mineQuery = req.query.mine;
    const filters = {
      search: req.query.search,
      mine:
        mineQuery === true || mineQuery === "true" || mineQuery === "1",
      userId: req.user.id, // Pass the authenticated user's ID
    };

    const result = await getQuestionsService(filters);

    res.status(StatusCodes.OK).json({
      success: true,
      message: "Questions retrieved successfully.",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Handles fetching a single question with answers. Max 100 answers.
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 * @returns {Promise<void>}
 */
export const getSingleQuestionController = async (req, res, next) => {
  try {
    const { questionHash } = req.params;

    const result = await getSingleQuestionService({
      questionHash,
    });

    res.status(StatusCodes.OK).json({
      success: true,
      message: "Question fetched successfully.",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

export const searchQuestionsSemanticController = async (req, res, next) => {
  try {
    const { k, threshold } = req.query;
    const result = await searchQuestionsSemanticService({
      query: req.query.query,
      k: k === undefined ? undefined : Number(k),
      threshold: threshold === undefined ? undefined : Number(threshold),
    });
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Semantic search completed successfully.",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

// ///**
/* Handles fetching semantically similar questions for a given question hash.
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 * @returns {Promise<void>}
 */
export const getSimilarQuestionsController = async (req, res, next) => {
  try {
    const { questionHash } = req.params;
    const { k, threshold } = req.query;

    const result = await getSimilarQuestionsService({
      questionHash,
      k: k === undefined ? undefined : Number(k),
      threshold: threshold === undefined ? undefined : Number(threshold),
    });

    res.status(StatusCodes.OK).json({
      success: true,
      message: "Similar questions fetched successfully.",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Handles AI coaching for a question draft (title + body).
 */
export const generateQuestionDraftCoachController = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { generateQuestionDraftCoachService } = await import(
      "../service/geminiTextCoach.service.js"
    );
    const data = await generateQuestionDraftCoachService({ title, content });
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Draft suggestions generated.",
      data,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Handles AI relevance assessment of an answer draft against a question.
 */
export const assessAnswerAgainstQuestionController = async (req, res, next) => {
  try {
    const { questionHash } = req.params;
    const { answerText } = req.body;
    const { question } = await getSingleQuestionService({ questionHash });
    const { assessAnswerAgainstQuestionService } = await import(
      "../service/geminiTextCoach.service.js"
    );
    const data = await assessAnswerAgainstQuestionService({
      questionTitle: question.title,
      questionContent: question.content,
      answerText,
    });
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Answer fit assessed.",
      data,
    });
  } catch (error) {
    next(error);
  }
};
