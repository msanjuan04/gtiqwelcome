export default function Loading() {
  return (
    <main className="bg-[#09090B] text-white min-h-screen">
      {/* Navbar skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[rgba(10,10,10,0.7)] backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="h-7 w-24 rounded bg-zinc-800/60 animate-pulse" />
          <div className="hidden md:flex items-center gap-3">
            <div className="h-7 w-20 rounded bg-zinc-800/40 animate-pulse" />
            <div className="h-9 w-40 rounded-lg bg-blue-500/40 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <section className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="h-7 w-44 rounded-full bg-blue-500/15 animate-pulse mb-6" />
          <div className="space-y-3">
            <div className="h-12 sm:h-16 w-full rounded bg-zinc-800/60 animate-pulse" />
            <div className="h-12 sm:h-16 w-3/4 rounded bg-zinc-800/40 animate-pulse" />
          </div>
          <div className="mt-8 space-y-2">
            <div className="h-4 w-full max-w-xl rounded bg-zinc-800/40 animate-pulse" />
            <div className="h-4 w-5/6 max-w-xl rounded bg-zinc-800/40 animate-pulse" />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <div className="h-12 w-full sm:w-64 rounded-lg bg-blue-500/40 animate-pulse" />
            <div className="h-12 w-full sm:w-44 rounded-lg bg-zinc-800/60 animate-pulse" />
          </div>
        </div>
      </section>
    </main>
  )
}
