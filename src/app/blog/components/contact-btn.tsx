"use client"

import { useState, useEffect } from "react"
import { ContactForm } from "@/components/contact/contact-form"

interface ContactButtonProps {
  className?: string;
  buttonText?: {
    contact?: string;
    here?: string;
  };
  position?: {
    right?: string;
    top?: string;
  };
}

export const ContactButton = ({
  className = "",
  buttonText = {
    contact: "Contact",
    here: "Here"
  },
  position = {
    right: "mr-20",
    top: "mt-4"
  }
}: ContactButtonProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed right-0 top-0 z-10 ${position.right} ${position.top} transition-transform duration-500 ease-in-out md:z-[1000] ${
          scrolled &&
          'scale-80 -translate-x-[5vw] translate-y-[0.5vw] rounded-lg'
        } ${className}`}
        style={{ isolation: 'isolate' }}
      >
        <button
          type="button"
          className="group absolute right-[7.25%] flex translate-y-[calc(70%+2rem)] items-center gap-2 sm:translate-y-[70%]"
          onClick={() => setIsContactOpen(true)}
          aria-label="Open contact form"
        >
          <span className="hidden text-[34px] font-bold text-red-500 sm:block">
            {buttonText.contact}
          </span>
          <div className="block cursor-pointer rounded-br-[15px] rounded-tr-[5px] border-2 border-black bg-white px-5 py-1 text-center transition-all duration-0 sm:h-[35px]">
            <span className="block text-[14px] font-bold leading-none text-red-500 md:hidden lg:hidden xl:hidden 2xl:hidden">
              {buttonText.contact}
            </span>
            <span className="block text-[18px] font-bold leading-none text-red-500 md:-mt-1">
              {buttonText.here}
            </span>
          </div>
        </button>
      </div>

      {isContactOpen && (
        <div className="fixed right-0 top-0 z-[1000] mr-20 mt-16">
          <ContactForm onClose={() => setIsContactOpen(false)} />
        </div>
      )}
    </>
  )
}