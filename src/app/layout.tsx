import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

// Optimize fonts
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

// Viewport optimization for mobile responsiveness
export const viewport: Viewport = {
  themeColor: "#0B1121",
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

  // Canonical URL to prevent duplicate content issues
  alternates: {
    canonical: DOMAIN,
  },

  // Open Graph for Facebook/LinkedIn/Discord
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
        url: "/og-image.png", // Ensure you have a 1200x630px image in your public folder
        width: 1200,
        height: 630,
        alt: "Shadow Scripter - Full Stack Architect Portfolio",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${NAME} (${ALIAS}) | Hire Top Tech Talent`,
    description:
      "16-year-old Lead Engineer. Specializing in Next.js, Node.js, and Cloud Architecture.",
    images: ["/og-image.png"],
    creator: "@shadow_scripter", // Replace if you have a specific handle
  },

  // Robots directives
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
  // This is the "Secret Weapon" that connects your alias to your real identity for Google.
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
    <html lang="en" className="scroll-smooth dark">
      <head>
        {/* Inject Structured Data */}
        <Script
          id="json-ld-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} min-h-screen bg-background text-foreground antialiased selection:bg-secondary selection:text-secondary-foreground overflow-x-hidden`}
      >
        {/* === AMBIENT BACKGROUND SYSTEM === */}
        <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="fixed inset-0 -z-30 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="fixed -left-[10%] -top-[10%] -z-20 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px] pointer-events-none mix-blend-screen animate-float"></div>
        <div className="fixed -right-[5%] top-[20%] -z-20 h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[100px] pointer-events-none mix-blend-screen animate-pulse-glow"></div>
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