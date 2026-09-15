export const initializationLocalStorage = () => {

    if (localStorage.length==0) {
        localStorage.setItem("1", JSON.stringify([]));
        localStorage.setItem("2", JSON.stringify([]));
        localStorage.setItem("3", JSON.stringify([]));
        localStorage.setItem("4", JSON.stringify([]));
        localStorage.setItem("5", JSON.stringify([]));
        localStorage.setItem("6", JSON.stringify([]));
        localStorage.setItem("7", JSON.stringify([]));
        localStorage.setItem("8", JSON.stringify([]));
        localStorage.setItem("9", JSON.stringify([]));
        localStorage.setItem("10", JSON.stringify([]));
        localStorage.setItem("11", JSON.stringify([]));
        localStorage.setItem("12", JSON.stringify([]));
        localStorage.setItem("13", JSON.stringify([]));
        localStorage.setItem("14", JSON.stringify([]));
        localStorage.setItem("15", JSON.stringify([]));
        localStorage.setItem("16", JSON.stringify([]));
    }

    let result = [];

    for(let i = 0; i<=16; i++) {
        let value = localStorage.getItem(String(i));
        result.push(value ? JSON.parse(value) : []);
        console.log(value);
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