import { siteConfig, Locale } from "./site-config"

export async function getCmsContent<T>(filename: string): Promise<T | null> {
  try {
    console.log(`📁 Loading: @/content/cms/${filename}.json`)
    const content = await import(`@/content/cms/${filename}.json`)
    const data = content.default
    
    if (!data) return null
    
    // Pentru array-uri (services, testimonials)
    if (filename === 'services' || filename === 'testimonials') {
      return { [filename]: data } as T
    }
    
    // Pentru obiecte (hero, about)
    return data as T
    
  } catch (error) {
    console.error(`❌ Failed to load ${filename}:`, error)
    return null
  }
}

export function getConfig<T>(key: keyof typeof siteConfig): T {
  return siteConfig[key] as T
}

export function getLocalizedValue(obj: any, field: string, locale: Locale): string {
  return obj[`${field}_${locale}`] || obj[`${field}_en`] || obj[field] || ""
}