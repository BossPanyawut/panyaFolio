import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | John Doe",
  description: "Get in touch with John Doe for project inquiries, collaborations, or just to say hello",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      <Contact />
    </main>
  )
}
