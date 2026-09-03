import { FC } from "react";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { ChatWithAI } from "@/components/chat/chat-with-ai";

export const MainScreen: FC = () =>  {

    const items = [
    {
        label: "Часть 1:",
    },
    {
        label: "Количественные параметры информационных объектов",
        href: "/main",
    },
    {
        label: "Кодирование и декодирование информации",
        href: "/main",
    },
    {
        label: "Значение логического выражения",
        href: "/main",
    },
    {
        label: "Формальные описания реальных объектов и процессов",
        href: "/main",
    },
    {
        label: "Простой линейный алгоритм для формального исполнителя",
        href: "/main",
    },
    {
        label: "Программа с условным оператором",
        href: "/main",
    },
    {
        label: "Информационно-коммуникационные технологии",
        href: "/main",
    },
    {
        label: "Запросы для поисковых систем с использованием логических выражений",
        href: "/main",
    },
    {
        label: "Анализирование информации, представленной в виде схем",
        href: "/main",
    },
    {
        label: "Сравнение чисел в различных системах счисления",
        href: "/main",
    },
    {
        label: "Использование поиска операционной системы и текстового редактора",
        href: "/main",
    },
    {
        label: "Использование поисковых средств операционной системы",
        href: "/main",
    },
    {
        label: "Часть 2:",
    },
    {
        label: "Использование поисковых средств операционной системы",
        href: "/main",
    },
    {
        label: "Обработка большого массива данных",
        href: "/main",
    },
    {
        label: "Короткий алгоритм в различных средах исполнения",
        href: "/main",
    },
    {
        label: "Программирование",
        href: "/main",
    },
    ];

    return(

        <main className="flex flex-col prose max-w-screen">
            <h2>Tasks</h2>
            <div className="flex flex-1 w-full">
                <SidebarNavigationSimple items={items} showAccountCard={false} className={"whitespace-normal"}/>
                <ChatWithAI />
            </div>
        </main>

    )
    
};