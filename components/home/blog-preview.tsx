"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/content"
import { Section, SectionHeader } from "@/components/section"
import { useLanguage } from "@/context/LanguageContext"

export function BlogPreview() {
  const { locale } = useLanguage()
  const postsList = blogPosts[locale]
  const previewPosts = postsList.slice(0, 3)

  return (
    <Section variant="soft">
      <SectionHeader
        label={locale === "en" ? "From the Blog" : locale === "ro" ? "Din Blog" : "Из Блога"}
        title={locale === "en" ? "Insights & Resources" : locale === "ro" ? "Perspective și Resurse" : "Идеи и Ресурсы"}
        description={locale === "en" 
          ? "Explore articles on mental health, self-care, and personal growth to support your journey." 
          : locale === "ro"
          ? "Explorează articole despre sănătate mentală, auto-îngrijire și dezvoltare personală pentru a-ți sprijini călătoria."
          : "Изучайте статьи о психическом здоровье, заботе о себе и личностном росте для поддержки вашего пути."}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {previewPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl overflow-hidden bg-card transition-all hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <time className="text-xs text-muted-foreground" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(locale === "en" ? "en-US" : locale === "ro" ? "ro-RO" : "ru-RU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h3 className="mt-2 font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          {locale === "en" ? "View All Articles" : locale === "ro" ? "Vezi Toate Articolele" : "Все Статьи"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}