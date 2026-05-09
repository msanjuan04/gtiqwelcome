/**
 * Fuente única de verdad para datos NAP, sameAs y metadatos del negocio.
 * Cualquier cambio (dirección, teléfono, redes sociales) se hace aquí.
 */

export const SITE_URL = "https://welcome.gneraitiq.com" as const
export const SITE_NAME = "GTiQ" as const

export const BUSINESS = {
  legalName: "GNERAI",
  brandName: "GTiQ",
  description:
    "Software de control horario y fichaje digital para pymes españolas. Cumple el Real Decreto-ley 8/2019, sin biometría (alineado con AEPD) y con servidores en la Unión Europea.",
  address: {
    streetAddress: "Carrer Unió 90, 3-1",
    addressLocality: "Mataró",
    addressRegion: "Cataluña",
    postalCode: "08302",
    addressCountry: "ES",
  },
  geo: { latitude: 41.5380, longitude: 2.4445 }, // Mataró centro — ajusta si quieres precisión Google Maps
  email: "hola@gneraitiq.com",
  telephone: "+34 623 787 705",
  sameAs: ["https://www.linkedin.com/company/gnerai"],
  areaServed: ["ES-CT", "ES-MD", "ES-AN", "ES-VC", "ES-PV", "ES-GA", "ES"],
  priceRange: "€€",
  contactLanguages: ["es", "ca"],
} as const
