require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

// Initialize Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// The model name lives in .env,
// so switching models does not require changing the code.
const MODEL = process.env.GEMINI_MODEL || "gemma-4-26b-a4b-it";

async function run() {
  try {
    // Step 1: Create a chat session
    const chat = ai.chats.create({
      model: MODEL,
    });

    // Step 2: Send a message using streaming
    const result = await chat.sendMessageStream({
      message: "Write a long poem about coding in the rain.",
    });

    // Step 3: Receive and display response chunks
    console.log("\nAI Response:\n");
    

    for await (const chunk of result) {
        console.log(chunk.text);
    //   process.stdout.write(chunk.text || "");
    }

    console.log("\n\nResponse completed.");
  } catch (error) {
    console.error("Gemini API Error:", error);
  }
}

// Execute the function
run();
