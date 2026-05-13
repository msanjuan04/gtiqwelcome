"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"
import { DashboardMockup } from "./dashboard-mockup"
import { HeroPanels } from "./hero-panels"

export function Hero() {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const offset = Math.min(window.scrollY / 400, 1) * -10
      setYOffset(offset)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "min(1200px, 120vw)",
          height: "800px",
          background:
            "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.14) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 pt-28 sm:pt-32 pb-12">
        <div className="w-full px-4 sm:px-6 flex justify-center">
          <div className="w-full max-w-4xl text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/[0.08] px-3 py-1 text-xs text-blue-300 mb-6"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-blue-400"
                style={{ animation: "gtiq-breath 2.8s ease-in-out infinite" }}
              />
              RD 8/2019 · 100% legal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-5xl lg:text-[64px] font-medium text-white leading-[1.15] sm:leading-[1.1] lg:leading-[1.05] tracking-tight text-balance"
            >
              Control horario que{" "}
              <span className="inline-block bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 bg-clip-text text-transparent pb-[0.12em] [white-space:nowrap]">
                cumple la ley
              </span>
              .
              <br className="hidden sm:block" />{" "}
              <span className="text-zinc-400">Sin sorpresas.</span>{" "}
              <span className="relative inline-block [white-space:nowrap]">
                <span className="relative z-10">Sin pagar por usuario.</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-1 h-3 sm:h-4 lg:h-5 bg-blue-500/25 -z-0 rounded-sm"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto sm:mx-0 leading-relaxed"
            >
              El software de fichaje pensado para pymes españolas. Cumple el{" "}
              <span className="text-white font-medium">RD 8/2019</span>, evita
              multas de hasta{" "}
              <span className="text-white font-medium">220.000 €</span> y ahorra
              hasta un{" "}
              <span className="text-blue-300 font-medium">62%</span> frente a
              Sesame, Factorial o Bizneo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 max-w-md sm:max-w-xl mx-auto sm:mx-0"
            >
              {[
                { value: "62%", label: "menos coste anual" },
                { value: "5 min", label: "configuración total" },
                { value: "100%", label: "RD 8/2019 conforme" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center sm:text-left border-l-2 border-blue-500/40 pl-3 sm:pl-4"
                >
                  <p className="text-2xl sm:text-3xl font-medium text-white tabular-nums leading-none tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[11px] sm:text-xs text-zinc-500 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center sm:justify-start"
            >
              <a
                href="#empezar"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0 text-sm shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_12px_32px_-8px_rgba(59,130,246,0.6)]"
              >
                Empezar prueba de 14 días gratis
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#producto"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-zinc-200 font-medium rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors text-sm"
              >
                Ver cómo funciona →
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-zinc-500 justify-center sm:justify-start"
            >
              <li className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-400" /> 14 días gratis
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-400" /> Sin tarjeta
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-400" /> Configuración en 5 min
              </li>
            </motion.ul>
          </div>
        </div>

        {/* Dashboard tilted suave + phone fichaje */}
        <div className="relative mt-12 sm:mt-20 px-4 sm:px-6 pb-16 sm:pb-24">
          <div
            className="mx-auto relative"
            style={{
              maxWidth: "1100px",
              perspective: "1600px",
              perspectiveOrigin: "50% 0%",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: yOffset }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950"
              style={{
                aspectRatio: "16 / 9",
                transform: "rotateX(12deg)",
                transformOrigin: "50% 0%",
                boxShadow:
                  "0 60px 120px -30px rgba(59,130,246,0.18), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              <DashboardMockup />
            </motion.div>

            <PhoneFichaje />

            <div
              className="absolute -bottom-2 left-0 right-0 h-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #09090B 60%, transparent 100%)",
              }}
            />
          </div>
        </div>

        <HeroPanels />
      </div>
    </section>
  )
}

function PhoneFichaje() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, x: 24 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
      className="hidden md:block absolute z-10 pointer-events-none"
      style={{
        right: "-2%",
        bottom: "-90px",
        width: "150px",
        aspectRatio: "10 / 20",
        transform: "rotateX(6deg) rotateY(-12deg)",
        transformOrigin: "50% 100%",
        filter: "drop-shadow(0 30px 30px rgba(0,0,0,0.55))",
      }}
    >
      <div className="absolute inset-0 rounded-[32px] bg-zinc-900 border-[7px] border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 rounded-[24px] overflow-hidden bg-[#09090B] flex flex-col">
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-3 bg-zinc-950 rounded-full" />
          <div className="pt-5 px-3 flex flex-col h-full">
            <div className="flex items-center gap-1">
              <Image
                src="/images/gtiq-logo.png"
                alt=""
                width={12}
                height={12}
                className="select-none"
                draggable={false}
              />
              <span className="text-[9px] font-semibold text-white tracking-tight">
                GTiQ
              </span>
              <span className="ml-auto text-[7px] text-zinc-500">9:24</span>
            </div>
            <div className="mt-2.5">
              <p className="text-[7px] uppercase tracking-wider text-zinc-500">
                Mi jornada
              </p>
              <p className="text-sm font-semibold text-white tabular-nums leading-none mt-0.5">
                09:24:18
              </p>
              <p className="text-[7px] text-zinc-500 mt-0.5">Demo GTiQ S.L.</p>
            </div>

            <div className="mt-auto mb-6 flex justify-center">
              <span
                className="relative w-[88px] h-[88px] rounded-full bg-blue-500 text-white grid place-items-center"
                style={{ animation: "gtiq-pulse 1.8s cubic-bezier(0.22, 1, 0.36, 1) infinite" }}
              >
                <span className="relative text-center leading-tight">
                  <span className="block text-[7px] uppercase tracking-wider opacity-80">
                    Fichar
                  </span>
                  <span className="block text-xs font-semibold">Entrada</span>
                </span>
              </span>
            </div>

            <div className="mb-2 flex items-center justify-between text-[7px] text-zinc-500">
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-blue-400" />
                En oficina
              </span>
              <span>Geofence ✓</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gtiq-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.55);
          }
          70% {
            box-shadow: 0 0 0 22px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
      `}</style>
    </motion.div>
  )
}
