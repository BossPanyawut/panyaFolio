import { Experience } from "@/components/experience"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience | John Doe",
  description: "Professional experience and work history of John Doe, Full Stack Developer",
}

export default function ExperiencePage() {
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
        "Implemented automated testing that increased code coverage from 45% to 85%",
        "Established frontend development standards and best practices adopted company-wide",
        "Collaborated with UX/UI designers to implement a design system that improved consistency across products",
        "Mentored 5 junior developers who have since been promoted to mid-level positions",
      ],
      skills: ["React", "TypeScript", "Redux", "Jest", "Webpack", "CI/CD", "Design Systems", "Team Leadership"],
    },
    {
      company: "Digital Solutions Ltd.",
      position: "Full Stack Developer",
      duration: "2018 - 2021",
      location: "Boston, MA",
      description:
        "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with designers and product managers to deliver high-quality user experiences for clients in finance, healthcare, and e-commerce sectors.",
      achievements: [
        "Built a real-time dashboard that increased client operational efficiency by 25%",
        "Developed a custom CMS that reduced content update time from days to hours",
        "Implemented OAuth 2.0 authentication system improving security across all applications",
        "Optimized database queries resulting in 60% faster data retrieval",
        "Created a microservice architecture that improved system scalability and maintenance",
        "Integrated payment gateways for e-commerce clients, increasing conversion rates by 15%",
        "Implemented CI/CD pipelines that reduced deployment time from hours to minutes",
      ],
      skills: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "GraphQL",
        "AWS",
        "Docker",
        "Microservices",
        "Payment Integration",
      ],
    },
    {
      company: "WebCraft Agency",
      position: "Junior Web Developer",
      duration: "2016 - 2018",
      location: "Remote",
      description:
        "Built responsive websites and implemented frontend features using HTML, CSS, and JavaScript. Worked with WordPress and PHP to create custom themes and plugins for clients across various industries including retail, hospitality, and non-profit organizations.",
      achievements: [
        "Developed 15+ client websites with responsive designs and custom functionality",
        "Created a reusable component library that reduced development time by 20%",
        "Implemented SEO best practices that improved client search rankings by an average of 30%",
        "Optimized website performance achieving 90+ PageSpeed scores",
        "Migrated legacy websites to modern platforms, improving security and maintainability",
        "Developed custom WordPress plugins to extend functionality for specific client needs",
        "Collaborated with marketing teams to implement analytics and tracking solutions",
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "WordPress",
        "PHP",
        "jQuery",
        "Responsive Design",
        "SEO",
        "Web Performance",
      ],
    },
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "2015 - 2016",
      location: "Remote",
      description:
        "Provided web development services to small businesses and startups. Designed and developed websites, landing pages, and small web applications to help clients establish their online presence.",
      achievements: [
        "Completed 10+ projects for clients in various industries",
        "Designed and implemented responsive websites that worked across all devices",
        "Created custom contact forms and integration with email marketing services",
        "Provided training to clients on content management and basic website maintenance",
        "Implemented analytics to help clients track website performance",
      ],
      skills: ["HTML", "CSS", "JavaScript", "WordPress", "UI/UX Design", "Client Management"],
    },
  ]

  return (
    <main className="min-h-screen pt-16 py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A detailed overview of my professional journey and accomplishments
          </p>
        </div>

        <Experience items={experienceItems} />
      </div>
    </main>
  )
}
