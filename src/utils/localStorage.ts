import { prompts } from "./aiPrompts";

export const initializationLocalStorage = () => {

    prompts.forEach((prompt) => {
        const key = String(prompt.number);
        if(!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify([{author: "AI", message: prompt.greeting}]));
        }
    });

}

export const getAllMessages = () => {

    let result = [];

    for(let i = 1; i<=16; i++) {
        let value = localStorage.getItem(String(i));
        result.push(value ? JSON.parse(value) : []);
    }

    return result;

}

export const addMessage = ({activeLesson, message, author}: {activeLesson: number, message: string, author: string}) => {
    const key = String(activeLesson);
    let data = JSON.parse(localStorage.getItem(key));
    data.push({author: author, message: message});
    localStorage.setItem(key, JSON.stringify(data));
}

export const addAnswerAI = ({message, activeLesson}: {message: string; activeLesson: string;}) => {
    localStorage.setItem(activeLesson, message);
}

export const getHistoryMessages = (activeLesson: number) => {
  const raw = localStorage.getItem(String(activeLesson));
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
};