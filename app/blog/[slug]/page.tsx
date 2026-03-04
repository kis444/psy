import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { blogPosts } from "@/lib/content"
import { Section } from "@/components/section"

// Generare parametri statici pentru toate limbile
export async function generateStaticParams() {
  const paths = []
  
  // Pentru fiecare limbă, generează path-uri pentru fiecare post
  const locales = ["en", "ro", "ru"] as const
  
  for (const locale of locales) {
    const posts = blogPosts[locale]
    for (const post of posts) {
      paths.push({
        slug: post.slug,
      })
    }
  }
  
  return paths
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  
  // Caută postarea în toate limbile
  const locales = ["en", "ro", "ru"] as const
  let post = null
  
  for (const locale of locales) {
    const found = blogPosts[locale].find((p) => p.slug === slug)
    if (found) {
      post = found
      break
    }
  }
  
  if (!post) return { title: "Post Not Found" }
  
  return {
    title: post.title,
    description: post.excerpt,
  }
}

// Placeholder article body content — designed to be replaced by CMS
const articleBody = {
  en: `
    <p>This is a placeholder article content. When connected to a headless CMS, this section will display the full rich-text content of the blog post, including formatted text, images, quotes, and more.</p>
    
    <h2>Understanding the Topic</h2>
    <p>Mental health is a crucial aspect of our overall well-being. It affects how we think, feel, and act in our daily lives. Taking care of our mental health is just as important as maintaining our physical health.</p>
    
    <p>Research has shown that consistent self-care practices, combined with professional guidance when needed, can significantly improve one's quality of life. Whether you are dealing with specific challenges or simply seeking to enhance your emotional resilience, understanding these fundamental concepts is the first step.</p>
    
    <h2>Key Strategies</h2>
    <p>There are several evidence-based approaches that can help you on your journey:</p>
    <ul>
      <li>Practice mindfulness and present-moment awareness</li>
      <li>Establish healthy boundaries in relationships</li>
      <li>Develop a consistent self-care routine</li>
      <li>Seek professional support when needed</li>
      <li>Build and maintain meaningful social connections</li>
    </ul>
    
    <h2>Moving Forward</h2>
    <p>Remember, seeking help is a sign of strength, not weakness. Every step you take toward understanding and caring for your mental health is a step toward a more fulfilling life. If you would like to explore any of these topics further, do not hesitate to reach out for a consultation.</p>
  `,
  ro: `
    <p>Acesta este un conținut de articol placeholder. Când este conectat la un CMS headless, această secțiune va afișa conținutul complet al articolului, inclusiv text formatat, imagini, citate și multe altele.</p>
    
    <h2>Înțelegerea Subiectului</h2>
    <p>Sănătatea mentală este un aspect crucial al bunăstării noastre generale. Afectează modul în care gândim, simțim și acționăm în viața de zi cu zi. Îngrijirea sănătății noastre mentale este la fel de importantă ca menținerea sănătății noastre fizice.</p>
    
    <p>Cercetările au arătat că practicile constante de auto-îngrijire, combinate cu îndrumare profesională atunci când este necesar, pot îmbunătăți semnificativ calitatea vieții. Indiferent dacă te confrunți cu provocări specifice sau pur și simplu cauți să-ți îmbunătățești reziliența emoțională, înțelegerea acestor concepte fundamentale este primul pas.</p>
    
    <h2>Strategii Cheie</h2>
    <p>Există mai multe abordări bazate pe dovezi care te pot ajuta în călătoria ta:</p>
    <ul>
      <li>Practică mindfulness și conștientizarea momentului prezent</li>
      <li>Stabilește limite sănătoase în relații</li>
      <li>Dezvoltă o rutină consistentă de auto-îngrijire</li>
      <li>Caută suport profesional atunci când este necesar</li>
      <li>Construiește și menține conexiuni sociale semnificative</li>
    </ul>
    
    <h2>Mergând Mai Departe</h2>
    <p>Amintește-ți, a cere ajutor este un semn de putere, nu de slăbiciune. Fiecare pas pe care îl faci către înțelegerea și îngrijirea sănătății tale mentale este un pas către o viață mai împlinită. Dacă dorești să explorezi oricare dintre aceste subiecte mai departe, nu ezita să contactezi pentru o consultație.</p>
  `,
  ru: `
    <p>Это заполнитель содержания статьи. При подключении к headless CMS этот раздел будет отображать полное содержание статьи с форматированным текстом, изображениями, цитатами и многим другим.</p>
    
    <h2>Понимание Темы</h2>
    <p>Психическое здоровье является важнейшим аспектом нашего общего благополучия. Оно влияет на то, как мы думаем, чувствуем и действуем в повседневной жизни. Забота о своем психическом здоровье так же важна, как и поддержание физического здоровья.</p>
    
    <p>Исследования показали, что последовательная практика заботы о себе в сочетании с профессиональным руководством может значительно улучшить качество жизни. Независимо от того, сталкиваетесь ли вы с конкретными проблемами или просто стремитесь повысить свою эмоциональную устойчивость, понимание этих фундаментальных концепций является первым шагом.</p>
    
    <h2>Ключевые Стратегии</h2>
    <p>Существует несколько научно обоснованных подходов, которые могут помочь вам в вашем путешествии:</p>
    <ul>
      <li>Практикуйте осознанность и присутствие в настоящем моменте</li>
      <li>Устанавливайте здоровые границы в отношениях</li>
      <li>Разработайте последовательный режим заботы о себе</li>
      <li>Обращайтесь за профессиональной поддержкой, когда это необходимо</li>
      <li>Стройте и поддерживайте значимые социальные связи</li>
    </ul>
    
    <h2>Двигаясь Вперед</h2>
    <p>Помните, обращение за помощью — это признак силы, а не слабости. Каждый шаг, который вы делаете к пониманию и заботе о своем психическом здоровье, — это шаг к более полноценной жизни. Если вы хотите изучить любую из этих тем дальше, не стесняйтесь обращаться за консультацией.</p>
  `,
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  // Determină limba din URL sau folosește o valoare implicită
  // Pentru simplificare, vom căuta în toate limbile și vom folosi prima găsită
  const locales = ["en", "ro", "ru"] as const
  let post = null
  let currentLocale = "en" as const
  
  for (const locale of locales) {
    const found = blogPosts[locale].find((p) => p.slug === slug)
    if (found) {
      post = found
      currentLocale = locale
      break
    }
  }

  if (!post) {
    notFound()
  }

  return (
    <Section>
      <article className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {currentLocale === "en" ? "Back to Blog" : 
           currentLocale === "ro" ? "Înapoi la Blog" : 
           "Назад к Блогу"}
        </Link>

        {/* Post Header */}
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
                currentLocale === "en" ? "en-US" : 
                currentLocale === "ro" ? "ro-RO" : "ru-RU",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </time>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>

        {/* Article Body */}
        <div
          className="prose prose-lg max-w-none
            [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4
            [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-6
            [&>ul]:text-muted-foreground [&>ul]:leading-relaxed [&>ul]:mb-6 [&>ul]:pl-6
            [&>ul>li]:mb-2 [&>ul>li]:list-disc
          "
          dangerouslySetInnerHTML={{ __html: articleBody[currentLocale] }}
        />

        {/* Post Footer */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {currentLocale === "en" ? "Back to All Articles" : 
             currentLocale === "ro" ? "Înapoi la Toate Articolele" : 
             "Назад ко всем Статьям"}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            {currentLocale === "en" ? "Book a Consultation" : 
             currentLocale === "ro" ? "Programează o Consultație" : 
             "Записаться на Консультацию"}
          </Link>
        </div>
      </article>
    </Section>
  )
}