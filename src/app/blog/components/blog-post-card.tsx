import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"

import type { BlogPost } from "@/app/blog/types/blog"
import { Card, CardContent, CardHeader } from "@/app/blog/components/ui/card"
import { Badge } from "@/app/blog/components/ui/badge"
interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href="/blog/web-design-trends-2025" prefetch={false}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-red-100">
        <CardHeader className="p-0">
          <div className="aspect-video relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100">
            {post.category}
          </Badge>
          <h2 className="text-xl font-semibold text-red-900 line-clamp-2">{post.title}</h2>
          <p className="text-red-600/80 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center text-red-400 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {post.readingTime}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

