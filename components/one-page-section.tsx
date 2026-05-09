"use client"

import { motion } from "framer-motion"
import { Clock4 } from "lucide-react"

export function OnePageSection() {
  return (
    <section
      className="relative py-20 sm:py-28 border-t border-white/[0.04]"
      style={{ backgroundColor: "#09090B" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/[0.08] px-3 py-1 text-xs text-blue-300 mb-6"
        >
          <Clock4 className="w-3.5 h-3.5" />
          Una sola página
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight font-medium leading-[1.1]"
        >
          ¿Te has fijado que esta es la{" "}
          <span className="text-blue-300">única página?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto"
        >
          No es casualidad. Hemos reunido aquí todo lo que necesitas saber
          sobre GTiQ — en un solo scroll, sin menús que aprender ni clics
          innecesarios.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed max-w-2xl mx-auto"
        >
          Porque si vendemos control horario, lo último que queremos es{" "}
          <span className="text-zinc-300">robarte tiempo</span>. Nuestra app
          está construida con la misma filosofía: simple, directa, al fichaje.
        </motion.p>
      </div>
    </section>
  )
}
