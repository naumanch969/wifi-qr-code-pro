import { cn } from '@/lib/utils';
import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
}

export const GlassCard = ({ children, className }: GlassCardProps) => {
    return (
        <div className={cn(
            "relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl",
            "shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
            "dark:border-white/10 dark:bg-black/20",
            className
        )}>
            {children}
        </div>
    );
};
