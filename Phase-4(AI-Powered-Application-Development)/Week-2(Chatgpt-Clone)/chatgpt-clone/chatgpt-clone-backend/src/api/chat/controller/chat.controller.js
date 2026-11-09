import {
  createConversationService,
  getRecentConversationRows,
} from "../services/chat.services.js";

export async function createConversationController(req, res) {
  const { question } = req.body;

  try {
    const result = await createConversationService(question);

    res.status(201).json({
      success: "true",
      message: "conversation sucessfully saved ",
      data: result,
    });
  } catch (error) {
    throw error; // This will be caught by the errorHandler middleware
  }
}

export async function getConversationsController(req, res) {
  try {
    const result = await getRecentConversationRows(100);

    res.status(200).json({
      success: true,
      message: "Conversations fetched successfully.",
      data: result,
    });
  } catch (error) {
    throw error;
  }
}
