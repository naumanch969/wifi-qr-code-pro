'use client';

import { AdMob, BannerAdOptions, BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';
import React, { useEffect } from 'react';

interface BannerAdProps {
    adId: string;
}

const BannerAd: React.FC<BannerAdProps> = ({ adId }) => {
    useEffect(() => {
        const showBanner = async () => {
            try {
                const options: BannerAdOptions = {
                    adId: adId,
                    adSize: BannerAdSize.BANNER,
                    position: BannerAdPosition.BOTTOM_CENTER,
                    margin: 0,
                };
                await AdMob.showBanner(options);
            } catch (error) {
                console.error('Banner ad failed to show', error);
            }
        };

        showBanner();

        return () => {
            AdMob.removeBanner().catch(console.error);
        };
    }, [adId]);

    return <div id="banner-ad-container" className="w-full h-[50px] flex items-center justify-center bg-transparent" />;
};

export default BannerAd;
