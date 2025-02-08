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
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 line-clamp-1 text-xl font-semibold text-gray-900">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-gray-600">{project.category}</p>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <Link
          href={`/projects/${project.id}`}
          className="inline-block rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}
