'use client';

import { ComponentProps } from 'react';
import dynamic from 'next/dynamic';

import { ThemeProvider } from './theme-provider';

const LazyThemeProvider = dynamic<ComponentProps<typeof ThemeProvider>>(
  () => import('./theme-provider').then((mod) => mod.ThemeProvider),
  {
    ssr: false,
    loading: () => <div>Central Oregon's Best Personalized Excavation and Construction Company! At H3 we are dedicated to getting the job done right the first time.</div>,
  }
);

export default function ThemeProviderWrapper({
  children,
  ...props
}: ComponentProps<typeof ThemeProvider>) {
  return <LazyThemeProvider {...props}>{children}</LazyThemeProvider>;
}
