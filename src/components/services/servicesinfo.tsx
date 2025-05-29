'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

interface ServicesInfoProps {
  id?: string;
}

export function ServicesInfo({ id }: ServicesInfoProps) {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Define tooltip content for each service with detailed, SEO-friendly descriptions
  const tooltipContent = [
    'Expert residential excavation services in Central Oregon. We specialize in custom home site preparation, including precise grading, foundation excavation, and comprehensive drainage systems. Our experienced team ensures your residential project is completed with the highest standards of quality and safety.',
    'Professional commercial excavation services throughout Central Oregon. From large-scale site preparation to complex grading projects, we deliver efficient and reliable solutions for businesses of all sizes. Our state-of-the-art equipment and skilled operators ensure your commercial project stays on schedule and within budget.',
    'Comprehensive excavation services for all your needs. Our experienced team handles everything from land clearing and grading to foundation digging and precise earthwork. We serve Bend, Redmond, Sisters, and surrounding areas with professional excavation solutions tailored to your specific requirements.',
    'Complete utility trenching services in Central Oregon. We specialize in water, sewer, electrical, and communications line installation. Our team uses advanced equipment and techniques to ensure precise, efficient, and safe trenching for all your utility needs.',
    'DEQ certified septic system installation and repair services. We handle all aspects of septic system work, from initial design and installation to maintenance and repairs. Our expertise ensures your septic system meets all regulatory requirements and operates efficiently.',
    'Full-service construction and contracting solutions. From land preparation to concrete work and project management, we provide comprehensive construction services. Our experienced team ensures quality workmanship and timely completion of your project.',
  ];

  const handleMouseEnter = useCallback((index: number, event: React.MouseEvent) => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const tooltipHeight = 200; // Approximate height of tooltip
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.top;
    const spaceAbove = rect.top;

    // Calculate position to ensure tooltip stays within viewport
    let top = rect.top;
    if (spaceBelow < tooltipHeight && spaceAbove > tooltipHeight) {
      // If not enough space below but enough space above, show above
      top = rect.top - tooltipHeight - 10;
    } else {
      // Show below with some padding
      top = rect.top + rect.height + 10;
    }

    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: top,
    });

    tooltipTimeoutRef.current = setTimeout(() => {
      setActiveTooltip(index);
    }, 100); // Small delay to prevent flickering
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    tooltipTimeoutRef.current = setTimeout(() => {
      setActiveTooltip(null);
    }, 100);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      className="scroll-mt-[15vh] bg-[#cccccc] py-20 dark:bg-black/65"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Professional Excavation & Construction Services in Central Oregon
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 dark:text-gray-300">
            Serving Bend, Redmond, Sisters, and surrounding areas with expert excavation and construction services. 
            From residential site preparation to commercial development, we deliver quality results you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Residential Construction */}
          <div
            className="relative cursor-pointer rounded-lg bg-gray-50 p-8 transition-transform hover:scale-105 dark:bg-gray-800"
            onMouseEnter={(e) => handleMouseEnter(0, e)}
            onMouseLeave={handleMouseLeave}
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
            <h2 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Residential Construction
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Custom home site preparation and excavation services in Central Oregon
            </p>
          </div>

          {/* Commercial Construction */}
          <div
            className="relative cursor-pointer rounded-lg bg-gray-50 p-8 transition-transform hover:scale-105 dark:bg-gray-800"
            onMouseEnter={(e) => handleMouseEnter(1, e)}
            onMouseLeave={handleMouseLeave}
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
            <h2 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Commercial Construction
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Professional commercial excavation and construction services in Bend and Central Oregon
            </p>
          </div>

          {/* Excavation Services */}
          <div
            className="relative cursor-pointer rounded-lg bg-gray-50 p-8 transition-transform hover:scale-105 dark:bg-gray-800"
            onMouseEnter={(e) => handleMouseEnter(2, e)}
            onMouseLeave={handleMouseLeave}
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
            <h2 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Excavation Services
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Comprehensive excavation and earthwork services throughout Central Oregon
            </p>
          </div>

          {/* Utility Trenching */}
          <div
            className="relative cursor-pointer rounded-lg bg-gray-50 p-8 transition-transform hover:scale-105 dark:bg-gray-800"
            onMouseEnter={(e) => handleMouseEnter(3, e)}
            onMouseLeave={handleMouseLeave}
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
            <h2 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Utility Trenching
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Professional utility trenching services for water, sewer, and electrical lines
            </p>
          </div>

          {/* Septic Systems */}
          <div
            className="relative cursor-pointer rounded-lg bg-gray-50 p-8 transition-transform hover:scale-105 dark:bg-gray-800"
            onMouseEnter={(e) => handleMouseEnter(4, e)}
            onMouseLeave={handleMouseLeave}
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
            <h2 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Septic Systems
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400">
              DEQ certified septic system installation and repair services
            </p>
          </div>

          {/* Land Development */}
          <div
            className="relative cursor-pointer rounded-lg bg-gray-50 p-8 transition-transform hover:scale-105 dark:bg-gray-800"
            onMouseEnter={(e) => handleMouseEnter(5, e)}
            onMouseLeave={handleMouseLeave}
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
            <h2 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Land Development
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Complete land development and site preparation services in Central Oregon
            </p>
          </div>
        </div>

        {activeTooltip !== null && (
          <div
            ref={tooltipRef}
            className="fixed z-50 max-w-md rounded-lg bg-white p-4 shadow-lg transition-opacity duration-200 dark:bg-gray-800"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              transform: 'translateX(-50%)',
              pointerEvents: 'none', // Prevent tooltip from interfering with mouse events
            }}
          >
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {tooltipContent[activeTooltip]}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
