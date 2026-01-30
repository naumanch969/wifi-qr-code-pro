import { Share } from '@capacitor/share';

export const shareContent = async (title: string, text: string, url?: string, files?: string[]) => {
    try {
        const canShare = await Share.canShare();
        if (canShare.value) {
            await Share.share({
                title,
                text,
                url,
                files,
            });
        } else {
            console.warn('Sharing not supported on this platform');
        }
    } catch (e) {
        console.error('Share failed', e);
    }
};
