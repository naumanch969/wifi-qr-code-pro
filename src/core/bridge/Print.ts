
export const printContent = async () => {
    try {
        // Standard web print triggers native print dialog on iOS/Android WebViews
        window.print();
        return true;
    } catch (e) {
        console.error('Print failed', e);
        return false;
    }
};
