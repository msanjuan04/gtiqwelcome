import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo/business-info"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/legal/aviso-legal`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/legal/privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/legal/cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
