import { FC } from "react";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { ChatWithAI } from "@/components/chat/chat-with-ai";

export const MainScreen: FC = () =>  {

    const items = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Main",
        href: "/main",
    }
    ];

    return(

        <main className="flex flex-col prose max-w-screen">
            <h2>Tasks</h2>
            <div className="flex flex-1 w-full">
                <SidebarNavigationSimple items={items} showAccountCard={false} />
                <ChatWithAI />
            </div>
        </main>

    )
    
};