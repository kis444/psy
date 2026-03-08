"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { getTestimonials, getL } from "@/lib/content-utils"
import type { Testimonial } from "@/lib/content"

export default function TestimonialsPage() {
  const { locale } = useLanguage()
  const [items, setItems] = useState<Testimonial[]>([])

  useEffect(() => {
    getTestimonials().then(setItems)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            {locale === "en" ? "Testimonials" : locale === "ro" ? "Testimoniale" : "Отзывы"}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            {locale === "en" ? "What my clients say" : locale === "ro" ? "Ce spun clienții mei" : "Что говорят мои клиенты"}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            {locale === "en"
              ? "Real stories from people who have found healing, growth, and positive change through our work together."
              : locale === "ro"
              ? "Povești reale de la oameni care au găsit vindecare, creștere și schimbări pozitive prin munca noastră împreună."
              : "Реальные истории людей, которые обрели исцеление, рост и позитивные изменения благодаря нашей совместной работе."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                &ldquo;{getL(item, "text", locale)}&rdquo;
              </blockquote>
              <footer className="font-medium text-foreground">— {item.name}</footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}