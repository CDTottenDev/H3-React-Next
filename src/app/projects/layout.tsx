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
    <div className={`min-h-screen bg-gray-100 ${inter.className}`}>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-2 py-4 sm:px-4 lg:px-8">
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
            Projects
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-4 sm:px-4 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
