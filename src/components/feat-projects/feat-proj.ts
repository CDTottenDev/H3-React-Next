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
  imageUrl: '/images/mobile/snow-removal/jpeg-optimizer_3.jpeg',
  categories: ['snow'],
  images: ['/images/mobile/snow-removal/jpeg-optimizer_3.jpeg'],
};
