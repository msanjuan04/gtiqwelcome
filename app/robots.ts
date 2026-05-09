import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo/business-info"

const PRIVATE_PATHS = ["/api/", "/admin/", "/dashboard/", "/login", "/signup"]

const aiBot = (userAgent: string) => ({
  userAgent,
  allow: "/",
  disallow: PRIVATE_PATHS,
})

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [...PRIVATE_PATHS, "/*?utm_*"],
      },

      // OpenAI
      aiBot("GPTBot"),
      aiBot("OAI-SearchBot"),
      aiBot("ChatGPT-User"),

      // Anthropic
      aiBot("ClaudeBot"),
      aiBot("Claude-SearchBot"),
      aiBot("Claude-User"),

      // Perplexity
      aiBot("PerplexityBot"),
      aiBot("Perplexity-User"),

      // Google IA
      aiBot("Google-Extended"),
      aiBot("GoogleOther"),
      aiBot("Google-NotebookLM"),

      // Otros
      aiBot("Applebot-Extended"),
      aiBot("Meta-ExternalAgent"),
      aiBot("YouBot"),
      aiBot("CCBot"),

      // Bytespider tiene historial de no respetar robots; lo bloqueamos.
      { userAgent: "Bytespider", disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
