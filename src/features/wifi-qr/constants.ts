import { WiFiEncryption } from "@/types/wifi";

export const ENCRYPTION_TYPES: { label: string; value: WiFiEncryption }[] = [
    { label: 'WPA/WPA2/WPA3', value: 'WPA' },
    { label: 'WEP', value: 'WEP' },
    { label: 'None (Open)', value: 'nopass' },
];
