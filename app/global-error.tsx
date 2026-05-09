"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[GTiQ] Global error:", error)
  }, [error])

  return (
    <html lang="es">
      <body
        style={{
          background: "#09090B",
          color: "#ffffff",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 24px",
        }}
      >
        <div style={{ maxWidth: 520, textAlign: "center" }}>
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#fca5a5",
              margin: "0 0 12px",
            }}
          >
            Error crítico
          </p>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            La aplicación no ha podido arrancar.
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "#a1a1aa",
              lineHeight: 1.6,
              margin: "20px 0 0",
            }}
          >
            Estamos investigando el problema. Por favor, recarga la página en
            unos minutos.
          </p>
          {error.digest && (
            <p
              style={{
                fontSize: 12,
                color: "#52525b",
                fontFamily: "monospace",
                marginTop: 16,
              }}
            >
              Ref: {error.digest}
            </p>
          )}
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 32,
              background: "#3b82f6",
              color: "white",
              padding: "12px 24px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
            }}
          >
            Reintentar
          </button>
        </div>
      </body>
    </html>
  )
}
