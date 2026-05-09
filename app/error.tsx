"use client"

import { useEffect } from "react"
import { Logo } from "@/components/logo"
import { ArrowLeft, RotateCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[GTiQ] Page-level error:", error)
  }, [error])

  return (
    <main className="bg-[#09090B] text-white min-h-screen flex flex-col">
      <section className="relative flex-1 flex items-center justify-center px-4 sm:px-6 py-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(239,68,68,0.10), transparent 60%)",
          }}
        />
        <div className="relative max-w-xl text-center">
          <div className="flex justify-center mb-8">
            <Logo size={42} />
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-red-300 mb-3">
            Algo se ha roto
          </p>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05]">
            Hemos tenido un problema cargando esta página.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Nuestro equipo ya está al tanto. Puedes intentar recargar o volver al
            inicio.
          </p>
          {error.digest && (
            <p className="mt-4 text-xs text-zinc-600 font-mono">
              Ref: {error.digest}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0 text-sm shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_12px_32px_-8px_rgba(59,130,246,0.6)]"
            >
              <RotateCw className="w-4 h-4" />
              Reintentar
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-zinc-200 font-medium rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
