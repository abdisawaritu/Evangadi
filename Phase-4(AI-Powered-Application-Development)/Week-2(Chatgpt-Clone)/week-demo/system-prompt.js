require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const MODEL = process.env.GEMINI_MODEL;

async function run() {
  try {
    const chat = ai.chats.create({
      model: MODEL,
      config: {
        systemInstruction:
          "You are a helpful assistant. Explain things clearly.",
      },
    });

    const response = await chat.sendMessage({
      message: "How can I visit Ethiopia? Recommend three places.",
    });

    console.log("AI Response:");
    console.log(response.text);
  } catch (error) {
    console.error("Status:", error.status);
    console.error("Message:", error.message);
  }
}

run();
