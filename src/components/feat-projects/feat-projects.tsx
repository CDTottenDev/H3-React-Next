import { featuredProject } from './feat-proj';
import ProjectCard from './feat-proj-card';

export default function FeaturedProjects() {
  return (
    <div className="bg-gradient-to-br from-[#cccccc] via-[#b6ceba] to-[#cccccc] py-8 sm:py-12 md:py-16 dark:from-gray-900 dark:via-[#ff2b2b6c] dark:to-gray-950">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-2xl font-bold text-black sm:mb-6 sm:text-3xl md:mb-8 md:text-4xl dark:text-white">
          Featured Project
        </h2>
        <ProjectCard project={featuredProject} />
      </div>
    </div>
  );
}
