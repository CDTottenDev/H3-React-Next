import type { BlogPost, Category } from '@/app/blog/types/blog';

// All blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Essential Safety Protocols for Construction Sites",
    excerpt: "Learn about the critical safety measures and protocols that every construction site must implement to ensure worker safety and compliance...",
    date: "2025-04-15",
    category: "Safety",
    readingTime: "6 min read",
    image: "/images/blog/construction-safety.svg",
    slug: "construction-safety-protocols",
    content: `
      <p class="text-lg border-l-4 border-yellow-300 dark:border-yellow-600 pl-4 mb-8 text-gray-800 dark:text-gray-200">
        Construction site safety is paramount in our industry. As we continue to prioritize worker safety and regulatory compliance, 
        here are the essential protocols every construction site must implement:
      </p>

      <section class="border-2 border-black dark:border-gray-600 p-6 retro-shadow bg-white dark:bg-gray-800 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-black dark:text-gray-100 mb-4 underline decoration-red-500">1. Personal Protective Equipment (PPE)</h2>
        <p class="text-gray-800 dark:text-gray-300">
          Proper PPE is the first line of defense against workplace hazards. This includes hard hats, safety glasses, steel-toed boots, 
          high-visibility vests, and appropriate respiratory protection when needed.
        </p>
      </section>

      <section class="border-2 border-black dark:border-gray-600 p-6 retro-shadow bg-white dark:bg-gray-800 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-black dark:text-gray-100 mb-4 underline decoration-red-500">2. Site Safety Training</h2>
        <p class="text-gray-800 dark:text-gray-300">
          Regular safety training sessions ensure all workers are aware of potential hazards and proper safety procedures. 
          This includes emergency response protocols and equipment operation safety.
        </p>
      </section>

      <section class="border-2 border-black dark:border-gray-600 p-6 retro-shadow bg-white dark:bg-gray-800 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-black dark:text-gray-100 mb-4 underline decoration-red-500">3. Hazard Communication</h2>
        <p class="text-gray-800 dark:text-gray-300">
          Clear communication of potential hazards is essential. This includes proper signage, regular safety meetings, 
          and maintaining Material Safety Data Sheets (MSDS) for all materials on site.
        </p>
      </section>
    `,
  },
  {
    id: "2",
    title: "Modern Excavation Techniques for Residential Projects",
    excerpt: "Discover the latest excavation methods and equipment that are revolutionizing residential construction projects...",
    date: "2025-05-10",
    category: "Excavation",
    readingTime: "5 min read",
    image: "/images/blog/excavation.svg",
    slug: "modern-excavation-techniques",
    content: `
      <div class="mb-10">
        <p class="text-lg mb-4 text-gray-800 dark:text-gray-200">
          Modern excavation techniques have revolutionized residential construction, making projects more efficient and environmentally friendly. 
          Let's explore the latest methods and equipment that are changing the industry.
        </p>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-4 -left-4 bg-red-500 text-white p-2 z-10 rotate-3 border-2 border-black dark:border-gray-600">
            <span class="font-bold">Technique #1</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black dark:border-gray-600 p-4 bg-white dark:bg-gray-800 retro-shadow dark:text-gray-100">
            Hydro Excavation
          </h2>
        </div>
        <p class="mb-4 text-gray-800 dark:text-gray-300">
          Hydro excavation uses pressurized water to break up soil, which is then removed using a vacuum system. This method is particularly 
          useful for utility work and precise digging near existing structures.
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-800 dark:text-gray-300">
          <li>Minimal damage to underground utilities</li>
          <li>Reduced risk of injury</li>
          <li>Environmentally friendly</li>
          <li>Precise excavation control</li>
        </ul>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-4 -left-4 bg-red-500 text-white p-2 z-10 rotate-3 border-2 border-black dark:border-gray-600">
            <span class="font-bold">Technique #2</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black dark:border-gray-600 p-4 bg-white dark:bg-gray-800 retro-shadow dark:text-gray-100">
            Mini Excavation
          </h2>
        </div>
        <p class="mb-4 text-gray-800 dark:text-gray-300">
          Mini excavators are perfect for residential projects where space is limited. These compact machines offer the power of larger 
          equipment while maintaining maneuverability in tight spaces.
        </p>
      </div>
    `,
  },
  {
    id: "3",
    title: "Sustainable Construction Practices for 2025",
    excerpt: "Explore the latest sustainable construction methods and materials that are shaping the future of the industry...",
    date: "2025-03-05",
    category: "Sustainability",
    readingTime: "7 min read",
    image: "/images/blog/land-development.svg",
    slug: "sustainable-construction-2025",
    content: `
      <div class="mb-10">
        <p class="text-lg mb-4 text-gray-800 dark:text-gray-200">
          Sustainability in construction is no longer just a trend—it's a necessity. As we move through 2024, the industry continues to 
          evolve with innovative sustainable practices that benefit both the environment and project outcomes.
        </p>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-4 -left-4 bg-red-500 text-white p-2 z-10 rotate-3 border-2 border-black dark:border-gray-600">
            <span class="font-bold">Practice #1</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black dark:border-gray-600 p-4 bg-white dark:bg-gray-800 retro-shadow dark:text-gray-100">
            Green Building Materials
          </h2>
        </div>
        <p class="mb-4 text-gray-800 dark:text-gray-300">
          The use of sustainable building materials is crucial for reducing environmental impact. This includes recycled materials, 
          locally sourced products, and innovative new materials with lower carbon footprints.
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-800 dark:text-gray-300">
          <li>Recycled concrete and steel</li>
          <li>Bamboo and other fast-growing materials</li>
          <li>Low-VOC paints and finishes</li>
          <li>Energy-efficient insulation</li>
        </ul>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-4 -left-4 bg-red-500 text-white p-2 z-10 rotate-3 border-2 border-black dark:border-gray-600">
            <span class="font-bold">Practice #2</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black dark:border-gray-600 p-4 bg-white dark:bg-gray-800 retro-shadow dark:text-gray-100">
            Waste Reduction Strategies
          </h2>
        </div>
        <p class="mb-4 text-gray-800 dark:text-gray-300">
          Effective waste management is essential for sustainable construction. This includes proper sorting, recycling, and 
          minimizing waste through careful planning and material optimization.
        </p>
      </div>
    `,
  }
];

// Generate categories from blog posts
export const getCategories = (): Category[] => {
  const categoryMap = new Map<string, number>();
  
  blogPosts.forEach(post => {
    const currentCount = categoryMap.get(post.category) || 0;
    categoryMap.set(post.category, currentCount + 1);
  });
  
  return Array.from(categoryMap.entries()).map(([name, count]) => ({ name, count }));
};

// Get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

// Get a single blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
}; 