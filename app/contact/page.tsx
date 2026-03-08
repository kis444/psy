"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { useLanguage } from "@/context/LanguageContext"
import { getSiteSettings } from "@/lib/content-utils"
import type { SiteSettings } from "@/lib/content"

const labels = {
  en: {
    tag: "Contact",
    title: "Let's start a conversation",
    subtitle: "Reach out to schedule a consultation or ask any questions. I am here to help you take the first step.",
    getInTouch: "Get in Touch",
    phone: "Phone",
    email: "Email",
    address: "Address",
    followMe: "Follow Me",
    locationTag: "Location",
    locationTitle: "Find Us",
    locationDesc: "Conveniently located in the heart of Chisinau, easily accessible by public transport.",
    mapPlaceholder: "Map integration placeholder — connect your preferred map service",
    formTitle: "Send a Message",
    name: "Full Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email Address",
    message: "Message",
    messagePlaceholder: "How can I help you?",
    send: "Send Message",
    successTitle: "Message Sent",
    successText: "Thank you for reaching out. I will get back to you within 24 hours.",
    sendAnother: "Send another message",
  },
  ro: {
    tag: "Contact",
    title: "Să începem o conversație",
    subtitle: "Contactează-mă pentru a programa o consultație sau pentru orice întrebări. Sunt aici să te ajut să faci primul pas.",
    getInTouch: "Date de Contact",
    phone: "Telefon",
    email: "Email",
    address: "Adresă",
    followMe: "Urmărește-mă",
    locationTag: "Locație",
    locationTitle: "Găsește-ne",
    locationDesc: "Situată convenabil în inima Chișinăului, ușor accesibilă cu transportul public.",
    mapPlaceholder: "Placeholder hartă — conectează serviciul tău preferat de hărți",
    formTitle: "Trimite un Mesaj",
    name: "Nume Complet",
    namePlaceholder: "Numele tău complet",
    emailLabel: "Adresă Email",
    message: "Mesaj",
    messagePlaceholder: "Cum te pot ajuta?",
    send: "Trimite Mesajul",
    successTitle: "Mesaj Trimis",
    successText: "Îți mulțumesc că ai luat legătura. Îți voi răspunde în 24 de ore.",
    sendAnother: "Trimite alt mesaj",
  },
  ru: {
    tag: "Контакты",
    title: "Давайте начнём разговор",
    subtitle: "Свяжитесь со мной, чтобы записаться на консультацию или задать вопросы. Я здесь, чтобы помочь вам сделать первый шаг.",
    getInTouch: "Контактная информация",
    phone: "Телефон",
    email: "Email",
    address: "Адрес",
    followMe: "Подписывайтесь",
    locationTag: "Локация",
    locationTitle: "Найдите нас",
    locationDesc: "Удобно расположена в центре Кишинёва, легко добраться на общественном транспорте.",
    mapPlaceholder: "Заглушка карты — подключите предпочтительный картографический сервис",
    formTitle: "Отправить сообщение",
    name: "Полное имя",
    namePlaceholder: "Ваше полное имя",
    emailLabel: "Адрес Email",
    message: "Сообщение",
    messagePlaceholder: "Чем я могу помочь?",
    send: "Отправить",
    successTitle: "Сообщение отправлено",
    successText: "Спасибо, что написали. Я отвечу вам в течение 24 часов.",
    sendAnother: "Отправить ещё одно сообщение",
  },
}

export default function ContactPage() {
  const { locale } = useLanguage()
  const t = labels[locale]
  const [settings, setSettings] = useState<SiteSettings | null>(null)

  useEffect(() => {
    getSiteSettings().then(setSettings)
  }, [])

  const phone = settings?.phone ?? ""
  const email = settings?.email ?? ""
  const address = settings?.address ?? ""
  const instagram = settings?.instagram ?? "#"
  const facebook = settings?.facebook ?? "#"
  const telegram = settings?.telegram ?? "#"

  return (
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            {t.tag}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            {t.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            {t.subtitle}
          </p>
        </div>
      </Section>

      {/* Contact Form + Info */}
      <Section variant="soft" className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm t={t} />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl bg-card p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                {t.getInTouch}
              </h3>
              <div className="flex flex-col gap-5">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t.phone}</p>
                    <p className="text-sm font-medium text-foreground">{phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t.email}</p>
                    <p className="text-sm font-medium text-foreground">{email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t.address}</p>
                    <p className="text-sm font-medium text-foreground">{address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl bg-card p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                {t.followMe}
              </h3>
              <div className="flex items-center gap-3">
                <a href={instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <a href={facebook} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a href={telegram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Telegram">
                  <Send className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section>
        <SectionHeader
          label={t.locationTag}
          title={t.locationTitle}
          description={t.locationDesc}
        />
        <div className="rounded-2xl bg-accent overflow-hidden aspect-[16/7] flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="font-serif text-xl font-semibold text-foreground">{address}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t.mapPlaceholder}</p>
          </div>
        </div>
      </Section>
    </>
  )
}

function ContactForm({ t }: { t: typeof labels["en"] }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Failed")
      setSubmitted(true)
    } catch {
      setError("A apărut o eroare. Încearcă din nou.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-card p-10 text-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mx-auto mb-4">
          <Mail className="h-7 w-7 text-primary" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground">{t.successTitle}</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">{t.successText}</p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }) }}
          className="mt-6 text-sm font-medium text-primary hover:underline"
        >
          {t.sendAnother}
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-card p-8">
      <h3 className="font-serif text-xl font-semibold text-foreground mb-6">{t.formTitle}</h3>
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">{t.name}</label>
          <input id="name" type="text" required value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t.namePlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">{t.emailLabel}</label>
          <input id="email" type="email" required value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">{t.message}</label>
          <textarea id="message" required rows={5} value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={t.messagePlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 w-full sm:w-auto disabled:opacity-60"
        >
          {loading ? "Se trimite..." : t.send}
        </button>
      </div>
    </div>
  )
}