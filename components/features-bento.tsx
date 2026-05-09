"use client"

import { motion } from "framer-motion"
import {
  Smartphone,
  MapPin,
  Palmtree,
  FileBarChart2,
  ShieldCheck,
  CalendarClock,
  History,
  Globe2,
  Monitor,
  Tablet,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  desc: string
  span?: string
  visual: React.ReactNode
}

function MultiDeviceVisual() {
  return (
    <div className="absolute inset-0 flex items-end justify-center pb-1 px-2">
      <div className="relative flex items-end gap-2 sm:gap-4 scale-75 sm:scale-90 lg:scale-100 origin-bottom">
        {/* Laptop */}
        <div className="relative w-[150px]">
          <div className="rounded-md bg-zinc-900 border border-zinc-700 p-1.5 shadow-2xl">
            <div className="rounded-sm overflow-hidden h-[88px] bg-[#09090B] flex">
              <div className="w-1/4 bg-zinc-900 border-r border-zinc-800 p-1 flex flex-col gap-0.5">
                <div className="h-1 w-3 bg-blue-500/60 rounded-full" />
                <div className="h-0.5 w-5 bg-zinc-800 rounded-full" />
                <div className="h-0.5 w-5 bg-zinc-800 rounded-full" />
              </div>
              <div className="flex-1 p-1.5 flex flex-col gap-1">
                <div className="h-0.5 w-8 bg-zinc-700 rounded-full" />
                <div className="flex-1 mt-1 grid grid-cols-2 gap-0.5">
                  <div className="rounded-sm bg-zinc-900 border border-zinc-800" />
                  <div className="rounded-sm bg-blue-500/15 border border-blue-500/30 grid place-items-center">
                    <Monitor className="w-3 h-3 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-1 mx-3 bg-zinc-800 rounded-b" />
        </div>

        {/* Tablet (kiosco) */}
        <div className="w-[68px] h-[90px] rounded-md bg-zinc-900 border border-zinc-700 p-1 shadow-2xl flex flex-col">
          <div className="h-0.5 w-3 mx-auto bg-zinc-800 rounded-full" />
          <div className="flex-1 mt-1 rounded-sm bg-[#09090B] border border-zinc-800 grid place-items-center">
            <Tablet className="w-4 h-4 text-zinc-500" />
          </div>
        </div>

        {/* Phone */}
        <div className="w-9 h-[80px] rounded-lg bg-zinc-900 border border-zinc-700 p-0.5 shadow-2xl flex flex-col">
          <div className="h-0.5 w-2 mx-auto bg-zinc-800 rounded-full mt-0.5" />
          <div className="flex-1 mt-1 rounded-md bg-[#09090B] grid place-items-center relative">
            <span className="absolute inset-2 rounded-full bg-blue-500/20 animate-pulse" />
            <span className="relative w-3 h-3 rounded-full bg-blue-500" />
          </div>
        </div>

        {/* QR */}
        <div className="w-12 h-12 rounded-md bg-white p-1 shadow-2xl">
          <svg viewBox="0 0 7 7" className="w-full h-full text-zinc-900" fill="currentColor">
            <rect x="0" y="0" width="2" height="2" />
            <rect x="3" y="0" width="1" height="1" />
            <rect x="5" y="0" width="2" height="2" />
            <rect x="0" y="3" width="1" height="1" />
            <rect x="2" y="3" width="2" height="1" />
            <rect x="5" y="3" width="1" height="2" />
            <rect x="0" y="5" width="2" height="2" />
            <rect x="3" y="5" width="1" height="1" />
            <rect x="5" y="5" width="1" height="1" />
            <rect x="6" y="6" width="1" height="1" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function GeofenceVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Map grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(63, 63, 70, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(63, 63, 70, 0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Streets */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
        <path
          d="M0 80 Q60 95 120 75 T200 90"
          stroke="rgba(113,113,122,0.5)"
          strokeWidth="6"
          fill="none"
        />
        <path
          d="M40 0 Q55 80 35 200"
          stroke="rgba(113,113,122,0.4)"
          strokeWidth="5"
          fill="none"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <div
            className="absolute -inset-12 rounded-full border border-blue-500/40 animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)",
            }}
          />
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-blue-500 text-white shadow-[0_0_0_5px_rgba(59,130,246,0.25)]">
            <MapPin className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  )
}

function CalendarVisual() {
  const days = Array.from({ length: 28 }, (_, i) => i + 1)
  const vac = new Set([8, 9, 10, 11, 12])
  const today = 15
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[200px]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-medium text-white">Agosto 2026</span>
          <span className="text-[9px] text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-full px-1.5 py-0.5">
            5 días
          </span>
        </div>
        <div className="grid grid-cols-7 gap-1 text-[8px] text-zinc-500 mb-1">
          {["L", "M", "X", "J", "V", "S", "D"].map((d, i) => (
            <span key={i} className="text-center">
              {d}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((d) => (
            <div
              key={d}
              className={`h-5 rounded-[4px] grid place-items-center text-[9px] tabular-nums ${
                vac.has(d)
                  ? "bg-blue-500/30 text-white border border-blue-500/40"
                  : d === today
                    ? "bg-white/10 text-white"
                    : "text-zinc-500"
              }`}
            >
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ReportVisual() {
  return (
    <div className="absolute inset-0 flex items-end justify-center pb-2 px-4 sm:px-8">
      <div className="w-full max-w-[300px] rounded-md bg-white text-zinc-900 p-3 shadow-2xl text-[10px]">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-1.5 mb-2">
          <div>
            <p className="font-semibold tracking-tight">INFORME RD 8/2019</p>
            <p className="text-zinc-500 text-[9px]">Demo GTiQ S.L. · Q1 2026</p>
          </div>
          <span className="text-[9px] bg-blue-500 text-white rounded px-1.5 py-0.5">
            PDF
          </span>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-zinc-500 text-[9px]">
              <th className="text-left font-normal">Empleado</th>
              <th className="text-right font-normal">Horas</th>
              <th className="text-right font-normal">Pausas</th>
            </tr>
          </thead>
          <tbody className="text-[9px]">
            {[
              ["María L.", "168", "4"],
              ["Carlos R.", "172", "3"],
              ["Lucía M.", "164", "5"],
              ["Pol G.", "170", "4"],
            ].map(([n, h, p]) => (
              <tr key={n} className="border-t border-zinc-100">
                <td className="py-1">{n}</td>
                <td className="py-1 text-right tabular-nums">{h}</td>
                <td className="py-1 text-right tabular-nums">{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function NoBiometricsVisual() {
  return (
    <div className="absolute inset-0 grid place-items-center px-4">
      <div className="relative grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-[220px]">
        {[
          {
            label: "PIN",
            content: (
              <div className="flex flex-col gap-0.5 mt-0.5">
                <div className="flex justify-center gap-0.5">
                  {[0, 0, 0, 0].map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-blue-400/80"
                    />
                  ))}
                </div>
              </div>
            ),
          },
          {
            label: "QR",
            content: (
              <svg viewBox="0 0 5 5" className="w-7 h-7 mx-auto text-blue-400 mt-0.5" fill="currentColor">
                <rect width="2" height="2" />
                <rect x="3" width="2" height="2" />
                <rect y="3" width="2" height="2" />
                <rect x="3" y="3" width="1" height="1" />
                <rect x="4" y="4" width="1" height="1" />
              </svg>
            ),
          },
          {
            label: "GEO",
            content: (
              <MapPin className="w-6 h-6 mx-auto text-blue-400 mt-0.5" />
            ),
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-zinc-700 bg-zinc-900/80 p-2 sm:p-3 text-center"
          >
            <span className="text-[9px] uppercase tracking-wider text-zinc-500">
              {item.label}
            </span>
            <div className="mt-1">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ShiftsVisual() {
  const shifts = [
    [40, 70],
    [40, 70],
    [55, 0],
    [40, 70],
    [55, 70],
    [0, 40],
    [0, 0],
  ]
  return (
    <div className="absolute inset-0 flex items-end justify-center pb-2 px-3 gap-1 sm:gap-1.5">
      {shifts.map(([m, t], i) => (
        <div key={i} className="flex flex-col gap-0.5 items-center">
          <div className="flex flex-col gap-0.5 justify-end h-[70px]">
            {t > 0 && (
              <div
                className="w-3 sm:w-4 rounded-sm bg-blue-500/70"
                style={{ height: `${t * 0.5}px` }}
              />
            )}
            {m > 0 && (
              <div
                className="w-3 sm:w-4 rounded-sm bg-blue-500"
                style={{ height: `${m * 0.5}px` }}
              />
            )}
          </div>
          <span className="text-[9px] text-zinc-600">
            {["L", "M", "X", "J", "V", "S", "D"][i]}
          </span>
        </div>
      ))}
    </div>
  )
}

function TraceabilityVisual() {
  const rows = [
    { t: "08:02", e: "Entrada", h: "a7e1" },
    { t: "13:15", e: "Pausa", h: "b94d" },
    { t: "14:00", e: "Reanud.", h: "c2f8" },
  ]
  return (
    <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4">
      <div className="w-full max-w-[260px] space-y-1.5">
        {rows.map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-[10px] font-mono bg-zinc-900/80 border border-zinc-800 rounded px-2 py-1.5"
          >
            <span className="text-blue-300 tabular-nums">{r.t}</span>
            <span className="text-zinc-300">{r.e}</span>
            <span className="ml-auto text-zinc-500 text-[9px]">#sha {r.h}</span>
          </div>
        ))}
        <div className="text-[9px] text-zinc-600 text-center pt-1">
          Log inmutable · verificable
        </div>
      </div>
    </div>
  )
}

function EUVisual() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative">
        <div
          className="absolute -inset-6 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)",
          }}
        />
        <div className="relative w-20 h-20 rounded-full border border-blue-500/40 grid place-items-center bg-zinc-950">
          <Globe2 className="w-9 h-9 text-blue-300" strokeWidth={1.4} />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] text-blue-300 whitespace-nowrap">
          EEE · RGPD
        </div>
      </div>
    </div>
  )
}

const FEATURES: Feature[] = [
  {
    icon: Smartphone,
    title: "Fichaje multidispositivo",
    desc: "Móvil, web, tablet kiosco y QR dinámico.",
    span: "lg:col-span-2",
    visual: <MultiDeviceVisual />,
  },
  {
    icon: MapPin,
    title: "Geofencing inteligente",
    desc: "Solo se ficha desde donde tú decides.",
    visual: <GeofenceVisual />,
  },
  {
    icon: Palmtree,
    title: "Vacaciones y ausencias",
    desc: "Solicita, aprueba y visualiza en un calendario.",
    visual: <CalendarVisual />,
  },
  {
    icon: FileBarChart2,
    title: "Informes listos para Inspección",
    desc: "Exporta en PDF/Excel con un clic.",
    span: "lg:col-span-2",
    visual: <ReportVisual />,
  },
  {
    icon: ShieldCheck,
    title: "Sin biometría arriesgada",
    desc: "PIN, QR y geolocalización. 100% RGPD.",
    visual: <NoBiometricsVisual />,
  },
  {
    icon: CalendarClock,
    title: "Turnos y horarios flexibles",
    desc: "Cuadrantes adaptados a tu convenio.",
    visual: <ShiftsVisual />,
  },
  {
    icon: History,
    title: "Trazabilidad total",
    desc: "Log inmutable con marcas de tiempo.",
    visual: <TraceabilityVisual />,
  },
  {
    icon: Globe2,
    title: "Servidores en la UE",
    desc: "Tus datos nunca salen del EEE.",
    visual: <EUVisual />,
  },
]

export function FeaturesBento() {
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
Lo que de verdad usarás. Sin pagar por lo que sobra.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-zinc-400 max-w-xl"
        >
          Funcionalidades pensadas para pymes, no para corporaciones que pagan licencias por persona.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] sm:auto-rows-[320px] gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors flex flex-col ${f.span ?? ""}`}
            >
              <div className="relative flex-1 overflow-hidden">
                {f.visual}
                <div
                  className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(9,9,11,0.95), transparent)",
                  }}
                />
              </div>
              <div className="p-5 sm:p-6 border-t border-zinc-800/70 bg-[#09090B]">
                <div className="flex items-center gap-2 mb-1.5">
                  <f.icon className="w-4 h-4 text-blue-400" />
                  <h3 className="text-white font-medium text-base sm:text-lg tracking-tight">
                    {f.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm leading-snug">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
