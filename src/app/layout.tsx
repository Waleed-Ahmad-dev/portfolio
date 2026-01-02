import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

// Optimize fonts - Retained as they fit the minimalist aesthetic perfectly
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

// Viewport optimization
export const viewport: Viewport = {
  themeColor: "#000000", // Neutral Black for sophisticated browser integration
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// --- DOMAIN CONFIGURATION ---
const DOMAIN = "https://www.shadowscripter.online";
const NAME = "Waleed Ahmad";
const ALIAS = "Shadow Scripter";
const TITLE = "Full Stack Architect & Next.js Expert";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: `${NAME} (${ALIAS}) | Hire Full Stack Architect`,
    template: `%s | ${ALIAS}`,
  },
  description:
    "Looking to hire a Full Stack Architect? Waleed Ahmad (Shadow Scripter) specializes in high-performance Next.js 16, Node.js, and Enterprise Cloud Architecture. 16-year-old Lead Engineer.",
  keywords: [
    "Hire Next.js Developer",
    "Full Stack Architect",
    "Waleed Ahmad",
    "Shadow Scripter",
    "React Developer Pakistan",
    "Node.js Expert",
    "Enterprise Web Development",
    "Remote Software Engineer",
    "Next.js 16 Portfolio",
    "Backend Architecture",
  ],
  authors: [{ name: NAME, url: DOMAIN }],
  creator: NAME,
  publisher: ALIAS,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: DOMAIN,
  },
  openGraph: {
    type: "profile",
    firstName: "Waleed",
    lastName: "Ahmad",
    username: "shadow.scripter",
    gender: "male",
    url: DOMAIN,
    title: `Hire ${NAME} | ${TITLE}`,
    description:
      "Engineering scalable digital realms. Top-tier Full Stack Architect available for enterprise projects.",
    siteName: "Shadow Scripter Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shadow Scripter - Full Stack Architect Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} (${ALIAS}) | Hire Top Tech Talent`,
    description:
      "16-year-old Lead Engineer. Specializing in Next.js, Node.js, and Cloud Architecture.",
    images: ["/og-image.png"],
    creator: "@shadow_scripter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // --- JSON-LD STRUCTURED DATA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: NAME,
    alternateName: ALIAS,
    url: DOMAIN,
    image: `${DOMAIN}/favicon.jpg`,
    jobTitle: "Full Stack Architect",
    description:
      "A 16-year-old Full Stack Developer and Lead Intern engineering production-scale applications with Next.js and Node.js.",
    email: "itswaleedqureshi@gmail.com",
    birthDate: "2009",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
    },
    knowsAbout: [
      "Software Architecture",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "DevOps",
    ],
    sameAs: [
      "https://github.com/Waleed-Ahmad-dev",
      "https://linkedin.com/in/waleed-ahmed2009",
      "https://instagram.com/shadow.scripter",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} min-h-screen bg-white dark:bg-black text-black dark:text-white antialiased selection:bg-zinc-200 selection:text-black dark:selection:bg-zinc-800 dark:selection:text-white overflow-x-hidden`}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[9999] -translate-y-[150%] rounded-md bg-black px-4 py-2 text-white transition-transform focus:translate-y-0 dark:bg-white dark:text-black"
        >
          Skip to content
        </a>

        {/* === ARCHITECTURAL BACKGROUND SYSTEM === */}
        {/* Strictly monochromatic. No colors/blobs. Just a faint structural grid. */}
        <div className="fixed inset-0 z-[-1] bg-white dark:bg-black pointer-events-none">
          {/* Micro-grid for technical texture (Opacity 3% - Barely visible) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        </div>

        {/* === MAIN CONTENT === */}
        <main
          id="main-content"
          className="relative flex min-h-screen flex-col font-sans"
        >
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}