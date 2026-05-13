import Image from "next/image"
import { Logo } from "./logo"
import { NewsletterForm } from "./newsletter-form"

const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  Producto: [
    { label: "Funcionalidades", href: "#producto" },
    { label: "Precios", href: "#precios" },
    { label: "Ley 8/2019", href: "#ley" },
    { label: "Demo", href: "#demo" },
    { label: "Calculadora de ahorro", href: "#ahorro" },
    { label: "Migración gratuita", href: "#migracion" },
  ],
  Empresa: [
    { label: "GNERAI", href: "https://gnerai.com" },
    { label: "Casos de éxito", href: "#" },
    { label: "Contacto", href: "mailto:hola@gneraitiq.com" },
  ],
  Legal: [
    { label: "Aviso legal", href: "/legal/aviso-legal" },
    { label: "Política de privacidad", href: "/legal/privacidad" },
    { label: "Política de cookies", href: "/legal/cookies" },
  ],
}

export function Footer() {
  return (
    <footer
      className="border-t border-white/[0.06] py-16 px-4 sm:px-6"
      style={{ backgroundColor: "#09090B" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Newsletter strip */}
        <div className="mb-12 pb-12 border-b border-white/[0.06] grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl sm:text-2xl tracking-tight font-medium leading-tight">
              Novedades sobre control horario, sin spam.
            </h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-md">
              Una vez al mes como mucho. Cambios normativos del RD 8/2019,
              consejos para Inspección y nuevas funciones de GTiQ.
            </p>
          </div>
          <div className="lg:col-span-3">
            <NewsletterForm />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div
            id="empresa"
            className="col-span-2 sm:col-span-3 lg:col-span-2 scroll-mt-24"
          >
            <Logo size={32} />
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Software de control horario hecho en España para pymes que quieren
              cumplir el RD 8/2019 sin pagar de más.
            </p>
            <p className="mt-4 text-sm text-zinc-300">
              <a
                href="mailto:hola@gneraitiq.com"
                className="hover:text-white transition-colors"
              >
                hola@gneraitiq.com
              </a>
              <br />
              <a
                href="tel:+34623787705"
                className="hover:text-white transition-colors"
              >
                +34 623 787 705
              </a>
              <br />
              <span className="text-zinc-500">Carrer Unió 90, Mataró · Barcelona</span>
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([cat, links]) => (
            <div key={cat}>
              <h3 className="text-white font-medium text-sm mb-4">{cat}</h3>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-xs text-zinc-500">
          <span>Powered by GNERAI</span>
          <a
            href="https://sintelec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
            aria-label="Sintelec — empresa colaboradora"
          >
            <span className="text-[11px] uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300 transition-colors">
              Empresa colaboradora
            </span>
            <Image
              src="/images/sintelec-logo.png"
              alt="Sintelec"
              width={800}
              height={191}
              className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
