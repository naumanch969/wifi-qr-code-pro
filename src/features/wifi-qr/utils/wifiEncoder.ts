import { WiFiConfig } from "@/types/wifi";

/**
 * Encodes WiFi configuration into the standard WIFI: string format.
 * Format: WIFI:S:<SSID>;T:<ENCRYPTION>;P:<PASSWORD>;H:<HIDDEN>;;
 * Escape special characters: \ , ; , :
 */
export const encodeWiFiString = (config: WiFiConfig): string => {
    const escape = (str: string) => str.replace(/([\\;:,])/g, '\\$1');

    const { ssid, password, encryption, hidden } = config;

    let wifiString = `WIFI:S:${escape(ssid)};`;

    if (encryption !== 'nopass') {
        wifiString += `T:${encryption};`;
        if (password) {
            wifiString += `P:${escape(password)};`;
        }
    } else {
        wifiString += `T:nopass;`;
    }

    if (hidden) {
        wifiString += `H:true;`;
    }

    wifiString += `;`;

    return wifiString;
};
