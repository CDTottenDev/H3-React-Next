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
    <Link
      href={`/projects/${project.id}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="aspect-w-16 aspect-h-9">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={225}
          className="size-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          {project.title}
        </h3>
        <p className="text-gray-600">{project.category}</p>
      </div>
    </Link>
  );
}
