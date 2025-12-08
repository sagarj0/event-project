import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-related/theme-provider';
import { Navbar } from '@/components/layout-related/navbar';
import { Footer } from '@/components/layout-related/footer';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KOI Event Tracker',
  description: 'KOI Event Tracker',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex flex-col items-stretch gap-4 overflow-y-auto container-wrapper">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
