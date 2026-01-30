import { Directory, Filesystem } from '@capacitor/filesystem';

export const saveImageToGallery = async (base64Data: string, fileName: string) => {
    try {
        // Note: On mobile, this usually requires specific permissions and potentially 
        // a different plugin for gallery access, but Filesystem can write to public folders.
        const result = await Filesystem.writeFile({
            path: fileName,
            data: base64Data,
            directory: Directory.Documents,
        });
        return result;
    } catch (e) {
        console.error('File write failed', e);
        throw e;
    }
};
