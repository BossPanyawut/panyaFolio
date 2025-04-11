"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Experience } from "@/components/experience"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experienceItems = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      duration: "2021 - Present",
      location: "San Francisco, CA",
      description:
        "Leading the frontend development team in building responsive web applications for enterprise clients. Responsible for architecture decisions, code reviews, and mentoring junior developers.",
      achievements: [
        "Reduced application load time by 40% through code optimization and implementing lazy loading techniques",
        "Led the migration from a legacy codebase to a modern React architecture, improving developer productivity by 30%",
      ],
      skills: ["React", "TypeScript", "Redux", "Jest", "Webpack", "CI/CD"],
    },
    {
      company: "Digital Solutions Ltd.",
      position: "Full Stack Developer",
      duration: "2018 - 2021",
      location: "Boston, MA",
      description:
        "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with designers and product managers to deliver high-quality user experiences.",
      achievements: [
        "Built a real-time dashboard that increased client operational efficiency by 25%",
        "Developed a custom CMS that reduced content update time from days to hours",
      ],
      skills: ["React", "Node.js", "Express", "MongoDB", "GraphQL", "AWS"],
    },
  ]

  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A glimpse into my professional background and achievements
          </p>
        </motion.div>

        <Experience items={experienceItems} />

        <div className="flex justify-center mt-12">
          <Button asChild size="lg">
            <Link href="/experience" className="flex items-center gap-2">
              View Full Experience <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
