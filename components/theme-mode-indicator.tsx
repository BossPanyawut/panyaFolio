"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeModeIndicator() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showIndicator, setShowIndicator] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Show indicator when theme changes
  useEffect(() => {
    if (mounted) {
      setShowIndicator(true)
      const timer = setTimeout(() => {
        setShowIndicator(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [theme, mounted])

  if (!mounted || !showIndicator) {
    return null
  }

  return (
    <AnimatePresence>
      {showIndicator && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        >
          <div className="bg-background/80 backdrop-blur-md border border-border rounded-full p-6 shadow-lg">
            {theme === "dark" ? (
              <Moon className="h-12 w-12 text-blue-400" />
            ) : (
              <Sun className="h-12 w-12 text-yellow-500" />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
