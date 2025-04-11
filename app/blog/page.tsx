import BlogPage from "@/components/blog-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | John Doe",
  description: "Read articles and tutorials about web development, React, Next.js, and more by John Doe",
}

export default function Blog() {
  return (
    <main className="min-h-screen pt-16">
      <BlogPage />
    </main>
  )
}
