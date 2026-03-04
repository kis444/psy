// lib/content.ts

export type Locale = "en" | "ro" | "ru"

export const siteConfig = {
  name: "Dr. Popovici Daniela",
  title: "Licensed Psychologist",
  phone: "+373 78 219 500",
  email: "daniela.popovici126@gmail.com",
  address: "Chisinau, Moldova",
  social: {
    instagram: "https://www.instagram.com/femeielasoare/",
    facebook: "https://facebook.com/",
    telegram: "https://t.me/femeielasoare",
    linkedin: "https://linkedin.com/",
  },
}

// Navigation translations
export const navigation = {
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  ro: [
    { label: "Acasă", href: "/" },
    { label: "Despre", href: "/about" },
    { label: "Servicii", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Testimoniale", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  ru: [
    { label: "Главная", href: "/" },
    { label: "Обо мне", href: "/about" },
    { label: "Услуги", href: "/services" },
    { label: "Блог", href: "/blog" },
    { label: "Отзывы", href: "/testimonials" },
    { label: "Контакты", href: "/contact" },
  ],
}

// Services translations
export const services = {
  en: [
    {
      id: "individual-therapy",
      title: "Individual Therapy",
      description:
        "One-on-one sessions tailored to your needs. We work together to address anxiety, depression, self-esteem, and personal growth in a safe, confidential environment.",
      price: 80,
      currency: "EUR",
      duration: "50 min",
      mode: "online & offline" as const,
      featured: false,
    },
    {
      id: "first-consultation",
      title: "First Consultation",
      description:
        "An introductory session to understand your concerns, discuss goals, and create a personalized treatment plan. Available at 50% off for new clients.",
      price: 40,
      currency: "EUR",
      duration: "50 min",
      mode: "online & offline" as const,
      featured: true,
    },
    {
      id: "couples-therapy",
      title: "Couples Therapy",
      description:
        "Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection in a supportive therapeutic setting.",
      price: 100,
      currency: "EUR",
      duration: "60 min",
      mode: "offline" as const,
      featured: false,
    },
    {
      id: "online-consultation",
      title: "Online Consultation",
      description:
        "Convenient virtual sessions from the comfort of your home. Same professional quality care with the flexibility of choosing your preferred environment.",
      price: 70,
      currency: "EUR",
      duration: "50 min",
      mode: "online" as const,
      featured: false,
    },
    {
      id: "group-therapy",
      title: "Group Therapy",
      description:
        "Join a small, supportive group to share experiences and develop coping strategies. A powerful way to realize you are not alone in your journey.",
      price: 45,
      currency: "EUR",
      duration: "90 min",
      mode: "offline" as const,
      featured: false,
    },
    {
      id: "child-psychology",
      title: "Child & Adolescent Therapy",
      description:
        "Specialized therapy for young minds. Using age-appropriate techniques to help children and teens navigate emotional challenges, behavioral issues, and developmental transitions.",
      price: 75,
      currency: "EUR",
      duration: "45 min",
      mode: "online & offline" as const,
      featured: false,
    },
  ],
  ro: [
    {
      id: "individual-therapy",
      title: "Terapie Individuală",
      description:
        "Ședințe individuale adaptate nevoilor tale. Lucrăm împreună pentru a aborda anxietatea, depresia, stima de sine și creșterea personală într-un mediu sigur și confidențial.",
      price: 80,
      currency: "EUR",
      duration: "50 min",
      mode: "online & offline" as const,
      featured: false,
    },
    {
      id: "first-consultation",
      title: "Prima Consultație",
      description:
        "O sesiune introductivă pentru a înțelege preocupările tale, a discuta obiectivele și a crea un plan de tratament personalizat. Disponibilă cu 50% reducere pentru clienții noi.",
      price: 40,
      currency: "EUR",
      duration: "50 min",
      mode: "online & offline" as const,
      featured: true,
    },
    {
      id: "couples-therapy",
      title: "Terapie de Cuplu",
      description:
        "Consolidați-vă relația prin comunicare îmbunătățită, rezolvarea conflictelor și conexiune emoțională mai profundă într-un cadru terapeutic de susținere.",
      price: 100,
      currency: "EUR",
      duration: "60 min",
      mode: "offline" as const,
      featured: false,
    },
    {
      id: "online-consultation",
      title: "Consultație Online",
      description:
        "Ședințe virtuale convenabile din confortul casei tale. Aceeași calitate profesională a îngrijirii cu flexibilitatea de a alege mediul preferat.",
      price: 70,
      currency: "EUR",
      duration: "50 min",
      mode: "online" as const,
      featured: false,
    },
    {
      id: "group-therapy",
      title: "Terapie de Grup",
      description:
        "Alătură-te unui grup mic, de susținere, pentru a împărtăși experiențe și a dezvolta strategii de adaptare. O modalitate puternică de a realiza că nu ești singur în călătoria ta.",
      price: 45,
      currency: "EUR",
      duration: "90 min",
      mode: "offline" as const,
      featured: false,
    },
    {
      id: "child-psychology",
      title: "Psihologie pentru Copii și Adolescenți",
      description:
        "Terapie specializată pentru mințile tinere. Folosind tehnici adecvate vârstei pentru a ajuta copiii și adolescenții să navigheze provocările emoționale, problemele comportamentale și tranzițiile de dezvoltare.",
      price: 75,
      currency: "EUR",
      duration: "45 min",
      mode: "online & offline" as const,
      featured: false,
    },
  ],
  ru: [
    {
      id: "individual-therapy",
      title: "Индивидуальная Терапия",
      description:
        "Индивидуальные сессии, адаптированные к вашим потребностям. Мы работаем вместе, чтобы решить проблемы тревоги, депрессии, самооценки и личностного роста в безопасной, конфиденциальной обстановке.",
      price: 80,
      currency: "EUR",
      duration: "50 мин",
      mode: "online & offline" as const,
      featured: false,
    },
    {
      id: "first-consultation",
      title: "Первая Консультация",
      description:
        "Вводная сессия для понимания ваших проблем, обсуждения целей и создания индивидуального плана лечения. Доступно со скидкой 50% для новых клиентов.",
      price: 40,
      currency: "EUR",
      duration: "50 мин",
      mode: "online & offline" as const,
      featured: true,
    },
    {
      id: "couples-therapy",
      title: "Терапия для Пар",
      description:
        "Укрепите ваши отношения через улучшение коммуникации, разрешение конфликтов и более глубокую эмоциональную связь в поддерживающей терапевтической среде.",
      price: 100,
      currency: "EUR",
      duration: "60 мин",
      mode: "offline" as const,
      featured: false,
    },
    {
      id: "online-consultation",
      title: "Онлайн Консультация",
      description:
        "Удобные виртуальные сессии из комфорта вашего дома. То же профессиональное качество помощи с гибкостью выбора предпочтительной среды.",
      price: 70,
      currency: "EUR",
      duration: "50 мин",
      mode: "online" as const,
      featured: false,
    },
    {
      id: "group-therapy",
      title: "Групповая Терапия",
      description:
        "Присоединяйтесь к небольшой поддерживающей группе, чтобы делиться опытом и разрабатывать стратегии преодоления. Мощный способ осознать, что вы не одиноки в своем путешествии.",
      price: 45,
      currency: "EUR",
      duration: "90 мин",
      mode: "offline" as const,
      featured: false,
    },
    {
      id: "child-psychology",
      title: "Детская и Подростковая Психология",
      description:
        "Специализированная терапия для юных умов. Использование возрастных методик, чтобы помочь детям и подросткам справляться с эмоциональными трудностями, поведенческими проблемами и переходными периодами развития.",
      price: 75,
      currency: "EUR",
      duration: "45 мин",
      mode: "online & offline" as const,
      featured: false,
    },
  ],
}

// Testimonials translations
export const testimonials = {
  en: [
    {
      id: 1,
      name: "Maria S.",
      text: "Dr. Popovici helped me through one of the most difficult periods of my life. Her warmth and professionalism made every session feel safe and productive. I cannot recommend her enough.",
      rating: 5,
    },
    {
      id: 2,
      name: "Alexandra D.",
      text: "After years of struggling with anxiety, I finally found someone who truly listens and understands. The techniques I learned here have transformed my daily life.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ion P.",
      text: "Couples therapy with Dr. Popovici saved our marriage. She has an incredible ability to help both partners feel heard while guiding us toward real solutions.",
      rating: 5,
    },
    {
      id: 4,
      name: "Natalia R.",
      text: "I was skeptical about therapy at first, but Dr. Popovici's gentle approach quickly put me at ease. She helped me discover strengths I didn't know I had.",
      rating: 5,
    },
    {
      id: 5,
      name: "Dmitri K.",
      text: "Professional, empathetic, and genuinely caring. The online sessions were just as effective as in-person. I finally feel like myself again.",
      rating: 5,
    },
    {
      id: 6,
      name: "Elena T.",
      text: "My teenager was resistant to therapy, but Dr. Popovici connected with her in a way no other professional could. We are so grateful for the positive changes we have seen.",
      rating: 5,
    },
  ],
  ro: [
    {
      id: 1,
      name: "Maria S.",
      text: "Doamna Popovici m-a ajutat în una dintre cele mai dificile perioade ale vieții mele. Căldura și profesionalismul ei au făcut ca fiecare ședință să fie sigură și productivă. Nu pot s-o recomand suficient.",
      rating: 5,
    },
    {
      id: 2,
      name: "Alexandra D.",
      text: "După ani de luptă cu anxietatea, am găsit în sfârșit pe cineva care ascultă cu adevărat și înțelege. Tehnicile învățate aici mi-au transformat viața de zi cu zi.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ion P.",
      text: "Terapia de cuplu cu doamna Popovici ne-a salvat căsnicia. Are o abilitate incredibilă de a ajuta ambii parteneri să se simtă auziți, ghidându-ne către soluții reale.",
      rating: 5,
    },
    {
      id: 4,
      name: "Natalia R.",
      text: "Eram sceptică la început, dar abordarea blândă a doamnei Popovici m-a liniștit rapid. M-a ajutat să descopăr puncte forte pe care nu știam că le am.",
      rating: 5,
    },
    {
      id: 5,
      name: "Dmitri K.",
      text: "Profesionist, empatic și cu adevărat grijuliu. Ședințele online au fost la fel de eficiente ca cele fizice. În sfârșit mă simt din nou eu însumi.",
      rating: 5,
    },
    {
      id: 6,
      name: "Elena T.",
      text: "Adolescenta mea era reticentă la terapie, dar doamna Popovici s-a conectat cu ea într-un mod în care niciun alt profesionist nu a putut. Suntem atât de recunoscători pentru schimbările pozitive pe care le-am văzut.",
      rating: 5,
    },
  ],
  ru: [
    {
      id: 1,
      name: "Мария С.",
      text: "Доктор Попович помогла мне пройти через один из самых трудных периодов моей жизни. Ее теплота и профессионализм делали каждую сессию безопасной и продуктивной. Я не могу ее достаточно рекомендовать.",
      rating: 5,
    },
    {
      id: 2,
      name: "Александра Д.",
      text: "После многих лет борьбы с тревогой я наконец нашла человека, который действительно слушает и понимает. Техники, которые я здесь изучила, изменили мою повседневную жизнь.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ион П.",
      text: "Семейная терапия с доктором Попович спасла наш брак. У нее невероятная способность помогать обоим партнерам чувствовать себя услышанными, направляя нас к реальным решениям.",
      rating: 5,
    },
    {
      id: 4,
      name: "Наталья Р.",
      text: "Сначала я скептически относилась к терапии, но мягкий подход доктора Попович быстро меня успокоил. Она помогла мне обнаружить сильные стороны, о которых я не знала.",
      rating: 5,
    },
    {
      id: 5,
      name: "Дмитрий К.",
      text: "Профессионально, чутко и искренне заботливо. Онлайн-сессии были так же эффективны, как и личные. Наконец-то я снова чувствую себя собой.",
      rating: 5,
    },
    {
      id: 6,
      name: "Елена Т.",
      text: "Мой подросток сопротивлялся терапии, но доктор Попович нашла с ней контакт так, как не смог ни один другой специалист. Мы так благодарны за положительные изменения, которые мы увидели.",
      rating: 5,
    },
  ],
}

// Blog posts translations
export const blogPosts = {
  en: [
    {
      slug: "understanding-anxiety",
      title: "Understanding Anxiety: Signs, Symptoms, and Coping Strategies",
      excerpt:
        "Anxiety is more than just feeling stressed. Learn to recognize the signs and discover evidence-based strategies to manage anxiety in your daily life.",
      category: "Anxiety",
      date: "2025-12-15",
      image: "/images/blog-1.jpg",
    },
    {
      slug: "benefits-of-mindfulness",
      title: "The Benefits of Mindfulness in Everyday Life",
      excerpt:
        "Discover how simple mindfulness practices can reduce stress, improve focus, and enhance your overall emotional well-being.",
      category: "Mindfulness",
      date: "2025-11-28",
      image: "/images/blog-2.jpg",
    },
    {
      slug: "building-healthy-relationships",
      title: "Building Healthy Relationships: Communication is Key",
      excerpt:
        "Strong relationships are built on open communication. Explore practical tips for expressing your needs and truly listening to your partner.",
      category: "Relationships",
      date: "2025-11-10",
      image: "/images/blog-3.jpg",
    },
    {
      slug: "overcoming-perfectionism",
      title: "Overcoming Perfectionism: Embracing Good Enough",
      excerpt:
        "Perfectionism can be paralyzing. Learn how to set realistic standards, practice self-compassion, and find freedom in imperfection.",
      category: "Self-Growth",
      date: "2025-10-22",
      image: "/images/blog-1.jpg",
    },
    {
      slug: "therapy-myths",
      title: "5 Common Myths About Therapy Debunked",
      excerpt:
        "From 'therapy is only for serious problems' to 'it takes forever to see results,' we debunk the most common misconceptions about seeking help.",
      category: "Therapy",
      date: "2025-10-05",
      image: "/images/blog-2.jpg",
    },
    {
      slug: "self-care-routines",
      title: "Creating a Self-Care Routine That Actually Works",
      excerpt:
        "Self-care is not selfish. Build a sustainable routine that nurtures your mental, emotional, and physical health every day.",
      category: "Self-Growth",
      date: "2025-09-18",
      image: "/images/blog-3.jpg",
    },
  ],
  ro: [
    {
      slug: "understanding-anxiety",
      title: "Înțelegerea Anxietății: Semne, Simptome și Strategii de Coping",
      excerpt:
        "Anxietatea este mai mult decât a te simți stresat. Învață să recunoști semnele și descoperă strategii bazate pe dovezi pentru a gestiona anxietatea în viața de zi cu zi.",
      category: "Anxietate",
      date: "2025-12-15",
      image: "/images/blog-1.jpg",
    },
    {
      slug: "benefits-of-mindfulness",
      title: "Beneficiile Mindfulness în Viața de Zi cu Zi",
      excerpt:
        "Descoperă cum practicile simple de mindfulness pot reduce stresul, îmbunătăți concentrarea și spori bunăstarea ta emoțională generală.",
      category: "Mindfulness",
      date: "2025-11-28",
      image: "/images/blog-2.jpg",
    },
    {
      slug: "building-healthy-relationships",
      title: "Construirea Relațiilor Sănătoase: Comunicarea este Cheia",
      excerpt:
        "Relațiile puternice sunt construite pe comunicare deschisă. Explorează sfaturi practice pentru a-ți exprima nevoile și a asculta cu adevărat partenerul.",
      category: "Relații",
      date: "2025-11-10",
      image: "/images/blog-3.jpg",
    },
    {
      slug: "overcoming-perfectionism",
      title: "Depășirea Perfecționismului: Acceptarea 'Destul de Bun'",
      excerpt:
        "Perfecționismul poate fi paralizant. Învață cum să stabilești standarde realiste, să practici autocompasiunea și să găsești libertate în imperfecțiune.",
      category: "Dezvoltare Personală",
      date: "2025-10-22",
      image: "/images/blog-1.jpg",
    },
    {
      slug: "therapy-myths",
      title: "5 Mituri Comune Despre Terapie Demontate",
      excerpt:
        "De la 'terapia este doar pentru probleme grave' la 'durează o veșnicie să vezi rezultate,' demontăm cele mai comune concepții greșite despre căutarea ajutorului.",
      category: "Terapie",
      date: "2025-10-05",
      image: "/images/blog-2.jpg",
    },
    {
      slug: "self-care-routines",
      title: "Crearea unei Rutine de Auto-îngrijire Care Funcționează Cu Adevărat",
      excerpt:
        "Auto-îngrijirea nu este egoistă. Construiește o rutină sustenabilă care să-ți hrănească sănătatea mentală, emoțională și fizică în fiecare zi.",
      category: "Dezvoltare Personală",
      date: "2025-09-18",
      image: "/images/blog-3.jpg",
    },
  ],
  ru: [
    {
      slug: "understanding-anxiety",
      title: "Понимание Тревоги: Признаки, Симптомы и Стратегии Преодоления",
      excerpt:
        "Тревога — это не просто чувство стресса. Научитесь распознавать признаки и открывайте для себя научно обоснованные стратегии управления тревогой в повседневной жизни.",
      category: "Тревога",
      date: "2025-12-15",
      image: "/images/blog-1.jpg",
    },
    {
      slug: "benefits-of-mindfulness",
      title: "Преимущества Осознанности в Повседневной Жизни",
      excerpt:
        "Узнайте, как простые практики осознанности могут снизить стресс, улучшить концентрацию и повысить ваше общее эмоциональное благополучие.",
      category: "Осознанность",
      date: "2025-11-28",
      image: "/images/blog-2.jpg",
    },
    {
      slug: "building-healthy-relationships",
      title: "Построение Здоровых Отношений: Ключ — Общение",
      excerpt:
        "Крепкие отношения строятся на открытом общении. Изучите практические советы по выражению своих потребностей и истинному слушанию партнера.",
      category: "Отношения",
      date: "2025-11-10",
      image: "/images/blog-3.jpg",
    },
    {
      slug: "overcoming-perfectionism",
      title: "Преодоление Перфекционизма: Принятие 'Достаточно Хорошо'",
      excerpt:
        "Перфекционизм может быть парализующим. Узнайте, как устанавливать реалистичные стандарты, практиковать самосострадание и находить свободу в несовершенстве.",
      category: "Личностный Рост",
      date: "2025-10-22",
      image: "/images/blog-1.jpg",
    },
    {
      slug: "therapy-myths",
      title: "5 Распространенных Мифов о Терапии Развенчаны",
      excerpt:
        "От 'терапия только для серьезных проблем' до 'результатов нужно ждать вечность' — мы развенчиваем самые распространенные заблуждения о поиске помощи.",
      category: "Терапия",
      date: "2025-10-05",
      image: "/images/blog-2.jpg",
    },
    {
      slug: "self-care-routines",
      title: "Создание Режима Заботы о Себе, Который Действительно Работает",
      excerpt:
        "Забота о себе — это не эгоизм. Создайте устойчивый режим, который ежедневно питает ваше психическое, эмоциональное и физическое здоровье.",
      category: "Личностный Рост",
      date: "2025-09-18",
      image: "/images/blog-3.jpg",
    },
  ],
}

export const categories = {
  en: ["All", "Anxiety", "Mindfulness", "Relationships", "Self-Growth", "Therapy"],
  ro: ["Toate", "Anxietate", "Mindfulness", "Relații", "Dezvoltare Personală", "Terapie"],
  ru: ["Все", "Тревога", "Осознанность", "Отношения", "Личностный Рост", "Терапия"],
}