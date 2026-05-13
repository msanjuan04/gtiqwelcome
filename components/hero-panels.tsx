"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, CheckCircle2 } from "lucide-react"

const FICHAJES = [
  { initials: "AM", name: "Ana M.", action: "Fichó entrada · oficina", time: "08:45", color: "#3B82F6" },
  { initials: "CR", name: "Carlos R.", action: "Fichó pausa · 30 min", time: "12:10", color: "#A855F7" },
  { initials: "JL", name: "Júlia L.", action: "Fichó salida · remoto", time: "17:32", color: "#10B981" },
]

const ORBIT_LABELS: { text: string; angle: number }[] = [
  { text: "Fichaje", angle: -90 },
  { text: "Vacaciones", angle: -30 },
  { text: "Turnos", angle: 30 },
  { text: "Inspección", angle: 90 },
  { text: "Bajas", angle: 150 },
  { text: "Geofencing", angle: -150 },
]

export function HeroPanels() {
  return (
    <section className="relative px-4 sm:px-6 pb-20 sm:pb-28" style={{ backgroundColor: "#09090B" }}>
      <div
        className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-0 items-center"
        style={{ perspective: "1300px", perspectiveOrigin: "50% 60%" }}
      >
        <SidePanel side="left" delay={0} />
        <CenterPanel />
        <SidePanel side="right" delay={0.2} />
      </div>
    </section>
  )
}

function SidePanel({ side, delay }: { side: "left" | "right"; delay: number }) {
  const isLeft = side === "left"
  return (
    <div
      className={`md:col-span-4 ${
        isLeft
          ? "md:origin-right md:[transform:rotateY(22deg)_translateX(20px)_scale(0.9)]"
          : "md:origin-left md:[transform:rotateY(-22deg)_translateX(-20px)_scale(0.9)]"
      }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay }}
        className="relative rounded-2xl border border-white/[0.07] bg-zinc-950/70 backdrop-blur-sm p-5 lg:p-6"
        style={{
          boxShadow: isLeft
            ? "20px 30px 60px -25px rgba(0,0,0,0.7)"
            : "-20px 30px 60px -25px rgba(0,0,0,0.7)",
        }}
      >
        <h3 className="text-white text-base lg:text-lg font-medium tracking-tight">
          {isLeft ? "Fichaje en tiempo real" : "100% RD 8/2019"}
        </h3>
        <p className="mt-1 text-xs lg:text-[13px] text-zinc-400 leading-snug">
          {isLeft
            ? "Empleados fichan desde móvil con geofencing y biometría."
            : "Registros firmados e inalterables, listos para Inspección."}
        </p>
        {isLeft ? <FichajesList /> : <ShieldVisual />}
      </motion.div>
    </div>
  )
}

function CenterPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative md:col-span-4 z-10 rounded-2xl border border-white/[0.1] bg-zinc-900/70 backdrop-blur-sm p-5 lg:p-7"
      style={{
        boxShadow:
          "0 50px 100px -30px rgba(59,130,246,0.18), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      <h3 className="text-white text-base lg:text-lg font-medium tracking-tight">
        Todo en una plataforma
      </h3>
      <p className="mt-1 text-xs lg:text-[13px] text-zinc-400 leading-snug">
        Fichaje, vacaciones, turnos e Inspección en un solo lugar.
      </p>
      <OrbitVisual />
    </motion.div>
  )
}

function FichajesList() {
  return (
    <div className="mt-5 space-y-2">
      {FICHAJES.map((f) => (
        <div
          key={f.name}
          className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2"
        >
          <div
            className="w-7 h-7 rounded-full grid place-items-center text-[10px] font-semibold text-white shrink-0"
            style={{ backgroundColor: f.color }}
          >
            {f.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] text-white font-medium leading-tight">{f.name}</p>
            <p className="text-[10px] text-zinc-500 truncate">{f.action}</p>
          </div>
          <span className="text-[9px] text-zinc-500 tabular-nums shrink-0">{f.time}</span>
        </div>
      ))}
      <div className="mt-3 flex items-center gap-2 text-[10px] text-zinc-500">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        12 fichajes hoy · sincronizado
      </div>
    </div>
  )
}

function OrbitVisual() {
  const R = 78
  return (
    <div className="relative mt-8 mx-auto aspect-square max-w-[260px]">
      <svg viewBox="-100 -100 200 200" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="orbit-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.18)" />
            <stop offset="55%" stopColor="rgba(59,130,246,0)" />
          </radialGradient>
          <linearGradient id="orbit-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
        </defs>

        <circle cx="0" cy="0" r="92" fill="url(#orbit-fade)" />

        <g stroke="url(#orbit-stroke)" fill="none" strokeWidth="0.6">
          <ellipse cx="0" cy="0" rx={R} ry="26" transform="rotate(30)" />
          <ellipse cx="0" cy="0" rx={R} ry="26" transform="rotate(-30)" />
          <circle cx="0" cy="0" r={R} />
        </g>

        <g fill="rgba(59,130,246,0.8)">
          {ORBIT_LABELS.map((l) => {
            const rad = (l.angle * Math.PI) / 180
            return (
              <circle
                key={l.text}
                cx={Math.cos(rad) * R}
                cy={Math.sin(rad) * R}
                r="1.6"
              />
            )
          })}
        </g>
      </svg>

      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/images/gtiq-logo.png"
            alt=""
            width={40}
            height={40}
            className="select-none drop-shadow-[0_0_18px_rgba(59,130,246,0.45)]"
            draggable={false}
          />
          <span className="text-[11px] font-semibold text-white tracking-tight">GTiQ</span>
        </div>
      </div>

      {ORBIT_LABELS.map((l) => {
        const rad = (l.angle * Math.PI) / 180
        const x = 50 + Math.cos(rad) * 47
        const y = 50 + Math.sin(rad) * 47
        return (
          <span
            key={l.text}
            className="absolute text-[9px] lg:text-[10px] text-zinc-200 bg-zinc-950/95 border border-white/10 rounded-full px-2 py-0.5 shadow-md whitespace-nowrap -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {l.text}
          </span>
        )
      })}
    </div>
  )
}

function ShieldVisual() {
  return (
    <div className="relative mt-6 aspect-square max-w-[240px] mx-auto grid place-items-center">
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        {[0.35, 0.55, 0.75, 0.95].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/[0.06]"
            style={{
              width: `${s * 100}%`,
              height: `${s * 100}%`,
              opacity: 1 - i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="relative w-16 h-[72px] rounded-md bg-zinc-900 border border-white/10 grid place-items-center shadow-[0_8px_24px_-8px_rgba(59,130,246,0.4)]">
        <Shield className="w-8 h-8 text-blue-300" strokeWidth={1.5} />
      </div>

      <div className="absolute -bottom-1 left-2 right-2 flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-950/90 backdrop-blur px-3 py-2 shadow-lg">
        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
        <span className="text-[10px] text-zinc-200">Inspección superada</span>
      </div>
    </div>
  )
}
