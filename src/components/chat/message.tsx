import { FC } from "react";
import { Avatar } from "../base/avatar/avatar";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MessageProps {
    message: string;
}

export const MessageAI: FC<MessageProps> = ({message}) =>  {

    return(

        <section className="prose flex flex-col gap-2 flex-1 max-w-none">
            <div className="flex items-center gap-1.5">
                <Avatar size="md" alt={"AI"} src="/aiAvatar.png" />
                <p><b>AI</b></p>
            </div>
            <div className="bg-secondary rounded-2xl p-1 pl-1 pr-1 w-auto">
                <ReactMarkdown remarkPlugins={remarkGfm} >
                    {message}
                </ReactMarkdown>
            </div>
        </section>

    )
    
};

export const MessageMe: FC<MessageProps> = ({message}) =>  {

    return(

        <section className="prose flex flex-col gap-2 flex-1 max-w-none">
            <div className="shadow-sm rounded-2xl p-1 pl-1 pr-1 w-auto text-right ring-1 shadow-xs">
                <ReactMarkdown remarkPlugins={remarkGfm} >
                    {message}
                </ReactMarkdown>
            </div>
        </section>

    )
    
};