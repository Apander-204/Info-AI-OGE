import { prompts } from "./aiPrompts";

type MessageType = {
    author: string;
    message: string;
};

type MessagesType = MessageType[];

export const initializationLocalStorage = () => {

    prompts.forEach((prompt) => {
        const key = String(prompt.number);
        if(!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify([{author: "AI", message: prompt.greeting}]));
        }
    });

}

export const getAllMessages: () => MessagesType[] = () =>  {

    let result:MessagesType[] = [];

    for(let i = 0; i<=16; i++) {
        let value = localStorage.getItem(String(i));
        result.push(value ? JSON.parse(value) : []);
    }

    return result;

}

export const addMessage = ({activeLesson, message, author}: {activeLesson: number, message: string, author: string}) => {
    const key = String(activeLesson);
    const raw = localStorage.getItem(key);

    let data: MessagesType = raw ? JSON.parse(raw) : [];

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