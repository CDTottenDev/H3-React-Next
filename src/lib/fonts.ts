import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';

// Remove Google Fonts import and define Roboto font variables
export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = {
  variable: '--font-mono',
  fallback: ['system-ui', 'arial'],
};

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const fonts = [fontSans.variable, fontMono.variable];
