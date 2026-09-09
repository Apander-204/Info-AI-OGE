import { FC, useEffect, useState } from "react";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { ChatWithAI } from "@/components/chat/chat-with-ai";
import { inicialisationLocalStorage, initializationLocalStorage } from "@/utils/localStorage";

export const MainScreen: FC = () =>  {

    useEffect(() => {
        initializationLocalStorage();
    }, []);

    const [activeLesson, setActiveLesson] = useState<number>(0);

    const handleNavItemClick = (lessonNumber: number) => {
        setActiveLesson(lessonNumber);
    }

    let items = [
    {
        label: "Часть 1:",
    },
    {
        number: 1,
        label: "Количественные параметры информационных объектов",
        href: "/main",
    },
    {
        number: 2,
        label: "Кодирование и декодирование информации",
        href: "/main",
    },
    {
        number: 3,
        label: "Значение логического выражения",
        href: "/main",
    },
    {
        number: 4,
        label: "Формальные описания реальных объектов и процессов",
        href: "/main",
    },
    {
        number: 5,
        label: "Простой линейный алгоритм для формального исполнителя",
        href: "/main",
    },
    {
        number: 6,
        label: "Программа с условным оператором",
        href: "/main",
    },
    {
        number: 7,
        label: "Информационно-коммуникационные технологии",
        href: "/main",
    },
    {
        number: 8,
        label: "Запросы для поисковых систем с использованием логических выражений",
        href: "/main",
    },
    {
        number: 9,
        label: "Анализирование информации, представленной в виде схем",
        href: "/main",
    },
    {
        number: 10,
        label: "Сравнение чисел в различных системах счисления",
        href: "/main",
    },
    {
        number: 11,
        label: "Использование поиска операционной системы и текстового редактора",
        href: "/main",
    },
    {
        number: 12,
        label: "Использование поисковых средств операционной системы",
        href: "/main",
    },
    {
        label: "Часть 2:",
    },
    {
        number: 13,
        label: "Использование поисковых средств операционной системы",
        href: "/main",
    },
    {
        number: 14,
        label: "Обработка большого массива данных",
        href: "/main",
    },
    {
        number: 15,
        label: "Короткий алгоритм в различных средах исполнения",
        href: "/main",
    },
    {
        number: 16,
        label: "Программирование",
        href: "/main",
    }
    ];

    items = items.map(item => 
        'number' in item && item.number 
            ? { ...item, onClick: () => handleNavItemClick(item.number) }
            : item
    );


    return(

        <main className="flex flex-col prose max-w-screen">
            <h2>Tasks</h2>
            <div className="flex flex-1 w-full">
                <SidebarNavigationSimple items={items} showAccountCard={false} className={"whitespace-normal"} onLessonClick={handleNavItemClick} />
                <ChatWithAI activeLesson={activeLesson} lessons={items} />
            </div>
        </main>

    )
    
};