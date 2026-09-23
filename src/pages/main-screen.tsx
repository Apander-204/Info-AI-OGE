import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { ChatWithAI } from "@/components/chat/chat-with-ai";
import { initializationLocalStorage, getAllMessages } from "@/utils/localStorage";
import { topics } from "@/utils/items";

export const MainScreen: FC = () =>  {

    type MessageType = {
        author: string;
        message: string;
    };

    type MessagesType = MessageType[];

    const [allMessages, addAllMessages] = useState<MessagesType[]>([]);

    useEffect(() => {
        initializationLocalStorage();
        addAllMessages(getAllMessages());
    }, []);

    const [activeLesson, setActiveLesson] = useState<number>(0);

    const handleNavItemClick = useCallback((lessonNumber: number) => {
        setActiveLesson(lessonNumber);
    }, []);

    const items = useMemo(
        () =>
            topics.map(item =>
                typeof item.number === "number"
                    ? { ...item, onClick: () => handleNavItemClick(item.number!) }
                    : item
            ),
        [handleNavItemClick]
    );

    const [querySearch, setQuerySearch] = useState("");

    const filteredItems = useMemo(() => {
        const query = querySearch.trim().toLowerCase();
        return items.filter(i => i.number === undefined || i.label.toLowerCase().includes(query));
    }, [items, querySearch]);


    return(

        <main className="flex flex-col prose max-w-screen">
            <div className="flex flex-col md:flex-row flex-1 w-full">
                <SidebarNavigationSimple items={filteredItems} className={"whitespace-normal"} onLessonClick={handleNavItemClick} querySearch={querySearch} setQuerySearch={setQuerySearch} activeLesson={activeLesson} />
                <ChatWithAI activeLesson={activeLesson} lessons={items} allMessages={allMessages} addAllMessages={addAllMessages} />
            </div>
        </main>

    )
    
};