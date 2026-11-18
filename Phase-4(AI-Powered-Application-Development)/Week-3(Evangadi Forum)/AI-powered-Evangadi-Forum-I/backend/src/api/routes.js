import express from "express";
import authRoutes from "./auth/routes/auth.routes.js";
import questionRoutes from "./question/routes/question.routes.js";
import RagAnswerBody from "./../../../frontend/src/components/RagAnswerBody/RagAnswerBody";

import answerRoutes from "./answer/routes/answer.routes.js";

export const mainRouter = express.Router();

// Authentication routes    //  /api/auth
mainRouter.use("/auth", authRoutes);

//  /api/questions

mainRouter.use("/questions", questionRoutes);

// /api/answer
mainRouter.use("/answers", answerRoutes);
