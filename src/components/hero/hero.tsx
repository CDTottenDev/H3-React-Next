/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-[#cccccc] dark:bg-neutral-950">
      {/* Content */}
      <div className="relative z-10 mx-auto mt-40 max-w-4xl px-4 text-center text-white dark:text-neutral-50">
        <h1 className="mb-6 text-4xl font-bold text-black md:text-6xl dark:text-neutral-50 ">
          Cut <em className="text-[64px] font-bold text-red-500">Above</em> the
          Rest
        </h1>
        <p className="flex flex-col items-center justify-center gap-2 text-xl text-gray-200 md:flex-row md:text-2xl dark:text-neutral-50">
          <span className="text-black dark:text-neutral-50">
            <em className="text-[32px] font-bold text-red-500">Your</em> ground,{' '}
            <em className="text-[32px] font-bold text-red-500">Our</em>{' '}
            expertise, Endless possibilities
          </span>
        </p>
      </div>

      {/* CTA Button - Moved to top left */}
      <div className="absolute left-1/4 top-8 z-50">
        <div className="relative">
          <Link href="#featured-projects">
            <Image
              src="/images/custom-SVG-CTA-button-H3-01.svg"
              alt="CTA Button"
              width={300}
              height={300}
              className="mx-auto cursor-pointer transition-transform duration-300 hover:scale-105"
            />
            <p className="absolute -inset-0 z-10 ml-6 flex -translate-y-12 items-center justify-center text-center text-black dark:text-neutral-50">
              <em className="animate-pulse text-[24px] font-bold text-red-500">
                <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                  CLICK HERE!
                </span>
                <br />
                <span className="text-[20px] font-extrabold leading-none text-black drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                  <span className="text-[20px] text-red-500">
                    SNOW&apos;S HERE!
                  </span>
                  <br />
                  SNOW REMOVAL
                </span>
              </em>
            </p>
          </Link>
        </div>
      </div>

      {/* Before/After Images */}
      <div className="relative z-10 mx-auto mt-20 flex max-w-6xl flex-row items-center justify-center gap-4 px-4 md:flex-row md:gap-8">
        <div
          className="group relative mb-2 me-2 inline-flex w-full items-center justify-center overflow-hidden rounded-lg border-2 border-black bg-gradient-to-br
        from-[#000000] via-red-800 to-green-400 p-0.5 text-sm font-medium text-gray-900 shadow-xl transition-transform 
        hover:scale-105 focus:outline-none md:w-auto dark:border-white dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
        >
          <Image
            src="/images/home/road-before-optimized.jpeg"
            alt="Road Before Construction"
            width={1024}
            height={901}
            priority
            quality={75}
            className="h-[50vh] w-full object-cover md:h-[70vh]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/50 p-2 text-center text-white">
            Before
          </div>
        </div>
        <div
          className="group relative mb-2 me-2 inline-flex w-full items-center justify-center overflow-hidden rounded-lg border-2 border-black bg-gradient-to-bl
        from-[#000000] via-red-800 to-green-400 p-0.5 text-sm font-medium text-gray-900 shadow-xl transition-transform 
        hover:scale-105 focus:outline-none md:w-auto dark:border-white dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
        >
          <Image
            src="/images/home/road-after-optimized.jpeg"
            alt="Road After Construction"
            width={1024}
            height={901}
            priority
            quality={75}
            className="h-[50vh] w-full object-cover md:h-[70vh] "
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/50 p-2 text-center text-white">
            After
          </div>
        </div>
      </div>
      {/* Contact button to contact-form link */}
      <div
        className={`fixed right-0 top-0 z-50 mr-20 mt-4 ${
          scrolled
            ? 'scale-x-80 translate-x-[-5vw] translate-y-[0.5vw] rounded-lg transition-all delay-75 duration-500 ease-in-out'
            : 'transition-all duration-500 ease-in-out'
        }`}
      >
        <button
          type="button"
          className="group absolute right-[7.25%] flex translate-y-[70%] items-center gap-2"
          onClick={() => setIsContactOpen(true)}
          aria-label="Open contact form"
        >
          <span className="text-[34px] font-bold text-[rgb(233,23,23)]">
            Contact
          </span>
          <span
            className="block h-[35px] cursor-pointer
          rounded-br-[15px] rounded-tr-[5px]
          border-2
          border-black
          bg-white px-5 py-1
          text-center text-[18px] font-bold
          text-[rgb(233,23,23)] transition-all
          duration-0"
          >
            Here
          </span>
        </button>
      </div>

      {isContactOpen && (
        <div className="fixed right-0 top-0 z-50 mr-20 mt-16">
          <ContactForm onClose={() => setIsContactOpen(false)} />
        </div>
      )}
    </section>
  );
}
