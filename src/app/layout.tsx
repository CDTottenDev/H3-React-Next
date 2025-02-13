import '@/styles/globals.css';

import { PropsWithChildren, Suspense } from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Loading from './loading';

import { Navbar } from '@/components/navbar/navbar';
import ThemeProviderWrapper from '@/components/theme-provider-wrapper';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/lib/constant';
import { cn } from '@/lib/utils';
import { VersionChecker } from '@/components/version-checker';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const generateMetadata = (): Metadata => ({
  metadataBase: new URL(siteConfig.url()),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId(),
  },
  openGraph: {
    url: siteConfig.url(),
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: '/opengraph-image.png',
    type: 'website',
    locale: 'en',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: '/opengraph-image.png',
  },
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.className}>
      <head>
        <style>{/* Critical CSS can be added here if needed */}</style>
      </head>
      <body
        className={cn(
          'min-h-screen overflow-y-scroll bg-background font-sans antialiased',
          roboto.variable
        )}
      >
        <Suspense fallback={<Loading />}>
          <ThemeProviderWrapper attribute="class">
            <>
              <Navbar />
              {children}
              <Toaster />
              <VersionChecker />
            </>
          </ThemeProviderWrapper>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
