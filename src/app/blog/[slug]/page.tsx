"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Import the function to get blog posts
import { getBlogPostBySlug } from '@/app/blog/utils/blog-data';

const BlogPost: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;
  
  // Get the blog post data
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return (
      <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Link href="/blog" className="inline-flex items-center mb-8 bg-white dark:bg-gray-800 px-4 py-2 font-bold retro-btn border-2 border-black dark:border-gray-600 dark:text-gray-100">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="text-center py-12 border-2 border-black dark:border-gray-600 bg-white dark:bg-gray-800 retro-shadow p-8">
            <div className="bg-red-500 text-white p-2 inline-block rotate-3 border-2 border-black dark:border-gray-600 mb-4">
              <span className="font-bold">Post Not Found!</span>
            </div>
            <p className="dark:text-gray-100">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link href="/blog" className="inline-flex items-center mb-8 bg-white dark:bg-gray-800 px-4 py-2 font-bold retro-btn border-2 border-black dark:border-gray-600 dark:text-gray-100">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
        
        <article className="container mx-auto px-4 py-8 max-w-4xl bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-600 retro-shadow">
          <div className="mb-12 text-center">
            <div className="inline-block bg-yellow-300 dark:bg-yellow-600 px-3 py-1 mb-4 border-2 border-black dark:border-gray-600 retro-shadow">
              <span className="text-sm dark:text-gray-100">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 dark:text-gray-100">
              {post.title}
            </h1>
            <p className="text-lg max-w-2xl mx-auto dark:text-gray-300">
              {post.excerpt}
            </p>
          </div>
          
          {/* Display the blog post content */}
          <div className="blog-content prose dark:prose-invert max-w-none">
            {/* For HTML content, use dangerouslySetInnerHTML or a Markdown renderer */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;