import Portfolio from "@/components/portfolio"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | John Doe",
  description:
    "Explore John Doe's projects and work in web development, featuring React, Next.js, and full-stack applications",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-16">
      <Portfolio />
    </main>
  )
}
