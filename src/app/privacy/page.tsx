import { GlassCard } from '@/core/components/GlassCard';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen p-6 sm:p-12 flex justify-center">
            <GlassCard className="max-w-3xl w-full text-slate-300 space-y-6 overflow-y-auto max-h-[90vh]">
                <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">1. Introduction</h2>
                    <p>
                        WiFi QR Code Pro ("we," "our," or "us") is committed to protecting your privacy.
                        This Privacy Policy explains how our application operates and that we do not collect personal user data.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">2. Data Collection</h2>
                    <p>
                        <strong>We do not collect, store, or transmit any personal information.</strong>
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Your WiFi SSID and Password remain strictly on your device.</li>
                        <li>They are only used locally to generate the QR code.</li>
                        <li>We do not have access to your network credentials.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">3. Third-Party Services</h2>
                    <p>
                        We use <strong>Google AdMob</strong> to display advertisements. AdMob may collect and use data
                        (such as your device's advertising ID) to serve personalized ads.
                    </p>
                    <p className="mt-2">
                        For more information on how Google uses data, please visit:
                        <a href="https://policies.google.com/technologies/ads" className="text-blue-400 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                            Google AdMob Privacy Policy
                        </a>.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">4. Permissions</h2>
                    <p>The app requests the following permissions for core functionality:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>Storage/Photos:</strong> To save the generated QR code image to your device's gallery.</li>
                        <li><strong>Network Access:</strong> Required by Google AdMob to load advertisements.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">5. Changes to This Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. You are advised to review this page periodically for any changes.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">6. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us.
                    </p>
                </section>

                <div className="pt-6">
                    <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </GlassCard>
        </div>
    );
}
