import { FC } from "react";
import { MessageAI, MessageMe } from "./message";
import { MessageInput } from "./message-input";

export const ChatWithAI: FC = () =>  {

    return(

        <section className="prose flex-1 flex flex-col max-w-none">
            <div className="">
                <p>Title Chat</p>
            </div>
            <div className="flex justify-center items-center flex-col">
                <div className="w-[45%] flex flex-col gap-8">
                    <MessageAI alt="AI"/>
                    <MessageMe />
                    <MessageAI alt="AI"/>
                    <MessageMe />
                </div>
                <div className="w-[40%] flex bottom-6 fixed">
                    <MessageInput />
                </div>
            </div>
        </section>

    )
    
};