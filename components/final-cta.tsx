"use client"

import { useActionState, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, Loader2, AlertCircle } from "lucide-react"
import { submitLead, type LeadState } from "@/app/actions/submit-lead"
import { track } from "@/lib/analytics"

const SIZES = ["1–5", "6–10", "11–25", "26–50", "+50"] as const

const INITIAL_STATE: LeadState = { status: "idle" }

export function FinalCTA() {
  const [size, setSize] = useState<(typeof SIZES)[number]>("6–10")
  const [state, formAction, isPending] = useActionState(submitLead, INITIAL_STATE)
  const trackedRef = useRef(false)

  const submitted = state.status === "ok"
  const error = state.status === "error" ? state.message : null
  const fields =
    state.status === "error" ? state.fields ?? {} : ({} as Record<string, string>)

  useEffect(() => {
    if (state.status === "ok" && !trackedRef.current) {
      trackedRef.current = true
      track("lead_submitted", {
        form_location: "final_cta",
        empresa_size: size,
      })
    }
  }, [state.status, size])

  return (
    <section
      id="empezar"
      className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.04]"
      style={{ backgroundColor: "#09090B" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246,0.16), transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(59, 130, 246,0.05), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl text-white text-center tracking-tight font-medium leading-[1.05]"
        >
          Empieza a cumplir la ley hoy.
          <br />
          <span className="text-blue-300">En menos de un minuto.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-5 text-zinc-400 text-center text-base sm:text-lg"
        >
          14 días gratis. Sin tarjeta. Sin compromiso.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          action={formAction}
          className="mt-10 mx-auto max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-5 sm:p-7"
        >
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-12 h-12 rounded-full bg-blue-500/15 border border-blue-500/40 grid place-items-center mb-4">
                <Check className="w-6 h-6 text-blue-300" />
              </div>
              <p className="text-white text-xl font-medium tracking-tight">
                ¡Solicitud recibida!
              </p>
              <p className="text-zinc-400 mt-2 max-w-sm">
                En menos de 24 horas recibirás por email tu código de acceso
                para activar tus 14 días gratis.
              </p>
            </div>
          ) : (
            <>
              {/* Honeypot anti-bot — invisible para humanos, los bots lo rellenan */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: 1,
                  height: 1,
                  overflow: "hidden",
                  opacity: 0,
                }}
              >
                <label>
                  Sitio web (no rellenar)
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-xs text-zinc-500">Email de trabajo</span>
                  <input
                    type="email"
                    name="email"
                    required
                    defaultValue={fields.email}
                    placeholder="tu@empresa.com"
                    className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/60"
                  />
                </label>
                <label className="block">
                  <span className="text-xs text-zinc-500">Nombre de la empresa</span>
                  <input
                    type="text"
                    name="empresa"
                    required
                    defaultValue={fields.empresa}
                    placeholder="Mi empresa S.L."
                    className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/60"
                  />
                </label>
              </div>

              <label className="block mt-3">
                <span className="text-xs text-zinc-500">Teléfono de contacto</span>
                <input
                  type="tel"
                  name="telefono"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  pattern="[0-9+\s().-]{6,}"
                  defaultValue={fields.telefono}
                  placeholder="+34 600 000 000"
                  className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/60"
                />
              </label>

              <div className="mt-4">
                <span className="text-xs text-zinc-500">Tamaño del equipo</span>
                <div className="mt-1 flex flex-wrap gap-2">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                        size === s
                          ? "bg-blue-500/15 text-blue-200 border-blue-500/40"
                          : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="size" value={size} />
              </div>

              {error && (
                <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/[0.06] px-3 py-2.5 text-sm text-red-200">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0 text-base shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_12px_32px_-8px_rgba(59,130,246,0.5)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    Crear mi cuenta gratis
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="mt-5 text-center text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                En menos de{" "}
                <span className="text-white font-medium">24 horas</span> recibirás
                por email tu código de acceso para activar tus{" "}
                <span className="text-white font-medium">14 días gratis</span>.
              </p>

              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-500">
                <li className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-400" /> 14 días gratis
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-400" /> Sin tarjeta
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-400" /> Configuración en 5 min
                </li>
              </ul>
            </>
          )}
        </motion.form>
      </div>
    </section>
  )
}
