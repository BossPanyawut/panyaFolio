import Projects from "@/components/projects"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | John Doe",
  description:
    "Explore John Doe's portfolio of web development projects, including frontend, backend, and full-stack applications",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Projects />
    </main>
  )
}
