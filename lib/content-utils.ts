import { siteConfig, Locale } from "./site-config"

// Funcție pentru a obține text în limba curentă din CMS
export async function getCmsContent<T>(filename: string): Promise<T | null> {
  try {
    // Încearcă să încarce fișierul din folderul CMS
    const content = await import(`@/content/cms/${filename}.json`)
    return content.default as T
  } catch (error) {
    console.error(`Failed to load CMS content: ${filename}`, error)
    return null
  }
}

// Funcție pentru a obține datele tale (header, footer, contact)
export function getConfig<T>(key: keyof typeof siteConfig): T {
  return siteConfig[key] as T
}

// Funcție pentru a extrage text în limba curentă dintr-un obiect CMS
export function getLocalizedValue(obj: any, field: string, locale: Locale): string {
  // Încearcă limba curentă
  const currentLang = obj[`${field}_${locale}`]
  if (currentLang) return currentLang
  
  // Fallback la engleză
  const english = obj[`${field}_en`]
  if (english) return english
  
  // Fallback la orice există
  return obj[field] || ""
}

// Funcție pentru a obține array-uri din CMS (services, testimonials)
export function getCmsArray<T>(filename: string): T[] {
  // Pentru moment, returnăm array-ul din fișierul JSON
  // Aceasta e o soluție temporară - ideal ar fi să folosești getCmsContent cu useEffect
  try {
    const content = require(`@/content/cms/${filename}.json`)
    return content.default || content
  } catch {
    return []
  }
}