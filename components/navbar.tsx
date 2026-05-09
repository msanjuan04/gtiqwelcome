"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

const NAV_LINKS = [
  { href: "#producto", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#ley", label: "Cumple la ley" },
  { href: "#empezar", label: "Contacto" },
]

const SCROLL_RANGE = 120
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const next = Math.min(1, Math.max(0, window.scrollY / SCROLL_RANGE))
      setProgress(next)
      raf = 0
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const p = progress
  const outerPaddingTop = lerp(0, 14, p)
  const outerPaddingX = lerp(0, 16, p)
  const navMaxWidth = lerp(2000, 1080, p)
  const navRadius = lerp(0, 9999, p)
  const bgAlpha = lerp(0.72, 0.5, p)
  const blurPx = lerp(18, 28, p)
  const saturate = lerp(110, 180, p)
  const ringAlpha = lerp(0, 0.1, p)
  const hairlineAlpha = lerp(0.06, 0, Math.min(1, p * 2))
  const dropY = lerp(0, 18, p)
  const dropBlur = lerp(0, 50, p)
  const dropAlpha = lerp(0, 0.35, p)
  const highlightAlpha = lerp(0, 0.06, p)

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          paddingTop: `${outerPaddingTop}px`,
          paddingLeft: `${outerPaddingX}px`,
          paddingRight: `${outerPaddingX}px`,
          pointerEvents: "none",
        }}
      >
        <nav
          className="mx-auto"
          style={{
            pointerEvents: "auto",
            maxWidth: `${navMaxWidth}px`,
            borderRadius: `${navRadius}px`,
            background: `rgba(10, 10, 10, ${bgAlpha})`,
            backdropFilter: `blur(${blurPx}px) saturate(${saturate}%)`,
            WebkitBackdropFilter: `blur(${blurPx}px) saturate(${saturate}%)`,
            boxShadow: [
              `0 1px 0 0 rgba(255,255,255,${hairlineAlpha})`,
              `inset 0 0 0 1px rgba(255,255,255,${ringAlpha})`,
              `inset 0 1px 0 0 rgba(255,255,255,${highlightAlpha})`,
              `0 ${dropY}px ${dropBlur}px -10px rgba(0,0,0,${dropAlpha})`,
            ].join(", "),
          }}
        >
          <div className="relative px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
            <a href="#" className="shrink-0" aria-label="GTiQ — inicio">
              <Logo size={28} priority />
            </a>

            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="/login"
                className="text-sm text-zinc-300 hover:text-white transition-colors px-3 py-2"
              >
                Iniciar sesión
              </a>
              <a
                href="#empezar"
                className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0 px-4 py-2 rounded-lg shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_8px_24px_-8px_rgba(59,130,246,0.5)]"
              >
                Prueba 14 días gratis →
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden p-2 -mr-2 text-zinc-300"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-[#09090B] flex flex-col md:hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
            <a href="#" onClick={() => setOpen(false)} aria-label="GTiQ — inicio">
              <Logo size={28} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-2 -mr-2 text-zinc-300"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 px-6 py-10 flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-medium text-white py-3 border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="px-6 pb-10 flex flex-col gap-3">
            <a
              href="/login"
              onClick={() => setOpen(false)}
              className="text-center text-sm text-zinc-300 px-4 py-3 rounded-lg border border-white/10"
            >
              Iniciar sesión
            </a>
            <a
              href="#empezar"
              onClick={() => setOpen(false)}
              className="text-center text-sm font-medium text-white bg-blue-500 px-4 py-3 rounded-lg"
            >
              Prueba 14 días gratis →
            </a>
          </div>
        </div>
      )}
    </>
  )
}
