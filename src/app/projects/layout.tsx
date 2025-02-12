import type React from 'react'; // Import React
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our portfolio of projects',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen bg-white dark:bg-black/85 ${inter.className}`}>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
