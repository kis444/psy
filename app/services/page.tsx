import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Monitor, MapPin, Sparkles } from "lucide-react"
import { services } from "@/lib/content"
import { Section, SectionHeader } from "@/components/section"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore professional psychological services including individual therapy, couples therapy, online consultations, and more.",
}

function getModeIcon(mode: string) {
  if (mode === "online") return Monitor
  if (mode === "offline") return MapPin
  return Sparkles
}

function getModeLabel(mode: string) {
  if (mode === "online") return "Online"
  if (mode === "offline") return "In-Person"
  return "Online & In-Person"
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            Services
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Therapeutic services tailored to you
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Every person is unique, and so is their path to healing. Explore my
            range of services and find the support that best fits your needs.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section variant="soft" className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const ModeIcon = getModeIcon(service.mode)
            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-8 flex flex-col transition-all hover:shadow-lg ${
                  service.featured
                    ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/20"
                    : "bg-card text-card-foreground"
                }`}
              >
                {service.featured && (
                  <span className="absolute top-4 right-4 bg-background text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    -50% OFF
                  </span>
                )}
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-6 flex-1 ${
                    service.featured ? "opacity-90" : "text-muted-foreground"
                  }`}
                >
                  {service.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <ModeIcon
                    className={`h-4 w-4 ${
                      service.featured ? "opacity-70" : "text-primary"
                    }`}
                  />
                  <span
                    className={`text-xs font-medium ${
                      service.featured ? "opacity-70" : "text-muted-foreground"
                    }`}
                  >
                    {getModeLabel(service.mode)}
                  </span>
                </div>

                <div className="flex items-end justify-between pt-4 border-t ${service.featured ? 'border-primary-foreground/20' : 'border-border'}">
                  <div>
                    <p className="text-2xl font-bold">
                      {service.currency === "EUR" ? "\u20AC" : "$"}
                      {service.price}
                    </p>
                    <p
                      className={`text-xs ${
                        service.featured ? "opacity-70" : "text-muted-foreground"
                      }`}
                    >
                      {service.duration}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-1 text-sm font-medium ${
                      service.featured
                        ? "text-primary-foreground hover:opacity-80"
                        : "text-primary hover:underline"
                    }`}
                  >
                    Book Now <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Online vs Offline */}
      <Section>
        <SectionHeader
          label="Choose your format"
          title="Online or In-Person"
          description="Flexibility to choose the format that works best for your schedule and comfort."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-2xl bg-secondary p-10 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
              <Monitor className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
              Online Sessions
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Access professional therapy from anywhere in the world. Our secure
              video platform ensures the same quality of care as in-person
              visits, with the convenience of connecting from your preferred
              environment.
            </p>
          </div>
          <div className="rounded-2xl bg-accent p-10 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
              In-Person Sessions
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Visit our warm, welcoming office in the heart of Chisinau. The
              physical space has been carefully designed to create a calm,
              supportive atmosphere that promotes healing and open communication.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="soft">
        <div className="rounded-3xl bg-primary p-10 md:p-16 text-center text-primary-foreground">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance">
            Not sure which service is right for you?
          </h2>
          <p className="mt-4 text-base opacity-90 max-w-lg mx-auto text-pretty">
            Book an introductory consultation and we will find the best
            therapeutic approach together. First session at 50% off.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-background text-foreground px-8 py-3.5 text-base font-semibold transition-all hover:opacity-90 gap-2"
          >
            Book First Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  )
}
