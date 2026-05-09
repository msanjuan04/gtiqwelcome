import type { Metadata } from "next"
import { LegalPage, LegalSection, LegalNote } from "@/components/legal-page"
import { BreadcrumbListSchema } from "@/components/seo/schemas"
import { SITE_URL } from "@/lib/seo/business-info"

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "GTiQ utiliza exclusivamente cookies y almacenamiento local esenciales para mantener la sesión y las preferencias. Sin tracking comportamental.",
  alternates: { canonical: "/legal/cookies" },
  openGraph: {
    title: "Política de cookies · GTiQ",
    description:
      "Sólo cookies esenciales. Sin publicidad ni seguimiento comportamental.",
    url: "/legal/cookies",
    type: "article",
  },
}

export default function Page() {
  return (
    <LegalPage
      category="Privacidad y protección de datos"
      title="Política de cookies"
      intro="GTiQ utiliza exclusivamente cookies y/o almacenamiento local esenciales para mantener la sesión y las preferencias. No usamos cookies publicitarias ni de seguimiento comportamental."
      updatedAt="9 de mayo de 2026"
    >
      <LegalSection title="¿Qué son las cookies?">
        <p>
          Una cookie es un pequeño archivo que un sitio web guarda en tu
          navegador para recordar información entre visitas (por ejemplo, si
          has iniciado sesión o el tema visual que prefieres). El
          almacenamiento local (localStorage) cumple una función similar.
        </p>
      </LegalSection>

      <LegalSection title="Cookies que utilizamos">
        <p>
          La aplicación utiliza únicamente cookies y almacenamiento local{" "}
          <span className="text-white">técnicamente necesarios</span>:
        </p>
        <div className="mt-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 text-xs uppercase tracking-wider text-zinc-500 border-b border-zinc-800">
            <div className="px-5 py-3">Categoría</div>
            <div className="px-5 py-3 hidden sm:block">Finalidad</div>
            <div className="px-5 py-3 hidden sm:block">Caducidad</div>
          </div>
          {[
            {
              cat: "Sesión",
              fin: "Mantener tu inicio de sesión y rol activo en la plataforma.",
              cad: "Hasta cierre de sesión",
            },
            {
              cat: "Preferencias",
              fin: "Recordar tema visual, idioma y configuración de la interfaz.",
              cad: "Hasta 12 meses",
            },
            {
              cat: "Seguridad",
              fin: "Prevención de fraude, integridad y protección frente a ataques.",
              cad: "Hasta 12 meses",
            },
            {
              cat: "Consentimiento",
              fin: "Recordar tu decisión sobre este aviso de cookies.",
              cad: "12 meses",
            },
          ].map((row, i, arr) => (
            <div
              key={row.cat}
              className={`grid grid-cols-1 sm:grid-cols-3 text-sm ${
                i !== arr.length - 1 ? "border-b border-zinc-800/70" : ""
              }`}
            >
              <div className="px-5 py-4 text-white">{row.cat}</div>
              <div className="px-5 py-4 text-zinc-400">
                <span className="sm:hidden text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">
                  Finalidad
                </span>
                {row.fin}
              </div>
              <div className="px-5 py-4 text-zinc-400">
                <span className="sm:hidden text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">
                  Caducidad
                </span>
                {row.cad}
              </div>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="Cookies de terceros">
        <p>
          GTiQ no utiliza cookies de terceros con fines publicitarios ni de
          seguimiento comportamental. Si una empresa cliente activa
          expresamente una funcionalidad opcional que requiera cookies
          adicionales, deberá informar de ello a su plantilla y obtener el
          consentimiento correspondiente.
        </p>
      </LegalSection>

      <LegalSection title="Cómo gestionar las cookies">
        <p>
          Puedes borrar o bloquear las cookies desde la configuración de tu
          navegador. Ten en cuenta que el bloqueo de cookies esenciales puede
          impedir el inicio de sesión o el correcto funcionamiento de la
          plataforma.
        </p>
        <ul className="list-disc list-inside space-y-1.5 marker:text-zinc-600">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/Borrar%20cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
            >
              Apple Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalNote>
        Esta política puede actualizarse para reflejar cambios técnicos o
        normativos. Te recomendamos revisarla periódicamente desde el
        formulario de cookies o desde el pie de página.
      </LegalNote>

      <BreadcrumbListSchema
        items={[
          { name: "Inicio", url: SITE_URL },
          { name: "Legal", url: `${SITE_URL}/legal/cookies` },
          { name: "Política de cookies", url: `${SITE_URL}/legal/cookies` },
        ]}
      />
    </LegalPage>
  )
}
