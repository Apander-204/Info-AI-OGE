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

export const generateContent = async (prompt: string, activeLesson: number) => {
  try {
    const systemPrompt = prompts.find(obj => obj.number === activeLesson)?.prompt;
    const history = toGeminiContents(getHistoryMessages(activeLesson));

    console.log("Ключ:", String(activeLesson));
    console.log("Сырые данные:", localStorage.getItem(String(activeLesson)));
    console.log("История для Gemini:", history);

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: [
        ...history,
        { role: "user", parts: [{ text: prompt }] },
      ],
      config: {systemInstruction: systemPrompt}
    });

    alert(systemPrompt)
    return(response.text);
  } 
  catch (error) {
    console.error("Ошибка Gemini:", error);
    return("Произошла ошибка при обращении к Gemini");
  }

};