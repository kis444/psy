"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { getHeroContent, getL } from "@/lib/content-utils"
import type { HeroContent } from "@/lib/content"

const bookCta: Record<string, string> = {
  en: "Book First Consultation −50%",
  ro: "Programează Prima Consultație −50%",
  ru: "Первая Консультация −50%",
}

const learnMore: Record<string, string> = {
  en: "Learn More",
  ro: "Află Mai Multe",
  ru: "Узнать Больше",
}

export function HeroSection() {
  const { locale } = useLanguage()
  const [content, setContent] = useState<HeroContent | null>(null)

  useEffect(() => {
    getHeroContent().then(setContent)
  }, [])

  if (!content) return null

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              {getL(content, "welcome", locale)}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              {getL(content, "title", locale)}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              {getL(content, "description", locale)}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 gap-2"
              >
                {bookCta[locale]}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary gap-2"
              >
                {learnMore[locale]}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto aspect-[1/1] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/psychologist-hero.jpg"
                alt="Dr. Popovici Daniela, Licensed Psychologist"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/20 -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-secondary -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}