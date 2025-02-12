import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const firstImage = project.images[0] || '/images/default-project.jpg';

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg dark:bg-gray-900 lg:hover:scale-[1.03]">
      <Link 
        href={`/projects/${project.id}`}
        className="grow"
        onClick={(e) => {
          e.preventDefault();
          window.history.pushState({}, '', `/projects/${project.id}`);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }}
      >
        <div className="relative h-32 w-full overflow-hidden sm:h-40 lg:h-40 xl:h-40">
          <Image
            src={firstImage.startsWith('/images/') ? firstImage : '/images/default-project.jpg'}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 lg:group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw"
          />
        </div>
        <div className="p-2">
          <h3 className="mb-1 line-clamp-1 text-base font-semibold text-gray-800 dark:text-gray-100 sm:mb-1 sm:text-lg lg:text-xl">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-xs text-gray-600 dark:text-gray-300 sm:text-sm lg:text-base">
            {project.category}
          </p>
        </div>
      </Link>
      <div className="mt-auto p-2 pt-0 sm:p-3 lg:p-4">
        <Link
          href={`/projects/${project.id}`}
          className="inline-block w-full rounded-md bg-red-600/85 px-3 py-1 text-center text-xs font-medium text-white transition-colors hover:bg-red-600/50 dark:bg-red-600/35 dark:hover:bg-red-600/50 sm:px-3 sm:py-1.5 sm:text-sm lg:px-4 lg:py-2 lg:text-base"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}
