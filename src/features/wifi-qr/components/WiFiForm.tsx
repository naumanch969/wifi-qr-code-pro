'use client';

import { WiFiConfig } from '@/types/wifi';
import React from 'react';
import { ENCRYPTION_TYPES } from '../constants';

interface WiFiFormProps {
    config: WiFiConfig;
    onChange: (config: WiFiConfig) => void;
}

export const WiFiForm = ({ config, onChange }: WiFiFormProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        onChange({ ...config, [name]: value });
    };

    return (
        <div className="space-y-6 w-full max-w-md mx-auto">
            <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Network Name (SSID)</label>
                <input
                    type="text"
                    name="ssid"
                    value={config.ssid}
                    onChange={handleChange}
                    placeholder="e.g. Sky-Net-5G"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all focus:bg-white/10 focus:ring-2 focus:ring-blue-500/50 outline-none"
                />
            </div>

            <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Security Type</label>
                <div className="relative">
                    <select
                        name="encryption"
                        value={config.encryption}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all focus:bg-white/10 focus:ring-2 focus:ring-blue-500/50 outline-none appearance-none"
                    >
                        {ENCRYPTION_TYPES.map((type) => (
                            <option key={type.value} value={type.value} className="bg-slate-900">
                                {type.label}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </div>
                </div>
            </div>

            {config.encryption !== 'nopass' && (
                <div className="space-y-2 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={config.password || ''}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all focus:bg-white/10 focus:ring-2 focus:ring-blue-500/50 outline-none"
                    />
                </div>
            )}
        </div>
    );
};
