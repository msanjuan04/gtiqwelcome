import type { ReactNode } from "react"

type LegalPageProps = {
  category: string
  title: string
  intro: string
  updatedAt?: string
  children: ReactNode
}

export function LegalPage({
  category,
  title,
  intro,
  updatedAt,
  children,
}: LegalPageProps) {
  return (
    <div className="bg-[#09090B] text-white">
      <header className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.18em] text-blue-300 mb-4">
            {category}
          </p>
          <h1 className="text-3xl sm:text-5xl tracking-tight font-medium leading-[1.1]">
            {title}
          </h1>
          <p className="mt-5 text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            {intro}
          </p>
          {updatedAt && (
            <p className="mt-6 text-xs text-zinc-500">
              Última actualización: {updatedAt}
            </p>
          )}
        </div>
      </header>
      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-12">
          {children}
        </div>
      </article>
    </div>
  )
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number?: string
  title?: string
  children: ReactNode
}) {
  return (
    <section className="space-y-4 text-zinc-300 text-[15px] leading-relaxed">
      {title && (
        <h2 className="text-xl sm:text-2xl text-white font-medium tracking-tight">
          {number && (
            <span className="text-blue-400 mr-2 font-mono text-base align-baseline">
              {number}
            </span>
          )}
          {title}
        </h2>
      )}
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export function LegalNote({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6 text-sm text-zinc-400 leading-relaxed">
      {children}
    </aside>
  )
}

export function LegalQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="rounded-xl border-l-2 border-blue-400/60 bg-blue-500/[0.04] px-5 py-4 text-zinc-200 italic leading-relaxed">
      {children}
    </blockquote>
  )
}
