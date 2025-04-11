"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  category: string
}

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data from multiple sources.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "APIs", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Content Management System",
      description: "A custom CMS built for content creators with markdown support and media management.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "PostgreSQL", "AWS S3"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
    },
  ]

  const [filter, setFilter] = useState("All")
  const categories = ["All", "Frontend", "Backend", "Full Stack"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

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
    <section id="portfolio" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Portfolio</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A showcase of my recent projects and work
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild size="sm" variant="default">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
