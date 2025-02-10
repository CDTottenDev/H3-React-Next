/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { ContactForm } from '../contact/contact-form';

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/images/SVG-CTA-BUTTON.webp"
          as="image"
          type="image/webp"
        />
      </Head>
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-[#cccccc] dark:bg-neutral-950 md:bg-[#cccccc]">
        {/* Mobile Background Image */}
        <div className="md:hidden">
          <Image
            src="/images/mobile/landing-page/h3background-mobile.webp"
            alt="Background"
            fill
            priority
            quality={75}
            className="object-cover object-center"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto mt-20 max-w-4xl px-4 text-center text-white dark:text-neutral-50 sm:mt-32 md:mt-40 lg:mt-48 xl:mt-56 2xl:mt-64">
          <h1 className="mb-4 text-3xl font-bold text-black dark:text-neutral-50 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Cut{' '}
            <em className="text-5xl font-bold text-red-500 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[100px]">
              Above
            </em>{' '}
            the Rest
          </h1>
          <p className="flex flex-col items-center justify-center gap-2 text-lg text-gray-200 dark:text-neutral-50 sm:text-xl md:flex-row md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            <span className="text-black dark:text-neutral-50">
              <em className="text-2xl font-bold text-red-500 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                Your
              </em>{' '}
              ground,{' '}
              <em className="text-2xl font-bold text-red-500 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                Our
              </em>{' '}
              expertise, Endless possibilities
            </span>
          </p>
        </div>

        {/* Before/After Images */}
        <div
          className="relative z-10 mx-auto mt-20 hidden max-w-6xl flex-row items-center justify-center gap-4 px-4 md:flex md:gap-8"
          style={{ minHeight: '50vh' }}
        >
          <div
            className="group relative mb-2 me-2 inline-flex w-full items-center justify-center overflow-hidden rounded-lg border-2 border-black bg-gradient-to-br
            from-[#000000] via-red-800 to-green-400 p-0.5 text-sm font-medium text-gray-900 shadow-xl transition-transform 
            hover:scale-105 focus:outline-none dark:border-white dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400 md:w-auto"
            style={{ aspectRatio: '16/9' }}
          >
            <Image
              src="/images/home/road-before-optimized.jpeg"
              alt="Road Before Construction"
              width={1024}
              height={576}
              priority={false}
              quality={50}
              className="size-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/50 p-2 text-center text-white">
              Before
            </div>
          </div>
          <div
            className="group relative mb-2 me-2 inline-flex w-full items-center justify-center overflow-hidden rounded-lg border-2 border-black bg-gradient-to-bl
            from-[#000000] via-red-800 to-green-400 p-0.5 text-sm font-medium text-gray-900 shadow-xl transition-transform 
            hover:scale-105 focus:outline-none dark:border-white dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400 md:w-auto"
            style={{ aspectRatio: '16/9' }}
          >
            <Image
              src="/images/home/road-after-optimized.jpeg"
              alt="Road After Construction"
              width={1024}
              height={576}
              priority={false}
              quality={75}
              className="size-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/50 p-2 text-center text-white">
              After
            </div>
          </div>
        </div>
        {/* Contact button to contact-form link */}
        <div
          className={`fixed right-0 top-0 z-50 mr-20 mt-4 transition-transform duration-500 ease-in-out ${
            scrolled &&
            'scale-80 -translate-x-[5vw] translate-y-[0.5vw] rounded-lg'
          }`}
        >
          <button
            type="button"
            className="group absolute right-[7.25%] flex translate-y-[calc(70%+2rem)] items-center gap-2 sm:translate-y-[70%]"
            onClick={() => setIsContactOpen(true)}
            aria-label="Open contact form"
          >
            <span className="hidden text-[34px] font-bold text-red-500 sm:block">
              Contact
            </span>
            <div className="block cursor-pointer rounded-br-[15px] rounded-tr-[5px] border-2 border-black bg-white px-5 py-1 text-center transition-all duration-0 sm:h-[35px]">
              <span className="block text-[14px] font-bold leading-none text-red-500 md:hidden lg:hidden xl:hidden 2xl:hidden">
                Contact
              </span>
              <span className="block text-[18px] font-bold leading-none text-red-500 md:-mt-1">
                Here
              </span>
            </div>
          </button>
        </div>

        {isContactOpen && (
          <div className="fixed right-0 top-0 z-50 mr-20 mt-16">
            <ContactForm onClose={() => setIsContactOpen(false)} />
          </div>
        )}
      </section>
    </>
  );
}
