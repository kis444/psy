"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { navigation, bookButtonText } from "@/lib/content"
import { getL, getSiteSettings } from "@/lib/content-utils"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"
import type { SiteSettings } from "@/lib/content"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const pathname = usePathname()
  const { locale } = useLanguage()

  useEffect(() => {
    getSiteSettings().then(setSettings)
  }, [])

  const navItems = navigation[locale]

  return (
    <header className="sticky top-0 z-50 bg-primary/50 backdrop-blur-md border-b border-primary/20">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col" aria-label="Home">
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            {settings?.name ?? "Dr. Popovici Daniela"}
          </span>
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            {settings ? getL(settings, "title", locale) : "Licensed Psychologist"}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            {bookButtonText[locale]}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav
          className="lg:hidden border-t border-border/50 bg-background"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors py-2",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border/50 flex items-center justify-between">
              <LanguageSwitcher />
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                {bookButtonText[locale]}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
