"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { FAQPageSchema } from "@/components/seo/schemas"

const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Cumple GTiQ con el Real Decreto-ley 8/2019?",
    a: "Sí, al 100%. Registro inalterable, log con marcas de tiempo y exportación lista para Inspección de Trabajo.",
  },
  {
    q: "¿Necesito hardware especial?",
    a: "No. Funciona desde móvil, ordenador o tablet. Opcionalmente puedes montar una tablet en modo kiosco con un QR.",
  },
  {
    q: "¿Cómo funciona la prueba de 14 días?",
    a: "Te das de alta con email, configuras tu empresa y empiezas. Sin tarjeta, sin compromiso. Si no te convence, no pagas nada.",
  },
  {
    q: "¿Y si tengo más de 50 empleados?",
    a: "Tenemos plan Enterprise personalizado. Escríbenos y te montamos un onboarding a medida.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Servidores en la UE, cifrado en tránsito y reposo, copias de seguridad diarias, RGPD compliant.",
  },
  {
    q: "¿Por qué no usáis huella o reconocimiento facial?",
    a: "Porque la AEPD considera la biometría dato de categoría especial. Multas de hasta 220.000 €. Usamos PIN + geolocalización + QR, igual de seguros, sin riesgo legal.",
  },
  {
    q: "¿Puedo migrar desde Sesame, Factorial o Excel?",
    a: "Sí. Te ayudamos con la migración gratis durante el onboarding.",
  },
  {
    q: "¿Cómo se factura?",
    a: "Una sola factura anual. Sin domiciliaciones mensuales sorpresa.",
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]))

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 border-t border-white/[0.04]"
      style={{ backgroundColor: "#09090B" }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight font-medium leading-[1.1]"
        >
          Preguntas frecuentes
        </motion.h2>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/30 divide-y divide-zinc-800/80 overflow-hidden">
          {FAQS.map((f, i) => {
            const isOpen = open.has(i)
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-start gap-4 hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-white text-base sm:text-lg font-medium tracking-tight">
                    {f.q}
                  </span>
                  <span className="shrink-0 mt-0.5 w-8 h-8 rounded-full border border-zinc-700 grid place-items-center text-zinc-300">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-6 -mt-1 text-zinc-400 leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
      <FAQPageSchema items={FAQS} />
    </section>
  )
}
