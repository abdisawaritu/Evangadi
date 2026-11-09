import express from "express";
import {
  getConversationsController,
  createConversationController,
} from "./controller/chat.controller.js ";
const chatRouter = express.Router();
// /api/chat/conversation
chatRouter.post("/conversations", createConversationController);

chatRouter.get("/conversations", getConversationsController);

export default chatRouter;
