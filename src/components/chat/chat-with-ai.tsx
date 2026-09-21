import { FC, useEffect, useRef } from "react";
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

export const ChatWithAI: FC<ChatWithAITypes> = ({activeLesson, lessons, allMessages, addAllMessages}) =>  {

    const messages = allMessages[activeLesson];
    const pageRef = useRef(null);

    useEffect(() => {
        pageRef.current?.scrollIntoView({ behavior: "auto" });
    }, [messages]);

    return(

        <section className="prose flex-1 flex flex-col max-w-none">
            <div className="fixed ml-5 p-4 w-[20%]">
                <p>{activeLesson ? lessons.find(arr => arr.number==activeLesson)?.label : "Не выбрана никакая тема."}</p>
            </div>
            <div className="flex justify-center items-center flex-col">
                {activeLesson ? <>
                    <div className="w-[45%] flex flex-col gap-8 flex-1 mb-35">
                        {
                            messages.map((message, index) => {

                                if(message.author == "AI") {
                                    return <MessageAI message={message.message} key={index}/>
                                }
                                else if(message.author == "Me") {
                                    return <MessageMe message={message.message} key={index}/>
                                }

                            })
                        }
                        <div ref={pageRef} />
                    </div>
                    <div className="w-[40%] flex bottom-6 fixed pt-5 overflow-hidden">
                        <MessageInput activeLesson={activeLesson} addAllMessages={addAllMessages} allMessages={allMessages}/>
                    </div></>
                : (
                    <div>
                        <h3>Выберите тему</h3>
                    </div>
                )}
                
            </div>
        </section>

    )
    
};