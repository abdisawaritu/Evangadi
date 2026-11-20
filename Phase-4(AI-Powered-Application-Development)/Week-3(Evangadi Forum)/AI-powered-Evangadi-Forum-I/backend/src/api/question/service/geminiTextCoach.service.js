import { GoogleGenAI, Type } from "@google/genai";
import { ServiceUnavailableError } from "../../../utils/errors/index.js";

const GEMINI_TEXT_MODEL = process.env.GEMINI_TEXT_MODEL || "gemini-3.8-flash";
const GEMINI_TEXT_REQUEST_TIMEOUT_MS = 55_000;
const DRAFT_COACH_RESPONSE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    tips: {
      type: Type.ARRAY,
      minItems: "3",
      maxItems: "5",
      items: { type: Type.STRING, maxLength: "119" },
    },
  },
  required: ["tips"],
};
const ANSWER_FIT_RESPONSE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    level: {
      type: Type.STRING,
      enum: ["strong", "partial", "weak"],
    },
    note: {
      type: Type.STRING,
      minLength: "1",
      maxLength: "199",
    },
  },
  required: ["level", "note"],
};

function parseJsonObjectFromGeminiText(raw) {
  if (typeof raw !== "string" || !raw.trim()) {
    return null;
  }

  let text = raw.trim();
  if (text.startsWith("```")) {
    text = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "");
  }

  try {
    const parsed = JSON.parse(text);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed
      : null;
  } catch {
    return null;
  }
}

function getSafeGeminiErrorDetails(error, apiKey, durationMs) {
  const providerMessage =
    error?.error?.message ||
    error?.response?.data?.error?.message ||
    error?.message ||
    "No provider error message";
  let message = String(providerMessage);

  if (apiKey) {
    message = message
      .split(apiKey)
      .join("[REDACTED]")
      .split(encodeURIComponent(apiKey))
      .join("[REDACTED]");
  }
  message = message
    .replace(
      /((?:x-goog-api-key|api[_-]?key|key)\s*[:=]\s*["']?)[^,\s"'&]+/gi,
      "$1[REDACTED]",
    )
    .slice(0, 600);

  return {
    model: GEMINI_TEXT_MODEL,
    status:
      error?.status ??
      error?.statusCode ??
      error?.response?.status ??
      error?.error?.code ??
      null,
    code: error?.code ?? error?.error?.status ?? null,
    name: error?.name ?? "Error",
    message,
    durationMs,
  };
}

async function fetchGeminiJsonTextResponse(prompt, responseSchema) {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    throw new ServiceUnavailableError(
      "Gemini AI is not configured. Please try again later.",
    );
  }

  const startedAt = Date.now();
  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: GEMINI_TEXT_MODEL,
      contents: prompt,
      config: {
        maxOutputTokens: 300,
        responseMimeType: "application/json",
        responseSchema,
        httpOptions: {
          timeout: GEMINI_TEXT_REQUEST_TIMEOUT_MS,
          retryOptions: { attempts: 1 },
        },
      },
    });
    return typeof response?.text === "string" ? response.text : "";
  } catch (error) {
    const errorDetails = getSafeGeminiErrorDetails(
      error,
      apiKey,
      Date.now() - startedAt,
    );
    console.error(
      "Gemini text generation request failed:",
      errorDetails,
    );
    if (
      errorDetails.status === 429 ||
      errorDetails.code === "RESOURCE_EXHAUSTED" ||
      errorDetails.code === "RATE_LIMIT_EXCEEDED"
    ) {
      throw new ServiceUnavailableError(
        "Gemini is rate limited or over quota. Please try again later.",
      );
    }
    throw new ServiceUnavailableError(
      "Gemini text generation is temporarily unavailable. Please try again later.",
    );
  }
}

async function requestGeminiJson(prompt, responseSchema, generateText) {
  let raw;
  try {
    raw = await generateText(prompt, responseSchema);
  } catch (error) {
    if (error instanceof ServiceUnavailableError) {
      throw error;
    }
    throw new ServiceUnavailableError(
      "Gemini text generation is temporarily unavailable. Please try again later.",
    );
  }

  const parsed = parseJsonObjectFromGeminiText(raw);
  if (!parsed) {
    throw new ServiceUnavailableError(
      "Gemini returned an invalid response. Please try again later.",
    );
  }
  return parsed;
}

/**
 * Provides constructive suggestions for improving a question draft.
 * The optional text generator supports deterministic service tests.
 *
 * @param {{ title: string, content: string }} draft
 * @param {(prompt: string) => Promise<string>} generateText
 * @returns {Promise<{ tips: string[] }>}
 */
export const generateQuestionDraftCoachService = async (
  { title, content },
  generateText = fetchGeminiJsonTextResponse,
) => {
  const prompt = `You help learners write clearer technical forum posts.

Question TITLE:
${title}

Question BODY (markdown allowed):
${content}

Reply with ONLY valid JSON (no markdown fences), exactly this shape:
{"tips":["...","...","..."]}
Rules:
- Provide 3 to 5 short suggestions, each under 120 characters.
- Focus on missing context (error message, expected vs actual), reproducibility, a sharper title if needed, and constructive tone.
- Give useful, clear, constructive checklist-style suggestions.
- Do not claim the question is correct or grade homework.`;

  const parsed = await requestGeminiJson(
    prompt,
    DRAFT_COACH_RESPONSE_SCHEMA,
    generateText,
  );
  if (
    !Array.isArray(parsed.tips) ||
    parsed.tips.length < 3 ||
    parsed.tips.length > 5 ||
    !parsed.tips.every(
      (tip) => typeof tip === "string" && tip.trim().length > 0 && tip.trim().length < 120,
    )
  ) {
    throw new ServiceUnavailableError(
      "Gemini returned invalid draft suggestions. Please try again later.",
    );
  }

  return { tips: parsed.tips.map((tip) => tip.trim()) };
};

/**
 * Evaluates whether an answer draft addresses the supplied question.
 * The optional text generator supports deterministic service tests.
 *
 * @param {{ questionTitle: string, questionContent: string, answerText: string }} input
 * @param {(prompt: string) => Promise<string>} generateText
 * @returns {Promise<{ level: "strong" | "partial" | "weak", note: string }>}
 */
export const assessAnswerAgainstQuestionService = async (
  { questionTitle, questionContent, answerText },
  generateText = fetchGeminiJsonTextResponse,
) => {
  const prompt = `You review whether a forum ANSWER draft addresses the QUESTION (relevance and completeness of engagement - not whether every detail is factually correct).

QUESTION TITLE:
${questionTitle}

QUESTION BODY:
${questionContent}

ANSWER DRAFT:
${answerText}

Reply with ONLY valid JSON (no markdown fences), exactly this shape:
{"level":"strong","note":"one short sentence"}
Rules:
- level must be "strong", "partial", or "weak".
- Use strong if the draft clearly engages with the question; partial if it is somewhat related but misses key parts; weak if it is off-topic, empty-substance, or too vague.
- note must be one short sentence in plain language, under 200 characters.
- Evaluate fit and relevance, not grading.`;

  const parsed = await requestGeminiJson(
    prompt,
    ANSWER_FIT_RESPONSE_SCHEMA,
    generateText,
  );
  if (
    !["strong", "partial", "weak"].includes(parsed.level) ||
    typeof parsed.note !== "string" ||
    !parsed.note.trim() ||
    parsed.note.trim().length >= 200
  ) {
    throw new ServiceUnavailableError(
      "Gemini returned an invalid answer-fit evaluation. Please try again later.",
    );
  }

  return { level: parsed.level, note: parsed.note.trim() };
};
