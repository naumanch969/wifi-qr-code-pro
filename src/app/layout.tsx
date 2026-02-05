import { ClientInit } from "@/core/components/ClientInit";
import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WiFi QR Pro | Premium QR Generator",
  description: "Generate and share professional WiFi QR codes instantly with one-tap auto-fill.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0A0A0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} font-outfit antialiased bg-background text-foreground transition-colors duration-500`}
      >
        <div className="min-h-screen relative overflow-x-hidden">
          {/* Ambient Premium Lighting */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent-glow/20 blur-[140px] animate-pulse-slow" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary-glow/10 blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </div>
          <ClientInit />
          <main className="relative z-10 flex flex-col min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
