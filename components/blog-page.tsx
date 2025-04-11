"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowRight, Search } from "lucide-react"
import { useState } from "react"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  slug: string
}

export default function BlogPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [searchQuery, setSearchQuery] = useState("")

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Responsive Layouts with CSS Grid",
      excerpt: "Learn how to create complex, responsive layouts using CSS Grid with practical examples.",
      image: "/placeholder.svg?height=300&width=500",
      date: "May 15, 2023",
      readTime: "5 min read",
      slug: "building-responsive-layouts",
    },
    {
      id: 2,
      title: "State Management in React: Context API vs. Redux",
      excerpt: "A comparison of different state management approaches in React applications.",
      image: "/placeholder.svg?height=300&width=500",
      date: "April 22, 2023",
      readTime: "8 min read",
      slug: "state-management-react",
    },
    {
      id: 3,
      title: "Getting Started with TypeScript in React Projects",
      excerpt: "A beginner's guide to integrating TypeScript into your React projects for type safety.",
      image: "/placeholder.svg?height=300&width=500",
      date: "March 10, 2023",
      readTime: "6 min read",
      slug: "typescript-react-projects",
    },
    {
      id: 4,
      title: "Optimizing React Performance: Memoization Techniques",
      excerpt: "Learn how to use React.memo, useMemo, and useCallback to optimize your React applications.",
      image: "/placeholder.svg?height=300&width=500",
      date: "February 18, 2023",
      readTime: "7 min read",
      slug: "react-memoization-techniques",
    },
    {
      id: 5,
      title: "Building a Custom Hook for Form Validation",
      excerpt: "Create a reusable custom hook for form validation in React applications.",
      image: "/placeholder.svg?height=300&width=500",
      date: "January 25, 2023",
      readTime: "6 min read",
      slug: "custom-form-validation-hook",
    },
    {
      id: 6,
      title: "Introduction to Next.js 13 App Router",
      excerpt: "Explore the new App Router in Next.js 13 and learn how to migrate from the Pages Router.",
      image: "/placeholder.svg?height=300&width=500",
      date: "December 12, 2022",
      readTime: "9 min read",
      slug: "nextjs-13-app-router",
    },
  ]

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Thoughts, tutorials, and insights about web development
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">No articles found</h2>
            <p className="text-muted-foreground">Try a different search term</p>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={item}>
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base line-clamp-3">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="p-0 h-auto font-medium">
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
