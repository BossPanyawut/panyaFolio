import Hero from "@/components/hero"
import About from "@/components/about"
import ExperienceSection from "@/components/experience-section"
import Portfolio from "@/components/portfolio"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "John Doe | Full Stack Developer",
  description:
    "Professional portfolio of John Doe, a Full Stack Developer specializing in building exceptional digital experiences",
  keywords: ["developer", "portfolio", "full stack", "web development", "react", "next.js"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    title: "John Doe | Full Stack Developer",
    description:
      "Professional portfolio of John Doe, a Full Stack Developer specializing in building exceptional digital experiences",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Full Stack Developer",
    description:
      "Professional portfolio of John Doe, a Full Stack Developer specializing in building exceptional digital experiences",
    creator: "@johndoe",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <ExperienceSection />
      <Portfolio />
      <Blog />
      <Contact />
    </main>
  )
}
