'use client';

import { useState } from 'react';

interface ServicesInfoProps {
  id?: string;
}

export function ServicesInfo({ id }: ServicesInfoProps) {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Define tooltip content for each service
  const tooltipContent = [
    'We specialize in preparing home sites for new construction, including grading, foundation preparation, and drainage systems.',
    'From site preparation to final grading, we handle commercial projects of all sizes with precision and professionalism.',
    'Our excavation services include land clearing, grading, foundation digging, and precise earthwork for any project size.',
    'Complete utility trenching services including water, sewer, electrical, and communications line installation.',
    'Full-service septic system installation and repair, fully certified and compliant with DEQ standards.',
    'Comprehensive contracting services including land preparation, concrete work, and project management.',
  ];

  const handleMouseEnter = (index: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
    setActiveTooltip(index);
  };

  return (
    <section
      id={id}
      className="scroll-mt-[15vh] bg-[#cccccc] py-20 dark:bg-black/65"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Residential Construction */}
          <div
            className="relative cursor-pointer rounded-lg bg-gray-50 p-8 transition-transform hover:scale-105 dark:bg-gray-800"
            onMouseEnter={(e) => handleMouseEnter(0, e)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-12 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Residential Construction
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Custom home site prep tailored to your vision
            </p>
          </div>

          {/* Commercial Construction */}
          <div
            className="relative cursor-pointer rounded-lg bg-gray-50 p-8 transition-transform hover:scale-105 dark:bg-gray-800"
            onMouseEnter={(e) => handleMouseEnter(1, e)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-12 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Commercial Construction
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Professional building solutions for businesses
            </p>
          </div>

          {/* Excavation */}
          <div
            className="relative cursor-pointer rounded-lg bg-gray-50 p-8 transition-transform hover:scale-105 dark:bg-gray-800"
            onMouseEnter={(e) => handleMouseEnter(2, e)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-12 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Excavation
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Site preparation and earthwork services
            </p>
          </div>

          {/* Trenching */}
          <div
            className="relative cursor-pointer rounded-lg bg-gray-50 p-8 transition-transform hover:scale-105 dark:bg-gray-800"
            onMouseEnter={(e) => handleMouseEnter(3, e)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-12 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Trenching
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              All phases of utility
            </p>
          </div>

          {/* Septic Systems */}
          <div
            className="relative cursor-pointer rounded-lg bg-gray-50 p-8 transition-transform hover:scale-105 dark:bg-gray-800"
            onMouseEnter={(e) => handleMouseEnter(4, e)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-12 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Septic Systems
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              DEQ certified for all your septic needs
            </p>
          </div>

          {/* General Contracting */}
          <div
            className="relative cursor-pointer rounded-lg bg-gray-50 p-8 transition-transform hover:scale-105 dark:bg-gray-800"
            onMouseEnter={(e) => handleMouseEnter(5, e)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-12 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              General Contracting
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Land clearing, concrete flatwork, and more
            </p>
          </div>
        </div>

        {activeTooltip !== null && (
          <div
            className="fixed z-50 mt-[-10px] max-w-xs -translate-x-1/2 -translate-y-full rounded-lg bg-gray-900 p-4 text-white shadow-lg"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
            }}
          >
            {tooltipContent[activeTooltip]}
          </div>
        )}
      </div>
    </section>
  );
}
