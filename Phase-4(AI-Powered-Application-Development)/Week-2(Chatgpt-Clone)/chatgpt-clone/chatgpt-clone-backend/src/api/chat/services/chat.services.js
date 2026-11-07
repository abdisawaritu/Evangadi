async function createConversationController(req, res) {
  try {
    console.log("Received request body:", req.body);
    return "Chat saved to the database successfully!"; // Simulate a successful save operation
  } catch (error) {
    throw error; // This will be caught by the errorHandler middleware
  }
}
export { createConversationController };
