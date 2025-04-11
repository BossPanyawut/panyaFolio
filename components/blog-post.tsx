"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowLeft, Twitter, Linkedin, Facebook } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

type BlogPostProps = {
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

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Button asChild variant="ghost" className="mb-6 pl-0 hover:pl-0">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-medium">{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={675}
                className="object-cover"
                priority
              />
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="border-t border-b py-6 my-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-medium">Share this article</p>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={`https://twitter.com/intent/tweet?text=${post.title}&url=https://johndoe.dev/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Share on Twitter</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://johndoe.dev/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Share on Facebook</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=https://johndoe.dev/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <Card className="mt-12">
              <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-6">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">About the Author</h3>
                  <p className="text-muted-foreground mb-4">
                    John Doe is a full-stack developer with over 5 years of experience building web applications. He
                    specializes in React, Next.js, and modern JavaScript frameworks.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/about">More About Me</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </article>
  )
}
