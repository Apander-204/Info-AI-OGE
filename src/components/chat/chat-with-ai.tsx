import { FC, useEffect, useRef } from "react";
import { MessageAI, MessageMe } from "./message";
import { MessageInput } from "./message-input";
import { ThemeSwitcher } from "./theme-switcher";

type MessageType = {
    author: string;
    message: string;
};

type MessagesType = MessageType[];

interface ChatWithAITypes { 
    activeLesson: number;
    lessons: ({
        label: string;
    } | {
        number: number;
        label: string;
        href: string;
    })[];
    allMessages: MessagesType[];
    addAllMessages: React.Dispatch<React.SetStateAction<MessagesType[]>>;
}

export const ChatWithAI: FC<ChatWithAITypes> = ({activeLesson, lessons, allMessages, addAllMessages}) =>  {

    const messages:MessagesType = allMessages[activeLesson];
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        pageRef.current?.scrollIntoView({ behavior: "auto" });
    }, [messages]);

    return(

        <section className="prose flex-1 flex flex-col max-w-none">
            <div className="hidden md:block fixed ml-5 p-4 w-[20%]">
                <p>{activeLesson ? lessons.find(arr => "number" in arr && arr.number === activeLesson)?.label : "Не выбрана никакая тема."}</p>
            </div>
            <div className="flex justify-center items-center flex-col mt-12">
                {activeLesson ? <>
                    <div className="w-[80%] md:w-[45%] flex flex-col gap-8 flex-1 mb-35">
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
                    <div className="w-[75%] md:w-[40%] flex bottom-6 fixed pt-5 overflow-hidden">
                        <MessageInput activeLesson={activeLesson} addAllMessages={addAllMessages}/>
                    </div></>
                : (
                    <div>
                        <h3>Выберите тему</h3>
                    </div>
                )}
                <div className="fixed right-2.5 md:right-25 top-16">
                    <ThemeSwitcher />
                </div>
                
            </div>
        </section>

    )
    
};