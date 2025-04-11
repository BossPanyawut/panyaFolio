"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Project = {
  id: number
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  category: string
  featured?: boolean
}

export default function Projects() {
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
      longDescription:
        "This comprehensive e-commerce solution features a responsive design, product filtering, user authentication, shopping cart, checkout process with Stripe integration, order management, and an admin dashboard. Built with React, Node.js, Express, and MongoDB, it demonstrates my ability to create complex, full-stack applications with modern technologies.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Express", "Redux"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      longDescription:
        "This task management application allows teams to collaborate in real-time with features like drag-and-drop task organization, deadline tracking, file attachments, comments, and notifications. It uses Firebase for real-time updates and authentication, demonstrating my skills in building interactive, real-time web applications.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "React DnD", "Context API"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Frontend",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data from multiple sources.",
      longDescription:
        "This weather application provides detailed current conditions and 7-day forecasts for any location worldwide. It features interactive maps, hourly forecasts, historical data comparison, and severe weather alerts. Built with vanilla JavaScript and multiple weather APIs, it showcases my ability to work with external APIs and create data visualizations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "APIs", "Chart.js", "Leaflet", "CSS Grid"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Content Management System",
      description: "A custom CMS built for content creators with markdown support and media management.",
      longDescription:
        "This headless CMS provides content creators with a user-friendly interface for managing blog posts, pages, and media assets. It features a WYSIWYG editor with markdown support, image optimization, content scheduling, version history, and role-based access control. Built with Next.js and PostgreSQL, it demonstrates my backend development skills and database design expertise.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "PostgreSQL", "AWS S3", "Prisma", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
      featured: true,
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "A mobile-first web application for tracking workouts and fitness progress.",
      longDescription:
        "This fitness tracking application helps users monitor their workout routines, set goals, and track progress over time. It features exercise libraries, custom workout creation, progress charts, calorie tracking, and social sharing. Built with React Native Web, it showcases my ability to create cross-platform applications with a mobile-first approach.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native Web", "GraphQL", "Apollo", "D3.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Mobile",
    },
    {
      id: 6,
      title: "Real Estate Listing Platform",
      description: "A property listing website with advanced search filters and interactive maps.",
      longDescription:
        "This real estate platform allows users to search for properties using advanced filters, view detailed listings with photo galleries, schedule viewings, and contact agents. It features interactive maps, neighborhood information, mortgage calculators, and saved searches. Built with React and Node.js, it demonstrates my full-stack development capabilities and attention to user experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
    },
    {
      id: 7,
      title: "Recipe Sharing Community",
      description: "A social platform for food enthusiasts to share and discover recipes.",
      longDescription:
        "This recipe sharing platform allows users to create, share, and discover recipes from around the world. It features user profiles, recipe collections, ratings and reviews, ingredient search, and meal planning tools. Built with Vue.js and Firebase, it showcases my ability to create engaging social platforms with user-generated content.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "Firebase", "Vuex", "Cloud Functions", "Algolia"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
    {
      id: 8,
      title: "Developer Portfolio Template",
      description: "A customizable portfolio template for developers to showcase their work.",
      longDescription:
        "This portfolio template provides developers with a professional, customizable website to showcase their projects and skills. It features a modular design, dark/light mode, responsive layouts, and easy content management. Built with Next.js and Tailwind CSS, it demonstrates my frontend development skills and design sensibilities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
  ]

  const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile"]
  const [activeTab, setActiveTab] = useState("All")

  const filteredProjects = activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab)
  const featuredProjects = projects.filter((project) => project.featured)

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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A showcase of my recent projects and work
          </p>
        </motion.div>

        <Tabs defaultValue="All" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveTab(category)}
                  className="px-4 py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
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
          </TabsContent>
        </Tabs>

        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Button asChild variant="ghost" className="gap-1">
              <Link href="/portfolio">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.slice(0, 2).map((project) => (
              <Card key={project.id} className="overflow-hidden">
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
                <CardContent>
                  <CardDescription className="text-base">{project.longDescription}</CardDescription>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
