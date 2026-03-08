// lib/content-utils.ts
// Funcții pentru a citi datele din fișierele JSON (content/cms/).
// Folosite atât de paginile publice cât și de panoul admin.

import type { Locale, Service, Testimonial, BlogPost, HeroContent, AboutContent, SiteSettings } from "./content"

// ─── Funcții de citire (client-side, import static) ───────────────────────

export async function getServices(): Promise<Service[]> {
  const data = await import("@/content/cms/services.json")
  return data.default as Service[]
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await import("@/content/cms/testimonials.json")
  return data.default as Testimonial[]
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const data = await import("@/content/cms/blog/blog.json")
  return data.default as BlogPost[]
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((p) => p.slug === slug) ?? null
}

export async function getHeroContent(): Promise<HeroContent> {
  const data = await import("@/content/cms/hero.json")
  return data.default as HeroContent
}

export async function getAboutContent(): Promise<AboutContent> {
  const data = await import("@/content/cms/about.json")
  return data.default as AboutContent
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await import("@/content/cms/settings.json")
  return data.default as SiteSettings
}

// ─── Helper localizare (re-exportat pentru compatibilitate) ───────────────

export function getL(obj: Record<string, any>, field: string, locale: Locale): string {
  return obj[`${field}_${locale}`] ?? obj[`${field}_en`] ?? obj[field] ?? ""
}

/** @deprecated Folosește getL() */
export const getLocalizedValue = getL
/** @deprecated Folosește getL() */
export const getLocalizedText = getL