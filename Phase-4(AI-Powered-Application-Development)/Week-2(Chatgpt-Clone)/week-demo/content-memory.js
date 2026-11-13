require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");
const MODEL = process.env.GEMINI_MODEL;

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const chat = ai.chats.create({
      model: MODEL,
      contents: "What is the capital of France?",
      history: [
        {
          role: "user",
          parts: [
            { text: "What is the capital of France?" },
          ],
        },
      ],  // history of the chat came from the   database  through formatted contents:
    });
    const response = await chat.sendMessage({
      message: "what is my name?",
    });
    console.log(response.text);

    //get history
    console.log(JSON.stringify(chat.history, null, 2));
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

run();
