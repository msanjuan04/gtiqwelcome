"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Sofa,
  Cpu,
  type LucideIcon,
} from "lucide-react"

type Quote = {
  text: string
  company: string
  role: string
  sector: string
  metric?: string
  partner?: boolean
  Icon: LucideIcon
}

// TODO: cuando los clientes envíen citas firmadas, sustituir el `text`.
const QUOTES: Quote[] = [
  {
    text: "El profesorado ficha desde el aula sin papeleos. Las horas cuadran con la nómina al cierre del mes y la dirección lo ve en tiempo real.",
    company: "Idiomes",
    role: "Dirección académica",
    sector: "Formación · Academia de idiomas",
    metric: "Cero papeleo mensual",
    Icon: GraduationCap,
  },
  {
    text: "Pasamos de Excel y hojas en papel a un sistema serio en una tarde. La Inspección dejó de ser una pesadilla.",
    company: "Terrazea",
    role: "Dirección",
    sector: "Exteriorismo",
    metric: "Onboarding en 1 tarde",
    Icon: Sofa,
  },
  {
    text: "Como partner tecnológico recomendamos GTiQ a nuestros clientes: sin biometría, sin pagar por usuario y soporte en español.",
    company: "Sintelec",
    role: "Dirección técnica",
    sector: "Tecnología",
    partner: true,
    Icon: Cpu,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32" style={{ backgroundColor: "#09090B" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl tracking-tight font-medium leading-[1.1]"
        >
          Pymes españolas que ya duermen tranquilas.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-zinc-400 max-w-xl text-sm"
        >
          Casos reales de empresas que ya fichan con GTiQ.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {QUOTES.map((q) => (
            <motion.figure
              key={q.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7 flex flex-col"
            >
              <blockquote className="text-zinc-200 text-lg sm:text-xl leading-snug font-medium tracking-tight">
                “{q.text}”
              </blockquote>

              {q.partner ? (
                <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-500/[0.10] px-2.5 py-1 text-xs text-blue-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Empresa colaboradora
                </span>
              ) : q.metric ? (
                <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-2.5 py-1 text-xs text-blue-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {q.metric}
                </span>
              ) : null}

              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-zinc-800/70">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/25 to-blue-500/5 border border-blue-500/30 grid place-items-center text-blue-300 shrink-0">
                  <q.Icon className="w-4 h-4" strokeWidth={1.6} />
                </span>
                <span className="flex-1">
                  <span className="block text-sm text-white font-medium">
                    {q.company}
                  </span>
                  <span className="block text-xs text-zinc-500">
                    {q.role} · {q.sector}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
