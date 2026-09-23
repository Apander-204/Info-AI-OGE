import { GoogleGenAI } from "@google/genai";
import { prompts } from "./aiPrompts";
import { getHistoryMessages } from "./localStorage";

type StoredMessage = {
  author: "Me" | "AI";
  message: string;
};

const toGeminiContents = (history: StoredMessage[]) => {
  return history.map((msg) => ({
    role: msg.author === "Me" ? "user" : "model",
    parts: [{ text: msg.message }],
  }));
};

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const generateContent = async (
    prompt: string,
    activeLesson: number
): Promise<string> => {
    try {
        const systemPrompt = prompts.find(obj => obj.number === activeLesson)?.prompt;
        const history = toGeminiContents(getHistoryMessages(activeLesson));

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: [
                ...history,
                { role: "user", parts: [{ text: prompt }] },
            ],
            config: { systemInstruction: systemPrompt },
        });

        return response.text ?? "Пустой ответ от Gemini";
    }
    catch (error) {
        console.error("Ошибка Gemini:", error);
        return "Произошла ошибка при обращении к Gemini";
    }
};