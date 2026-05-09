import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogoCloud } from "@/components/logo-cloud"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesBento } from "@/components/features-bento"
import { LawSection } from "@/components/law-section"
import { ComparisonTable } from "@/components/comparison-table"
import { SavingsCalculator } from "@/components/savings-calculator"
import { PricingSection } from "@/components/pricing-section"
import { MigrationSection } from "@/components/migration-section"
import { DemoSection } from "@/components/demo-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { OnePageSection } from "@/components/one-page-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { SoftwareApplicationSchema } from "@/components/seo/schemas"

export default function Home() {
  return (
    <main className="bg-[#09090B] text-white">
      <Navbar />
      <Hero />
      <LogoCloud />
      <ProblemSection />
      <SolutionSection />
      <FeaturesBento />
      <LawSection />
      <ComparisonTable />
      <SavingsCalculator />
      <PricingSection />
      <MigrationSection />
      <DemoSection />
      <TestimonialsSection />
      <FAQSection />
      <OnePageSection />
      <FinalCTA />
      <Footer />
      <SoftwareApplicationSchema />
    </main>
  )
}
