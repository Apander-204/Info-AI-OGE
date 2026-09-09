import { FC } from "react";
import { MessageAI, MessageMe } from "./message";
import { MessageInput } from "./message-input";

interface ChatWithAITypes { 
    activeLesson: number;
    lessons: {
        number?: number;
        label: string;
        href?: string;
    }[];
}

export const ChatWithAI: FC<ChatWithAITypes> = ({activeLesson, lessons}) =>  {

    return(

        <section className="prose flex-1 flex flex-col max-w-none">
            <div className="fixed ml-5 p-4">
                <p>{activeLesson ? lessons.find(arr => arr.number==activeLesson)?.label : "Не выбрана никакая тема."}</p>
            </div>
            <div className="flex justify-center items-center flex-col">
                {activeLesson ? <>
                    <div className="w-[45%] flex flex-col gap-8 flex-1 mb-35">
                        {
                            // MESSAGES
                        }
                    </div>
                    <div className="w-[40%] flex bottom-6 fixed pt-5 overflow-hidden">
                        <MessageInput activeLesson={activeLesson} />
                    </div></>
                : "no"}
                
            </div>
        </section>

    )
    
};