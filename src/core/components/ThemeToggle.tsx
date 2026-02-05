'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        let finalTheme: 'light' | 'dark' = 'dark';

        if (savedTheme) {
            finalTheme = savedTheme;
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            finalTheme = prefersDark ? 'dark' : 'light';
        }

        // Wrap in a microtask to avoid the synchronous setState warning
        // while ensuring it happens as soon as possible after mount.
        setTimeout(() => {
            setTheme(finalTheme);
            document.documentElement.classList.toggle('dark', finalTheme === 'dark');
        }, 0);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-colors hover:bg-white/20"
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? <Moon className="text-slate-900" size={20} /> : <Sun className="text-yellow-400" size={20} />}
        </button>
    );
};
