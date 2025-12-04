import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  themeColor: "#020617", // Matches your dark background color
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
    icon: "/favicon.jpg", // Maps to the file in your app/public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* Added 'dark' class to force the Electric Dark theme.
      Added 'scroll-smooth' for better navigation feel.
    */
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${jetbrains.variable} min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary overflow-x-hidden`}
      >
        {/* === AMBIENT BACKGROUND SYSTEM === */}

        {/* 1. Architectural Grid (Blueprint Vibe) */}
        <div className="fixed inset-0 -z-30 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

        {/* 2. Primary Glow (Electric Blue) - Top Left */}
        <div className="fixed -left-[10%] -top-[10%] -z-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] opacity-30 pointer-events-none mix-blend-screen animate-pulse-glow"></div>

        {/* 3. Secondary Glow (Vibrant Red) - Top Right/Center */}
        <div className="fixed -right-[5%] top-[10%] -z-20 h-[400px] w-[400px] rounded-full bg-secondary/15 blur-[120px] opacity-30 pointer-events-none mix-blend-screen"></div>

        {/* === MAIN CONTENT === */}
        <main className="relative flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}