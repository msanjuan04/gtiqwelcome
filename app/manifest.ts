import type { MetadataRoute } from "next"
import { SITE_NAME, BUSINESS } from "@/lib/seo/business-info"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${BUSINESS.description.split(".")[0]}`,
    short_name: SITE_NAME,
    description: BUSINESS.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#09090B",
    orientation: "portrait",
    lang: "es-ES",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/gtiq-logo.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  }
}
