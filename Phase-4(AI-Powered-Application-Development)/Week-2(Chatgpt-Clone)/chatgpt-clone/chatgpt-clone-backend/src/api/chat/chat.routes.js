import express from "express";
import {
  getConversationController,
  createConversationController,
} from "./controller/chat.controller.js ";
const chatRouter = express.Router();
// /api/chat/conversation
chatRouter.post("/conversation", createConversationController);

chatRouter.get("/conversation", getConversationController);

export default chatRouter;
