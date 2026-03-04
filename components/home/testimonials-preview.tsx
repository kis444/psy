"use client"

import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { testimonials } from "@/lib/content"
import { Section, SectionHeader } from "@/components/section"
import { useLanguage } from "@/context/LanguageContext"

export function TestimonialsPreview() {
  const { locale } = useLanguage()
  const testimonialsList = testimonials[locale]
  const previewTestimonials = testimonialsList.slice(0, 3)

  return (
    <Section>
      <SectionHeader
        label={locale === "en" ? "Client Stories" : locale === "ro" ? "Poveștile Clienților" : "Истории Клиентов"}
        title={locale === "en" ? "What My Clients Say" : locale === "ro" ? "Ce Spun Clienții Mei" : "Что Говорят Мои Клиенты"}
        description={locale === "en" 
          ? "Real experiences from people who have found their path to well-being through our work together." 
          : locale === "ro"
          ? "Experiențe reale ale oamenilor care și-au găsit calea către bunăstare prin munca noastră împreună."
          : "Реальный опыт людей, которые нашли свой путь к благополучию благодаря нашей совместной работе."}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {previewTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="rounded-2xl bg-card p-8 flex flex-col"
          >
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-primary text-primary"
                  aria-hidden="true"
                />
              ))}
              <span className="sr-only">{testimonial.rating} {locale === "en" ? "out of 5 stars" : locale === "ro" ? "din 5 stele" : "из 5 звезд"}</span>
            </div>
            <blockquote className="text-sm leading-relaxed text-muted-foreground flex-1">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>
            <p className="mt-6 font-semibold text-foreground text-sm">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          {locale === "en" ? "Read All Testimonials" : locale === "ro" ? "Citește Toate Testimoniale" : "Читать Все Отзывы"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}