import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const generateContent = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    alert(response.text)
    return(response.text);
  } 
  catch (error) {
    console.error("Ошибка Gemini:", error);
    return("Произошла ошибка при обращении к Gemini");
  }
};