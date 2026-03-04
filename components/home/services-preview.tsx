"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { useLanguage } from "@/context/LanguageContext"
import { getCmsContent, getLocalizedValue } from "@/lib/content-utils"

type Service = {
  id: string
  title_en: string
  title_ro: string
  title_ru: string
  description_en: string
  description_ro: string
  description_ru: string
  price: number
  currency: string
  duration: string
  featured: boolean
}

export function ServicesPreview() {
  const { locale } = useLanguage()
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCmsContent<{services: Service[]}>('services').then((data) => {
      if (data?.services) {
        setServices(data.services.slice(0, 3))
      }
      setLoading(false)
    })
  }, [])

  if (loading) return null

  return (
    <Section variant="soft">
      <SectionHeader
        label={locale === "en" ? "What I Offer" : locale === "ro" ? "Ce Ofer" : "Что Я Предлагаю"}
        title={locale === "en" ? "Professional Services" : locale === "ro" ? "Servicii Profesionale" : "Профессиональные Услуги"}
        description={locale === "en" 
          ? "Tailored therapeutic approaches to support you on your journey to emotional well-being and personal growth." 
          : locale === "ro"
          ? "Abordări terapeutice personalizate pentru a te sprijini în călătoria ta către bunăstare emoțională și creștere personală."
          : "Индивидуальные терапевтические подходы для поддержки вашего пути к эмоциональному благополучию и личностному росту."}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative rounded-2xl p-8 transition-all hover:shadow-lg ${
              service.featured
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-card text-card-foreground"
            }`}
          >
            {service.featured && (
              <span className="absolute top-4 right-4 bg-background text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {locale === "en" ? "-50% OFF" : locale === "ro" ? "-50% REDUCERE" : "-50% СКИДКА"}
              </span>
            )}
            <h3 className="font-serif text-xl font-semibold mb-3">
              {getLocalizedValue(service, 'title', locale)}
            </h3>
            <p className={`text-sm leading-relaxed mb-6 ${
              service.featured ? "opacity-90" : "text-muted-foreground"
            }`}>
              {getLocalizedValue(service, 'description', locale)}
            </p>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold">
                  {service.currency === "EUR" ? "€" : "$"}
                  {service.price}
                </p>
                <p className={`text-xs ${
                  service.featured ? "opacity-70" : "text-muted-foreground"
                }`}>
                  {service.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          {locale === "en" ? "View All Services" : locale === "ro" ? "Vezi Toate Serviciile" : "Все Услуги"} 
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}