"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function DashboardMockup() {
  return (
    <motion.div
      className="w-full h-full bg-zinc-950 overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <Image
        src="/images/gtiq-dashboard.png"
        alt="Panel de control de GTiQ"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 1600px"
        className="object-cover object-top select-none pointer-events-none [filter:brightness(1.08)_contrast(1.03)]"
        draggable={false}
      />
    </motion.div>
  )
}
