"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

type Tier = {
  code: string
  size: string
  price: string
  monthEquiv?: string
  cta: string
  popular?: boolean
}

const TIERS: Tier[] = [
  {
    code: "Tramo 01",
    size: "0–5 trabajadores",
    price: "149 €/año",
    monthEquiv: "~12 €/mes",
    cta: "Empezar 14 días",
  },
  {
    code: "Tramo 02",
    size: "6–10 trabajadores",
    price: "249 €/año",
    monthEquiv: "~21 €/mes",
    cta: "Empezar 14 días",
  },
  {
    code: "Tramo 03",
    size: "11–25 trabajadores",
    price: "499 €/año",
    monthEquiv: "~42 €/mes",
    cta: "Empezar 14 días",
    popular: true,
  },
  {
    code: "Tramo 04",
    size: "26–50 trabajadores",
    price: "899 €/año",
    monthEquiv: "~75 €/mes",
    cta: "Empezar 14 días",
  },
  {
    code: "Tramo 05",
    size: "+50 trabajadores",
    price: "Consultar",
    monthEquiv: "Plan a medida",
    cta: "Hablar con ventas",
  },
]

const INCLUDED = [
  "Fichaje multidispositivo",
  "Geolocalización",
  "Vacaciones y ausencias",
  "Informes Inspección",
  "Soporte ES/CAT",
  "Servidores UE",
  "Actualizaciones gratis",
]

export function PricingSection() {
  return (
    <section
      id="precios"
      className="relative py-24 sm:py-32 border-t border-white/[0.04]"
      style={{ backgroundColor: "#09090B" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-zinc-400 text-sm">Precios</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl tracking-tight font-medium leading-[1.1]"
        >
          Precios honestos. Sin mensualidades. Sin sorpresas.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-zinc-400 max-w-xl"
        >
          Pagas una vez al año. Lo que ves es lo que pagas.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl border p-5 sm:p-6 flex flex-col ${
                t.popular
                  ? "border-2 border-blue-500/60 bg-blue-500/[0.07] lg:scale-[1.04] lg:z-10 shadow-[0_0_0_1px_rgba(59,130,246,0.2),0_24px_60px_-20px_rgba(59,130,246,0.4)]"
                  : "border border-zinc-800 bg-zinc-900/40"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider bg-blue-500 text-white font-medium">
                  Más popular
                </span>
              )}
              <p className="text-xs uppercase tracking-wider text-zinc-500">{t.code}</p>
              <p className="mt-1 text-sm text-zinc-300">{t.size}</p>
              <div className="mt-5">
                <p className="text-2xl sm:text-[28px] font-medium text-white tracking-tight">
                  {t.price}
                </p>
                {t.monthEquiv && (
                  <p className="text-xs text-zinc-500 mt-1">{t.monthEquiv}</p>
                )}
              </div>
              <a
                href="#empezar"
                className={`mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition hover:-translate-y-px active:translate-y-0 ${
                  t.popular
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                {t.cta} →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
        >
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">
            Todos los tramos incluyen
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-6">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <p className="mt-6 text-sm text-zinc-500 text-center sm:text-left">
          14 días gratis. Sin tarjeta. Cancela cuando quieras durante la prueba.
        </p>
      </div>
    </section>
  )
}
