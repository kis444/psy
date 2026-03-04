import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { TestimonialsPreview } from "@/components/home/testimonials-preview"
import { BlogPreview } from "@/components/home/blog-preview"
import { CtaBanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <TestimonialsPreview />
      <BlogPreview />
      <CtaBanner />
    </>
  )
}
