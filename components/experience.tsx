"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

type ExperienceItem = {
  company: string
  position: string
  duration: string
  description: string
  achievements: string[]
  skills: string[]
  location?: string
}

type ExperienceProps = {
  items: ExperienceItem[]
}

export function Experience({ items }: ExperienceProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="space-y-8">
      <h3 className="text-2xl font-bold text-center mb-8">Professional Experience</h3>
      <div className="grid gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{item.position}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Building className="h-4 w-4" />
                      <span className="font-medium text-foreground">{item.company}</span>
                      {item.location && (
                        <>
                          <span className="mx-1">•</span>
                          <span>{item.location}</span>
                        </>
                      )}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{item.description}</p>

                {item.achievements.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-semibold">Key Achievements:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
