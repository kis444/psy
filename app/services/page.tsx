"use client"

import { useEffect, useState } from "react"
import { Check, Wifi, WifiOff, Globe, Heart } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { useLanguage } from "@/context/LanguageContext"
import { getServices, getL } from "@/lib/content-utils"
import { cn } from "@/lib/utils"
import type { Service } from "@/lib/content"

function getModeIcon(mode: string) {
  switch (mode) {
    case "online": return Wifi
    case "offline": return WifiOff
    case "online & offline": return Globe
    default: return Heart
  }
}

function getModeText(mode: string, locale: string) {
  if (mode === "online") return locale === "ru" ? "Онлайн" : "Online"
  if (mode === "offline") return locale === "en" ? "In-person" : locale === "ro" ? "Fizic" : "Очно"
  return locale === "en" ? "Online & In-person" : locale === "ro" ? "Online & Fizic" : "Онлайн и Очно"
}

export default function ServicesPage() {
  const { locale } = useLanguage()
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getServices().then((data) => {
      setServices(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <Section>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      </Section>
    )
  }

  return (
    <>
      <Section>
        <SectionHeader
          label={locale === "en" ? "Services" : locale === "ro" ? "Servicii" : "Услуги"}
          title={locale === "en" ? "How I Can Help" : locale === "ro" ? "Cum Te Pot Ajuta" : "Как Я Могу Помочь"}
          description={
            locale === "en"
              ? "Professional psychological support tailored to your unique needs and circumstances."
              : locale === "ro"
              ? "Suport psihologic profesionist adaptat nevoilor și circumstanțelor tale unice."
              : "Профессиональная психологическая поддержка, адаптированная к вашим уникальным потребностям."
          }
        />
      </Section>

      <Section variant="soft" className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const ModeIcon = getModeIcon(service.mode)
            return (
              <div
                key={service.id}
                className={cn(
                  "relative rounded-2xl p-8 transition-all hover:shadow-lg",
                  service.featured
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-card-foreground"
                )}
              >
                {service.featured && (
                  <span className="absolute top-4 right-4 bg-background text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {locale === "en" ? "-50% OFF" : locale === "ro" ? "-50% REDUCERE" : "-50% СКИДКА"}
                  </span>
                )}
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {getL(service, "title", locale)}
                </h3>
                <p className={cn("text-sm leading-relaxed mb-6", service.featured ? "opacity-90" : "text-muted-foreground")}>
                  {getL(service, "description", locale)}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <ModeIcon className="h-4 w-4" />
                  <span className="text-xs">{getModeText(service.mode, locale)}</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold">
                      {service.currency === "EUR" ? "€" : "$"}{service.price}
                    </p>
                    <p className={cn("text-xs", service.featured ? "opacity-70" : "text-muted-foreground")}>
                      {service.duration}
                    </p>
                  </div>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", service.featured ? "bg-background/20" : "bg-primary/10")}>
                    <Check className="h-4 w-4" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>
    </>
  )
}