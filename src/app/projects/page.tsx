'use client';

import { useEffect, useMemo, useState } from 'react';

import ProjectCard from './components/projectcard';

import { getProjects } from '@/lib/db';
import { Project } from '@/types/project';
const categories = [
  'All',
  'Excavation & EarthWork',
  'Septic Systems',
  'Concrete & Flatwork',
  'Road & Site Development',
  'Custom Land Development',
  'Snow & Seasonal',
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  // Load projects on component mount
  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        // Ensure all projects have valid images
        const validatedProjects = data.map(project => ({
          ...project,
          images: project.images.map(img => img.startsWith('/images/') ? img : '/images/default-project.jpg')
        }));
        setProjects(validatedProjects);
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects([]);
      }
    }
    
    // Add this to handle route changes
    const handleRouteChange = () => {
      loadProjects();
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const filteredProjects = useMemo(
    () =>
      projects
        .sort((a, b) => a.title.localeCompare(b.title))
        .filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === 'All' ||
              project.category.split(', ').includes(selectedCategory))
        ),
    [searchTerm, selectedCategory, projects]
  );

  return (
    <div className="flex rounded-lg px-4 dark:bg-black/65 sm:px-8 md:px-12 lg:px-[10vw] xl:px-[10vw] 2xl:px-[20vw]">
      {/* Sidebar Toggle Button - Mobile Only */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed left-0 top-1/2 z-20 h-10 w-6 -translate-y-1/2 rounded-r-md bg-red-500 text-white shadow-lg hover:bg-red-600 sm:hidden"
      >
        {isSidebarOpen ? '<' : '>'}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed z-10 h-screen w-64 border-r border-red-800/30 bg-white p-4 pt-24 transition-transform duration-300 dark:border-red-800/50 dark:bg-neutral-900 sm:sticky sm:top-0 sm:h-screen sm:overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-400 dark:focus:ring-blue-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-col space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-md px-4 py-2 text-left text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white dark:bg-red-700 dark:text-neutral-100'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 gap-6 pt-24 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
