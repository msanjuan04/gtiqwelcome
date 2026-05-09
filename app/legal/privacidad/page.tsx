import type { Metadata } from "next"
import {
  LegalPage,
  LegalSection,
  LegalNote,
  LegalQuote,
} from "@/components/legal-page"
import { BreadcrumbListSchema } from "@/components/seo/schemas"
import { SITE_URL } from "@/lib/seo/business-info"

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de GTiQ: finalidades, base jurídica, datos tratados, conservación y derechos de las personas según RGPD y LOPDGDD.",
  alternates: { canonical: "/legal/privacidad" },
  openGraph: {
    title: "Política de privacidad · GTiQ",
    description:
      "Cómo trata GTiQ los datos del registro de jornada: finalidades, base jurídica y derechos.",
    url: "/legal/privacidad",
    type: "article",
  },
}

export default function Page() {
  return (
    <LegalPage
      category="Privacidad y protección de datos"
      title="Política de privacidad"
      intro="GTiQ trata los datos de las personas trabajadoras con la única finalidad de cumplir con el registro de jornada establecido en el RDL 8/2019, en plena conformidad con el RGPD y la LOPDGDD."
      updatedAt="9 de mayo de 2026"
    >
      <LegalSection number="01" title="Finalidades del tratamiento">
        <ul className="list-disc list-inside space-y-1.5 marker:text-zinc-600">
          <li>
            Registro de fichajes (entrada, salida y pausas) y elaboración del
            registro diario de jornada.
          </li>
          <li>Gestión de usuarios, roles, equipos y centros de trabajo.</li>
          <li>
            Control y vinculación de dispositivos para autenticación y
            trazabilidad del fichaje.
          </li>
          <li>
            Elaboración de informes, resúmenes mensuales y documentación
            accesible para Inspección.
          </li>
          <li>
            Cuando la empresa lo habilite expresamente, geolocalización y/o
            fotografía con fines de verificación de presencia.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="02" title="Base jurídica">
        <ul className="list-disc list-inside space-y-1.5 marker:text-zinc-600">
          <li>
            <span className="text-white">Cumplimiento de obligación legal</span>{" "}
            (art. 6.1.c RGPD; RDL 8/2019).
          </li>
          <li>
            <span className="text-white">Ejecución del contrato</span> (art.
            6.1.b) en relación con la prestación del servicio.
          </li>
          <li>
            <span className="text-white">Interés legítimo</span> (art. 6.1.f)
            para garantizar la seguridad e integridad del sistema.
          </li>
          <li>
            <span className="text-white">Consentimiento</span> (art. 6.1.a)
            para funcionalidades opcionales como geolocalización o fotografía
            en el momento del fichaje.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="03" title="Datos tratados">
        <ul className="list-disc list-inside space-y-1.5 marker:text-zinc-600">
          <li>
            <span className="text-white">Identificativos:</span> nombre, email.
          </li>
          <li>
            <span className="text-white">Laborales:</span> rol, centro,
            equipo, tipo de contrato, jornada habitual.
          </li>
          <li>
            <span className="text-white">Fichajes:</span> fechas y horas de
            entrada, salida y pausas.
          </li>
          <li>
            <span className="text-white">Dispositivos:</span> identificador
            técnico generado por la aplicación, navegador / sistema operativo,
            fecha de vinculación y de último uso.
          </li>
          <li>
            <span className="text-white">Opcionales</span> (solo si la empresa
            lo habilita): coordenadas GPS aproximadas y fotografía en el
            momento del fichaje.
          </li>
        </ul>
        <p>
          GTiQ <span className="text-white">no recoge IMEI, número de teléfono</span>{" "}
          ni realiza seguimiento permanente del dispositivo. Tampoco se
          tratan datos de categoría especial (biometría, salud, etc.).
        </p>

        <h3 className="mt-6 text-base font-medium text-white tracking-tight">
          Acceso por NFC y vinculación de dispositivo
        </h3>
        <p>
          De forma opcional, la plataforma permite abrir el fichaje rápido a
          través de NFC/QR y vincular el dispositivo móvil tras una primera
          identificación. Se genera un identificador técnico interno para
          reconocer el dispositivo en accesos posteriores y reducir fricción,
          sin cambiar la finalidad ni la base jurídica del registro de
          jornada. Este mecanismo es revocable por la empresa y no añade
          nuevas finalidades.
        </p>
      </LegalSection>

      <LegalSection number="04" title="Destinatarios">
        <ul className="list-disc list-inside space-y-1.5 marker:text-zinc-600">
          <li>
            Proveedores tecnológicos en calidad de encargados del tratamiento
            (alojamiento, email transaccional, analítica operativa).
          </li>
          <li>
            Administraciones públicas e Inspección de Trabajo cuando proceda
            legalmente.
          </li>
          <li>
            Representación legal de los trabajadores, en los términos
            previstos por la normativa.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="05" title="Transferencias internacionales">
        <p>
          Si existieran transferencias internacionales de datos, se amparan en
          cláusulas contractuales tipo aprobadas por la Comisión Europea y
          medidas complementarias adecuadas. Consulte al administrador de su
          empresa para obtener la lista actualizada de subencargados.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Plazos de conservación">
        <ul className="list-disc list-inside space-y-1.5 marker:text-zinc-600">
          <li>
            Los <span className="text-white">registros de jornada</span> se
            conservan al menos 4 años (o el plazo que resulte aplicable).
          </li>
          <li>
            Los <span className="text-white">logs de auditoría</span> y
            revisiones se conservan como prueba de integridad durante el mismo
            periodo o el que la empresa determine.
          </li>
          <li>
            Cada cambio queda reflejado con persona responsable, fecha, motivo
            y versión anterior.
          </li>
          <li>
            La empresa puede generar un{" "}
            <span className="text-white">paquete mensual</span> con resumen,
            hash e identificador único.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="07" title="Derechos de las personas">
        <p>
          Puede ejercer los siguientes derechos ante su empresa, que es la
          responsable del tratamiento:
        </p>
        <ul className="list-disc list-inside space-y-1.5 marker:text-zinc-600">
          <li>Acceso</li>
          <li>Rectificación</li>
          <li>Supresión</li>
          <li>Limitación del tratamiento</li>
          <li>Oposición</li>
          <li>Portabilidad</li>
        </ul>
        <p>
          Si considera que sus derechos no han sido atendidos correctamente,
          puede reclamar ante la{" "}
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
          >
            Agencia Española de Protección de Datos (AEPD)
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection number="08" title="Contacto del DPO o responsable de privacidad">
        <p>
          Cada empresa debe proporcionar el email de contacto del Delegado de
          Protección de Datos (DPO) o de la persona responsable de privacidad
          internamente.
        </p>
        <p>
          Para cuestiones relativas al funcionamiento técnico de la plataforma
          puede escribir a{" "}
          <a
            href="mailto:hola@gneraitiq.com"
            className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
          >
            hola@gneraitiq.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Textos de consentimiento">
        <p>
          A continuación se incluyen los textos de información y
          consentimiento que GTiQ presenta dentro de la aplicación:
        </p>

        <h3 className="mt-4 text-base font-medium text-white tracking-tight">
          Aviso de vinculación de dispositivo (informativo, sin consentimiento)
        </h3>
        <LegalQuote>
          Este dispositivo quedará vinculado a tu cuenta para facilitar el
          fichaje sin código. Si cambias de móvil o el dispositivo es
          revocado, se te solicitará nuevamente el código.
        </LegalQuote>

        <h3 className="mt-4 text-base font-medium text-white tracking-tight">
          Geolocalización en fichajes (opcional)
        </h3>
        <LegalQuote>
          Autorizo la captura de mi ubicación aproximada (coordenadas GPS) en
          el momento del fichaje, con la única finalidad de verificación de
          presencia en el puesto de trabajo. Esta funcionalidad es opcional y
          puede desactivarse por la empresa. La base jurídica es mi
          consentimiento, que puedo retirar en cualquier momento sin efectos
          retroactivos.
        </LegalQuote>

        <h3 className="mt-4 text-base font-medium text-white tracking-tight">
          Firma / acuse mensual del registro
        </h3>
        <LegalQuote>
          Declaro haber revisado mi registro de jornada del mes [MES/AÑO] y lo
          considero conforme. En caso de disconformidad, podré dejar
          constancia (“disputa”) y solicitar rectificación. Se generará un
          acuse con fecha y huella del resumen.
        </LegalQuote>
      </LegalSection>

      <LegalNote>
        <p>
          <span className="text-white font-medium">Nota técnico-legal:</span>{" "}
          el uso de NFC y la vinculación de dispositivo son mecanismos de
          autenticación y trazabilidad del fichaje, no sistemas de control
          adicionales. El registro sigue siendo personal, auditable y
          revocable por la empresa.
        </p>
        <p className="mt-3">
          Esta política es orientativa. Cada empresa (responsable del
          tratamiento) debe adaptar estos contenidos a su realidad
          organizativa, proveedores y flujos de datos específicos.
        </p>
      </LegalNote>

      <BreadcrumbListSchema
        items={[
          { name: "Inicio", url: SITE_URL },
          { name: "Legal", url: `${SITE_URL}/legal/privacidad` },
          { name: "Política de privacidad", url: `${SITE_URL}/legal/privacidad` },
        ]}
      />
    </LegalPage>
  )
}
