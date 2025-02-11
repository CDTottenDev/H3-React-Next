export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  categories?: string[];
  images?: string[];
}

export const featuredProject: Project = {
  id: '1',
  title: 'Stay Safe This Winter',
  description: 'Snow removal - winter road maintenance.',
  imageUrl: '/images/desktop/snow-removal/optimized-1.webp',
  categories: ['snow'],
  images: ['/images/desktop/snow-removal/optimized-1.webp'],
};
