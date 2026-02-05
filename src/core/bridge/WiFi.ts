import { Capacitor } from '@capacitor/core';
import { CapacitorWifi } from '@capgo/capacitor-wifi';

export const getCurrentSSID = async (): Promise<string | null> => {
    if (!Capacitor.isNativePlatform()) {
        console.warn('WiFi SSID detection is only available on native platforms.');
        return null;
    }

    try {
        const { ssid } = await CapacitorWifi.getSsid();
        // Capacitor-wifi returns "null" or unknown strings in some cases or on some OS versions
        if (!ssid || ssid === '<unknown ssid>' || ssid === 'null') {
            return null;
        }
        return ssid;
    } catch (error) {
        console.error('Failed to get WiFi SSID', error);
        return null;
    }
};
