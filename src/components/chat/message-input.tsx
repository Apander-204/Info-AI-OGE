import { FC, useRef, useState } from "react";
import { TextAreaBase } from "../base/textarea/textarea";
import { Button } from "../base/buttons/button";
import { Send03 } from "@untitledui/icons";
import { generateContent } from "@/utils/geminiAPI";
import { addMessage } from "@/utils/localStorage";

type MessageType = {
    author: string;
    message: string;
};

type MessagesType = MessageType[];

interface MessageInputProps {
    activeLesson: number;
    addAllMessages: React.Dispatch<React.SetStateAction<MessagesType[]>>;
}

export const MessageInput: FC<MessageInputProps> = ({activeLesson, addAllMessages}) =>  {

    const inputRef = useRef<null | HTMLTextAreaElement>(null);
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

    const buttonClick = async () => {
        setButtonIsDisabled(true);
        const message = inputRef.current?.value ?? "";
        if (!message.trim()) return;
        let author = "Me";
        addMessage({activeLesson, message, author});
        addAllMessages(prev => {
            const next = prev.map(arr => [...arr]);
            next[activeLesson] = [...(next[activeLesson] ?? []), { author, message }];
            return next;
        });

        if (inputRef.current) inputRef.current.value = "";

        const prevMessage = message;
        const aiMessage = await generateContent(prevMessage, activeLesson);
        author = "AI";
        addAllMessages(prev => {
            const next = prev.map(arr => [...arr]);
            next[activeLesson] = [...(next[activeLesson] ?? []), { author: author, message: aiMessage }];
            return next;
        });
        addMessage({activeLesson, message: aiMessage, author: "AI"});
        setButtonIsDisabled(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key==="Enter" && !e.shiftKey) {
            buttonClick();
            e.preventDefault();
        }
    };

    return(

        <div className="flex flex-1 w-full items-center gap-4">
            <TextAreaBase className={"bg-secondary resize-none"} ref={inputRef} onKeyDown={handleKeyDown} />
            <Button className="size-12" onClick={() => buttonClick()} isDisabled={buttonIsDisabled} ><Send03 /></Button>
        </div>

    )
    
};