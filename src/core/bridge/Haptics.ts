import { Haptics, ImpactStyle } from '@capacitor/haptics';

export const triggerHaptic = async (style: ImpactStyle = ImpactStyle.Light) => {
    try {
        await Haptics.impact({ style });
    } catch (e) {
        console.warn('Haptics not available', e);
    }
};

export const triggerNotificationHaptic = async (type: any) => {
    try {
        await Haptics.notification({ type });
    } catch (e) {
        console.warn('Haptics not available', e);
    }
};
