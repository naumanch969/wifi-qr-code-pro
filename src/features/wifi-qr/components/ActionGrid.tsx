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
            <NeonButton onClick={onSave} variant="primary" className="h-16 flex-col gap-1 px-0 flex items-center justify-center">
                <Download size={20} />
                <span className="text-[10px] uppercase font-bold tracking-wider">Gallery</span>
            </NeonButton>
            <NeonButton onClick={onShare} variant="secondary" className="h-16 flex-col gap-1 px-0 flex items-center justify-center">
                <Share2 size={20} />
                <span className="text-[10px] uppercase font-bold tracking-wider">Share</span>
            </NeonButton>
            <NeonButton onClick={onPrint} variant="outline" className="h-16 flex-col gap-1 px-0 flex items-center justify-center border-white/10 hover:border-white/20">
                <Printer size={20} />
                <span className="text-[10px] uppercase font-bold tracking-wider">Print</span>
            </NeonButton>
        </div>
    );
};
