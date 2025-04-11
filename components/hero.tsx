"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 md:py-24 lg:py-32"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="dark:block hidden">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl opacity-20" />
        </div>
        <div className="dark:hidden block">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl opacity-20" />
        </div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            <Button asChild size="lg">
              <Link href="#portfolio">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-8 w-8 text-primary" />
        </Link>
      </motion.div>
    </section>
  )
}
