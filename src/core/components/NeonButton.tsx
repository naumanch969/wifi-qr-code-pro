import { cn } from '@/lib/utils';
import React from 'react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
}

export const NeonButton = ({ children, className, variant = 'primary', ...props }: NeonButtonProps) => {
    const variants = {
        primary: "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]",
        secondary: "bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(147,51,234,0.7)]",
        outline: "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10"
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
