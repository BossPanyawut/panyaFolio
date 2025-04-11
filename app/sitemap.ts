import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://johndoe.dev"

  // Blog posts for sitemap
  const blogPosts = [
    { slug: "building-responsive-layouts", lastModified: new Date("2023-05-15") },
    { slug: "state-management-react", lastModified: new Date("2023-04-22") },
    { slug: "typescript-react-projects", lastModified: new Date("2023-03-10") },
  ]

  // Main routes
  const routes = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/resume`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ]

  // Blog post routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
  }))

  return [...routes, ...blogRoutes]
}
