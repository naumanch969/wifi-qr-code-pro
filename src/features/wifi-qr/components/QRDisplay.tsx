'use client';

import { GlassCard } from '@/core/components/GlassCard';
import { QRCodeCanvas } from 'qrcode.react';

interface QRDisplayProps {
    value: string;
}

export const QRDisplay = ({ value }: QRDisplayProps) => {
    return (
        <GlassCard className="flex flex-col items-center justify-center p-8 space-y-4">
            <div className="relative rounded-3xl bg-white p-6 shadow-2xl">
                <QRCodeCanvas
                    id="qr-code-canvas"
                    value={value}
                    size={220}
                    level="H"
                    includeMargin={false}
                    imageSettings={{
                        src: "/assets/icons/qr-center.png",
                        height: 48,
                        width: 48,
                        excavate: true,
                    }}
                />
            </div>
            <p className="text-sm text-slate-400 font-medium">Scan to Connect</p>
        </GlassCard>
    );
};
