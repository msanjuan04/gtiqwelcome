# SEO / GEO / AEO — Roadmap GTiQ

Estado: **Fase 1 implementada.** Fases 2 y 3 requieren decisiones de producto y contenido real antes de tocar código.

---

## ✅ Fase 1 — Fundación técnica (HECHO)

Está todo en código y se sostiene solo. Verificable con Google Rich Results Test, Schema.org Validator y "Ver código fuente" del navegador.

| Item | Archivo | Qué hace |
|---|---|---|
| Fuente única de NAP, sameAs, áreas servidas | [`lib/seo/business-info.ts`](../lib/seo/business-info.ts) | Constantes que alimentan todos los schemas. Cambias aquí, cambia en toda la web. |
| Wrapper genérico JSON-LD | [`components/seo/json-ld.tsx`](../components/seo/json-ld.tsx) | Inserta `<script type="application/ld+json">` server-side. |
| Schemas reutilizables | [`components/seo/schemas.tsx`](../components/seo/schemas.tsx) | Organization, WebSite, LocalBusiness, SoftwareApplication, FAQPage, BreadcrumbList. |
| Schemas globales montados | [`app/layout.tsx`](../app/layout.tsx) | Organization + WebSite + LocalBusiness en cada página. |
| SoftwareApplication en home | [`app/page.tsx`](../app/page.tsx) | Producto identificado como app B2B con feature list y AggregateOffer. |
| FAQPage sincronizado con la UI | [`components/faq-section.tsx`](../components/faq-section.tsx) | Las 8 preguntas se emiten como `FAQPage` JSON-LD desde el propio componente. |
| Breadcrumbs en legales | `app/legal/*/page.tsx` | `BreadcrumbList` para Inicio › Legal › Página. |
| Robots con bots IA permitidos | [`app/robots.ts`](../app/robots.ts) | OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, etc. permitidos explícitamente; Bytespider bloqueado. |
| Sitemap | [`app/sitemap.ts`](../app/sitemap.ts) | Home + 3 legales con prioridad y frecuencia. |
| `llms.txt` | [`public/llms.txt`](../public/llms.txt) | Markdown estructurado para LLMs (estándar Jeremy Howard). |
| Headers de seguridad | [`next.config.mjs`](../next.config.mjs) | HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. |
| Canonicals + OG por ruta | metadata de cada `page.tsx` | `alternates.canonical` y OpenGraph en home y 3 legales. |

---

## ⚠️ TODOs humanos (no son código)

Hay datos en `business-info.ts` marcados como `TODO:` que tienen que rellenarse con información real para que el SEO/GEO valga:

- [ ] **`legalName`** — razón social exacta de la empresa (con S.L., S.A., etc.).
- [ ] **`foundingDate`** — fecha real de constitución.
- [ ] **`telephone`** — teléfono de contacto comercial.
- [ ] **`vatId`** — CIF/NIF.
- [ ] **`address`** — confirmar la dirección real (TecnoCampus es plausible pero hay que verificar).
- [ ] **`sameAs`** — perfiles reales en LinkedIn de empresa, Twitter/X, Crunchbase, YouTube. Deben existir y tener tu nombre. Sin esto, Google no consolida la entidad y los LLMs tienen menos señales.

Y fuera del repo:

- [ ] **Google Search Console**: añade `https://gtiq.app` como propiedad y sube el sitemap.
- [ ] **Bing Webmaster Tools**: idem (Bing alimenta el índice de Copilot/ChatGPT).
- [ ] **Google Business Profile**: ficha verificada con dirección física, categoría primaria "Software company", 10+ fotos, posts mensuales.
- [ ] **Cuentas en G2 / Capterra / GetApp / Trustpilot / SoftDoit**: mínimo Capterra ES + Trustpilot ES.
- [ ] **Cloudflare** (si lo usáis): Security → Bots → desactivar "Block AI Scrapers" o crear allowlist de los user-agents que permitimos en `robots.ts`. Si no, las reglas no llegan al origen.

---

## 🚧 Fase 2 — Contenido editorial pillar (NO empezar sin decidir esto)

Lo que necesitamos decidir antes de tocar código:

### CMS o MDX local
**Pregunta**: ¿gestionamos blog/casos/glosario en MDX dentro del repo, o conectamos a Sanity / Contentful / Payload / Strapi?

- **MDX local**: cero coste, todo en git, requiere PR para cada artículo. Bien si publicas tú.
- **CMS headless**: equipo no técnico puede publicar, pero +50–200 €/mes y 1 día de integración.

### Contenido a producir (orden recomendado)

1. **Pillar legal `/legal/rd-8-2019`** y **`/legal/registro-horario-digital-obligatorio`** — son tu mayor activo SEO porque la regulación está en cambio activo y nadie posiciona bien aún. ~2.500 palabras cada una con citas BOE / Ministerio Trabajo / AEPD.
2. **Comparativas `/comparativas/gtiq-vs-{sesame,factorial,bizneo,tramitapp}`** — alta intención transaccional, baja competencia para la combinación con tu marca. Necesito de ti precios reales y feature parity para escribirlas honestas.
3. **Glosario** — 10 términos para empezar (no 50 de golpe): "qué es control horario", "RD 8/2019", "registro de jornada", "horas extras estructurales", "Inspección de Trabajo sanciones", "AEPD biometría fichaje", "fichaje GPS RGPD", "convenio colectivo control horario", "desconexión digital", "kiosco fichaje".
4. **Blog cadencia mínima** — 1 post/semana. Sin compromiso, no actives blog (Google penaliza dormido).

### Lo que YO necesito de ti

- Lista de **autores reales** con CV → para Author pages con E-E-A-T legítimo. Sin esto, mejor no firmar artículos.
- **Testimonios reales firmados** de Terrazea, Razol, Santa Marta, etc. → para `Review` schema legítimo. Los actuales son anonimizados (correcto), pero si conseguimos uno con permiso explícito sube mucho la credibilidad.

---

## 🌍 Fase 3 — Programmatic SEO local (Maresme + España)

**Solo tras Fase 2** y solo si el blog tiene tracción. Si no, son páginas zombi que perjudican.

### `/control-horario/[ciudad]` — 30-40 ciudades

Necesito un dataset por ciudad para que el contenido sea único, no spam:
- Número aproximado de empresas (INE / Cambra de Comerç).
- Convenios colectivos predominantes.
- Sectores principales (hostelería en Calella, industria en Granollers, etc.).
- 1 testimonio o caso real por ciudad (ideal).

Sin este dataset, las páginas son thin content y penalizan.

### Internacionalización es-ES + ca-ES

Refactor grande con `next-intl` y mover todo bajo `app/[locale]/...`. Solo merece la pena cuando:
- Haya traducciones reales al catalán (no Google Translate).
- Las páginas pillar legales estén traducidas y revisadas por alguien que sepa lenguaje jurídico catalán.
- Exista demanda medida (datos de Search Console mostrando búsquedas en ca-ES).

### Sectores

10 páginas de `/sectores/[sector]` con casos reales, métricas de adopción y testimonios sectoriales. Mismo principio: sin contenido auténtico, no se hacen.

---

## 📊 Métricas a vigilar (post-deploy)

### Tráfico orgánico Google
- Impresiones y clics en GSC para queries: `control horario`, `software fichaje`, `RD 8/2019`, `alternativa Sesame/Factorial/Bizneo`.
- CTR por consulta. Objetivo: >5% en branded, >2% en informacional.

### Visibilidad IA (GEO/AEO)
Usar **una** herramienta de monitorización (Profound, Peec AI, Otterly, AthenaHQ — 50–200 €/mes). Definir 25 prompts objetivo en español:
- "mejor software de control horario para pymes en España"
- "alternativa a Sesame HR sin biometría"
- "cómo cumplir el RD 8/2019 en una pyme"
- "control horario sin pagar por usuario"
- "software de fichaje en Mataró / Barcelona / Cataluña"
- ...

Métrica clave: **Citation Rate** = % de prompts que mencionan GTiQ. Objetivo a 6 meses: >20%.

### Core Web Vitals
- LCP, INP, CLS de field data en GSC. Umbral: 75% en verde.

### Local
- Posición media en Google Maps para "control horario Mataró/Barcelona/Maresme".
- Volumen y rating en GBP.

---

## Cuándo abrir Fase 2

Cuando se cumplan estas tres condiciones:

1. ✅ Los TODOs humanos de la Fase 1 estén cerrados (NAP real, GBP, GSC).
2. ✅ Tengamos al menos un autor real con bio firmable.
3. ✅ Comprometido un calendario de blog mínimo de 1 post/semana durante 3 meses.

Antes de eso, todo lo demás es prematuro.
