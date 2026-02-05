import { cn } from '@/lib/utils';
import React from 'react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
}

export const NeonButton = ({ children, className, variant = 'primary', ...props }: NeonButtonProps) => {
    const variants = {
        primary: "bg-primary text-white shadow-[0_4px_20px_var(--primary-glow)] hover:bg-primary/90 hover:shadow-[0_6px_30px_var(--primary-glow)]",
        secondary: "bg-secondary text-foreground border border-border hover:bg-secondary/80",
        outline: "border border-border bg-transparent text-foreground hover:bg-secondary/50"
    };

    return (
        <button
            className={cn(
                "relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
