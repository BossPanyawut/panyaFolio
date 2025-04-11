"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"
import Link from "next/link"

export default function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in building responsive web applications using React and Next.js. Implemented state management solutions and optimized performance for large-scale applications.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with designers and product managers to deliver high-quality user experiences.",
    },
    {
      title: "Junior Web Developer",
      company: "WebCraft Agency",
      period: "2016 - 2018",
      description:
        "Built responsive websites and implemented frontend features using HTML, CSS, and JavaScript. Worked with WordPress and PHP to create custom themes and plugins.",
    },
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description:
        "Specialized in Web Technologies and Software Engineering. Graduated with honors and completed a thesis on optimizing React applications.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      description:
        "Focused on programming fundamentals, data structures, and algorithms. Participated in coding competitions and hackathons.",
    },
  ]

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2022",
    },
    {
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2021",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2020",
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
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resume</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            My professional experience, education, and certifications
          </p>
          <Button asChild className="mt-4">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-12">
          <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"} className="grid gap-6">
            <div className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>
            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={item}>
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription className="sm:text-right">{exp.period}</CardDescription>
                      </div>
                      <CardDescription className="font-medium text-foreground">{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"} className="grid gap-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={item}>
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription className="sm:text-right">{edu.period}</CardDescription>
                      </div>
                      <CardDescription className="font-medium text-foreground">{edu.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"} className="grid gap-6">
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Certifications</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={item}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <CardDescription>
                        {cert.issuer} • {cert.date}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
