type Theme = 'dark' | 'light';

type ThemeCallbacks = { setTheme: (newTheme: Theme) => void, toggleTheme: () => void };


export function useTheme(): ThemeCallbacks {
    const setTheme = (newTheme: Theme): void => {
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
    }

    return { setTheme, toggleTheme };
}
