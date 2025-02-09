'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { Project } from './feat-proj';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="mx-4 overflow-hidden rounded-lg bg-white shadow-2xl
    transition-transform duration-300 hover:scale-105 md:mx-10 dark:bg-gray-800"
    >
      <div className="flex flex-col md:flex-row">
        <div className="shrink-0 md:w-1/3">
          <Image
            src={project.imageUrl || '/placeholder.svg'}
            alt={project.title}
            width={600}
            height={400}
            className="h-48 w-full object-cover md:h-full"
            loading="lazy"
            quality={50}
            sizes="(max-width: 768px) 100vw, 48rem"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-4 md:p-8">
          <div className="text-center text-xs font-semibold uppercase tracking-wide text-indigo-500 md:text-sm">
            Featured
          </div>
          <h3 className="mt-1 text-center text-xl font-bold leading-tight text-gray-900 md:mt-2 md:text-2xl dark:text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-center text-sm text-gray-600 md:mt-4 md:text-base dark:text-white">
            {project.description}
          </p>
          <div className="mt-4 flex justify-center md:mt-6">
            <Link
              href="/projects"
              className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-indigo-700 md:px-6 md:py-3"
              scroll={true}
            >
              View All Projects
            </Link>
          </div>
        </div>
        <div className="shrink-0 md:w-1/3">
          <Image
            src="/images/mobile/snow-removal/jpeg-optimizer_9.jpeg"
            alt="Snow Removal"
            width={600}
            height={400}
            className="h-48 w-full object-cover md:h-full"
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 48rem"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
