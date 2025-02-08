'use client';

import { useEffect, useState } from 'react';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { ThemeSwitcher } from '../theme-switcher';
import { Button } from '../ui/button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      role="banner"
      // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
      className={`bg-background/95 supports-[backdrop-filter]:bg-background/95 fixed left-0 top-0 z-40 w-full shadow-sm backdrop-blur transition-all duration-500 ease-in-out ${
        scrolled
          ? 'w-[90%] -translate-y-[-20px] scale-x-90 rounded-lg delay-75'
          : 'w-full translate-x-0 translate-y-0 delay-0'
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out md:px-8 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="relative flex items-center space-x-3">
            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-full bg-white/20 opacity-0 blur-xl transition-opacity duration-300 dark:opacity-100" />
            <Image
              src="/images/home/H3 Logo Final.svg"
              alt="H3 Logo"
              width={300}
              height={75}
              className="relative z-10 h-[75px] w-auto transition-all duration-500 ease-in-out md:h-[60px]"
              priority
              quality={75}
            />
            <span className="hidden text-lg font-bold md:inline">
              <span className="text-black dark:text-white">H3</span>{' '}
              <span className="text-red-600">Excavation & Construction</span>
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="[&>a:hover]:after:bg-primary ml-auto mr-10 hidden items-center space-x-8 md:flex
          [&>a:hover]:after:absolute [&>a:hover]:after:bottom-0 [&>a:hover]:after:left-0 
          [&>a:hover]:after:h-[2px] [&>a:hover]:after:w-full [&>a:hover]:after:content-[''] 
          [&>a]:relative [&>a]:text-[16px] [&>a]:transition-all"
        >
          {[
            ['Home', '/'],
            ['Services', '#services'],
            ['Projects', '/projects'],
            ['About', '#about'],
          ].map(([title, url]) => (
            <Link
              key={url}
              href={url}
              className="text-muted-foreground hover:text-primary text-[14px] font-bold transition-colors"
            >
              {title}
              <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 transition-transform group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="ml-6 border-l pl-6">
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden">
          <MenuIcon className="size-6" strokeWidth={1.5} />
        </Button>
      </div>
    </header>
  );
};
