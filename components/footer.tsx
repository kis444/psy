"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Heart, Instagram, Facebook, Send } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { navigation } from "@/lib/content"
import { getSiteSettings } from "@/lib/content-utils"
import type { SiteSettings } from "@/lib/content"

export function Footer() {
  const { locale } = useLanguage()
  const [settings, setSettings] = useState<SiteSettings | null>(null)

  useEffect(() => {
    getSiteSettings().then(setSettings)
  }, [])

  const navItems = navigation[locale]
  const name = settings?.name ?? "Dr. Popovici Daniela"
  const phone = settings?.phone ?? ""
  const email = settings?.email ?? ""
  const address = settings?.address ?? ""
  const instagram = settings?.instagram ?? "#"
  const facebook = settings?.facebook ?? "#"
  const telegram = settings?.telegram ?? "#"

  const labels = {
    nav:     { en: "Navigation", ro: "Navigare",   ru: "Навигация" },
    contact: { en: "Contact",    ro: "Contact",     ru: "Контакты" },
    follow:  { en: "Follow",     ro: "Urmărește",   ru: "Соцсети" },
    tagline: {
      en: "Creating a safe space for healing, growth, and self-discovery.",
      ro: "Un spațiu sigur pentru vindecare, creștere și autodescoperire.",
      ru: "Создаю безопасное пространство для исцеления, роста и самопознания.",
    },
  }

  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-serif text-xl font-bold">{name}</p>
              <p className="text-sm opacity-70">
                {settings ? (settings as any)[`title_${locale}`] ?? settings.title_en : ""}
              </p>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              {labels.tagline[locale]}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">{labels.nav[locale]}</h3>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">{labels.contact[locale]}</h3>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <a href={`tel:${phone}`} className="hover:opacity-100 transition-opacity">{phone}</a>
              <a href={`mailto:${email}`} className="hover:opacity-100 transition-opacity">{email}</a>
              <p>{address}</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">{labels.follow[locale]}</h3>
            <div className="flex items-center gap-3">
              <a href={instagram} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={facebook} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={telegram} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors" aria-label="Telegram">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-50">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p className="text-sm opacity-50 flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary mx-1" aria-hidden="true" /> care
          </p>
        </div>
      </div>
    </footer>
  )
}