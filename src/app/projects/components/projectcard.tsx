import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    image: string;
    category: string;
  };
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
      <Link href={`/projects/${project.id}`}>
        <div className="relative h-40 w-full overflow-hidden sm:h-56">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="mb-1 line-clamp-1 text-lg font-semibold text-gray-900 sm:mb-2 sm:text-xl">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-sm text-gray-600 sm:text-base">
            {project.category}
          </p>
        </div>
      </Link>
      <div className="p-3 pt-0 sm:p-4">
        <Link
          href={`/projects/${project.id}`}
          className="inline-block rounded-md bg-red-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-red-600 sm:px-4 sm:py-2 sm:text-sm"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}
