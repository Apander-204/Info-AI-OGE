import { FC, useEffect, useMemo, useRef, useState } from "react";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { ChatWithAI } from "@/components/chat/chat-with-ai";
import { initializationLocalStorage } from "@/utils/localStorage";
import { topics } from "@/utils/items";

export const MainScreen: FC = () =>  {

    let items = topics;

    const [allMessages, addAllMessages] = useState([]);

    useEffect(() => {
        addAllMessages(initializationLocalStorage());
    }, []);

    const [activeLesson, setActiveLesson] = useState<number>(0);

    const handleNavItemClick = (lessonNumber: number) => {
        setActiveLesson(lessonNumber);
    }

    const [querySearch, setQuerySearch] = useState("");

    items = items.map(item => 
        'number' in item && item.number 
            ? { ...item, onClick: () => handleNavItemClick(item.number) }
            : item
    );

    const filteredItems = useMemo(() => {
        const query = querySearch.trim().toLowerCase();
        return items.filter(i => !("number" in i) || i.label.toLowerCase().includes(query));
    }, [items, querySearch]);


    return(

        <main className="flex flex-col prose max-w-screen">
            <h2>Tasks</h2>
            <div className="flex flex-1 w-full">
                <SidebarNavigationSimple items={filteredItems} showAccountCard={false} className={"whitespace-normal"} onLessonClick={handleNavItemClick} querySearch={querySearch} setQuerySearch={setQuerySearch} activeLesson={activeLesson} />
                <ChatWithAI activeLesson={activeLesson} lessons={items} allMessages={allMessages} addAllMessages={addAllMessages} />
            </div>
        </main>

    )
    
};