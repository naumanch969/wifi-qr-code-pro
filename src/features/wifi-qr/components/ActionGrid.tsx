'use client';

import { NeonButton } from '@/core/components/NeonButton';
import { Download, Printer, Share2 } from 'lucide-react';

interface ActionGridProps {
    onSave: () => void;
    onShare: () => void;
    onPrint: () => void;
}

export const ActionGrid = ({ onSave, onShare, onPrint }: ActionGridProps) => {
    return (
        <div className="grid grid-cols-3 gap-4 w-full max-w-md mx-auto">
            <NeonButton onClick={onSave} variant="primary" className="h-20 flex-col gap-2 rounded-2xl">
                <Download size={20} />
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/90">Gallery</span>
            </NeonButton>
            <NeonButton onClick={onShare} variant="secondary" className="h-20 flex-col gap-2 rounded-2xl">
                <Share2 size={20} />
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">Share</span>
            </NeonButton>
            <NeonButton onClick={onPrint} variant="outline" className="h-20 flex-col gap-2 rounded-2xl">
                <Printer size={20} />
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">Print</span>
            </NeonButton>
        </div>
    );
};
