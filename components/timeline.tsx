"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

type TimelineItem = {
  date: string
  title: string
  description: string
  icon?: React.ReactNode
}

type TimelineProps = {
  items: TimelineItem[]
  title?: string
}

export function Timeline({ items, title }: TimelineProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="space-y-8">
      {title && <h3 className="text-2xl font-bold text-center mb-8">{title}</h3>}
      <div className="relative border-l border-primary/30 pl-6 ml-4 space-y-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div
              className={cn(
                "absolute w-4 h-4 bg-primary rounded-full -left-[34px] mt-1.5",
                "before:content-[''] before:absolute before:w-12 before:h-1 before:bg-primary/20 before:left-4 before:top-1.5",
              )}
            >
              {item.icon && (
                <div className="absolute inset-0 flex items-center justify-center text-primary-foreground text-[10px]">
                  {item.icon}
                </div>
              )}
            </div>
            <div className="mb-1 text-sm font-semibold text-muted-foreground">{item.date}</div>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
