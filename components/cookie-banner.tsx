"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie } from "lucide-react"

const STORAGE_KEY = "gtiq:cookie-consent"

type Consent = { kind: "all" | "essential"; ts: number }

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) {
        setVisible(true)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const save = (kind: Consent["kind"]) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ kind, ts: Date.now() } satisfies Consent),
      )
    } catch {}
    setVisible(false)
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed z-[55] left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4"
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies"
        >
          <div
            className="mx-auto max-w-7xl rounded-2xl border border-white/10 p-4 sm:p-5"
            style={{
              background: "rgba(10, 10, 10, 0.85)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              boxShadow:
                "0 24px 60px -10px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <div className="flex items-start gap-3 md:flex-1">
                <span className="mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 shrink-0">
                  <Cookie className="w-4 h-4 block" strokeWidth={1.8} />
                </span>
                <div className="flex-1">
                  <p className="font-medium text-white tracking-tight">
                    Cookies en GTiQ
                  </p>
                  <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                    Solo usamos cookies esenciales para mantener tu sesión y
                    preferencias. No empleamos cookies publicitarias ni de
                    seguimiento.{" "}
                    <a
                      href="/legal/cookies"
                      className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
                    >
                      Más información
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 md:shrink-0">
                <button
                  type="button"
                  onClick={() => save("essential")}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-lg border border-white/10 text-sm text-zinc-200 hover:bg-white/5 transition"
                >
                  Solo esenciales
                </button>
                <button
                  type="button"
                  onClick={() => save("all")}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
