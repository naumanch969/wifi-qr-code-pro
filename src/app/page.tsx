'use client';

import { adManager } from '@/core/ads/AdManager';
import BannerAd from '@/core/ads/BannerAd';
import { triggerHaptic } from '@/core/bridge/Haptics';
import { shareContent } from '@/core/bridge/Share';
import { ThemeToggle } from '@/core/components/ThemeToggle';
import { useStorage } from '@/core/hooks/useStorage';
import { ActionGrid } from '@/features/wifi-qr/components/ActionGrid';
import { QRDisplay } from '@/features/wifi-qr/components/QRDisplay';
import { WiFiForm } from '@/features/wifi-qr/components/WiFiForm';
import { encodeWiFiString } from '@/features/wifi-qr/utils/wifiEncoder';
import { WiFiConfig } from '@/types/wifi';
import { Wifi } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [savedConfig, setSavedConfig, isLoaded] = useStorage<WiFiConfig>('wifi-config', {
    ssid: '',
    password: '',
    encryption: 'WPA',
  });

  const [config, setConfig] = useState<WiFiConfig>({
    ssid: '',
    password: '',
    encryption: 'WPA',
  });

  const [qrValue, setQrValue] = useState('');

  // Sync state with storage once loaded
  useEffect(() => {
    if (isLoaded) {
      setConfig(savedConfig);
    }
  }, [isLoaded, savedConfig]);

  useEffect(() => {
    setQrValue(encodeWiFiString(config));
    if (isLoaded) {
      setSavedConfig(config);
    }
  }, [config, isLoaded, setSavedConfig]);

  const handleSave = async () => {
    await triggerHaptic();
    const canvas = document.getElementById('qr-code-canvas') as HTMLCanvasElement;
    if (canvas) {
      const dataUrl = canvas.toDataURL('image/png');
      console.log('Saving image to gallery...');
      // Note: Implementation of actual saving would go here using FileSystem

      // Mock delay and ad
      setTimeout(async () => {
        await adManager.showInterstitial('YOUR_INTERSTITIAL_ID');
      }, 1000);
    }
  };

  const handleShare = async () => {
    await triggerHaptic();
    await shareContent(
      'WiFi Connection QR',
      `Scan this QR code to join ${config.ssid}`,
    );
  };

  const handlePrint = async () => {
    await triggerHaptic();
    window.print();
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-6 sm:p-12">
      <header className="flex w-full max-w-lg items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-500/30">
            <Wifi className="text-white" size={20} />
          </div>
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            WiFi QR Pro
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <div className="flex w-full flex-1 flex-col items-center justify-center space-y-10 py-10">
        <section className="w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
          <WiFiForm config={config} onChange={setConfig} />
        </section>

        <section className="animate-in zoom-in duration-500 delay-150">
          <QRDisplay value={qrValue} />
        </section>

        <section className="w-full max-w-lg animate-in fade-in slide-in-from-top-4 duration-500 delay-300">
          <ActionGrid
            onSave={handleSave}
            onShare={handleShare}
            onPrint={handlePrint}
          />
        </section>
      </div>

      <footer className="w-full flex flex-col items-center space-y-6 mt-10">
        <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-medium">
          Premium Tool • Ad Supported
        </p>
        <div className="w-full h-[50px] flex justify-center items-end">
          {/* Ad placeholder or actual component */}
          <BannerAd adId="YOUR_BANNER_ID" />
        </div>
      </footer>
    </div>
  );
}
