export interface AdMobOptions {
    adId: string;
    adSize?: string;
    position?: string;
    margin?: number;
    isTesting?: boolean;
}

export type AdMobEventNames =
    | 'onAdLoaded'
    | 'onAdFailedToLoad'
    | 'onAdShowed'
    | 'onAdDismissed';

export interface AdMobEvent {
    adId: string;
    eventName: AdMobEventNames;
}
