import Image from 'next/image';

export default function About() {
  return (
    <div id="about">
      <div className="bg-gray-100 dark:bg-black/65">
        <div className="flex flex-col md:flex-row">
          <div className="mb-[5%] flex w-full flex-col items-center justify-center p-4 md:w-1/2 md:p-20">
            <h2 className="my-[10%] text-center text-3xl font-bold text-gray-900 dark:text-white md:my-[15%] md:text-4xl">
              About H3 Construction
            </h2>
            <div className="hover:shadow-3xl w-full rounded-xl bg-white/50 p-4 shadow-2xl backdrop-blur-sm transition-all duration-300 dark:bg-gray-800/50 md:p-8">
              <p className="text-center text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
                At <em className="font-bold text-red-500">H3</em> Excavation and
                Construction , we&apos;re all about laying the groundwork to
                enhance your property. With{' '}
                <em className="font-medium text-gray-900 dark:text-gray-100">
                  15
                </em>{' '}
                years of hands-on experience and{' '}
                <em className="font-medium text-gray-900 dark:text-gray-100">
                  5
                </em>{' '}
                years steering our own business, we understand what it takes to
                get your job done right. From{' '}
                <em className="font-medium text-gray-900 dark:text-gray-100">
                  grading
                </em>{' '}
                and{' '}
                <em className="font-medium text-gray-900 dark:text-gray-100">
                  sloping
                </em>{' '}
                to{' '}
                <em className="font-medium text-gray-900 dark:text-gray-100">
                  trenching
                </em>{' '}
                and complete
                <em className="font-medium text-gray-900 dark:text-gray-100">
                  septic system
                </em>{' '}
                installations, we&apos;ve got your excavation needs covered. As
                a DEQ-certified company, you can trust that your septic work
                will be done properly and up to code. We keep things simple:
                <em className="font-medium text-gray-900 underline decoration-red-500 dark:text-gray-100">
                  quality work
                </em>
                ,{' '}
                <em className="font-medium text-gray-900 underline decoration-red-500 dark:text-gray-100">
                  fair prices
                </em>
                , and{' '}
                <em className="font-medium text-gray-900 underline decoration-red-500 dark:text-gray-100">
                  clear communication
                </em>
                . When you choose H3, you&apos;re partnering with a team that
                cares about getting your project done right the first time. Let
                us help build the foundation for your next project.
              </p>
            </div>
            <ul className="mt-6 w-full space-y-2 rounded-lg bg-white/50 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:bg-gray-800/50 md:mt-8 md:p-6">
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-400 md:text-base">
                <svg
                  className="mr-2 size-4 text-green-500 md:size-5"
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
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-400 md:text-base">
                <svg
                  className="mr-2 size-4 text-green-500 md:size-5"
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
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-400 md:text-base">
                <svg
                  className="mr-2 size-4 text-green-500 md:size-5"
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
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-400 md:text-base">
                <svg
                  className="mr-2 size-4 text-green-500 md:size-5"
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
          <div className="hidden w-full p-4 md:block md:w-1/2 md:p-20">
            <Image
              src="/images/home/about-excavator.jpeg"
              alt="About H3 Construction"
              width={500}
              height={500}
              loading="lazy"
              quality={50}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
