"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, GraduationCap, ShieldCheck } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { useLanguage } from "@/context/LanguageContext"
import { getAboutContent, getL } from "@/lib/content-utils"
import type { AboutContent } from "@/lib/content"

// Credentials sunt statice (nu se schimbă des) — le lăsăm hardcodate
// Dacă Daniela vrea să le editeze mai târziu, le mutăm în JSON
const credentials = [
  {
    icon: GraduationCap,
    title: { en: "Education", ro: "Educație", ru: "Образование" },
    items: [
      "Master of Psychology, University of Bucharest",
      "Bachelor of Clinical Psychology, Moldova State University",
      "Advanced Training in CBT, Berlin Institute",
    ],
  },
  {
    icon: ShieldCheck,
    title: { en: "License", ro: "Licență", ru: "Лицензия" },
    items: [
      "Licensed Clinical Psychologist #MD-2847",
      "Registered with the National Board of Psychology",
      "EMDR Certified Practitioner",
    ],
  },
  {
    icon: Award,
    title: { en: "Certifications", ro: "Certificări", ru: "Сертификаты" },
    items: [
      "Cognitive Behavioral Therapy (CBT)",
      "EMDR Therapy",
      "Mindfulness-Based Stress Reduction",
      "Family & Couples Therapy",
    ],
  },
  {
    icon: BookOpen,
    title: { en: "Specializations", ro: "Specializări", ru: "Специализации" },
    items: [
      "Anxiety & Panic Disorders",
      "Depression & Mood Disorders",
      "Relationship & Family Issues",
      "Child & Adolescent Psychology",
    ],
  },
]

const labels = {
  aboutMe:    { en: "About Me",            ro: "Despre Mine",          ru: "Обо Мне" },
  healing:    { en: "A dedicated space for your healing", ro: "Un spațiu dedicat vindecării tale", ru: "Пространство для вашего исцеления" },
  qualif:     { en: "Qualifications",      ro: "Calificări",           ru: "Квалификация" },
  eduCred:    { en: "Education & Credentials", ro: "Educație & Credențiale", ru: "Образование и Достижения" },
  eduDesc:    { en: "A strong foundation of education and ongoing professional development.", ro: "O bază solidă de educație și dezvoltare profesională continuă.", ru: "Прочная основа образования и постоянного профессионального развития." },
  approach:   { en: "My Approach",         ro: "Abordarea Mea",        ru: "Мой Подход" },
  approachH:  { en: "Therapy that meets you where you are", ro: "Terapie care te întâlnește acolo unde ești", ru: "Терапия, которая встречает вас там, где вы есть" },
  schedule:   { en: "Schedule a Consultation", ro: "Programează o Consultație", ru: "Записаться на Консультацию" },
}

type L = "en" | "ro" | "ru"

export default function AboutPage() {
  const { locale } = useLanguage()
  const l = locale as L
  const [about, setAbout] = useState<AboutContent | null>(null)

  useEffect(() => {
    getAboutContent().then(setAbout)
  }, [])

  return (
    <>
      {/* Hero */}
      <Section>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto aspect-[1/1] rounded-3xl overflow-hidden shadow-xl shadow-primary/10">
              <Image
                src="/images/psychologist-about.jpg"
                alt="Dr. Popovici Daniela in her office"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl bg-secondary -z-10" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              {labels.aboutMe[l]}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              {labels.healing[l]}
            </h1>
            <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-relaxed">
              {about ? (
                <p>{getL(about, "intro", l)}</p>
              ) : (
                <div className="h-24 bg-muted animate-pulse rounded-lg" />
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Credentials */}
      <Section variant="soft">
        <SectionHeader
          label={labels.qualif[l]}
          title={labels.eduCred[l]}
          description={labels.eduDesc[l]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {credentials.map((cred) => (
            <div key={cred.title.en} className="rounded-2xl bg-card p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <cred.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {cred.title[l]}
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {cred.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            {labels.approach[l]}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            {labels.approachH[l]}
          </h2>
          <div className="mt-8 text-muted-foreground leading-relaxed text-pretty">
            {about ? (
              <p>{getL(about, "approach", l)}</p>
            ) : (
              <div className="h-16 bg-muted animate-pulse rounded-lg" />
            )}
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 gap-2"
          >
            {labels.schedule[l]}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  )
}