'use client';

import { useState } from 'react';

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

  const filteredProjects = projects
    .sort((a, b) => a.title.localeCompare(b.title))
    .filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === 'All' ||
          project.category.split(', ').includes(selectedCategory))
    );

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 p-4">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-col space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-md px-4 py-2 text-left text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
