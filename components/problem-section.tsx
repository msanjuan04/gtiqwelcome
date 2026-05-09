"use client"

import { motion } from "framer-motion"
import { AlertTriangle, ShieldAlert, CircleDollarSign } from "lucide-react"

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Hasta 220.000 € de multa",
    body: "Si la Inspección llega y tu sistema no es trazable e inalterable, las sanciones del RD 8/2019 son brutales.",
  },
  {
    icon: ShieldAlert,
    title: "Biometría = riesgo AEPD",
    body: "Huella y reconocimiento facial son datos especiales. Sin justificación legal, multa garantizada.",
  },
  {
    icon: CircleDollarSign,
    title: "Pagas de más cada mes",
    body: "Sesame, Factorial o Bizneo te cobran por usuario + mínimos mensuales. Para una pyme de 10 personas son 660–990 €/año.",
  },
]

export function ProblemSection() {
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
          ¿Aún fichas con Excel o papel?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-zinc-400 max-w-xl"
        >
          Tres riesgos que se cargan tu margen y tu tranquilidad cada mes.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-red-500/15 bg-gradient-to-b from-red-500/[0.05] to-transparent p-6 sm:p-7 overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(239, 68, 68, 0.08), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/25 flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-white font-medium text-lg sm:text-xl mb-2 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        >
          <a
            href="#empezar"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0 text-sm"
          >
            Empezar prueba de 14 días gratis →
          </a>
          <span className="text-zinc-500 text-sm self-center">
            Configuración en 5 minutos. Sin tarjeta.
          </span>
        </motion.div>
      </div>
    </section>
  )
}
