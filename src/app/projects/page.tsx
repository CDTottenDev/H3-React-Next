'use client';

import { useEffect, useState } from 'react';
import { ProjectCard } from './components/projectcard';
import { getProjects } from '@/lib/db';
import { Project } from '@/types/project';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(projects.flatMap(p => p.category.split(', '))));

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        selectedCategories.some(cat => project.category.includes(cat))
      ));
    }
  }, [selectedCategories, projects]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        console.log('Loaded projects:', data);
        // Sort projects in ascending order (A to Z)
        const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
        setProjects(sortedData);
        setFilteredProjects(sortedData);
      } catch (err) {
        console.error('Failed to load projects:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex px-16">
      {/* Filter Sidebar */}
      <div className="w-64 p-4 fixed bg-gray-200 shadow-lg top-1/2 -translate-y-1/2">
        <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
        <div className="space-y-2 max-h-[calc(100vh-10rem)] overflow-y-auto">
          {categories.map(category => (
            <div 
              key={category}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => handleCategoryToggle(category)}
            >
              <div className={`h-5 w-5 rounded-full border-2 transition-all duration-200
                ${selectedCategories.includes(category) 
                  ? 'border-red-600 bg-red-600 shadow-inner' 
                  : 'border-gray-300 bg-white hover:border-red-400'}
              `}>
                {selectedCategories.includes(category) && (
                  <svg 
                    className="w-full h-full text-white p-0.5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="select-none">{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="ml-64 flex-1 mt-28">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
