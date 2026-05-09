import type { Metadata } from "next"
import { LegalPage, LegalSection, LegalNote } from "@/components/legal-page"
import { BreadcrumbListSchema } from "@/components/seo/schemas"
import { SITE_URL } from "@/lib/seo/business-info"

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Información legal de GTiQ: responsable del tratamiento, finalidad de la plataforma y datos de contacto.",
  alternates: { canonical: "/legal/aviso-legal" },
  openGraph: {
    title: "Aviso legal · GTiQ",
    description:
      "Información legal de GTiQ: responsable del tratamiento, finalidad y titularidad.",
    url: "/legal/aviso-legal",
    type: "article",
  },
}

export default function Page() {
  return (
    <LegalPage
      category="Información legal"
      title="Aviso legal"
      intro="Información sobre el cumplimiento del RDL 8/2019, RGPD y LOPDGDD. Cada empresa usuaria de la plataforma es responsable del tratamiento de los datos de su personal."
      updatedAt="9 de mayo de 2026"
    >
      <LegalSection title="Responsable del tratamiento">
        <p>
          El responsable del tratamiento de los datos será, en cada caso, la
          empresa que contrata y utiliza la plataforma GTiQ para gestionar el
          registro de jornada de su personal.
        </p>
        <p>
          Cada empresa debe proporcionar sus datos identificativos para
          informar a su plantilla:
        </p>
        <ul className="list-disc list-inside space-y-1.5 marker:text-zinc-600">
          <li>Razón social y nombre comercial</li>
          <li>CIF / NIF</li>
          <li>Domicilio social</li>
          <li>Email de contacto</li>
        </ul>
      </LegalSection>

      <LegalSection title="Finalidad de la plataforma">
        <p>
          GTiQ es un sistema de control horario y registro de jornada laboral
          para empresas. Su finalidad es:
        </p>
        <ul className="list-disc list-inside space-y-1.5 marker:text-zinc-600">
          <li>
            Cumplir con la obligación legal de registro de jornada establecida
            en el Real Decreto-ley 8/2019.
          </li>
          <li>
            Gestionar fichajes (entrada, salida y pausas), incidencias,
            ausencias y vacaciones.
          </li>
          <li>
            Elaborar informes y documentación accesible para la plantilla, la
            representación legal de los trabajadores y la Inspección de
            Trabajo cuando proceda.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Titularidad de la plataforma">
        <p>
          La plataforma GTiQ es desarrollada y operada por{" "}
          <span className="text-white">GNERAI</span>, con sede en Barcelona y
          Mataró. Para cualquier comunicación relacionada con la plataforma,
          puede dirigirse a{" "}
          <a
            href="mailto:hola@gneraitiq.com"
            className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
          >
            hola@gneraitiq.com
          </a>
          .
        </p>
        <p>
          GNERAI actúa como{" "}
          <span className="text-white">encargado del tratamiento</span> respecto
          a las empresas clientes, en los términos del artículo 28 del RGPD y
          del contrato de prestación de servicios suscrito con cada empresa.
        </p>
      </LegalSection>

      <LegalSection title="Propiedad intelectual e industrial">
        <p>
          El código, el diseño, los textos, los logotipos y demás elementos de
          la plataforma están protegidos por la legislación vigente en materia
          de propiedad intelectual e industrial. Su reproducción, distribución
          o transformación sin autorización está prohibida.
        </p>
      </LegalSection>

      <LegalSection title="Legislación aplicable y jurisdicción">
        <p>
          La relación entre GNERAI y las empresas usuarias se rige por la
          legislación española. Para la resolución de cualquier controversia,
          las partes se someten a los Juzgados y Tribunales de la ciudad
          correspondiente al domicilio de GNERAI, salvo que la normativa
          aplicable disponga lo contrario.
        </p>
      </LegalSection>

      <LegalNote>
        Esta información es orientativa. Cada empresa (responsable del
        tratamiento) debe adaptar estos contenidos a su realidad organizativa,
        proveedores y flujos de datos específicos.
      </LegalNote>

      <BreadcrumbListSchema
        items={[
          { name: "Inicio", url: SITE_URL },
          { name: "Legal", url: `${SITE_URL}/legal/aviso-legal` },
          { name: "Aviso legal", url: `${SITE_URL}/legal/aviso-legal` },
        ]}
      />
    </LegalPage>
  )
}
