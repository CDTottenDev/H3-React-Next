import '@/styles/globals.css';

import { PropsWithChildren, Suspense } from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Script from 'next/script';

import Loading from './loading';

import { Navbar } from '@/components/navbar/navbar';
import ThemeProviderWrapper from '@/components/theme-provider-wrapper';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/lib/constant';
import { cn } from '@/lib/utils';
import { VersionChecker } from '@/components/version-checker';
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "H3 Excavation & Construction",
  "image": "/images/home/logo favicon icon.png",
  "url": siteConfig.url(),
  "telephone": "+1-541-XXX-XXXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Bend",
    "addressRegion": "OR",
    "postalCode": "97701",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "44.0582",
    "longitude": "-121.3153"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "07:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.facebook.com/h3excavation",
    "https://www.linkedin.com/company/h3excavation"
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "44.0582",
      "longitude": "-121.3153"
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Excavation and Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Excavation",
          "description": "Custom home site preparation and excavation services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Excavation",
          "description": "Commercial site preparation and excavation services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Utility Trenching",
          "description": "Professional utility trenching services for water, sewer, and electrical lines"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Septic Systems",
          "description": "DEQ certified septic system installation and repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Land Development",
          "description": "Complete land development and site preparation services"
        }
      }
    ]
  }
};

export const generateMetadata = (): Metadata => ({
  metadataBase: new URL(siteConfig.url()),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords(),
  robots: { index: true, follow: true },
  icons: {
    icon: '/images/home/logo favicon icon.png',
    shortcut: '/images/home/logo favicon icon.png',
    apple: '/images/home/logo favicon icon.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId(),
  },
  openGraph: {
    url: siteConfig.url(),
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: '/images/home/logo favicon icon.png',
    type: 'website',
    locale: 'en',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: '/images/home/logo favicon icon.png',
  },
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.className}>
      <head>
        <style>{/* Critical CSS can be added here if needed */}</style>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
              <Analytics />
            </>
          </ThemeProviderWrapper>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
