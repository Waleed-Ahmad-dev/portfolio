import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// Optimize fonts with 'swap' for better performance
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1121", // Deep Royal Blue (Matches Dark Mode Background)
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Shadow Scripter",
    default: "Waleed Ahmad | Shadow Scripter",
  },
  description:
    "Code in the Shadows. Brilliance on the Screen. A 16-year-old Full Stack Architect building the future with Next.js.",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${jetbrains.variable} min-h-screen bg-background text-foreground antialiased selection:bg-secondary selection:text-secondary-foreground overflow-x-hidden`}
      >
        {/* === AMBIENT BACKGROUND SYSTEM === */}

        {/* 1. Cinematic Noise Overlay (Adds texture/depth to the deep blue) */}
        <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* 2. Architectural Grid (Blueprint Vibe) with Radial Mask */}
        <div className="fixed inset-0 -z-30 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* 3. Primary Glow (Royal Blue) - Top Left - Slow Float Animation */}
        <div className="fixed -left-[10%] -top-[10%] -z-20 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px] pointer-events-none mix-blend-screen animate-float"></div>

        {/* 4. Secondary Glow (Electric Yellow) - Bottom Right - Pulse Animation
         * REPLACED RED with YELLOW strictly per guidelines.
         */}
        <div className="fixed -right-[5%] top-[20%] -z-20 h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[100px] pointer-events-none mix-blend-screen animate-pulse-glow"></div>

        {/* 5. Tertiary Accent (Deep Blue Depth) - Bottom Left */}
        <div className="fixed bottom-0 left-0 -z-20 h-[300px] w-[600px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"></div>

        {/* === MAIN CONTENT === */}
        <main className="relative flex min-h-screen flex-col font-sans">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
