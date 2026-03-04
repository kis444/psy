// lib/cms-content.ts

import { Locale } from "./content"

// Funcție pentru a obține textul în limba curentă
export function getLocalizedText(
  item: any, 
  fieldName: string, 
  locale: Locale
): string {
  // Încearcă să găsească textul în limba curentă
  const localizedField = `${fieldName}_${locale}`
  if (item[localizedField]) {
    return item[localizedField]
  }
  
  // Fallback la engleză
  const englishField = `${fieldName}_en`
  if (item[englishField]) {
    return item[englishField]
  }
  
  // Fallback la orice există
  return item[fieldName] || ""
}

// Funcție pentru a procesa un array de servicii
export function processServices(services: any[], locale: Locale) {
  return services.map((service) => ({
    ...service,
    title: getLocalizedText(service, 'title', locale),
    description: getLocalizedText(service, 'description', locale),
  }))
}

// Funcție pentru a procesa un array de postări blog
export function processBlogPosts(posts: any[], locale: Locale) {
  return posts.map((post) => ({
    ...post,
    title: getLocalizedText(post, 'title', locale),
    excerpt: getLocalizedText(post, 'excerpt', locale),
    body: getLocalizedText(post, 'body', locale),
  }))
}