"use client"

import { motion } from "framer-motion"
import { Settings2, Smartphone, FileCheck2 } from "lucide-react"

const STEPS = [
  {
    n: "01",
    icon: Settings2,
    title: "Configura tu empresa",
    body: "Añade empleados y horarios en 5 minutos. Te ayudamos en el onboarding.",
  },
  {
    n: "02",
    icon: Smartphone,
    title: "Tu equipo ficha desde donde quiera",
    body: "Móvil, web, QR, kiosco o geofencing. Tú eliges.",
  },
  {
    n: "03",
    icon: FileCheck2,
    title: "Genera informes y duerme tranquilo",
    body: "PDF listo para Inspección de Trabajo con un clic. Trazabilidad total.",
  },
]

export function SolutionSection() {
  return (
    <section
      id="producto"
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
          <span className="text-zinc-400 text-sm">Cómo funciona</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl tracking-tight font-medium leading-[1.1]"
        >
          Fichar nunca fue tan fácil. Cumplir la ley, tampoco.
        </motion.h2>

        <div className="mt-14 sm:mt-16 relative">
          <div
            className="hidden md:block absolute top-9 left-[16.66%] right-[16.66%] h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(59, 130, 246,0.5), transparent)",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative w-[72px] h-[72px] rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 shadow-[0_0_0_4px_#09090B]">
                  <span className="absolute -top-2 -right-2 text-[10px] font-medium text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-full px-2 py-0.5">
                    {s.n}
                  </span>
                  <s.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-white font-medium text-xl mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base max-w-sm">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
