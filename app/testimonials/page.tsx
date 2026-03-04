"use client"

import { useLanguage } from "@/context/LanguageContext"  // ← Schimbat
import { testimonials } from "@/lib/content"
import { Star } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  text: string
  rating: number
}

export default function TestimonialsPage() {
  const { locale } = useLanguage()
  const testimonialsList: Testimonial[] = testimonials[locale]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            {locale === "en" && "Testimonials"}
            {locale === "ro" && "Testimoniale"}
            {locale === "ru" && "Отзывы"}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            {locale === "en" && "What my clients say"}
            {locale === "ro" && "Ce spun clienții mei"}
            {locale === "ru" && "Что говорят мои клиенты"}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            {locale === "en" && "Real stories from people who have found healing, growth, and positive change through our work together."}
            {locale === "ro" && "Povești reale de la oameni care au găsit vindecare, creștere și schimbări pozitive prin munca noastră împreună."}
            {locale === "ru" && "Реальные истории людей, которые обрели исцеление, рост и позитивные изменения благодаря нашей совместной работе."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsList.map((testimonial: Testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author Name */}
              <footer className="font-medium text-foreground">
                — {testimonial.name}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}