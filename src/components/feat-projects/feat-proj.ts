export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  categories?: string[];
  images: string[];
  category: string;
  dateCompleted: string;
  location: string;
  image: string;
}

export const featuredProject: Project = {
  id: 1,
  title: 'Stay Safe This Winter',
  description: 'Snow removal - winter road maintenance.',
  imageUrl: '/images/desktop/snow-removal/optimized-1.webp',
  categories: ['snow'],
  images: ['/images/desktop/snow-removal/optimized-1.webp'],
  category: 'snow',
  dateCompleted: '2024-02-15',
  location: 'New York City',
  image: '/images/desktop/snow-removal/optimized-1.webp',
};
