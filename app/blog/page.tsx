"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { Section } from "@/components/section"
import { useLanguage } from "@/context/LanguageContext"
import { getBlogPosts, getL } from "@/lib/content-utils"
import type { BlogPost } from "@/lib/content"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { locale } = useLanguage()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [notFound404, setNotFound404] = useState(false)

  useEffect(() => {
    getBlogPosts().then((posts) => {
      const found = posts.find((p) => p.slug === params.slug)
      if (!found) setNotFound404(true)
      else setPost(found)
    })
  }, [params.slug])

  if (notFound404) return notFound()

  if (!post) return (
    <Section>
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    </Section>
  )

  const backLabel    = { en: "Back to Blog",           ro: "Înapoi la Blog",              ru: "Назад к Блогу" }
  const backAllLabel = { en: "Back to All Articles",   ro: "Înapoi la Toate Articolele",  ru: "Назад ко всем Статьям" }
  const bookLabel    = { en: "Book a Consultation",    ro: "Programează o Consultație",   ru: "Записаться на Консультацию" }

  return (
    <Section>
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel[locale]}
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
              <Tag className="h-3.5 w-3.5" />
              {post.category}
            </span>
            <time
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
              dateTime={post.date}
            >
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString(
                locale === "en" ? "en-US" : locale === "ro" ? "ro-RO" : "ru-RU",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </time>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            {getL(post, "title", locale)}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            {getL(post, "excerpt", locale)}
          </p>
        </header>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={getL(post, "title", locale)}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>

        <div
          className="prose prose-lg max-w-none
            [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4
            [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-6
            [&>ul]:text-muted-foreground [&>ul]:leading-relaxed [&>ul]:mb-6 [&>ul]:pl-6
            [&>ul>li]:mb-2 [&>ul>li]:list-disc
          "
          dangerouslySetInnerHTML={{
            __html: getL(post, "body", locale) || "<p>Conținut în curând...</p>",
          }}
        />

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {backAllLabel[locale]}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            {bookLabel[locale]}
          </Link>
        </div>
      </article>
    </Section>
  )
}