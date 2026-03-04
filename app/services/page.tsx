"use client"

import { useEffect, useState } from "react"
import { Check, Wifi, WifiOff, Globe, Heart } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { useLanguage } from "@/context/LanguageContext"
import { getCmsContent, getLocalizedValue } from "@/lib/content-utils"
import { cn } from "@/lib/utils"

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
  mode: "online" | "offline" | "online & offline"
  featured: boolean
}

function getModeIcon(mode: string) {
  switch(mode) {
    case "online": return Wifi
    case "offline": return WifiOff
    case "online & offline": return Globe
    default: return Heart
  }
}

function getModeText(mode: string, locale: string) {
  if (mode === "online") {
    return locale === "en" ? "Online" : locale === "ro" ? "Online" : "Онлайн"
  }
  if (mode === "offline") {
    return locale === "en" ? "In-person" : locale === "ro" ? "Fizic" : "Очно"
  }
  return locale === "en" ? "Online & In-person" : locale === "ro" ? "Online & Fizic" : "Онлайн и Очно"
}

export default function ServicesPage() {
  const { locale } = useLanguage()
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("🚀 Începe încărcarea serviciilor...")
    getCmsContent<{services: Service[]}>('services')
      .then((data) => {
        console.log("📦 Date primite de la CMS:", data)
        if (data?.services) {
          console.log(`✅ Am găsit ${data.services.length} servicii`)
          setServices(data.services)
        } else {
          console.log("❌ Nu s-au găsit servicii în date")
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error("💥 Eroare la încărcare:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <Section>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </Section>
    )
  }

  if (services.length === 0) {
    return (
      <Section>
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            {locale === "en" ? "No services available yet." : 
             locale === "ro" ? "Nu există servicii disponibile încă." : 
             "Услуги пока недоступны."}
          </p>
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
          description={locale === "en" 
            ? "Professional psychological support tailored to your unique needs and circumstances."
            : locale === "ro"
            ? "Suport psihologic profesionist adaptat nevoilor și circumstanțelor tale unice."
            : "Профессиональная психологическая поддержка, адаптированная к вашим уникальным потребностям и обстоятельствам."}
        />
      </Section>

      <Section variant="soft" className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const ModeIcon = getModeIcon(service.mode)
            const modeText = getModeText(service.mode, locale)
            
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
                  {getLocalizedValue(service, 'title', locale)}
                </h3>
                
                <p className={cn(
                  "text-sm leading-relaxed mb-6",
                  service.featured ? "opacity-90" : "text-muted-foreground"
                )}>
                  {getLocalizedValue(service, 'description', locale)}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <ModeIcon className="h-4 w-4" />
                  <span className="text-xs">{modeText}</span>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold">
                      {service.currency === "EUR" ? "€" : "$"}
                      {service.price}
                    </p>
                    <p className={cn(
                      "text-xs",
                      service.featured ? "opacity-70" : "text-muted-foreground"
                    )}>
                      {service.duration}
                    </p>
                  </div>
                  
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    service.featured ? "bg-background/20" : "bg-primary/10"
                  )}>
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