require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const MODEL = process.env.GEMINI_MODEL;

// setup
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  try {
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: "Hello, how are you?",
    });
    console.log("Gemini Response:");
    console.log(response.text);

    // second request
    const response2 = await ai.models.generateContent({
      model: MODEL,
      contents: "What is the capital of France?",
    });
    console.log("Gemini Response 2:");
    console.log(response2.text);
  } catch (error) {
    console.error(error);
  }
}

main();
