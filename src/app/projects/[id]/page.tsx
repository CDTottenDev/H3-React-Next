'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock data for project details
const projectDetails: Record<
  string,
  {
    title: string;
    category: string;
    description: string;
    images: string[];
    location: string;
    dateCompleted: string;
  }
> = {
  '1': {
    title: 'Pinecrest',
    category: 'Septic Systems',
    description: 'A comprehensive septic system removal and installation.',
    images: [
      '/images/desktop/pinecrest/jpeg-optimizer_1.1.jpeg',
      '/images/desktop/pinecrest/jpeg-optimizer_1.2.jpeg',
      '/images/desktop/pinecrest/jpeg-optimizer_1.3.jpeg',
      '/images/desktop/pinecrest/jpeg-optimizer_1.4.jpeg',
      '/images/desktop/pinecrest/jpeg-optimizer_1.5.jpeg',
      '/images/desktop/pinecrest/jpeg-optimizer_1.6.jpeg',
      '/images/desktop/pinecrest/jpeg-optimizer_1.7.jpeg',
      '/images/desktop/pinecrest/jpeg-optimizer_1.8.jpeg',
      '/images/desktop/pinecrest/jpeg-optimizer_1.9.jpeg',
      '/images/desktop/pinecrest/jpeg-optimizer_1.65.jpeg',
    ],
    location: 'Redmond, OR',
    dateCompleted: '2024-01-01',
  },
  '2': {
    title: 'Cedar Code',
    category:
      'Excavation & EarthWork, Concrete & Flatwork, Road & Site Development',
    description:
      'A comprehensive excavation and earthwork project, including concrete and flatwork, and road and site development.',
    images: [
      '/images/desktop/cedar-code/jpeg-optimizer_1.1.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_1.2.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_1.3.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_1.4.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_1.5.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_1.6.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_1.7.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_1.8.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_1.9.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_1.10.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_1.11.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_1.75.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_2.jpeg',
      '/images/desktop/cedar-code/jpeg-optimizer_3.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '3': {
    title: 'Summit Site',
    category: 'Excavation & EarthWork',
    description: 'A comprehensive excavation and earthwork project.',
    images: [
      '/images/desktop/summit-site/jpeg-optimizer_1.1.jpeg',
      '/images/desktop/summit-site/jpeg-optimizer_1.2.jpeg',
      '/images/desktop/summit-site/jpeg-optimizer_1.3.jpeg',
      '/images/desktop/summit-site/jpeg-optimizer_1.4.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '4': {
    title: 'River Flow',
    category: 'Excavation & EarthWork, Concrete & Flatwork',
    description:
      'A comprehensive excavation and earthwork project, including concrete and flatwork.',
    images: [
      '/images/desktop/riverflow/jpeg-optimizer_1.1.jpeg',
      '/images/desktop/riverflow/jpeg-optimizer_1.2.jpeg',
      '/images/desktop/riverflow/jpeg-optimizer_1.3.jpeg',
      '/images/desktop/riverflow/jpeg-optimizer_1.4.jpeg',
      '/images/desktop/riverflow/jpeg-optimizer_1.5.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '5': {
    title: 'Mountain Peak',
    category:
      'Excavation & EarthWork, Concrete & Flatwork, Road & Site Development',
    description:
      'A comprehensive project involving excavation, concrete work, and site development.',
    images: [
      '/images/desktop/mountain-peak/jpeg-optimizer_1.jpeg',
      '/images/desktop/mountain-peak/jpeg-optimizer_2.jpeg',
      '/images/desktop/mountain-peak/jpeg-optimizer_3.jpeg',
      '/images/desktop/mountain-peak/jpeg-optimizer_4.jpeg',
      '/images/desktop/mountain-peak/jpeg-optimizer_5.8.jpeg',
      '/images/desktop/mountain-peak/jpeg-optimizer_5.jpeg',
      '/images/desktop/mountain-peak/jpeg-optimizer_6.jpeg',
      '/images/desktop/mountain-peak/jpeg-optimizer_7.jpeg',
      '/images/desktop/mountain-peak/jpeg-optimizer_9.jpeg',
      '/images/desktop/mountain-peak/jpeg-optimizer_10.jpeg',
      '/images/desktop/mountain-peak/jpeg-optimizer_11.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '6': {
    title: 'Golden Sands',
    category: 'Excavation & EarthWork, Road & Site Development',
    description: 'Excavation and road development project in a sandy terrain.',
    images: [
      '/images/desktop/golden-sands/jpeg-optimizer_1.jpeg',
      '/images/desktop/golden-sands/jpeg-optimizer_2.jpeg',
      '/images/desktop/golden-sands/jpeg-optimizer_6.3.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '7': {
    title: 'Silver Brook',
    category: 'Excavation & EarthWork, Concrete & Flatwork',
    description: 'Excavation and concrete flatwork project near a brook.',
    images: [
      '/images/desktop/silver-brook/jpeg-optimizer_1.jpeg',
      '/images/desktop/silver-brook/jpeg-optimizer_2.jpeg',
      '/images/desktop/silver-brook/jpeg-optimizer_3.jpeg',
      '/images/desktop/silver-brook/jpeg-optimizer_4.jpeg',
      '/images/desktop/silver-brook/jpeg-optimizer_5.jpeg',
      '/images/desktop/silver-brook/jpeg-optimizer_6.jpeg',
      '/images/desktop/silver-brook/jpeg-optimizer_7.jpeg',
      '/images/desktop/silver-brook/jpeg-optimizer_8.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '8': {
    title: 'Sunrise Canyon',
    category: 'Excavation & EarthWork, Road & Site Development',
    description: 'Canyon road development project with challenging terrain.',
    images: [
      '/images/desktop/sunrise-canyon/jpeg-optimizer_1.jpeg',
      '/images/desktop/sunrise-canyon/jpeg-optimizer_2.jpeg',
      '/images/desktop/sunrise-canyon/jpeg-optimizer_3.jpeg',
      '/images/desktop/sunrise-canyon/jpeg-optimizer_4.jpeg',
      '/images/desktop/sunrise-canyon/jpeg-optimizer_5.jpeg',
      '/images/desktop/sunrise-canyon/jpeg-optimizer_6.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '9': {
    title: 'Azure Bay',
    category:
      'Excavation & EarthWork, Concrete & Flatwork, Custom Land Development, Septic System, Road & Site Development',
    description:
      'Comprehensive land development project including multiple services.',
    images: [
      '/images/desktop/azure-bay/jpeg-optimizer_1.1.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_1.2.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_1.3.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_1.4.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_1.5.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_1.6.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_7.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_8.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_9.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_10.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_11.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_12.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_13.jpeg',
      '/images/desktop/azure-bay/jpeg-optimizer_14.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '10': {
    title: 'Amber Field',
    category: 'Excavation & EarthWork, Septic System',
    description:
      'Excavation and septic system installation in a large agricultural field.',
    images: [
      '/images/desktop/amber-field/jpeg-optimizer_1.jpeg',
      '/images/desktop/amber-field/jpeg-optimizer_2.jpeg',
      '/images/desktop/amber-field/jpeg-optimizer_3.jpeg',
      '/images/desktop/amber-field/jpeg-optimizer_5.jpeg',
      '/images/desktop/amber-field/jpeg-optimizer_6.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '11': {
    title: 'Cobalt Tides',
    category: 'Excavation & EarthWork, Road & Site Development',
    description:
      'Coastal road development project with challenging tidal conditions.',
    images: [
      '/images/desktop/cobalt-tides/jpeg-optimizer_1.jpeg',
      '/images/desktop/cobalt-tides/jpeg-optimizer_2.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '12': {
    title: 'Midnight Forest',
    category: 'Excavation & EarthWork, Septic System',
    description:
      'Septic system installation in a dense forested area with limited access.',
    images: [
      '/images/desktop/midnight-forest/jpeg-optimizer_1.jpeg',
      '/images/desktop/midnight-forest/jpeg-optimizer_2.jpeg',
      '/images/desktop/midnight-forest/jpeg-optimizer_3.jpeg',
      '/images/desktop/midnight-forest/jpeg-optimizer_4.jpeg',
      '/images/desktop/midnight-forest/jpeg-optimizer_5.jpeg',
      '/images/desktop/midnight-forest/jpeg-optimizer_6.jpeg',
      '/images/desktop/midnight-forest/jpeg-optimizer_7.jpeg',
      '/images/desktop/midnight-forest/jpeg-optimizer_8.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '13': {
    title: 'Snow Extermination',
    category: 'Snow & Seasonal',
    description: 'Large-scale snow removal and winter maintenance project.',
    images: [
      '/images/desktop/snow-removal/jpeg-optimizer_1.jpeg',
      '/images/desktop/snow-removal/jpeg-optimizer_2.jpeg',
      '/images/desktop/snow-removal/jpeg-optimizer_3.jpeg',
      '/images/desktop/snow-removal/jpeg-optimizer_4.jpeg',
      '/images/desktop/snow-removal/jpeg-optimizer_5.jpeg',
      '/images/desktop/snow-removal/jpeg-optimizer_6.jpeg',
      '/images/desktop/snow-removal/jpeg-optimizer_7.jpeg',
      '/images/desktop/snow-removal/jpeg-optimizer_8.jpeg',
      '/images/desktop/snow-removal/jpeg-optimizer_9.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '14': {
    title: 'Frosted Meadow',
    category: 'Excavation & EarthWork, Road & Site Development',
    description: 'Road development through a frost-prone meadow area.',
    images: [
      '/images/desktop/frosted-meadow/jpeg-optimizer_1.jpeg',
      '/images/desktop/frosted-meadow/jpeg-optimizer_2.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '15': {
    title: 'Obsidian Bluff',
    category: 'Excavation & EarthWork, Concrete & Flatwork',
    description: 'Excavation and concrete work on a challenging bluff site.',
    images: [
      '/images/desktop/obsidian-bluff/jpeg-optimizer_1.jpeg',
      '/images/desktop/obsidian-bluff/jpeg-optimizer_2.jpeg',
      '/images/desktop/obsidian-bluff/jpeg-optimizer_3.jpeg',
      '/images/desktop/obsidian-bluff/jpeg-optimizer_4.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '16': {
    title: 'Fern Glade',
    category:
      'Excavation & EarthWork, Concrete & Flatwork, Custom Land Development, Septic System, Road & Site Development',
    description: 'Comprehensive land development in a protected fern habitat.',
    images: [
      '/images/desktop/fern-glade/jpeg-optimizer_1.jpeg',
      '/images/desktop/fern-glade/jpeg-optimizer_2.jpeg',
      '/images/desktop/fern-glade/jpeg-optimizer_3.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '17': {
    title: 'Road & Site Development',
    category: 'Road & Site Development',
    description: 'Standard road and site development project.',
    images: [
      '/images/desktop/road-projects/jpeg-optimizer_1.8.jpeg',
      '/images/desktop/road-projects/jpeg-optimizer_1.jpeg',
      '/images/desktop/road-projects/jpeg-optimizer_2.jpeg',
      '/images/desktop/road-projects/jpeg-optimizer_3.1.jpeg',
      '/images/desktop/road-projects/jpeg-optimizer_3.2.jpeg',
      '/images/desktop/road-projects/jpeg-optimizer_3.jpeg',
      '/images/desktop/road-projects/jpeg-optimizer_4.1.jpeg',
      '/images/desktop/road-projects/jpeg-optimizer_4.jpeg',
      '/images/desktop/road-projects/jpeg-optimizer_5.1.jpeg',
      '/images/desktop/road-projects/jpeg-optimizer_5.jpeg',
      '/images/desktop/road-projects/jpeg-optimizer_6.1.jpeg',
      '/images/desktop/road-projects/jpeg-optimizer_6.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '18': {
    title: 'Concrete & Flatwork',
    category: 'Concrete & Flatwork',
    description: 'Concrete pouring and finishing project.',
    images: [
      '/images/desktop/concrete-projects/jpeg-optimizer_1.jpeg',
      '/images/desktop/concrete-projects/jpeg-optimizer_2.jpeg',
      '/images/desktop/concrete-projects/jpeg-optimizer_5.jpeg',
      '/images/desktop/concrete-projects/jpeg-optimizer_14.jpeg',
      '/images/desktop/concrete-projects/jpeg-optimizer_15.1.jpeg',
      '/images/desktop/concrete-projects/jpeg-optimizer_15.jpeg',
      '/images/desktop/concrete-projects/jpeg-optimizer_18.jpeg',
      '/images/desktop/concrete-projects/jpeg-optimizer_19.jpeg',
      '/images/desktop/concrete-projects/jpeg-optimizer_20.jpeg',
      '/images/desktop/concrete-projects/jpeg-optimizer_22.jpeg',
      '/images/desktop/concrete-projects/jpeg-optimizer_23.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
  '19': {
    title: 'Other Projects',
    category: 'Other Projects',
    description: "Other projects that don't fit into the other categories.",
    images: [
      '/images/desktop/other-projects/jpeg-optimizer_2.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_6.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_7.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_9.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_10.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_11.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_12.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_13.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_16.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_17.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_21.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_24.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_25.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_26.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_27.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_28.jpeg',
      '/images/desktop/other-projects/jpeg-optimizer_29.jpeg',
    ],
    location: 'Bend, OR',
    dateCompleted: '2024-01-01',
  },
};

export default function ProjectGallery() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projectDetails[projectId];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="mb-4 inline-block text-blue-600 hover:underline"
        >
          &larr; Back to Projects
        </Link>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Project Not Found
          </h1>
          <p className="mt-4 text-gray-600">
            The requested project could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-2 py-4 sm:px-4 lg:px-8">
      <Link
        href="/projects"
        className="mb-2 inline-block text-sm text-blue-600 hover:underline sm:mb-4 sm:text-base"
      >
        &larr; Back to Projects
      </Link>
      <h1 className="mb-2 text-xl font-bold text-gray-900 sm:mb-4 sm:text-3xl">
        {project.title}
      </h1>
      <p className="mb-3 text-sm text-gray-600 sm:mb-6 sm:text-base">
        {project.category}
      </p>
      <p className="mb-4 text-sm text-gray-800 sm:mb-8 sm:text-base">
        {project.description}
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6">
        {project.images.map((image, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl sm:rounded-xl"
            onClick={() => setSelectedImage(index)}
            onKeyDown={(e) =>
              e.key === 'Enter' || e.key === ' '
                ? setSelectedImage(index)
                : null
            }
            role="button"
            tabIndex={0}
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={image || '/placeholder.svg'}
                alt={`${project.title} - Image ${index + 1}`}
                width={600}
                height={400}
                loading="lazy"
                quality={50}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 p-2 sm:p-4">
              <span className="text-xs font-medium text-white sm:text-sm">
                Image {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="absolute left-1/2 top-1/2 w-[90vw] -translate-x-1/2 -translate-y-1/2 p-2 sm:w-[75vw] sm:p-4">
            <div className="relative aspect-video w-full">
              <Image
                src={project.images[selectedImage]}
                alt={`Enlarged view - ${project.title}`}
                fill
                className="object-contain"
                priority
              />
              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setSelectedImage(
                    (prev) =>
                      (prev! - 1 + project.images.length) %
                      project.images.length
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-1 text-white backdrop-blur-sm transition hover:bg-white/20 sm:left-4 sm:p-2"
                aria-label="Previous image"
              >
                <span className="text-xl sm:text-2xl">←</span>
              </button>
              <button
                onClick={() =>
                  setSelectedImage((prev) =>
                    prev !== null ? (prev + 1) % project.images.length : 0
                  )
                }
                className="absolute right-12 top-1 rounded-full bg-white/10 p-1 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-4 sm:top-1/2 sm:-translate-y-1/2 sm:p-2"
                aria-label="Next image"
              >
                <span className="text-xl sm:text-2xl">→</span>
              </button>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-1 top-1 rounded-full bg-white/10 p-1 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-2 sm:top-2 sm:p-2"
                aria-label="Close image viewer"
              >
                <X className="size-4 sm:size-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
