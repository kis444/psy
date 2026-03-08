// lib/content-utils.ts
// Funcții pentru a citi datele din MongoDB via API
// Folosite atât de paginile publice cât și de panoul admin.

import type { Locale, Service, Testimonial, BlogPost, HeroContent, AboutContent, SiteSettings } from "./content"

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || ''

// ─── Funcții de citire (client-side, via API) ─────────────────────────────

export async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${API_BASE}/api/admin/content?file=services`)
    if (!response.ok) return []
    return await response.json()
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(`${API_BASE}/api/admin/content?file=testimonials`)
    if (!response.ok) return []
    return await response.json()
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE}/api/admin/content?file=blog/blog`)
    if (!response.ok) return []
    return await response.json()
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((p) => p.slug === slug) ?? null
}

export async function getHeroContent(): Promise<HeroContent> {
  try {
    const response = await fetch(`${API_BASE}/api/admin/content?file=hero`)
    if (!response.ok) return {} as HeroContent
    return await response.json()
  } catch (error) {
    console.error('Error fetching hero:', error)
    return {} as HeroContent
  }
}

export async function getAboutContent(): Promise<AboutContent> {
  try {
    const response = await fetch(`${API_BASE}/api/admin/content?file=about`)
    if (!response.ok) return {} as AboutContent
    return await response.json()
  } catch (error) {
    console.error('Error fetching about:', error)
    return {} as AboutContent
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const response = await fetch(`${API_BASE}/api/admin/content?file=settings`)
    if (!response.ok) return {} as SiteSettings
    return await response.json()
  } catch (error) {
    console.error('Error fetching settings:', error)
    return {} as SiteSettings
  }
}

// ─── Helper localizare ────────────────────────────────────────────────────

export function getL(obj: Record<string, any>, field: string, locale: Locale): string {
  return obj?.[`${field}_${locale}`] ?? obj?.[`${field}_en`] ?? obj?.[field] ?? ""
}

/** @deprecated Folosește getL() */
export const getLocalizedValue = getL
/** @deprecated Folosește getL() */
export const getLocalizedText = getL