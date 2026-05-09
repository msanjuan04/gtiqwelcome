type JsonLdData = Record<string, unknown> | Record<string, unknown>[]

export function JsonLd({ id, data }: { id?: string; data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
