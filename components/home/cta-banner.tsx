"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/section"
import { useLanguage } from "@/context/LanguageContext"

export function CtaBanner() {
  const { locale } = useLanguage()

  return (
    <Section>
      <div className="rounded-3xl bg-primary p-10 md:p-16 text-center text-primary-foreground">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance">
          {locale === "en" ? "Ready to begin your journey?" : 
           locale === "ro" ? "Ești pregătit să începi călătoria?" : 
           "Готовы начать свое путешествие?"}
        </h2>
        <p className="mt-4 text-base opacity-90 max-w-lg mx-auto text-pretty">
          {locale === "en" 
            ? "Take the first step towards emotional well-being. Book your initial consultation at 50% off and discover how therapy can transform your life."
            : locale === "ro"
            ? "Fă primul pas către bunăstarea emoțională. Programează consultația inițială cu 50% reducere și descoperă cum terapia îți poate transforma viața."
            : "Сделайте первый шаг к эмоциональному благополучию. Запишитесь на первичную консультацию со скидкой 50% и узнайте, как терапия может изменить вашу жизнь."}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-background text-foreground px-8 py-3.5 text-base font-semibold transition-all hover:opacity-90 gap-2"
        >
          {locale === "en" ? "Book First Consultation -50%" : 
           locale === "ro" ? "Programează Prima Consultație -50%" : 
           "Записаться на Первую Консультацию -50%"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}