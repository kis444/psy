import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, GraduationCap, ShieldCheck } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Dr. Popovici Daniela, her education, certifications, and approach to psychological therapy.",
}

const credentials = [
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "Master of Psychology, University of Bucharest",
      "Bachelor of Clinical Psychology, Moldova State University",
      "Advanced Training in CBT, Berlin Institute",
    ],
  },
  {
    icon: ShieldCheck,
    title: "License",
    items: [
      "Licensed Clinical Psychologist #MD-2847",
      "Registered with the National Board of Psychology",
      "EMDR Certified Practitioner",
    ],
  },
  {
    icon: Award,
    title: "Certifications",
    items: [
      "Cognitive Behavioral Therapy (CBT)",
      "EMDR Therapy",
      "Mindfulness-Based Stress Reduction",
      "Family & Couples Therapy",
    ],
  },
  {
    icon: BookOpen,
    title: "Specializations",
    items: [
      "Anxiety & Panic Disorders",
      "Depression & Mood Disorders",
      "Relationship & Family Issues",
      "Child & Adolescent Psychology",
    ],
  },
]

export default function AboutPage() {
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
              About Me
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              A dedicated space for your healing
            </h1>
            <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                I am Dr. Popovici Daniela, a licensed clinical psychologist with
                over 10 years of experience helping individuals, couples, and
                families navigate life&apos;s challenges.
              </p>
              <p>
                My approach is rooted in empathy, evidence-based methods, and a
                genuine belief in every person&apos;s capacity for growth and
                change. I create a safe, non-judgmental environment where you
                can explore your thoughts and feelings at your own pace.
              </p>
              <p>
                Whether you are dealing with anxiety, depression, relationship
                difficulties, or simply seeking personal growth, I am here to
                walk alongside you on your journey toward well-being.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Credentials */}
      <Section variant="soft">
        <SectionHeader
          label="Qualifications"
          title="Education & Credentials"
          description="A strong foundation of education and ongoing professional development to provide you with the best possible care."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {credentials.map((credential) => (
            <div
              key={credential.title}
              className="rounded-2xl bg-card p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <credential.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {credential.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {credential.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                  >
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
            My Approach
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            Therapy that meets you where you are
          </h2>
          <div className="mt-8 flex flex-col gap-4 text-muted-foreground leading-relaxed text-pretty">
            <p>
              I draw from multiple evidence-based modalities including Cognitive
              Behavioral Therapy (CBT), EMDR, and mindfulness-based approaches,
              tailoring each session to your unique needs and goals.
            </p>
            <p>
              My philosophy is simple: you are the expert on your own life. My
              role is to provide the tools, support, and guidance you need to
              unlock your inner strength and create lasting change.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 gap-2"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  )
}
