"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { useRouter } from 'next/navigation'
import Link from "next/link"

import { BlogSidebar } from "@/app/blog/components/blog-sidebar"
import { Button } from "@/app/blog/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/app/blog/components/ui/sheet"
import { searchBlogPosts } from "@/app/blog/utils/search"
import { getAllBlogPosts, getCategories } from "@/app/blog/utils/blog-data"
import type { BlogPost, Category } from "@/app/blog/types/blog"

// Get data from our utility functions
const samplePosts = getAllBlogPosts();
const sampleCategories = getCategories();

// Custom Blog Post Card with light/dark theme styling
const RetroBlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="relative">
        <div className="absolute right-4 top-4 z-10">
          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
            {post.category}
          </span>
        </div>
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2">{post.title}</h3>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
          <Link href={`/blog/${post.slug}`}>
            <div className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
              Read More
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")
  const filteredPosts = searchBlogPosts(samplePosts, searchQuery)

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 mt-32">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Sidebar with Title */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden mb-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100">
                <Menu className="h-5 w-5 mr-2" />
                <span>Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
              <SheetTitle className="px-4 py-3 bg-blue-600 text-white">Blog Navigation</SheetTitle>
              <BlogSidebar categories={sampleCategories} onSearch={setSearchQuery} />
            </SheetContent>
          </Sheet>

          {/* Desktop Sidebar */}
          <div className="hidden md:block md:w-1/4">
            <div className="sticky top-8 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="bg-blue-600 px-4 py-3 rounded-t-lg">
                <h2 className="font-bold text-white">Blog Navigation</h2>
              </div>
              <div className="p-4">
                <BlogSidebar categories={sampleCategories} onSearch={setSearchQuery} className="" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-8">
              <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/50 px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Industry insights & updates</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Excavation & Construction Blog
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Expert insights and industry updates for construction professionals
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <RetroBlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="rounded-lg bg-white dark:bg-gray-800 p-8 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="mb-4 inline-block rounded-full bg-red-100 dark:bg-red-900/50 p-2">
                  <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">No Results Found</h3>
                <p className="text-gray-600 dark:text-gray-400">No posts found matching your search criteria.</p>
              </div>
            )}
            
            <div className="mt-12 flex justify-center">
              <button 
                onClick={handleBack} 
                className="inline-flex items-center rounded-md bg-gray-900 dark:bg-gray-800 px-6 py-3 text-sm font-semibold text-white dark:text-gray-100 shadow-sm transition-colors hover:bg-gray-800 dark:hover:bg-gray-700 border border-gray-700"
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Go Back
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}