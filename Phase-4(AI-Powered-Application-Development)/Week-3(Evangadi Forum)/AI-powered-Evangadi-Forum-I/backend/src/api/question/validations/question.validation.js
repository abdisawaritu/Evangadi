import { body, param, query } from "express-validator";
import { validationErrorHandler } from "../../../middleware/validation-handler.js";

export const createQuestionValidation = [
  body("title")
    .isString()
    .withMessage("Question title must be a string")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("Question title is required")
    .bail()
    .isLength({ min: 5, max: 255 })
    .withMessage("Question title must be between 5 and 255 characters"),
  body("content")
    .isString()
    .withMessage("Question content must be a string")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("Question content is required")
    .bail()
    .isLength({ min: 10 })
    .withMessage("Question content must be at least 10 characters"),
  validationErrorHandler,
];

export const getQuestionsValidation = [
  query("search")
    .optional()
    .isString()
    .withMessage("Search must be a string")
    .trim(),
  query("mine")
    .optional()
    .isBoolean()
    .withMessage("Mine must be a boolean")
    .toBoolean(),
  validationErrorHandler,
];
export const getSingleQuestionValidation = [
  param("questionHash")
    .isString()
    .withMessage("Question hash is required")
    .matches(/^[a-f0-9]{16}$/)
    .withMessage("Question hash must be a 16-character lowercase hex string"),
  validationErrorHandler,
];

export const searchQuestionsSemanticValidation = [
  query("query")
    .isString()
    .withMessage("query must be a string")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("query is required")
    .bail()
    .isLength({ min: 5 })
    .withMessage("query must be at least 5 characters"),
  query("k")
    .optional()
    .isInt({ min: 1, max: 20 })
    .withMessage("k must be between 1 and 20")
    .toInt(),
  query("threshold")
    .optional()
    .isFloat({ min: 0, max: 1 })
    .withMessage("threshold must be between 0 and 1")
    .toFloat(),
  validationErrorHandler,
];

export const getSimilarQuestionsValidation = [
  param("questionHash")
    .isString()
    .withMessage("Question hash is required")
    .matches(/^[a-f0-9]{16}$/)
    .withMessage("Question hash must be a 16-character lowercase hex string"),
  query("k")
    .optional()
    .isInt({ min: 1, max: 20 })
    .withMessage("k must be between 1 and 20")
    .toInt(),
  query("threshold")
    .optional()
    .isFloat({ min: 0, max: 1 })
    .withMessage("threshold must be between 0 and 1")
    .toFloat(),
  validationErrorHandler,
];





















/** Same body rules as posting a question - AI coach only reads draft text. */
export const generateQuestionDraftCoachValidation = [
  body('title')
    .isString()
    .withMessage('Question title must be a string')
    .bail()
    .trim()
    .notEmpty()
    .withMessage('Question title is required')
    .bail()
    .isLength({ min: 5, max: 255 })
    .withMessage('Question title must be between 5 and 255 characters'),
  body('content')
    .isString()
    .withMessage('Question content must be a string')
    .bail()
    .trim()
    .notEmpty()
    .withMessage('Question content is required')
    .bail()
    .isLength({ min: 10 })
    .withMessage('Question content must be at least 10 characters'),
  validationErrorHandler,
];









































export const assessAnswerAgainstQuestionValidation = [
  param('questionHash')
    .isString()
    .withMessage('Question hash is required')
    .matches(/^[a-f0-9]{16}$/)
    .withMessage('Question hash must be a 16-character lowercase hex string'),
  body('answerText')
    .isString()
    .withMessage('Answer text must be a string')
    .bail()
    .trim()
    .notEmpty()
    .withMessage('Answer text is required')
    .bail()
    .isLength({ min: 20 })
    .withMessage('Answer text must be at least 20 characters for a meaningful fit check'),
  validationErrorHandler,
];





