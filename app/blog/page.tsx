"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { blogPosts, categories } from "@/lib/content"
import { Section } from "@/components/section"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"

export default function BlogPage() {
  const { locale } = useLanguage()
  
  return (
    <>
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            {locale === "en" ? "Blog" : locale === "ro" ? "Blog" : "Блог"}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            {locale === "en" 
              ? "Insights for your mental health journey" 
              : locale === "ro"
              ? "Perspective pentru călătoria ta de sănătate mentală"
              : "Идеи для вашего пути к психическому здоровью"}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            {locale === "en"
              ? "Articles, tips, and resources to help you understand yourself better and build a healthier, more fulfilling life."
              : locale === "ro"
              ? "Articole, sfaturi și resurse pentru a te înțelege mai bine și a construi o viață mai sănătoasă și mai împlinită."
              : "Статьи, советы и ресурсы, которые помогут вам лучше понять себя и построить более здоровую и полноценную жизнь."}
          </p>
        </div>
        <BlogGrid />
      </Section>
    </>
  )
}

function BlogGrid() {
  const { locale } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("All")
  
  const postsList = blogPosts[locale]
  const categoriesList = categories[locale]

  const filteredPosts =
    activeCategory === "All"
      ? postsList
      : postsList.filter((post) => post.category === activeCategory)

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="group" aria-label="Blog category filter">
        {categoriesList.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-colors",
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            )}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredPosts.map((post) => (
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
                {new Date(post.date).toLocaleDateString(
                  locale === "en" ? "en-US" : locale === "ro" ? "ro-RO" : "ru-RU",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </time>
              <h2 className="mt-2 font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            {locale === "en" 
              ? "No articles found in this category yet." 
              : locale === "ro"
              ? "Nu au fost găsite articole în această categorie."
              : "В этой категории пока нет статей."}
          </p>
        </div>
      )}
    </>
  )
}