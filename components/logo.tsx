import Image from "next/image"

type Props = {
  size?: number
  withWordmark?: boolean
  className?: string
  priority?: boolean
}

export function Logo({
  size = 28,
  withWordmark = true,
  className = "",
  priority = false,
}: Props) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/images/gtiq-logo.png"
        alt="GTiQ"
        width={size}
        height={size}
        priority={priority}
        className="select-none"
        style={{ width: size, height: size }}
        draggable={false}
      />
      {withWordmark && (
        <span className="text-white font-semibold tracking-tight">GTiQ</span>
      )}
    </span>
  )
}
