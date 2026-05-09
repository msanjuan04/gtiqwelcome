"use client"

import { motion } from "framer-motion"
import { Check, X, Minus } from "lucide-react"

type Cell = string | true | false | "warn"

const COLUMNS = ["GTiQ", "Sesame HR", "Factorial", "Bizneo"] as const
const ROWS: { label: string; values: [Cell, Cell, Cell, Cell] }[] = [
  { label: "Precio anual (10 emp.)", values: ["249 €", "990 €", "660 €", "660 €"] },
  { label: "Mínimos mensuales", values: [false, "82,50 €/mes", true, "55 €/mes"] },
  { label: "Pago por empleado", values: [false, true, true, true] },
  { label: "Cumple RD 8/2019", values: [true, true, true, true] },
  { label: "Fichaje multidispositivo", values: [true, true, true, true] },
  { label: "Soporte ES / CAT", values: [true, true, true, true] },
  { label: "Hecho en España", values: [true, true, true, true] },
  { label: "Sin biometría", values: [true, false, "warn", false] },
]

function CellView({ value, highlighted }: { value: Cell; highlighted?: boolean }) {
  if (value === true) {
    return (
      <span
        className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${
          highlighted ? "bg-blue-500/15 text-blue-300" : "bg-blue-500/10 text-blue-300"
        }`}
      >
        <Check className="w-4 h-4" />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/10 text-red-400">
        <X className="w-4 h-4" />
      </span>
    )
  }
  if (value === "warn") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/10 text-amber-400">
        <Minus className="w-4 h-4" />
      </span>
    )
  }
  return (
    <span
      className={`text-sm ${
        highlighted ? "text-white font-medium" : "text-zinc-400"
      }`}
    >
      {value}
    </span>
  )
}

export function ComparisonTable() {
  return (
    <section className="relative py-24 sm:py-32" style={{ backgroundColor: "#09090B" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-zinc-400 text-sm">GTiQ vs el resto</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl tracking-tight font-medium leading-[1.1]"
        >
          Misma ley. Mucho menos dinero.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-12"
        >
          <div className="overflow-x-auto -mx-4 sm:-mx-6 px-4 sm:px-6 scrollbar-hide">
          <div
            className="min-w-[720px] rounded-2xl border border-zinc-800 overflow-hidden"
            style={{ backgroundColor: "rgba(9,9,11,0.6)" }}
          >
            <div className="grid grid-cols-5">
              <div className="bg-zinc-900/40 border-b border-zinc-800 px-5 py-4 text-xs uppercase tracking-wider text-zinc-500">
                Característica
              </div>
              {COLUMNS.map((c, i) => (
                <div
                  key={c}
                  className={`border-b border-zinc-800 px-5 py-4 text-center text-sm font-medium ${
                    i === 0
                      ? "bg-blue-500/[0.06] text-blue-300 relative"
                      : "bg-zinc-900/40 text-zinc-400"
                  }`}
                >
                  {i === 0 && (
                    <span className="absolute top-1.5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-blue-400/80">
                      Recomendado
                    </span>
                  )}
                  <span className="block mt-2">{c}</span>
                </div>
              ))}
            </div>

            {ROWS.map((row, ri) => (
              <div
                key={row.label}
                className={`grid grid-cols-5 ${
                  ri !== ROWS.length - 1 ? "border-b border-zinc-800/60" : ""
                }`}
              >
                <div className="px-5 py-4 text-sm text-zinc-300">{row.label}</div>
                {row.values.map((v, vi) => (
                  <div
                    key={vi}
                    className={`px-5 py-4 text-center ${
                      vi === 0 ? "bg-blue-500/[0.04]" : ""
                    }`}
                  >
                    <CellView value={v} highlighted={vi === 0} />
                  </div>
                ))}
              </div>
            ))}
          </div>
          </div>
          {/* Fade indicador de scroll a la derecha en móvil */}
          <div
            className="md:hidden absolute top-0 bottom-0 right-0 w-12 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, #09090B 10%, rgba(9,9,11,0) 100%)",
            }}
          />
          <div className="md:hidden mt-3 flex items-center justify-center gap-1.5 text-xs text-zinc-500">
            <span>Desliza para ver más</span>
            <span aria-hidden="true">→</span>
          </div>
        </motion.div>

        <p className="mt-4 text-xs text-zinc-500">
          Precios verificados marzo 2026 en webs oficiales de cada proveedor.
        </p>
      </div>
    </section>
  )
}
