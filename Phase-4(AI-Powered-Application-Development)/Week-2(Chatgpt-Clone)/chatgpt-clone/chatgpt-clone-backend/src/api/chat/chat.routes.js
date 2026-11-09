import express from "express";
import {
  getConversationsController,
  createConversationController,
} from "./controller/chat.controller.js ";
const chatRouter = express.Router();
// /api/chat/conversation
chatRouter.post("/conversation", createConversationController);

chatRouter.get("/conversation", getConversationsController);

export default chatRouter;
