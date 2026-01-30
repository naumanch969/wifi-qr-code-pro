export type WiFiEncryption = 'WPA' | 'WEP' | 'nopass';

export interface WiFiConfig {
    ssid: string;
    password?: string;
    encryption: WiFiEncryption;
    hidden?: boolean;
}
