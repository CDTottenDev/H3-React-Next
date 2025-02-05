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
      className="mx-10 overflow-hidden rounded-lg bg-white shadow-2xl
    transition-transform duration-300 hover:scale-105 dark:bg-gray-800"
    >
      <div className="flex">
        <div className="shrink-0">
          <Image
            src={project.imageUrl || '/placeholder.svg'}
            alt={project.title}
            width={600}
            height={400}
            className="h-48 w-full object-cover md:h-full md:w-48"
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 48rem"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-8">
          <div className="text-center text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Featured
          </div>
          <h3 className="mt-2 text-center text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-4 text-center text-gray-600 dark:text-white">
            {project.description}
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/projects"
              className="inline-block rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-colors duration-300 hover:bg-indigo-700"
              scroll={true}
            >
              View All Projects
            </Link>
          </div>
        </div>
        <div className="shrink-0">
          <Image
            src="/images/mobile/snow-removal/jpeg-optimizer_9.jpeg"
            alt="Snow Removal"
            width={600}
            height={400}
            className="h-48 w-full object-cover md:h-full md:w-48"
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
