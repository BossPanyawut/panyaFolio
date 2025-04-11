"use client";

import { GetBlogPost } from "./BlogPostClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export function BlogPostClientPage({ params }: PageProps) {
  return <GetBlogPost params={params} />;
}
