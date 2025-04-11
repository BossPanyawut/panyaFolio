import About from "@/components/about"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | John Doe",
  description:
    "Learn more about John Doe, a Full Stack Developer with expertise in React, Next.js, and modern web technologies",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <About />
    </main>
  )
}
