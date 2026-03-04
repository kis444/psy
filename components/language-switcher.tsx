"use client"

import { useLanguage } from "@/context/LanguageContext"  // ← Schimbat din Language.Context
import { Globe } from "lucide-react"
import type { Locale } from "@/lib/content"

const locales: { code: Locale; label: string; fullName: string }[] = [
  { code: "en", label: "EN", fullName: "English" },
  { code: "ro", label: "RO", fullName: "Română" },
  { code: "ru", label: "RU", fullName: "Русский" },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Language switcher">
      <Globe className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      {locales.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`px-2 py-1 text-xs font-medium rounded-md transition-colors ${
            locale === lang.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={`Switch language to ${lang.fullName}`}
          aria-pressed={locale === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}