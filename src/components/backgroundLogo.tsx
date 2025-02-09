'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const BackgroundLogo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-1/2 top-1/2 z-[-1] flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-5 transition-opacity duration-500 ${isVisible ? 'opacity-5' : 'opacity-0'}`}
    >
      <div className="flex items-center justify-center">
        <Image
          className="h-auto max-w-[400px]"
          src="/images/home/H3 Logo Final.svg"
          alt="Background Logo"
          width={400}
          height={400}
          priority={false}
          loading="lazy"
          quality={50}
          unoptimized={false}
        />
      </div>
    </div>
  );
};

export default BackgroundLogo;
