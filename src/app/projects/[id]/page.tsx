'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { getProjectById } from '@/lib/db';
import { Project } from '@/types/project';

export default function ProjectGallery() {
  const params = useParams();
  const projectId = params.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    async function loadProject() {
      const data = await getProjectById(projectId);
      if (data) {
        setProject(data);
      }
    }
    loadProject();
  }, [projectId]);

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
