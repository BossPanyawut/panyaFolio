import { ThemePreview } from "@/components/theme-preview"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Theme Preview | John Doe",
  description: "Preview the light and dark themes of John Doe's portfolio website",
}

export default function ThemePage() {
  return (
    <main className="min-h-screen pt-16">
      <ThemePreview />
    </main>
  )
}
