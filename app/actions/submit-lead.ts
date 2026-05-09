"use server"

import { headers } from "next/headers"
import { Resend } from "resend"

export type LeadState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string; fields?: Record<string, string> }

const SIZES = ["1–5", "6–10", "11–25", "26–50", "+50"] as const
type Size = (typeof SIZES)[number]

/**
 * Rate limit en memoria: una sola IP solo puede enviar el formulario
 * cada RATE_LIMIT_MS. Suficiente para una landing low-traffic.
 * Para tráfico alto o despliegue multi-instancia, sustituir por Upstash/Redis.
 */
const RATE_LIMIT_MS = 30_000
const lastSubmissionByIp = new Map<string, number>()

async function getClientIp(): Promise<string> {
  const h = await headers()
  const xff = h.get("x-forwarded-for")
  if (xff) return xff.split(",")[0]?.trim() ?? "unknown"
  return h.get("x-real-ip") ?? "unknown"
}

function pruneRateLimitMap(now: number) {
  // Evita que el Map crezca sin control en procesos longevos
  if (lastSubmissionByIp.size <= 500) return
  for (const [ip, ts] of lastSubmissionByIp) {
    if (now - ts > RATE_LIMIT_MS * 4) lastSubmissionByIp.delete(ip)
  }
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

const SUPPORT_EMAIL = "hola@gneraitiq.com"

type LeadFields = {
  email: string
  empresa: string
  telefono: string
  size: Size
}

function buildInternalEmail(fields: LeadFields) {
  const { email, empresa, telefono, size } = fields
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; background: #09090B; color: #e4e4e7; padding: 32px 24px;">
      <div style="max-width: 560px; margin: 0 auto; background: #18181b; border: 1px solid #27272a; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, rgba(59,130,246,0.18), rgba(59,130,246,0.05)); padding: 24px 28px; border-bottom: 1px solid #27272a;">
          <p style="margin: 0; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: #93c5fd;">Nueva solicitud · GTiQ</p>
          <h1 style="margin: 8px 0 0; font-size: 22px; line-height: 1.2; color: #ffffff; font-weight: 600;">${escapeHtml(empresa)}</h1>
        </div>
        <div style="padding: 24px 28px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tbody>
              <tr>
                <td style="padding: 10px 0; color: #71717a; width: 110px;">Empresa</td>
                <td style="padding: 10px 0; color: #ffffff;">${escapeHtml(empresa)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #71717a; border-top: 1px solid #27272a;">Email</td>
                <td style="padding: 10px 0; color: #ffffff; border-top: 1px solid #27272a;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #93c5fd; text-decoration: none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #71717a; border-top: 1px solid #27272a;">Teléfono</td>
                <td style="padding: 10px 0; color: #ffffff; border-top: 1px solid #27272a;">
                  <a href="tel:${escapeHtml(telefono.replace(/\s/g, ""))}" style="color: #93c5fd; text-decoration: none;">${escapeHtml(telefono)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #71717a; border-top: 1px solid #27272a;">Tamaño</td>
                <td style="padding: 10px 0; color: #ffffff; border-top: 1px solid #27272a;">${escapeHtml(size)} empleados</td>
              </tr>
            </tbody>
          </table>
          <p style="margin: 24px 0 0; font-size: 12px; color: #52525b;">
            Recibido desde la web de GTiQ · ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}
          </p>
        </div>
      </div>
    </div>
  `

  const text = [
    `Nueva solicitud GTiQ`,
    ``,
    `Empresa: ${empresa}`,
    `Email: ${email}`,
    `Teléfono: ${telefono}`,
    `Tamaño: ${size} empleados`,
    ``,
    `Recibido: ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}`,
  ].join("\n")

  return { html, text }
}

function buildUserConfirmationEmail(fields: LeadFields) {
  const { email, empresa, telefono, size } = fields
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; background: #09090B; color: #e4e4e7; padding: 32px 24px;">
      <div style="max-width: 560px; margin: 0 auto; background: #18181b; border: 1px solid #27272a; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, rgba(59,130,246,0.20), rgba(59,130,246,0.04)); padding: 32px 28px; border-bottom: 1px solid #27272a; text-align: center;">
          <p style="margin: 0; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: #93c5fd;">GTiQ · Solicitud recibida</p>
          <h1 style="margin: 12px 0 0; font-size: 26px; line-height: 1.2; color: #ffffff; font-weight: 600;">¡Gracias, ${escapeHtml(empresa)}!</h1>
          <p style="margin: 12px 0 0; font-size: 15px; color: #a1a1aa; line-height: 1.5;">
            Hemos recibido tu solicitud para empezar tu prueba gratuita de 14 días.
          </p>
        </div>

        <div style="padding: 28px;">
          <div style="background: rgba(59,130,246,0.06); border: 1px solid rgba(59,130,246,0.25); border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 13px; color: #93c5fd; letter-spacing: 0.05em;">EN MENOS DE 24 HORAS</p>
            <p style="margin: 8px 0 0; font-size: 16px; color: #ffffff; line-height: 1.5;">
              Recibirás por email tu <strong style="color: #ffffff;">código de acceso</strong> para activar la cuenta y empezar a fichar al instante.
            </p>
          </div>

          <p style="margin: 0 0 12px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #71717a;">Resumen de tu solicitud</p>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; border: 1px solid #27272a; border-radius: 12px; overflow: hidden;">
            <tbody>
              <tr>
                <td style="padding: 12px 16px; color: #71717a; width: 110px; background: #1f1f23;">Empresa</td>
                <td style="padding: 12px 16px; color: #ffffff; background: #18181b;">${escapeHtml(empresa)}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; color: #71717a; background: #1f1f23; border-top: 1px solid #27272a;">Email</td>
                <td style="padding: 12px 16px; color: #ffffff; background: #18181b; border-top: 1px solid #27272a;">${escapeHtml(email)}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; color: #71717a; background: #1f1f23; border-top: 1px solid #27272a;">Teléfono</td>
                <td style="padding: 12px 16px; color: #ffffff; background: #18181b; border-top: 1px solid #27272a;">${escapeHtml(telefono)}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; color: #71717a; background: #1f1f23; border-top: 1px solid #27272a;">Tamaño del equipo</td>
                <td style="padding: 12px 16px; color: #ffffff; background: #18181b; border-top: 1px solid #27272a;">${escapeHtml(size)} empleados</td>
              </tr>
            </tbody>
          </table>

          <p style="margin: 24px 0 0; font-size: 14px; color: #a1a1aa; line-height: 1.6;">
            Mientras tanto, si tienes cualquier duda escríbenos a
            <a href="mailto:${SUPPORT_EMAIL}" style="color: #93c5fd; text-decoration: none;">${SUPPORT_EMAIL}</a>
            y te respondemos cuanto antes.
          </p>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #27272a; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #52525b; line-height: 1.5;">
              GTiQ · Control horario y registro de jornada<br>
              Hecho en Barcelona / Mataró por GNERAI
            </p>
          </div>
        </div>
      </div>
    </div>
  `

  const text = [
    `¡Gracias, ${empresa}!`,
    ``,
    `Hemos recibido tu solicitud para empezar tu prueba gratuita de 14 días.`,
    ``,
    `EN MENOS DE 24 HORAS recibirás por email tu código de acceso para activar la cuenta y empezar a fichar al instante.`,
    ``,
    `Resumen de tu solicitud:`,
    `  Empresa: ${empresa}`,
    `  Email: ${email}`,
    `  Teléfono: ${telefono}`,
    `  Tamaño del equipo: ${size} empleados`,
    ``,
    `Si tienes cualquier duda escríbenos a ${SUPPORT_EMAIL}.`,
    ``,
    `GTiQ · Control horario y registro de jornada`,
    `Hecho en Barcelona / Mataró por GNERAI`,
  ].join("\n")

  return { html, text }
}

export async function submitLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  // Honeypot: campo invisible que solo los bots rellenan.
  const honeypot = (formData.get("website") ?? "").toString().trim()
  if (honeypot.length > 0) {
    console.warn("[GTiQ] Honeypot activado, descartando envío silenciosamente.")
    // Devolvemos ok para que el bot no detecte el filtro.
    return { status: "ok" }
  }

  const email = (formData.get("email") ?? "").toString().trim()
  const empresa = (formData.get("empresa") ?? "").toString().trim()
  const telefono = (formData.get("telefono") ?? "").toString().trim()
  const size = (formData.get("size") ?? "").toString().trim() as Size

  const fields = { email, empresa, telefono, size }

  // Rate limit por IP
  const ip = await getClientIp()
  const now = Date.now()
  const last = lastSubmissionByIp.get(ip)
  if (last && now - last < RATE_LIMIT_MS) {
    return {
      status: "error",
      message:
        "Has enviado el formulario hace muy poco. Espera unos segundos antes de reintentar.",
      fields,
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Email no válido.", fields }
  }
  if (empresa.length < 2) {
    return {
      status: "error",
      message: "Indica el nombre de tu empresa.",
      fields,
    }
  }
  if (telefono.replace(/\D/g, "").length < 6) {
    return {
      status: "error",
      message: "Indica un teléfono válido.",
      fields,
    }
  }
  if (!SIZES.includes(size)) {
    return {
      status: "error",
      message: "Selecciona el tamaño de tu equipo.",
      fields,
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[GTiQ] RESEND_API_KEY no está configurada en el servidor.")
    return {
      status: "error",
      message:
        "Configuración de email pendiente. Vuelve a intentarlo en unos minutos.",
      fields,
    }
  }

  const internalTo = (process.env.LEAD_TO_EMAIL ?? SUPPORT_EMAIL)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
  const from = process.env.LEAD_FROM_EMAIL ?? "GTiQ <onboarding@resend.dev>"

  // Marcamos antes del envío para que un retry rápido también quede limitado
  lastSubmissionByIp.set(ip, now)
  pruneRateLimitMap(now)

  const internal = buildInternalEmail(fields)
  const userMail = buildUserConfirmationEmail(fields)

  const resend = new Resend(apiKey)

  const [internalResult, userResult] = await Promise.allSettled([
    resend.emails.send({
      from,
      to: internalTo,
      replyTo: email,
      subject: `Nueva solicitud GTiQ · ${empresa}`,
      html: internal.html,
      text: internal.text,
    }),
    resend.emails.send({
      from,
      to: [email],
      replyTo: SUPPORT_EMAIL,
      subject: "Hemos recibido tu solicitud · GTiQ",
      html: userMail.html,
      text: userMail.text,
    }),
  ])

  const internalFailed =
    internalResult.status === "rejected" ||
    (internalResult.status === "fulfilled" && internalResult.value.error)

  if (internalFailed) {
    console.error(
      "[GTiQ] No se pudo enviar el lead interno:",
      internalResult.status === "rejected"
        ? internalResult.reason
        : internalResult.value.error,
    )
    return {
      status: "error",
      message: "No hemos podido enviar el formulario. Inténtalo más tarde.",
      fields,
    }
  }

  if (
    userResult.status === "rejected" ||
    (userResult.status === "fulfilled" && userResult.value.error)
  ) {
    console.warn(
      "[GTiQ] El lead se ha capturado, pero la confirmación al usuario falló:",
      userResult.status === "rejected"
        ? userResult.reason
        : userResult.value.error,
    )
    // No bloqueamos: el lead ya está en nuestra bandeja.
  }

  return { status: "ok" }
}
