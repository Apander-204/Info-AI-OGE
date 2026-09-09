import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "API KEY",
});

export const generateContent = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    alert(response.text);
  } 
  catch (error) {
    console.error("Ошибка Gemini:", error);
    alert("Произошла ошибка при обращении к Gemini");
  }
};