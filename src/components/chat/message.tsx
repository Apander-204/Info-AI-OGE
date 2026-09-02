import { FC } from "react";
import { Avatar } from "../base/avatar/avatar";
import { AvatarProps } from "../base/avatar/avatar";

export const MessageAI: FC<AvatarProps> = ({alt, src}) =>  {

    return(

        <section className="prose flex flex-col gap-2 flex-1 max-w-none">
            <div className="flex items-center gap-1.5">
                <Avatar size="md" alt={alt} src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" />
                <p><b>AI</b></p>
            </div>
            <div className="bg-secondary rounded-2xl p-1 pl-1 pr-1 w-auto">
                <p>Hello! I'm AI tutorik</p>
            </div>
        </section>

    )
    
};

export const MessageMe: FC<AvatarProps> = () =>  {

    return(

        <section className="prose flex flex-col gap-2 flex-1 max-w-none">
            <div className="shadow-sm rounded-2xl p-1 pl-1 pr-1 w-auto text-right ring-1 shadow-xs">
                <p>Hello! I'm AI tutorik</p>
            </div>
        </section>

    )
    
};