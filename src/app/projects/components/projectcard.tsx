import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const firstImage = project.images[0] || '/images/default-project.jpg';

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg dark:bg-neutral-800 lg:hover:scale-[1.03]">
      <Link 
        href={`/projects/${project.id}`}
        className="grow"
        onClick={(e) => {
          e.preventDefault();
          window.history.pushState({}, '', `/projects/${project.id}`);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }}
      >
        <div className="relative h-40 w-full overflow-hidden sm:h-56 lg:h-56 xl:h-56">
          <Image
            src={firstImage.startsWith('/images/') ? firstImage : '/images/default-project.jpg'}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 lg:group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw"
          />
        </div>
        <div className="p-3">
          <h3 className="mb-1 line-clamp-1 text-lg font-semibold text-gray-900 dark:text-neutral-100 sm:mb-2 sm:text-xl lg:text-2xl">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-sm text-gray-600 dark:text-neutral-300 sm:text-base lg:text-lg">
            {project.category}
          </p>
        </div>
      </Link>
      <div className="mt-auto p-3 pt-0 sm:p-4 lg:p-5">
        <Link
          href={`/projects/${project.id}`}
          className="inline-block w-full rounded-md bg-red-500 px-3 py-1.5 text-center text-xs font-medium text-white transition-colors hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 sm:px-4 sm:py-2 sm:text-sm lg:px-5 lg:py-2.5 lg:text-base"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}
