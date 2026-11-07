export default async function createConversationController(question) {
  try {
    return ` Chat Saved to Db with question${question}`; // Simulate a successful save operation
  } catch (error) {
    throw error; // This will be caught by the errorHandler middleware
  }
}
// export { createConversationController };
