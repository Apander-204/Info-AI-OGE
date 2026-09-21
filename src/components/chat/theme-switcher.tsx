import { useTheme } from "@/providers/theme-provider";
import { Moon01, Sun } from "@untitledui/icons";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button onClick={toggleTheme} className="flex items-center justify-center size-9 rounded-lg text-fg-quaternary transition-colors hover:bg-primary_hover hover:text-fg-secondary shadow-xs border" aria-label="Переключить тему" title={theme === "dark" ? "Светлая тема" : "Тёмная тема"} >
            {theme === "dark" ? (
                <Sun className="size-5" />
            ) : (
                <Moon01 className="size-5" />
            )}
        </button>
  );
};