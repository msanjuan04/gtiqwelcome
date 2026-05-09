import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Logo } from "@/components/logo"
import { ArrowLeft, Clock4 } from "lucide-react"

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description:
    "El acceso a la plataforma de GTiQ estará disponible próximamente. Solicita tu prueba gratuita de 14 días para empezar.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: true },
}

export default function LoginPage() {
  return (
    <main className="bg-[#09090B] text-white min-h-screen flex flex-col">
      <Navbar />
      <section className="relative flex-1 flex items-center justify-center px-4 sm:px-6 py-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.16), transparent 60%)",
          }}
        />
        <div className="relative max-w-xl text-center">
          <div className="flex justify-center mb-8">
            <Logo size={42} />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/[0.08] px-3 py-1 text-xs text-blue-300 mb-6">
            <Clock4 className="w-3.5 h-3.5" />
            Próximamente
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]">
            El acceso a tu cuenta llega muy pronto.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Estamos terminando los últimos detalles de la plataforma. Si todavía
            no tienes cuenta, solicita tu prueba gratuita de 14 días y te
            avisaremos en cuanto esté lista.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              href="/#empezar"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0 text-sm shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_12px_32px_-8px_rgba(59,130,246,0.6)]"
            >
              Solicitar prueba 14 días gratis
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-zinc-200 font-medium rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
