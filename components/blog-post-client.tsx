"use client"

type BlogPostClientProps = {
  post: {
    title: string
    excerpt: string
    content: string
    image: string
    date: string
    readTime: string
    slug: string
    author: {
      name: string
      avatar: string
    }
  }
}

import BlogPost from "@/components/blog-post"

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return <BlogPost post={post} />
}
