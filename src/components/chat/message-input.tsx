import { FC, useRef } from "react";
import { TextAreaBase } from "../base/textarea/textarea";
import { Button } from "../base/buttons/button";
import { Send03 } from "@untitledui/icons";
import { generateContent } from "../../utils/GeminiAPI";
import { addMessage } from "@/utils/localStorage";

interface MessageInputProps {
    activeLesson: number;
}

export const MessageInput: FC<MessageInputProps> = ({activeLesson, addAllMessages, allMessages}) =>  {

    const inputRef = useRef<null | string>(null);

    const buttonClick = async () => {
        let message = inputRef.current?.value;
        let author = "Me";
        addMessage({activeLesson, message, author});
        addAllMessages(prev => {
            const next = prev.map(arr => [...arr]);
            next[activeLesson] = [...next[activeLesson], { activeLesson, message, author }];
            return next;
        });
        inputRef.current.value = "";

        const prevMessage = message;
        message = await generateContent(prevMessage);
        author = "AI";
        addAllMessages(prev => {
            const next = prev.map(arr => [...arr]);
            next[activeLesson] = [...next[activeLesson], { activeLesson, message, author }];
            return next;
        });
        addMessage({activeLesson, message, author});
    };

    return(

        <div className="flex flex-1 w-full items-center gap-4">
            <TextAreaBase className={"bg-secondary resize-none"} ref={inputRef} />
            <Button className="size-12" onClick={() => buttonClick()}><Send03 /></Button>
        </div>

    )
    
};