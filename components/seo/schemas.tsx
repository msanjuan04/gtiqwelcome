import { JsonLd } from "./json-ld"
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/seo/business-info"

export function OrganizationSchema() {
  return (
    <JsonLd
      id="ld-organization"
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: BUSINESS.legalName,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/gtiq-logo.png`,
          width: 1024,
          height: 1024,
        },
        description: BUSINESS.description,
        email: BUSINESS.email,
        ...(BUSINESS.telephone && { telephone: BUSINESS.telephone }),
        address: {
          "@type": "PostalAddress",
          ...BUSINESS.address,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: BUSINESS.email,
            ...(BUSINESS.telephone && { telephone: BUSINESS.telephone }),
            areaServed: "ES",
            availableLanguage: BUSINESS.contactLanguages,
          },
        ],
        ...(BUSINESS.sameAs.length > 0 && { sameAs: BUSINESS.sameAs }),
        knowsAbout: [
          "Control horario",
          "Fichaje digital",
          "Registro de jornada laboral",
          "Real Decreto-ley 8/2019",
          "Software de RRHH",
          "Time tracking",
          "Cumplimiento normativo laboral España",
        ],
      }}
    />
  )
}

export function WebSiteSchema() {
  return (
    <JsonLd
      id="ld-website"
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "es-ES",
        publisher: { "@id": `${SITE_URL}/#organization` },
      }}
    />
  )
}

export function LocalBusinessSchema() {
  return (
    <JsonLd
      id="ld-localbusiness"
      data={{
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${SITE_URL}/#localbusiness`,
        name: SITE_NAME,
        image: `${SITE_URL}/images/gtiq-logo.png`,
        url: SITE_URL,
        ...(BUSINESS.telephone && { telephone: BUSINESS.telephone }),
        priceRange: BUSINESS.priceRange,
        address: {
          "@type": "PostalAddress",
          ...BUSINESS.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.latitude,
          longitude: BUSINESS.geo.longitude,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Maresme",
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Cataluña",
            },
          },
          { "@type": "City", name: "Mataró" },
          { "@type": "City", name: "Barcelona" },
          { "@type": "Country", name: "España" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        ...(BUSINESS.sameAs.length > 0 && { sameAs: BUSINESS.sameAs }),
      }}
    />
  )
}

export function SoftwareApplicationSchema() {
  return (
    <JsonLd
      id="ld-software"
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: `${SITE_NAME} — Software de control horario`,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "TimeTrackingApplication",
        operatingSystem: "Web, iOS, Android",
        url: SITE_URL,
        description: BUSINESS.description,
        inLanguage: ["es-ES", "ca-ES"],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: "149",
          highPrice: "1499",
          offerCount: 5,
          offeredBy: { "@id": `${SITE_URL}/#organization` },
        },
        featureList: [
          "Fichaje multidispositivo (móvil, web, tablet, kiosco)",
          "Cumplimiento Real Decreto-ley 8/2019",
          "Sin biometría (alineado con AEPD)",
          "Geolocalización opcional con geofencing",
          "Gestión de turnos, vacaciones y horas extras",
          "Informes para Inspección de Trabajo en PDF/Excel",
          "Conservación de datos cifrados en la UE durante 4 años",
          "Log inmutable con trazabilidad",
        ],
        publisher: { "@id": `${SITE_URL}/#organization` },
      }}
    />
  )
}

type FAQItem = { q: string; a: string }

export function FAQPageSchema({ items }: { items: FAQItem[] }) {
  return (
    <JsonLd
      id="ld-faq"
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }}
    />
  )
}

type BreadcrumbItem = { name: string; url: string }

export function BreadcrumbListSchema({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      id="ld-breadcrumbs"
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  )
}
