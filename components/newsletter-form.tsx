"use client"

import { useActionState } from "react"
import {
  subscribeNewsletter,
  type NewsletterState,
} from "@/app/actions/subscribe-newsletter"
import { ArrowRight, Check, Loader2, AlertCircle } from "lucide-react"

const INITIAL_STATE: NewsletterState = { status: "idle" }

export function NewsletterForm() {
  const [state, action, isPending] = useActionState(
    subscribeNewsletter,
    INITIAL_STATE,
  )

  if (state.status === "ok") {
    return (
      <div className="flex items-start gap-2 text-sm text-blue-300">
        <Check className="w-4 h-4 mt-0.5 shrink-0" />
        <span>
          Suscrito. Revisa tu bandeja para confirmar la bienvenida.
        </span>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-2">
      {/* Honeypot */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: -9999,
          width: 1,
          height: 1,
          overflow: "hidden",
          opacity: 0,
        }}
      >
        <label>
          Empresa (no rellenar)
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="tu@empresa.com"
          aria-label="Email para newsletter"
          className="flex-1 min-w-0 rounded-lg bg-zinc-950 border border-zinc-800 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/60"
        />
        <button
          type="submit"
          disabled={isPending}
          aria-label="Suscribirse"
          className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition hover:-translate-y-px active:translate-y-0 text-sm disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </button>
      </div>

      {state.status === "error" ? (
        <p className="flex items-start gap-1.5 text-xs text-red-300">
          <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
          {state.message}
        </p>
      ) : (
        <p className="text-xs text-zinc-500">
          Sin spam. Una vez al mes como mucho.
        </p>
      )}
    </form>
  )
}
