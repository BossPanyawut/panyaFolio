import Resume from "@/components/resume"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume | John Doe",
  description: "Professional resume of John Doe, showcasing work experience, education, and skills",
}

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-16">
      <Resume />
    </main>
  )
}
