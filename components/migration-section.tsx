"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Settings2, Rocket } from "lucide-react"

const STEPS = [
  {
    icon: Download,
    title: "Exportamos tus datos",
    body: "Sacamos un volcado limpio de tu Sesame, Factorial, Bizneo, TramitApp o el Excel que tengas hoy.",
    duration: "Menos de 1 hora",
  },
  {
    icon: Settings2,
    title: "Configuramos GTiQ por ti",
    body: "Importamos empleados, turnos, vacaciones, calendarios y políticas. Te lo dejamos listo para fichar.",
    duration: "Menos de 24 horas",
  },
  {
    icon: Rocket,
    title: "Acompañamos el despliegue",
    body: "Sesión de onboarding con tu equipo y soporte directo durante las primeras 2 semanas.",
    duration: "1ª y 2ª semana",
  },
]

export function MigrationSection() {
  return (
    <section
      id="migracion"
      className="relative py-24 sm:py-32 border-t border-white/[0.04]"
      style={{ backgroundColor: "#09090B" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(59,130,246,0.08), transparent 70%)",
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
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-zinc-400 text-sm">
            Migración desde tu software actual
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl tracking-tight font-medium leading-[1.1]"
        >
          ¿Vienes de Sesame, Factorial o un Excel?{" "}
          <span className="text-blue-300">
            Migramos tus datos gratis en menos de 24 horas.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-zinc-400 max-w-2xl text-base sm:text-lg"
        >
          No tienes que tocar nada. Nuestro equipo se encarga del traspaso
          completo: empleados, fichajes históricos, vacaciones acumuladas,
          turnos y políticas internas.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 inline-flex items-center justify-center text-blue-300 mb-5">
                <s.icon className="w-5 h-5" strokeWidth={1.6} />
              </div>
              <h3 className="text-white font-medium text-lg sm:text-xl tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-zinc-400 text-sm sm:text-base leading-relaxed flex-1">
                {s.body}
              </p>
              <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-2.5 py-1 text-xs text-blue-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {s.duration}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        >
          <a
            href="#empezar"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0 text-sm"
          >
            Empezar mi migración gratis
            <ArrowRight className="w-4 h-4" />
          </a>
          <span className="text-zinc-500 text-sm self-center">
            Sin coste · Sin paradas · Te avisamos antes del corte.
          </span>
        </motion.div>
      </div>
    </section>
  )
}
