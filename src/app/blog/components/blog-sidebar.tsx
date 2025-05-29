"use client"

import * as React from "react"
import { Search, X } from "lucide-react"

import { Input } from "@/app/blog/components/ui/input"
import { Button } from "@/app/blog/components/ui/button"
import type { Category } from "@/app/blog/types/blog"

interface BlogSidebarProps {
  categories: Category[]
  onSearch: (query: string) => void
  className?: string
}

export function BlogSidebar({ categories, onSearch, className }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleReset = () => {
    setSearchQuery("")
    setSelectedCategory(null)
    onSearch("")
  }

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName)
    onSearch(categoryName)
  }

  const handleCategoryReset = () => {
    setSelectedCategory(null)
    onSearch("")
  }

  return (
    <aside className={`w-full md:w-64 md:flex-shrink-0 ${className}`}>
      <div className="space-y-6 p-4">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Search Posts</h3>
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Reset</span>
              </Button>
            )}
          </div>
          
          <form onSubmit={handleSearch} className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search posts..."
                className="pl-9 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button 
                type="submit" 
                className="flex-1 bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/20"
              >
                Search
              </Button>
              {searchQuery && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  className="border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Reset
                </Button>
              )}
            </div>
          </form>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Categories</h3>
            {selectedCategory && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCategoryReset}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                Clear category
              </Button>
            )}
          </div>
          <nav className="space-y-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="ghost"
                className={`w-full justify-between ${
                  selectedCategory === category.name
                    ? "bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <span className="font-medium">{category.name}</span>
                <span className="ml-2 rounded-full bg-blue-100 dark:bg-blue-900/50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300">
                  {category.count}
                </span>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
}