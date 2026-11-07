import { createConversationService } from "../services/chat.services.js";
export async function createConversationController(req, res) {
  // console.log("Received request body:", req.body);
  //  throw new Error("This is a test error from createConversationController"); // Simulate an error for testing

  try {
    const result = await createConversationService();
    //   const { question } = req.body;
    //   console.log("Received question:", question);
    // res.json({
    //   message:
    //     "Hello from the backend!  from the conversation api post routes create conversation controller",
    // });
    res.send(result);
  } catch (error) {
    throw error; // This will be caught by the errorHandler middleware
  }
}

export async function getConversationController(req, res) {
  res.json({
    message:
      "Hello from the backend!  from the conversation routes  and get request ",
  });
}
