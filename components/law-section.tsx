"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Scale } from "lucide-react"

const ROWS: { law: string; gtiq: string }[] = [
  {
    law: "Registro diario de la jornada de cada trabajador, con hora exacta de inicio y fin.",
    gtiq: "Fichaje multidispositivo (móvil, web, kiosco, QR) con sello de hora de servidor en UE.",
  },
  {
    law: "Conservación de los registros durante un mínimo de 4 años.",
    gtiq: "Almacenamiento cifrado en servidores en el EEE, con copias de seguridad diarias.",
  },
  {
    law: "Acceso para Inspección de Trabajo, representantes legales y empleados.",
    gtiq: "Exportación PDF/Excel con un clic y portal del empleado con sus horas en tiempo real.",
  },
  {
    law: "Sistema fiable, objetivo, accesible y no manipulable.",
    gtiq: "Log inmutable con hash verificable: cualquier modificación queda trazada y firmada.",
  },
  {
    law: "Prohibición de usar biometría sin justificación legal estricta (AEPD).",
    gtiq: "PIN, QR y geolocalización. Cero biometría. Cero riesgo de sanción de la AEPD.",
  },
  {
    law: "Información transparente a la representación legal de los trabajadores.",
    gtiq: "Cada empleado ve sus horas, pausas y resúmenes desde su app sin pedírtelo.",
  },
]

export function LawSection() {
  return (
    <section
      id="ley"
      className="relative py-24 sm:py-32 border-t border-white/[0.04]"
      style={{ backgroundColor: "#09090B" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(59,130,246,0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-5"
        >
          <Scale className="w-4 h-4 text-blue-400" />
          <span className="text-zinc-400 text-sm">Real Decreto-ley 8/2019</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl tracking-tight font-medium leading-[1.1]"
        >
          Cumple el RD 8/2019 sin tener que aprenderte la ley.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-zinc-400 max-w-2xl text-base sm:text-lg"
        >
          Te traducimos el real decreto y la guía del Ministerio en una checklist clara:
          esto es lo que pide la normativa y esto es exactamente lo que GTiQ hace por ti.
        </motion.p>

        {/* Desktop: tabla en 2 columnas */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden md:block mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden"
        >
          <div className="grid grid-cols-2 text-xs uppercase tracking-wider text-zinc-500">
            <div className="px-6 py-4 border-r border-zinc-800">
              Lo que exige la ley
            </div>
            <div className="px-6 py-4 bg-blue-500/[0.04] text-blue-300">
              Cómo lo resuelve GTiQ
            </div>
          </div>

          {ROWS.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${
                i !== ROWS.length - 1 ? "border-b border-zinc-800/70" : ""
              }`}
            >
              <div className="px-6 py-6 border-r border-zinc-800/70 flex items-start gap-3">
                <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-md bg-zinc-800 text-zinc-400 text-xs font-medium tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-zinc-300 text-base leading-relaxed">
                  {row.law}
                </p>
              </div>
              <div className="px-6 py-6 bg-blue-500/[0.03] flex items-start gap-3">
                <Check className="mt-1 w-5 h-5 text-blue-400 shrink-0" />
                <p className="text-white text-base leading-relaxed">
                  {row.gtiq}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile: cards individuales */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:hidden mt-12 grid gap-3"
        >
          {ROWS.map((row, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden"
            >
              <div className="px-5 py-4 flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-md bg-zinc-800 text-zinc-400 text-xs font-medium tabular-nums shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5">
                    Lo que exige la ley
                  </p>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {row.law}
                  </p>
                </div>
              </div>
              <div className="px-5 py-4 bg-blue-500/[0.05] border-t border-zinc-800/70 flex items-start gap-3">
                <Check className="mt-0.5 w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-blue-300 mb-1.5">
                    Cómo lo resuelve GTiQ
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    {row.gtiq}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        >
          <a
            href="#empezar"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0 text-sm"
          >
            Empezar a cumplir la ley en 5 minutos
            <ArrowRight className="w-4 h-4" />
          </a>
          <span className="text-zinc-500 text-sm self-center">
            Sin tarjeta · Sin compromiso · Migración gratuita desde Excel o Sesame.
          </span>
        </motion.div>
      </div>
    </section>
  )
}
