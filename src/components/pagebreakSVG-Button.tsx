'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PageBreakSVGButton = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowCTA(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="position-relative z-[999] clear-both m-0 block h-[45vh] w-full bg-[#d3d3d3]/35 p-0 dark:bg-[#271d1d]"
      style={{ isolation: 'isolate' }}
    >
      <div
        className={`absolute left-[10%] top-32 z-50 transition-opacity duration-500 sm:left-[15%] sm:top-24 md:left-1/4 md:top-32 lg:left-[20%] lg:top-28 ${showCTA ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="relative">
          <Link href="#featured-projects">
            <Image
              src="/images/SVG-CTA-BUTTON.webp"
              alt="CTA Button"
              width={180}
              height={180}
              className="mx-auto size-[180px] cursor-pointer sm:size-[160px] md:size-[160px] lg:size-[180px] xl:size-[220px]"
              priority={true}
              quality={75}
              loading="eager"
              sizes="(max-width: 768px) 180px, (max-width: 1024px) 160px, 180px"
              fetchPriority="high"
              unoptimized={false}
            />
            <p className="absolute -inset-0 z-10 ml-3 flex -translate-y-8 items-center justify-center text-center text-black dark:text-neutral-50 sm:ml-4 sm:-translate-y-10 md:ml-4 md:-translate-y-10 lg:ml-5 lg:-translate-y-12">
              <em className="text-[18.4px] font-bold text-red-500 sm:text-[18px] md:text-[20px] lg:text-[22px]">
                <span className="text-[13.8px] text-red-500 sm:text-[14px] md:text-[16px] lg:text-[18px]">
                  CLICK HERE!
                </span>
                <span className="block text-[11.5px] font-extrabold leading-tight text-black sm:text-[11px] md:text-[12px] lg:text-[14px]">
                  <span className="text-[11.5px] text-red-500 sm:text-[11px] md:text-[12px] lg:text-[14px]">
                    SNOW&apos;S HERE!
                  </span>
                  <span className="block">SNOW REMOVAL</span>
                </span>
              </em>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageBreakSVGButton;
