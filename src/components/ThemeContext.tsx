import { useState } from "react";

type Theme = 'dark' | 'light';

type ThemeCallbacks = { theme: Theme, updateTheme: (newTheme: Theme) => void, toggleTheme: () => void };


export function useTheme(): ThemeCallbacks {
    const [theme, setTheme] = useState<Theme>(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

    const updateTheme = (newTheme: Theme): void => {
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        setTheme(newTheme);
    }

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }

    return { theme, updateTheme, toggleTheme };
}
