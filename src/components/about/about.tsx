import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row">
        <div className="mb-[5%] flex w-1/2 flex-col items-center justify-center p-20">
          <h2 className="mb-[35%] text-center text-4xl font-bold text-gray-900 dark:text-white">
            About H3 Construction
          </h2>
          <div className="hover:shadow-3xl rounded-xl bg-white/50 p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 dark:bg-gray-800/50">
            <p className="text-center text-lg leading-8 text-gray-600 dark:text-gray-400">
              At{' '}
              <em className="text-black dark:text-white">
                <em className="font-bold text-red-500">H3</em> Excavation and
                Construction
              </em>
              , we&apos;re all about laying the groundwork to enhance your
              property. With <em className="text-black dark:text-white">15</em>{' '}
              years of hands-on experience and{' '}
              <em className="text-black dark:text-white">5</em> years steering
              our own business, we understand what it takes to get your job done
              right. From{' '}
              <em className="text-black dark:text-white">grading</em> and{' '}
              <em className="text-black dark:text-white">sloping</em> to{' '}
              <em className="text-black dark:text-white">trenching</em> and
              complete
              <em className="text-black dark:text-white">septic system</em>{' '}
              installations, we&apos;ve got your excavation needs covered. As a
              DEQ-certified company, you can trust that your septic work will be
              done properly and up to code. We keep things simple:
              <em className="text-black underline decoration-red-500 dark:text-white">
                quality work
              </em>
              ,{' '}
              <em className="text-black underline decoration-red-500 dark:text-white">
                fair prices
              </em>
              , and{' '}
              <em className="text-black underline decoration-red-500 dark:text-white">
                clear communication
              </em>
              . When you choose H3, you&apos;re partnering with a team that
              cares about getting your project done right the first time. Let us
              help build the foundation for your next project.
            </p>
          </div>
          <ul className="mt-8 space-y-2 rounded-lg bg-white/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:bg-gray-800/50">
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg
                className="mr-2 size-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Licensed and Insured
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg
                className="mr-2 size-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Experienced Team
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg
                className="mr-2 size-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Quality Service
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg
                className="mr-2 size-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Punctual / Dependable
            </li>
          </ul>
        </div>
        <div className="w-1/2 p-20">
          <Image
            src="/images/home/about-excavator.jpeg"
            alt="About H3 Construction"
            width={500}
            height={500}
            loading="lazy"
            quality={75}
          />
        </div>
      </div>
    </div>
  );
}
