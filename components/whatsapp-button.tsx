import Link from "next/link"

const PHONE = "34623787504"
const MESSAGE = "Hola, me interesa GTiQ. ¿Podéis darme más información?"

export function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.55)] hover:bg-[#1ebe5b] hover:scale-105 active:scale-95 transition sm:bottom-6 sm:right-6"
    >
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.408-.545-.489-1.094-1.456-1.094-1.456-.117-.176-.038-.359.124-.519.07-.07.205-.205.31-.337.105-.131.155-.241.232-.39.078-.149.024-.319-.04-.45-.064-.13-.589-1.422-.807-1.946-.156-.376-.318-.318-.452-.318-.131-.005-.282-.005-.432-.005a.834.834 0 00-.604.281c-.205.225-.785.766-.785 1.867 0 1.101.804 2.165.916 2.314.111.149 1.583 2.422 3.834 3.395.535.227.95.358 1.286.467.535.176 1.022.151 1.408.092.428-.065 1.32-.539 1.506-1.059.186-.52.186-.967.13-1.06-.055-.094-.205-.151-.43-.265m-4.985 6.795h-.005a9.87 9.87 0 01-5.03-1.378l-.36-.214-3.733.978.997-3.638-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884a9.8 9.8 0 016.99 2.896 9.825 9.825 0 012.892 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.298A11.815 11.815 0 0014.13 2c-6.554 0-11.89 5.335-11.892 11.892 0 2.096.548 4.142 1.588 5.945L2.137 26l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.892a11.821 11.821 0 00-3.484-8.413" />
      </svg>
    </Link>
  )
}
