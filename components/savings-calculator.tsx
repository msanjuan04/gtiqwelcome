"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

function gtiqAnnualPrice(employees: number): number | null {
  if (employees <= 5) return 149
  if (employees <= 10) return 249
  if (employees <= 25) return 499
  if (employees <= 50) return 899
  return null // personalizado
}

function sesameAnnual(employees: number) {
  const monthly = Math.max(82.5, employees * 8.25)
  return Math.round(monthly * 12)
}

function factorialAnnual(employees: number) {
  return Math.round(employees * 5.5 * 12)
}

function bizneoAnnual(employees: number) {
  const monthly = Math.max(55, employees * 5.5)
  return Math.round(monthly * 12)
}

const fmt = (n: number) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n)

export function SavingsCalculator() {
  const [employees, setEmployees] = useState(10)

  const data = useMemo(() => {
    const gtiq = gtiqAnnualPrice(employees)
    const competitors = [
      { name: "Sesame HR", price: sesameAnnual(employees) },
      { name: "Factorial", price: factorialAnnual(employees) },
      { name: "Bizneo", price: bizneoAnnual(employees) },
    ]
    const avgCompetitor = Math.round(
      competitors.reduce((acc, c) => acc + c.price, 0) / competitors.length,
    )
    const isCustom = gtiq === null
    const yearlySavings = !isCustom ? Math.max(0, avgCompetitor - gtiq!) : 0
    const monthlySavings = Math.round(yearlySavings / 12)
    const fiveYearSavings = yearlySavings * 5
    const pctSavings =
      avgCompetitor > 0 && !isCustom
        ? Math.round((yearlySavings / avgCompetitor) * 100)
        : 0
    return {
      gtiq,
      isCustom,
      competitors,
      avgCompetitor,
      yearlySavings,
      monthlySavings,
      fiveYearSavings,
      pctSavings,
    }
  }, [employees])

  const maxBar = Math.max(
    data.gtiq ?? data.avgCompetitor,
    ...data.competitors.map((c) => c.price),
    1,
  )

  return (
    <section
      id="ahorro"
      className="relative py-24 sm:py-32 border-t border-white/[0.04]"
      style={{ backgroundColor: "#09090B" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(59, 130, 246,0.10), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-5"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-zinc-400 text-sm">Calculadora de ahorro</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl tracking-tight font-medium leading-[1.1]"
        >
          ¿Cuánto te ahorras con GTiQ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-zinc-400 max-w-xl"
        >
          Mueve el deslizador y comprueba al instante cuánto pagas hoy de más.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
          {/* Controles */}
          <div className="lg:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
            <label className="block">
              <span className="text-sm text-zinc-400">Empleados en tu empresa</span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-medium text-white tracking-tight tabular-nums">
                  {employees}
                </span>
                <span className="text-zinc-500 text-sm">personas</span>
              </div>
            </label>
            <input
              type="range"
              min={1}
              max={100}
              step={1}
              value={employees}
              onChange={(e) => setEmployees(parseInt(e.target.value, 10))}
              className="mt-6 w-full accent-blue-500"
              aria-label="Número de empleados"
            />
            <div className="mt-2 flex justify-between text-xs text-zinc-600">
              <span>1</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100+</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[5, 10, 25, 50].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setEmployees(n)}
                  className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                    employees === n
                      ? "bg-blue-500/15 text-blue-200 border-blue-500/40"
                      : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {n} empl.
                </button>
              ))}
            </div>

            {data.isCustom ? (
              <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/[0.06] p-5">
                <p className="text-xs uppercase tracking-wider text-blue-300/80">
                  Plan a consultar
                </p>
                <p className="mt-2 text-zinc-300 text-sm">
                  Para más de 50 empleados creamos un plan a medida con onboarding y
                  precios cerrados. Hablamos contigo y te montamos la propuesta en menos
                  de 24h.
                </p>
                <a
                  href="#empezar"
                  className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0 text-sm w-full"
                >
                  Hablar con ventas
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <>
                <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/[0.06] p-5">
                  <p className="text-xs uppercase tracking-wider text-blue-300/80">
                    Ahorras al año
                  </p>
                  <p className="mt-1 text-4xl sm:text-5xl font-medium text-blue-300 tracking-tight tabular-nums">
                    {fmt(data.yearlySavings)}
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Eso es{" "}
                    <span className="text-white font-medium">
                      {fmt(data.monthlySavings)}/mes
                    </span>{" "}
                    que dejas de pagar de más, un{" "}
                    <span className="text-white font-medium">{data.pctSavings}%</span>{" "}
                    menos que la media de la competencia y{" "}
                    <span className="text-white font-medium">
                      {fmt(data.fiveYearSavings)}
                    </span>{" "}
                    en 5 años.
                  </p>
                </div>

                <a
                  href="#empezar"
                  className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0 text-sm w-full"
                >
                  Empezar prueba de 14 días gratis
                  <ArrowRight className="w-4 h-4" />
                </a>
              </>
            )}
          </div>

          {/* Comparativa visual */}
          <div className="lg:col-span-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h3 className="text-white font-medium tracking-tight">
                Coste estimado
              </h3>
              <span className="text-xs text-zinc-500">
                para {employees} empleados
              </span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {[
                { name: "GTiQ", price: data.gtiq, gtiq: true, custom: data.isCustom },
                ...data.competitors.map((c) => ({ ...c, gtiq: false, custom: false })),
              ].map((row) => {
                const numericPrice = row.price ?? 0
                const pct = row.custom ? 30 : (numericPrice / maxBar) * 100
                const monthly = numericPrice ? Math.round(numericPrice / 12) : 0
                return (
                  <div key={row.name}>
                    <div className="flex items-baseline justify-between mb-1.5 gap-3">
                      <span
                        className={`text-sm ${
                          row.gtiq
                            ? "text-blue-300 font-medium"
                            : "text-zinc-300"
                        }`}
                      >
                        {row.name}
                      </span>
                      <span
                        className={`text-sm tabular-nums text-right ${
                          row.gtiq
                            ? "text-white font-medium"
                            : "text-zinc-400"
                        }`}
                      >
                        {row.custom ? (
                          "Consultar"
                        ) : (
                          <>
                            <span className="text-zinc-500">desde </span>
                            {fmt(numericPrice)}
                            <span className="text-zinc-600">/año</span>
                            <span className="hidden md:inline text-zinc-600">
                              {" "}
                              · desde {fmt(monthly)}/mes
                            </span>
                          </>
                        )}
                      </span>
                    </div>
                    <div className="relative h-3 rounded-full bg-zinc-800/70 overflow-hidden">
                      <motion.div
                        initial={false}
                        animate={{ width: `${pct}%` }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={
                          row.gtiq
                            ? "h-full rounded-full bg-blue-500"
                            : "h-full rounded-full bg-zinc-600"
                        }
                        style={
                          row.gtiq
                            ? {
                                boxShadow:
                                  "0 0 0 1px rgba(59, 130, 246,0.5), 0 0 18px rgba(59, 130, 246,0.45)",
                              }
                            : undefined
                        }
                      />
                      {row.custom && (
                        <div
                          className="absolute inset-0 opacity-50"
                          style={{
                            background:
                              "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(59,130,246,0.5) 4px, rgba(59,130,246,0.5) 8px)",
                          }}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-auto pt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <Stat
                label="GTiQ / mes"
                value={
                  data.isCustom
                    ? "—"
                    : `desde ${fmt(Math.round((data.gtiq ?? 0) / 12))}`
                }
                accent
              />
              <Stat
                label="Competencia / mes"
                value={`desde ${fmt(Math.round(data.avgCompetitor / 12))}`}
                strike
              />
              <Stat
                label="Ahorro a 5 años"
                value={data.isCustom ? "—" : fmt(data.fiveYearSavings)}
              />
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              Estimación a partir de precios públicos a marzo 2026. Tu ahorro real puede
              ser mayor si pagas mínimos mensuales o tarifas por usuario adicionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({
  label,
  value,
  accent,
  strike,
}: {
  label: string
  value: string
  accent?: boolean
  strike?: boolean
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
      <p className="text-[10px] uppercase tracking-wider text-zinc-500">{label}</p>
      <p
        className={`mt-1 text-base sm:text-lg font-medium tabular-nums tracking-tight ${
          accent
            ? "text-blue-300"
            : strike
              ? "text-zinc-500 line-through"
              : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  )
}
