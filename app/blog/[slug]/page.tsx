"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { Section } from "@/components/section"
import { useLanguage } from "@/context/LanguageContext"
import { getBlogPosts, getL } from "@/lib/content-utils"
import type { BlogPost } from "@/lib/content"

interface Props {
  params: Promise<{ slug: string }> | { slug: string }
}

export default function BlogPostPage({ params }: Props) {
  const { locale } = useLanguage()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [slug, setSlug] = useState<string>("")

  // Extrage slug-ul din params (Next.js 15)
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params
      setSlug(resolvedParams.slug)
    }
    resolveParams()
  }, [params])

  useEffect(() => {
    if (!slug) return

    const loadPost = async () => {
      try {
        console.log("Loading posts for slug:", slug)
        const posts = await getBlogPosts()
        console.log("Posts loaded:", posts.length)
        
        const found = posts.find(p => p.slug === slug)
        console.log("Found post:", found?.title_ro)
        
        setPost(found || null)
      } catch (error) {
        console.error("Error loading post:", error)
      } finally {
        setLoading(false)
      }
    }
    
    loadPost()
  }, [slug])

  if (loading) {
    return (
      <Section>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      </Section>
    )
  }

  if (!post) {
    return (
      <Section>
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">Articol negăsit</h1>
          <p className="text-muted-foreground mb-4">Caut după: {slug || "slug necunoscut"}</p>
          <Link href="/blog" className="text-primary hover:underline">
            Înapoi la blog
          </Link>
        </div>
      </Section>
    )
  }

  const backLabel = { 
    en: "Back to Blog", 
    ro: "Înapoi la Blog", 
    ru: "Назад к Блогу" 
  }
  
  const bookLabel = { 
    en: "Book a Consultation", 
    ro: "Programează o Consultație", 
    ru: "Записаться на Консультацию" 
  }

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
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {getL(post, "title", locale)}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
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
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: getL(post, "body", locale) || "<p>Conținut în curând...</p>",
          }}
        />

        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← {locale === "en" ? "All articles" : locale === "ro" ? "Toate articolele" : "Все статьи"}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            {bookLabel[locale]}
          </Link>
        </div>
      </article>
    </Section>
  )
}