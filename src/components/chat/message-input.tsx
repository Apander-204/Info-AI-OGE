import { FC } from "react";
import { TextAreaBase } from "../base/textarea/textarea";
import { Button } from "../base/buttons/button";
import { Send03 } from "@untitledui/icons";

export const MessageInput: FC = () =>  {

    return(

        <div className="flex flex-1 w-full items-center gap-4">
            <TextAreaBase className={"bg-secondary resize-none"} />
            <Button className="size-12 "><Send03 /></Button>
        </div>

    )
    
};