import type { BlogPost } from "@/app/blog/types/blog"

export function searchBlogPosts(posts: BlogPost[], query: string): BlogPost[] {
  const searchTerm = query.toLowerCase().trim()
  if (!searchTerm) return posts

  return posts.filter(
    (post) => post.title.toLowerCase().includes(searchTerm) || post.category.toLowerCase().includes(searchTerm),
  )
}

