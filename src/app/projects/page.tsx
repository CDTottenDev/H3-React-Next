'use client';

import { useMemo, useState } from 'react';

import ProjectCard from './components/projectcard';

const projects = [
  {
    id: 1,
    title: 'Pinecrest',
    category: 'Septic Systems',
    dateCompleted: '2024-01-01',
    location: 'Redmond, OR',
    image: '/images/mobile/pinecrest/jpeg-optimizer_1.6.jpeg',
  },
  {
    id: 2,
    title: 'Cedar Code',
    category:
      'Excavation & EarthWork, Concrete & Flatwork, Road & Site Development',
    dateCompleted: '2024-01-01',
    location: 'La Pine, OR',
    image: '/images/mobile/cedar-code/jpeg-optimizer_1.11.jpg',
  },
  {
    id: 3,
    title: 'Summit Site',
    category: 'Excavation & EarthWork',
    dateCompleted: '2024-01-01',
    location: 'Prineville, OR',
    image: '/images/mobile/summit-site/jpeg-optimizer_1.1.jpeg',
  },
  {
    id: 4,
    title: 'River Flow',
    category: 'Excavation & EarthWork, Concrete & Flatwork',
    dateCompleted: '2024-01-01',
    location: 'Redmond, OR',
    image: '/images/mobile/riverflow/jpeg-optimizer_1.1.jpeg',
  },
  {
    id: 5,
    title: 'Mountain Peak',
    category:
      'Excavation & EarthWork, Concrete & Flatwork, Road & Site Development',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/mountain-peak/jpeg-optimizer_10.jpeg',
  },
  {
    id: 6,
    title: 'Golden Sands',
    category: 'Excavation & EarthWork, Road & Site Development',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/golden-sands/jpeg-optimizer_6.3.jpeg',
  },
  {
    id: 7,
    title: 'Silver Brook',
    category: 'Excavation & EarthWork, Concrete & Flatwork',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/silver-brook/jpeg-optimizer_8.jpeg',
  },
  {
    id: 8,
    title: 'Sunrise Canyon',
    category: 'Excavation & EarthWork, Road & Site Development',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/sunrise-canyon/jpeg-optimizer_5.jpeg',
  },
  {
    id: 9,
    title: 'Azure Bay',
    category:
      'Excavation & EarthWork, Concrete & Flatwork, Custom Land Development, Septic Systems, Road & Site Development',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/azure-bay/jpeg-optimizer_1.4.jpeg',
  },
  {
    id: 10,
    title: 'Amber Field',
    category: 'Excavation & EarthWork, Septic Systems',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/amber-field/jpeg-optimizer_2.jpeg',
  },
  {
    id: 11,
    title: 'Cobalt Tides',
    category: 'Excavation & EarthWork, Road & Site Development',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/cobalt-tides/jpeg-optimizer_2.jpg',
  },
  {
    id: 12,
    title: 'Midnight Forest',
    category: 'Excavation & EarthWork, Septic Systems',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/midnight-forest/jpeg-optimizer_7.jpeg',
  },
  {
    id: 13,
    title: 'Snow Extermination',
    category: 'Snow & Seasonal',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/snow-removal/jpeg-optimizer_2.jpeg',
  },
  {
    id: 14,
    title: 'Frosted Meadow',
    category: 'Excavation & EarthWork, Road & Site Development',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/frosted-meadow/jpeg-optimizer_2.jpeg',
  },
  {
    id: 15,
    title: 'Obsidian Bluff',
    category: 'Excavation & EarthWork, Concrete & Flatwork',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/obsidian-bluff/jpeg-optimizer_1.jpeg',
  },
  {
    id: 16,
    title: 'Fern Glade',
    category:
      'Excavation & EarthWork, Concrete & Flatwork, Custom Land Development, Septic Systems, Road & Site Development',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/fern-glade/jpeg-optimizer_3.jpeg',
  },
  {
    id: 17,
    title: 'Road & Site Development',
    category: 'Road & Site Development',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/road-projects/jpeg-optimizer_5.1.jpeg',
  },
  {
    id: 18,
    title: 'Concrete & Flatwork',
    category: 'Concrete & Flatwork',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/concrete-projects/jpeg-optimizer_1.jpeg',
  },
  {
    id: 19,
    title: 'Other Projects',
    category:
      'Excavation & EarthWork, Concrete & Flatwork, Custom Land Development, Septic Systems, Road & Site Development',
    dateCompleted: '2024-01-01',
    location: 'Bend, OR',
    image: '/images/mobile/other-projects/jpeg-optimizer_17.jpg',
  },
];

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
    [searchTerm, selectedCategory]
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
