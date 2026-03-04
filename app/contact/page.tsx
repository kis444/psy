"use client"

import { useState } from "react"
import type { Metadata } from "next"
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from "lucide-react"
import { siteConfig } from "@/lib/content"
import { Section, SectionHeader } from "@/components/section"

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            Contact
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Let&apos;s start a conversation
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Reach out to schedule a consultation or ask any questions. I am here
            to help you take the first step.
          </p>
        </div>
      </Section>

      {/* Contact Form + Info */}
      <Section variant="soft" className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl bg-card p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-5">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium text-foreground">{siteConfig.phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">{siteConfig.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Address</p>
                    <p className="text-sm font-medium text-foreground">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl bg-card p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Follow Me
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a
                  href={siteConfig.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="h-5 w-5 text-primary" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section>
        <SectionHeader
          label="Location"
          title="Find Us"
          description="Conveniently located in the heart of Chisinau, easily accessible by public transport."
        />
        <div className="rounded-2xl bg-accent overflow-hidden aspect-[16/7] flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="font-serif text-xl font-semibold text-foreground">
              {siteConfig.address}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Map integration placeholder — connect your preferred map service
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Frontend only — connect to backend/CMS later
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-card p-10 text-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mx-auto mb-4">
          <Mail className="h-7 w-7 text-primary" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground">
          Message Sent
        </h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Thank you for reaching out. I will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setFormData({ name: "", email: "", message: "" })
          }}
          className="mt-6 text-sm font-medium text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-card p-8">
      <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
        Send a Message
      </h3>
      <div className="flex flex-col gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            placeholder="Your full name"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="your@email.com"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="How can I help you?"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 w-full sm:w-auto"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}
