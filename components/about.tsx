"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Timeline } from "@/components/timeline"
import { Code, GraduationCap, Briefcase, Award } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "Tailwind CSS",
    "Git",
    "Docker",
  ]

  const timelineItems = [
    {
      date: "2016",
      title: "Started Coding Journey",
      description:
        "Began learning web development through online courses and bootcamps, focusing on HTML, CSS, and JavaScript.",
      icon: <Code className="h-2 w-2" />,
    },
    {
      date: "2018",
      title: "Graduated from Computer Science",
      description:
        "Earned a Bachelor's degree in Computer Science with a focus on web technologies and software engineering.",
      icon: <GraduationCap className="h-2 w-2" />,
    },
    {
      date: "2019",
      title: "First Developer Role",
      description:
        "Joined WebCraft Agency as a Junior Web Developer, working on client websites and e-commerce platforms.",
      icon: <Briefcase className="h-2 w-2" />,
    },
    {
      date: "2021",
      title: "Senior Developer Promotion",
      description:
        "Promoted to Senior Frontend Developer at Tech Innovations Inc., leading a team of developers on enterprise projects.",
      icon: <Award className="h-2 w-2" />,
    },
    {
      date: "2023",
      title: "Launched Freelance Career",
      description:
        "Started working as a freelance full-stack developer, collaborating with startups and established businesses worldwide.",
      icon: <Code className="h-2 w-2" />,
    },
  ]

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
    <section id="about" className="py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Get to know more about my background and skills
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground">
              I'm a passionate full-stack developer with over 5 years of experience building web applications. I started
              my journey as a front-end developer and gradually expanded my skills to include back-end technologies,
              DevOps, and cloud infrastructure.
            </p>
            <p className="text-muted-foreground">
              My approach to development focuses on creating clean, maintainable code that delivers exceptional user
              experiences. I'm constantly learning new technologies and methodologies to stay at the forefront of web
              development.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square overflow-hidden rounded-xl md:aspect-auto md:h-full"
          >
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Profile"
              width={600}
              height={600}
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4 text-center mb-8"
          >
            <h3 className="text-2xl font-bold">My Timeline</h3>
            <p className="mx-auto max-w-[700px] text-muted-foreground">Key milestones in my professional journey</p>
          </motion.div>
          <Timeline items={timelineItems} />
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-4 text-center mb-8"
          >
            <h3 className="text-2xl font-bold">My Skills</h3>
            <p className="mx-auto max-w-[700px] text-muted-foreground">Technologies and tools I work with</p>
          </motion.div>
          <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.map((skill) => (
                    <motion.div key={skill} variants={item}>
                      <Badge variant="secondary" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
