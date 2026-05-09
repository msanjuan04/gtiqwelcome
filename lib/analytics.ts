declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * Empuja un evento al dataLayer de GTM.
 * GTM (y por extensión GA4 / Meta Pixel / etc. configurados dentro)
 * recibirán este evento y podrán crear conversiones a partir de él.
 */
export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, ...params })
}
