'use client';

import { triggerHaptic } from '@/core/bridge/Haptics';
import { getCurrentSSID } from '@/core/bridge/WiFi';
import { WiFiConfig } from '@/types/wifi';
import { Loader2, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import { ENCRYPTION_TYPES } from '../constants';

interface WiFiFormProps {
    config: WiFiConfig;
    onChange: (config: WiFiConfig) => void;
}

export const WiFiForm = ({ config, onChange }: WiFiFormProps) => {
    const [isAutoFilling, setIsAutoFilling] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        onChange({ ...config, [name]: value });
    };

    const handleAutoFill = async () => {
        await triggerHaptic();
        setIsAutoFilling(true);
        try {
            const ssid = await getCurrentSSID();
            if (ssid) {
                onChange({ ...config, ssid });
            } else {
                alert('Could not detect WiFi name automatically. Please ensure WiFi is on and Location permission is granted.');
            }
        } finally {
            setIsAutoFilling(false);
        }
    };

    return (
        <div className="space-y-6 w-full max-w-md mx-auto">
            <div className="space-y-2 text-left">
                <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Network Name (SSID)</label>
                    <button
                        onClick={handleAutoFill}
                        disabled={isAutoFilling}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 active:scale-95 transition-all disabled:opacity-50 ring-1 ring-primary/10 shadow-[0_0_15px_rgba(197,160,89,0.15)]"
                    >
                        {isAutoFilling ? (
                            <Loader2 size={12} className="animate-spin" />
                        ) : (
                            <Sparkles size={12} />
                        )}
                        Auto-Fill
                    </button>
                </div>
                <div className="relative group">
                    <input
                        type="text"
                        name="ssid"
                        value={config.ssid}
                        onChange={handleChange}
                        placeholder="e.g. Sky-Net-5G"
                        className="w-full rounded-2xl border border-white/5 bg-white/5 p-4 pr-12 text-foreground transition-all focus:bg-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-muted-foreground/50 shadow-inner"
                    />
                </div>
            </div>

            <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Security Type</label>
                <div className="relative">
                    <select
                        name="encryption"
                        value={config.encryption}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/5 bg-white/5 p-4 text-foreground transition-all focus:bg-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none appearance-none cursor-pointer shadow-inner"
                    >
                        {ENCRYPTION_TYPES.map((type) => (
                            <option key={type.value} value={type.value} className="bg-card text-card-foreground">
                                {type.label}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                        <svg className="h-4 w-4 fill-current opacity-70" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </div>
                </div>
            </div>

            {config.encryption !== 'nopass' && (
                <div className="space-y-2 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={config.password || ''}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="w-full rounded-2xl border border-white/5 bg-white/5 p-4 text-foreground transition-all focus:bg-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-muted-foreground/50 shadow-inner"
                    />
                </div>
            )}
        </div>
    );
};
