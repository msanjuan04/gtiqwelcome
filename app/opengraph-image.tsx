import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt =
  "GTiQ — Software de control horario y fichaje legal para pymes"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#09090B",
          display: "flex",
          flexDirection: "column",
          padding: "72px 88px",
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* Glow azul */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            right: "-10%",
            bottom: "-20%",
            background:
              "radial-gradient(ellipse at 25% 30%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(59,130,246,0.18), transparent 60%)",
            display: "flex",
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              background: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            G
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            GTiQ
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              color: "#93c5fd",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                background: "#3b82f6",
                borderRadius: 999,
              }}
            />
            RD 8/2019 · 100% LEGAL
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              maxWidth: 980,
            }}
          >
            Control horario que cumple la ley.
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#a1a1aa",
              marginTop: 28,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Sin sorpresas. Sin pagar por usuario. Hecho en España.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 56,
              fontSize: 22,
              color: "#71717a",
            }}
          >
            <div style={{ display: "flex" }}>welcome.gneraitiq.com</div>
            <div style={{ display: "flex", gap: 28 }}>
              <span>14 días gratis</span>
              <span style={{ color: "#3f3f46" }}>·</span>
              <span>Sin tarjeta</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
