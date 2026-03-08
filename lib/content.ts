// lib/content.ts
// Sursă unică de adevăr pentru tot conținutul site-ului.
// Toate datele sunt în content/cms/*.json — editabile din panoul admin.

export type Locale = "en" | "ro" | "ru"

// ─── Tipuri ────────────────────────────────────────────────────────────────

export type Service = {
  id: string
  title_en: string; title_ro: string; title_ru: string
  description_en: string; description_ro: string; description_ru: string
  price: number
  currency: string
  duration: string
  mode: "online" | "offline" | "online & offline"
  featured: boolean
}

export type Testimonial = {
  name: string
  text_en: string; text_ro: string; text_ru: string
  rating: number
}

export type BlogPost = {
  slug: string
  title_en: string; title_ro: string; title_ru: string
  excerpt_en: string; excerpt_ro: string; excerpt_ru: string
  body_en: string; body_ro: string; body_ru: string
  category: string
  date: string
  image: string
}

export type HeroContent = {
  welcome_en: string; welcome_ro: string; welcome_ru: string
  title_en: string; title_ro: string; title_ru: string
  description_en: string; description_ro: string; description_ru: string
}

export type AboutContent = {
  title_en: string; title_ro: string; title_ru: string
  intro_en: string; intro_ro: string; intro_ru: string
  approach_en: string; approach_ro: string; approach_ru: string
}

export type SiteSettings = {
  name: string
  title_en: string; title_ro: string; title_ru: string
  phone: string
  email: string
  address: string
  instagram: string
  facebook: string
  telegram: string
}

// ─── Helper principal ──────────────────────────────────────────────────────

/**
 * Returnează valoarea câmpului pentru limba curentă.
 * Ex: getL(service, 'title', 'ro') → service.title_ro
 */
export function getL(obj: Record<string, any>, field: string, locale: Locale): string {
  return obj[`${field}_${locale}`] ?? obj[`${field}_en`] ?? obj[field] ?? ""
}

// ─── Navigare (static, nu are sens să fie în DB) ──────────────────────────

export const navigation: Record<Locale, { label: string; href: string }[]> = {
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  ro: [
    { label: "Acasă", href: "/" },
    { label: "Despre", href: "/about" },
    { label: "Servicii", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Testimoniale", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  ru: [
    { label: "Главная", href: "/" },
    { label: "Обо мне", href: "/about" },
    { label: "Услуги", href: "/services" },
    { label: "Блог", href: "/blog" },
    { label: "Отзывы", href: "/testimonials" },
    { label: "Контакты", href: "/contact" },
  ],
}

export const bookButtonText: Record<Locale, string> = {
  en: "Book a Session",
  ro: "Programează o Ședință",
  ru: "Записаться на прием",
}

export const blogCategories: Record<Locale, string[]> = {
  en: ["All", "Anxiety", "Mindfulness", "Relationships", "Self-Growth", "Therapy"],
  ro: ["Toate", "Anxietate", "Mindfulness", "Relații", "Dezvoltare Personală", "Terapie"],
  ru: ["Все", "Тревога", "Осознанность", "Отношения", "Личностный Рост", "Терапия"],
}
