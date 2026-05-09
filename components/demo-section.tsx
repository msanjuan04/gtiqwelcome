"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Check,
  CalendarDays,
  FileBarChart2,
  Clock,
} from "lucide-react"

type Step = {
  id: string
  badge: string
  title: string
  body: string
  duration: string
  visual: React.ReactNode
}

function FichajeScreen() {
  return (
    <div className="absolute inset-0 grid place-items-center p-8">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-8 w-full max-w-md backdrop-blur">
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
          <Clock className="w-3.5 h-3.5" />
          Mi jornada · Demo GTiQ S.L.
        </div>
        <p className="mt-3 text-4xl sm:text-5xl font-semibold text-white tabular-nums tracking-tight">
          09:24:18
        </p>
        <p className="text-xs text-zinc-500 mt-1">Fuera de jornada</p>
        <button
          type="button"
          aria-label="Fichar entrada"
          className="relative mt-6 w-full h-14 rounded-xl bg-blue-500 text-white font-semibold tracking-tight flex items-center justify-center gap-2"
          style={{
            animation: "gtiq-pulse 2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
          }}
        >
          <span className="text-sm uppercase tracking-wider opacity-80">
            Fichar
          </span>
          <span className="text-base">Entrada</span>
        </button>
        <p className="mt-3 text-xs text-zinc-500 text-center">
          Geofence ✓ · ubicación verificada
        </p>
      </div>
    </div>
  )
}

function VacacionesScreen() {
  return (
    <div className="absolute inset-0 grid place-items-center p-8">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 sm:p-6 w-full max-w-md backdrop-blur">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-zinc-500">Solicitud · 14–18 julio</span>
          <span className="inline-flex items-center gap-1 text-xs text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-full px-2 py-0.5">
            <CalendarDays className="w-3 h-3" /> 5 días
          </span>
        </div>
        <p className="text-white text-base font-medium">María López</p>
        <p className="text-xs text-zinc-500">Departamento de sala</p>

        <div className="mt-5 grid grid-cols-7 gap-1 text-[9px] text-zinc-500">
          {["L", "M", "X", "J", "V", "S", "D"].map((d, i) => (
            <span key={i} className="text-center">
              {d}
            </span>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1">
          {Array.from({ length: 14 }).map((_, i) => {
            const isVac = i >= 0 && i <= 4
            return (
              <div
                key={i}
                className={`h-5 rounded text-[9px] grid place-items-center tabular-nums ${
                  isVac
                    ? "bg-blue-500/30 text-white border border-blue-500/40"
                    : "bg-zinc-900 text-zinc-600"
                }`}
              >
                {14 + i}
              </div>
            )
          })}
        </div>

        <div className="mt-5 flex gap-2">
          <button className="flex-1 px-3 py-2 rounded-lg text-xs font-medium border border-white/10 text-zinc-300 hover:bg-white/5">
            Rechazar
          </button>
          <button className="flex-1 px-3 py-2 rounded-lg text-xs font-medium bg-blue-500 text-white hover:bg-blue-400 inline-flex items-center justify-center gap-1.5">
            <Check className="w-3.5 h-3.5" /> Aprobar
          </button>
        </div>
      </div>
    </div>
  )
}

function InformeScreen() {
  return (
    <div className="absolute inset-0 grid place-items-center p-8">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 backdrop-blur">
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-500">Generando informe…</span>
          <span className="inline-flex items-center gap-1 text-blue-300">
            <FileBarChart2 className="w-3.5 h-3.5" /> RD 8/2019
          </span>
        </div>

        <div className="mt-3 rounded-md bg-white text-zinc-900 p-3 text-[11px]">
          <div className="border-b border-zinc-200 pb-1.5 mb-2 flex items-center justify-between">
            <p className="font-semibold">INFORME RD 8/2019 · Q1 2026</p>
            <span className="text-[9px] bg-blue-500 text-white rounded px-1.5 py-0.5">
              PDF
            </span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-zinc-500 text-[10px]">
                <th className="text-left font-normal">Empleado</th>
                <th className="text-right font-normal">Horas</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["María L.", "168"],
                ["Carlos R.", "172"],
                ["Lucía M.", "164"],
              ].map(([n, h]) => (
                <tr key={n} className="border-t border-zinc-100">
                  <td className="py-1">{n}</td>
                  <td className="py-1 text-right tabular-nums">{h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-3 flex items-center gap-2 text-[11px] text-zinc-400">
          <Check className="w-3.5 h-3.5 text-blue-400" />
          informe-rd-8-2019-Q1.pdf · listo en 8 segundos
        </div>
      </div>
    </div>
  )
}

const STEPS: Step[] = [
  {
    id: "fichar",
    badge: "01",
    title: "Fichar en 1 clic",
    body: "El equipo abre la app, pulsa y listo. Geofence valida que está en el sitio correcto.",
    duration: "1 segundo",
    visual: <FichajeScreen />,
  },
  {
    id: "vacaciones",
    badge: "02",
    title: "Aprobar vacaciones en 5 segundos",
    body: "Solicitud, calendario, aprobación. Sin cadenas de email ni hojas en la nevera.",
    duration: "5 segundos",
    visual: <VacacionesScreen />,
  },
  {
    id: "informe",
    badge: "03",
    title: "Generar informe en 10 segundos",
    body: "PDF con horas, pausas y trazabilidad listo para entregar a Inspección de Trabajo.",
    duration: "10 segundos",
    visual: <InformeScreen />,
  },
]

export function DemoSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % STEPS.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="demo"
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
          <span className="text-zinc-400 text-sm">Demo</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight font-medium leading-[1.1]"
        >
          Velo en 2 minutos.
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Pantalla rotativa */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 relative rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden aspect-video"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(59,130,246,0.12), transparent 65%)",
              }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={STEPS[active].id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                {STEPS[active].visual}
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-center gap-2 text-xs text-zinc-500 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-transparent pt-10">
              <span className="tabular-nums">{STEPS[active].badge}</span>
              <span>·</span>
              <span className="text-zinc-300">{STEPS[active].title}</span>
              <span className="ml-auto inline-flex items-center gap-1 text-blue-300">
                <Clock className="w-3 h-3" /> {STEPS[active].duration}
              </span>
            </div>
          </motion.div>

          {/* Steps clicables */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {STEPS.map((s, i) => {
              const isActive = i === active
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-xl border px-5 py-4 transition-colors ${
                    isActive
                      ? "border-blue-500/40 bg-blue-500/[0.05]"
                      : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-full grid place-items-center text-[11px] font-medium tabular-nums ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {s.badge}
                    </span>
                    <span
                      className={`font-medium tracking-tight ${
                        isActive ? "text-white" : "text-zinc-300"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-500 pl-10">{s.body}</p>
                </button>
              )
            })}

            <a
              href="#empezar"
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0 text-sm"
            >
              Empezar prueba de 14 días
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gtiq-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.55);
          }
          70% {
            box-shadow: 0 0 0 24px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
      `}</style>
    </section>
  )
}
