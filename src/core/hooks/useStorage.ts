'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook to persist state in localStorage.
 */
export const useStorage = <T>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(initialValue);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                setStoredValue(JSON.parse(item));
            }
        } catch (error) {
            console.error('Error reading from storage', error);
        } finally {
            setIsLoaded(true);
        }
    }, [key]);

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.error('Error saving to storage', error);
        }
    };

    return [storedValue, setValue, isLoaded] as const;
};
