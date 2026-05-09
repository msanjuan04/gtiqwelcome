"use client"

import { motion } from "framer-motion"
import {
  Globe2,
  ShieldCheck,
  KeyRound,
  Scale,
  MapPin,
  type LucideIcon,
} from "lucide-react"

type Mark = (props: { className?: string }) => React.ReactElement

const Hex: Mark = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 2.5l8.66 5v9l-8.66 5-8.66-5v-9l8.66-5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.4" fill="currentColor" />
  </svg>
)

const Bars: Mark = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <rect x="3" y="9" width="3.5" height="11" rx="1" />
    <rect x="10.25" y="4" width="3.5" height="16" rx="1" />
    <rect x="17.5" y="12" width="3.5" height="8" rx="1" />
  </svg>
)

const Star: Mark = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 3l2.6 6.1L21 10l-5 4.4L17.5 21 12 17.6 6.5 21 8 14.4 3 10l6.4-.9L12 3z" />
  </svg>
)

const Diamond: Mark = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 3l9 9-9 9-9-9 9-9z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 3v18M3 12h18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      opacity="0.4"
    />
  </svg>
)

const Wave: Mark = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M3 14c2 0 2-4 4-4s2 4 4 4 2-4 4-4 2 4 4 4 2-4 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const Shield: Mark = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

type Client = {
  name: string
  mark: Mark
  /** "Empresa colaboradora" se muestra como pill bajo el nombre */
  partner?: boolean
}

const CLIENTS: Client[] = [
  { name: "Sintelec", mark: Bars, partner: true },
]

export function LogoCloud() {
  return (
    <section className="relative z-20 py-20 sm:py-24" style={{ backgroundColor: "#09090B" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm uppercase tracking-[0.18em] text-zinc-500 mb-10"
        >
+100 empresas ya cumplen la ley con GTiQ
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8"
        >
          {CLIENTS.map(({ name, mark: Mark, partner }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Mark className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span className="text-base sm:text-lg font-medium tracking-tight leading-tight">
                  {name}
                </span>
              </div>
              {partner && (
                <span className="text-[10px] uppercase tracking-[0.12em] text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-full px-2 py-0.5">
                  Empresa colaboradora
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {(
            [
              { label: "Servidores en la UE", Icon: Globe2 },
              { label: "RGPD compliant", Icon: ShieldCheck },
              { label: "Sin biometría", Icon: KeyRound },
              { label: "Cumple RD 8/2019", Icon: Scale },
              { label: "Hecho en España", Icon: MapPin },
            ] satisfies { label: string; Icon: LucideIcon }[]
          ).map(({ label, Icon }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1.5 text-xs sm:text-sm text-zinc-300"
            >
              <Icon className="w-3.5 h-3.5 text-blue-300" strokeWidth={1.8} />
              {label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
