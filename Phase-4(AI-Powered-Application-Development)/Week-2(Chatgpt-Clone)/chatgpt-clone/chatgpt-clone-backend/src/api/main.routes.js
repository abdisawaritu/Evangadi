import express from "express";
const router = express.Router();
import chatRouter from "./chat/chat.routes.js";

// GET request to the /api/chat endpoint  /api/chat
router.use("/chat", chatRouter);
// router.use("/conversation", chatRouter);

export default router;