import { Media } from '@capacitor-community/media';
import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';

export const saveImageToGallery = async (base64Data: string, fileName: string) => {
    try {
        if (Capacitor.isNativePlatform()) {
            // Use Media plugin for Android/iOS Gallery
            await Media.savePhoto({
                path: base64Data,
                fileName: fileName,
            });
            return { uri: 'Saved to Gallery' };
        } else {
            // Fallback for Web: Download link
            const link = document.createElement('a');
            link.href = base64Data;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return { uri: 'Downloaded' };
        }
    } catch (e) {
        console.error('File write failed', e);

        // Fallback: Try saving to specific local Documents directory if Media fails
        try {
            const result = await Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: Directory.Documents,
            });
            return result;
        } catch (fallbackError) {
            console.error('Fallback save failed', fallbackError);
            throw e;
        }
    }
};
