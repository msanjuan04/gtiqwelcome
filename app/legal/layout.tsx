import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-[#09090B] text-white">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
