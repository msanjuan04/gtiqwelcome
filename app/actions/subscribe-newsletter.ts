"use server"

import { headers } from "next/headers"
import { Resend } from "resend"

export type NewsletterState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string }

const SUPPORT_EMAIL = "hola@gneraitiq.com"

const RATE_LIMIT_MS = 30_000
const lastByIp = new Map<string, number>()

async function getClientIp(): Promise<string> {
  const h = await headers()
  const xff = h.get("x-forwarded-for")
  if (xff) return xff.split(",")[0]?.trim() ?? "unknown"
  return h.get("x-real-ip") ?? "unknown"
}

const escapeHtml = (s: string) =>
  s.replace(/[<>&"']/g, (c) =>
    ({
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      '"': "&quot;",
      "'": "&#39;",
    }[c] as string),
  )

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const honeypot = (formData.get("company") ?? "").toString().trim()
  if (honeypot.length > 0) {
    return { status: "ok" }
  }

  const email = (formData.get("email") ?? "").toString().trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Email no válido." }
  }

  const ip = await getClientIp()
  const now = Date.now()
  const last = lastByIp.get(ip)
  if (last && now - last < RATE_LIMIT_MS) {
    return {
      status: "error",
      message: "Espera unos segundos antes de reintentar.",
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[GTiQ] RESEND_API_KEY no configurada.")
    return {
      status: "error",
      message: "Configuración pendiente. Inténtalo más tarde.",
    }
  }

  lastByIp.set(ip, now)

  const audienceId = process.env.RESEND_AUDIENCE_ID
  const from = process.env.LEAD_FROM_EMAIL ?? "GTiQ <onboarding@resend.dev>"

  const resend = new Resend(apiKey)

  // Si hay un Audience configurado en Resend, lo añadimos directamente.
  // En cualquier caso, mandamos email interno + bienvenida al suscriptor.
  const tasks: Promise<unknown>[] = []

  if (audienceId) {
    tasks.push(
      resend.contacts
        .create({ email, audienceId, unsubscribed: false })
        .catch((err) => {
          console.warn("[GTiQ] Resend audience add falló:", err)
        }),
    )
  }

  // Notificación interna
  tasks.push(
    resend.emails.send({
      from,
      to: [SUPPORT_EMAIL],
      replyTo: email,
      subject: `Nuevo suscriptor newsletter · ${email}`,
      text: `Email: ${email}\nIP: ${ip}\nFecha: ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}`,
    }),
  )

  // Bienvenida al suscriptor
  const welcomeHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; background: #09090B; color: #e4e4e7; padding: 32px 24px;">
      <div style="max-width: 520px; margin: 0 auto; background: #18181b; border: 1px solid #27272a; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, rgba(59,130,246,0.20), rgba(59,130,246,0.04)); padding: 32px 28px; border-bottom: 1px solid #27272a; text-align: center;">
          <p style="margin: 0; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: #93c5fd;">Newsletter GTiQ</p>
          <h1 style="margin: 12px 0 0; font-size: 24px; line-height: 1.2; color: #ffffff; font-weight: 600;">¡Bienvenido!</h1>
        </div>
        <div style="padding: 24px 28px; font-size: 15px; line-height: 1.6; color: #d4d4d8;">
          <p style="margin: 0 0 12px;">Gracias por suscribirte (${escapeHtml(email)}).</p>
          <p style="margin: 0 0 12px;">Te llegarán novedades sobre control horario, registro de jornada, RD 8/2019 y casos prácticos para pymes españolas. Sin spam, prometido.</p>
          <p style="margin: 0; color: #71717a; font-size: 13px;">Si quieres darte de baja, responde a este email con "BAJA" y te eliminamos al instante.</p>
        </div>
      </div>
    </div>
  `

  tasks.push(
    resend.emails.send({
      from,
      to: [email],
      replyTo: SUPPORT_EMAIL,
      subject: "Bienvenido a la newsletter de GTiQ",
      html: welcomeHtml,
      text: `Gracias por suscribirte a la newsletter de GTiQ (${email}).\n\nTe llegarán novedades sobre control horario, registro de jornada y RD 8/2019.\n\nSi quieres darte de baja, responde a este email con "BAJA".`,
    }),
  )

  const results = await Promise.allSettled(tasks)
  const internalOk = results[audienceId ? 1 : 0]
  if (
    internalOk.status === "rejected" ||
    (internalOk.status === "fulfilled" &&
      typeof internalOk.value === "object" &&
      internalOk.value !== null &&
      "error" in internalOk.value &&
      internalOk.value.error)
  ) {
    console.error("[GTiQ] No se pudo notificar suscriptor newsletter:", internalOk)
    return {
      status: "error",
      message: "No hemos podido completar la suscripción. Inténtalo más tarde.",
    }
  }

  return { status: "ok" }
}
