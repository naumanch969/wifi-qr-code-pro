import { AdMob, AdOptions } from '@capacitor-community/admob';

export class AdManager {
    private static instance: AdManager;
    private initialized: boolean = false;

    private constructor() { }

    public static getInstance(): AdManager {
        if (!AdManager.instance) {
            AdManager.instance = new AdManager();
        }
        return AdManager.instance;
    }

    public async initialize() {
        if (this.initialized) return;
        try {
            await AdMob.initialize();

            // Request Consent for GDPR/UMP
            try {
                const consentInfo = await AdMob.requestConsentInfo();
                if (consentInfo.isConsentFormAvailable && consentInfo.status === 'REQUIRED') {
                    await AdMob.showConsentForm();
                }
            } catch (consentError) {
                console.warn('Consent info not provided or failed', consentError);
            }

            this.initialized = true;
            console.log('AdMob Initialized');
        } catch (e) {
            console.error('AdMob initialization failed', e);
        }
    }

    public async showInterstitial(adId: string) {
        if (!this.initialized) await this.initialize();
        try {
            const options: AdOptions = {
                adId: adId,
            };
            await AdMob.prepareInterstitial(options);
            await AdMob.showInterstitial();
        } catch (e) {
            console.error('Failed to show interstitial', e);
        }
    }
}

export const adManager = AdManager.getInstance();
