import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Waleed Ahmad | Full-Stack Developer',
  description: 'Portfolio of Waleed Ahmad, a full-stack developer specializing in modern web technologies.',
  keywords: 'portfolio, developer, full-stack, nextjs, react, typescript',
  openGraph: {
    title: 'Waleed Ahmad | Full-Stack Developer',
    description: 'Portfolio of Waleed Ahmad, a full-stack developer',
    url: 'https://yourportfolio.com',
    siteName: 'Waleed Ahmad Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Geist_Mono} font-sans bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}