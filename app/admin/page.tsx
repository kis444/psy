"use client"

import { useState, useEffect } from "react"
import { Save, LogOut, FileText, Settings, Layers, MessageSquare, BookOpen, Plus, Trash2, Eye, EyeOff } from "lucide-react"

// ─── Tipuri ────────────────────────────────────────────────────────────────

type Tab = "hero" | "about" | "services" | "testimonials" | "blog" | "settings"

// ─── Parolă admin (schimb-o în .env.local: NEXT_PUBLIC_ADMIN_PASSWORD) ────
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "daniela2024"

// ─── Componente mici ───────────────────────────────────────────────────────

function Field({ label, value, onChange, multiline = false, rows = 3 }: {
  label: string
  value: string
  onChange: (v: string) => void
  multiline?: boolean
  rows?: number
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-y"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
      )}
    </div>
  )
}

function LangTabs({ active, onChange }: { active: string; onChange: (l: string) => void }) {
  return (
    <div className="flex gap-1 mb-4">
      {["EN", "RO", "RU"].map((l) => (
        <button
          key={l}
          onClick={() => onChange(l.toLowerCase())}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
            active === l.toLowerCase()
              ? "bg-violet-600 text-white"
              : "bg-slate-100 text-slate-500 hover:bg-slate-200"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

function SaveBar({ onSave, saved }: { onSave: () => void; saved: boolean }) {
  return (
    <div className="flex items-center justify-between py-3 border-t border-slate-100 mt-6">
      {saved && <p className="text-xs text-green-600 font-medium">✓ Salvat cu succes</p>}
      {!saved && <div />}
      <button
        onClick={onSave}
        className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
      >
        <Save className="h-4 w-4" />
        Salvează
      </button>
    </div>
  )
}

// ─── Tab: Hero ─────────────────────────────────────────────────────────────

function HeroTab() {
  const [lang, setLang] = useState("ro")
  const [saved, setSaved] = useState(false)
  const [data, setData] = useState({
    welcome_en: "", welcome_ro: "", welcome_ru: "",
    title_en: "", title_ro: "", title_ru: "",
    description_en: "", description_ro: "", description_ru: "",
  })

  useEffect(() => {
    fetch("/api/admin/content?file=hero")
      .then((r) => r.json())
      .then(setData)
      .catch(() => {})
  }, [])

  function set(field: string, value: string) {
    setData((d) => ({ ...d, [`${field}_${lang}`]: value }))
    setSaved(false)
  }

  function save() {
    fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: "hero", data }),
    }).then(() => setSaved(true))
  }

  return (
    <div>
      <h2 className="text-lg font-bold text-slate-800 mb-4">Secțiunea Hero (prima pagină)</h2>
      <LangTabs active={lang} onChange={setLang} />
      <div className="flex flex-col gap-4">
        <Field label="Text mic (deasupra titlului)" value={(data as any)[`welcome_${lang}`]} onChange={(v) => set("welcome", v)} />
        <Field label="Titlu principal" value={(data as any)[`title_${lang}`]} onChange={(v) => set("title", v)} />
        <Field label="Descriere" value={(data as any)[`description_${lang}`]} onChange={(v) => set("description", v)} multiline rows={3} />
      </div>
      <SaveBar onSave={save} saved={saved} />
    </div>
  )
}

// ─── Tab: About ────────────────────────────────────────────────────────────

function AboutTab() {
  const [lang, setLang] = useState("ro")
  const [saved, setSaved] = useState(false)
  const [data, setData] = useState({
    title_en: "", title_ro: "", title_ru: "",
    intro_en: "", intro_ro: "", intro_ru: "",
    approach_en: "", approach_ro: "", approach_ru: "",
  })

  useEffect(() => {
    fetch("/api/admin/content?file=about")
      .then((r) => r.json())
      .then(setData)
      .catch(() => {})
  }, [])

  function set(field: string, value: string) {
    setData((d) => ({ ...d, [`${field}_${lang}`]: value }))
    setSaved(false)
  }

  function save() {
    fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: "about", data }),
    }).then(() => setSaved(true))
  }

  return (
    <div>
      <h2 className="text-lg font-bold text-slate-800 mb-4">Pagina About / Despre mine</h2>
      <LangTabs active={lang} onChange={setLang} />
      <div className="flex flex-col gap-4">
        <Field label="Titlu pagină" value={(data as any)[`title_${lang}`]} onChange={(v) => set("title", v)} />
        <Field label="Introducere (paragraful principal)" value={(data as any)[`intro_${lang}`]} onChange={(v) => set("intro", v)} multiline rows={5} />
        <Field label="Abordarea mea (secțiunea de jos)" value={(data as any)[`approach_${lang}`]} onChange={(v) => set("approach", v)} multiline rows={5} />
      </div>
      <SaveBar onSave={save} saved={saved} />
    </div>
  )
}

// ─── Tab: Services ─────────────────────────────────────────────────────────

function ServicesTab() {
  const [lang, setLang] = useState("ro")
  const [saved, setSaved] = useState(false)
  const [services, setServices] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/admin/content?file=services")
      .then((r) => r.json())
      .then(setServices)
      .catch(() => {})
  }, [])

  function updateService(idx: number, field: string, value: any) {
    setServices((s) => s.map((svc, i) => i === idx ? { ...svc, [field]: value } : svc))
    setSaved(false)
  }

  function save() {
    fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: "services", data: services }),
    }).then(() => setSaved(true))
  }

  return (
    <div>
      <h2 className="text-lg font-bold text-slate-800 mb-4">Servicii & Prețuri</h2>
      <LangTabs active={lang} onChange={setLang} />
      <div className="flex flex-col gap-6">
        {services.map((svc, idx) => (
          <div key={svc.id} className="rounded-xl border border-slate-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-slate-700">{svc[`title_ro`] || svc.id}</h3>
              <label className="flex items-center gap-2 text-xs text-slate-500 cursor-pointer">
                <input
                  type="checkbox"
                  checked={svc.featured}
                  onChange={(e) => updateService(idx, "featured", e.target.checked)}
                  className="accent-violet-600"
                />
                Promovat (badge -50%)
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <Field
                label={`Titlu (${lang.toUpperCase()})`}
                value={svc[`title_${lang}`] ?? ""}
                onChange={(v) => updateService(idx, `title_${lang}`, v)}
              />
              <div className="grid grid-cols-3 gap-2">
                <Field label="Preț (€)" value={String(svc.price ?? "")} onChange={(v) => updateService(idx, "price", Number(v))} />
                <Field label="Durată" value={svc.duration ?? ""} onChange={(v) => updateService(idx, "duration", v)} />
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Mod</label>
                  <select
                    value={svc.mode ?? "online & offline"}
                    onChange={(e) => updateService(idx, "mode", e.target.value)}
                    className="rounded-lg border border-slate-200 px-2 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-400"
                  >
                    <option value="online">Online</option>
                    <option value="offline">Fizic</option>
                    <option value="online & offline">Ambele</option>
                  </select>
                </div>
              </div>
            </div>
            <Field
              label={`Descriere (${lang.toUpperCase()})`}
              value={svc[`description_${lang}`] ?? ""}
              onChange={(v) => updateService(idx, `description_${lang}`, v)}
              multiline
              rows={3}
            />
          </div>
        ))}
      </div>
      <SaveBar onSave={save} saved={saved} />
    </div>
  )
}

// ─── Tab: Testimoniale ─────────────────────────────────────────────────────

function TestimonialsTab() {
  const [lang, setLang] = useState("ro")
  const [saved, setSaved] = useState(false)
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/admin/content?file=testimonials")
      .then((r) => r.json())
      .then(setItems)
      .catch(() => {})
  }, [])

  function update(idx: number, field: string, value: any) {
    setItems((t) => t.map((item, i) => i === idx ? { ...item, [field]: value } : item))
    setSaved(false)
  }

  function add() {
    setItems((t) => [...t, { name: "", text_en: "", text_ro: "", text_ru: "", rating: 5 }])
    setSaved(false)
  }

  function remove(idx: number) {
    setItems((t) => t.filter((_, i) => i !== idx))
    setSaved(false)
  }

  function save() {
    fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: "testimonials", data: items }),
    }).then(() => setSaved(true))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-800">Testimoniale</h2>
        <button
          onClick={add}
          className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-800"
        >
          <Plus className="h-4 w-4" /> Adaugă
        </button>
      </div>
      <LangTabs active={lang} onChange={setLang} />
      <div className="flex flex-col gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-slate-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <Field label="Nume client" value={item.name} onChange={(v) => update(idx, "name", v)} />
              <button onClick={() => remove(idx)} className="ml-4 text-red-400 hover:text-red-600 mt-5">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <Field
              label={`Testimonial (${lang.toUpperCase()})`}
              value={item[`text_${lang}`] ?? ""}
              onChange={(v) => update(idx, `text_${lang}`, v)}
              multiline
              rows={3}
            />
          </div>
        ))}
      </div>
      <SaveBar onSave={save} saved={saved} />
    </div>
  )
}

// ─── Tab: Blog ─────────────────────────────────────────────────────────────

function BlogTab() {
  const [lang, setLang] = useState("ro")
  const [saved, setSaved] = useState(false)
  const [posts, setPosts] = useState<any[]>([])
  const [editing, setEditing] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/admin/content?file=blog/blog")
      .then((r) => r.json())
      .then(setPosts)
      .catch(() => {})
  }, [])

  function update(idx: number, field: string, value: any) {
    setPosts((p) => p.map((post, i) => i === idx ? { ...post, [field]: value } : post))
    setSaved(false)
  }

  function add() {
    const slug = `articol-nou-${Date.now()}`
    setPosts((p) => [...p, {
      slug,
      title_en: "", title_ro: "Articol Nou", title_ru: "",
      excerpt_en: "", excerpt_ro: "", excerpt_ru: "",
      body_en: "", body_ro: "", body_ru: "",
      category: "Therapy",
      date: new Date().toISOString().split("T")[0],
      image: "/images/blog-1.jpg",
    }])
    setEditing(posts.length)
    setSaved(false)
  }

  function remove(idx: number) {
    setPosts((p) => p.filter((_, i) => i !== idx))
    if (editing === idx) setEditing(null)
    setSaved(false)
  }

  function save() {
    fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: "blog/blog", data: posts }),
    }).then(() => setSaved(true))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-800">Articole Blog</h2>
        <button
          onClick={add}
          className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-800"
        >
          <Plus className="h-4 w-4" /> Articol Nou
        </button>
      </div>

      {/* Lista articole */}
      <div className="flex flex-col gap-2 mb-6">
        {posts.map((post, idx) => (
          <div
            key={post.slug}
            className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-slate-700">{post.title_ro || post.slug}</p>
              <p className="text-xs text-slate-400">{post.date} · {post.category}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setEditing(editing === idx ? null : idx)}
                className="text-slate-400 hover:text-violet-600"
              >
                {editing === idx ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
              <button onClick={() => remove(idx)} className="text-slate-400 hover:text-red-500">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Editor articol */}
      {editing !== null && posts[editing] && (
        <div className="rounded-xl border-2 border-violet-200 p-5 bg-violet-50">
          <h3 className="font-semibold text-violet-800 mb-4">
            Editează: {posts[editing].title_ro || posts[editing].slug}
          </h3>
          <LangTabs active={lang} onChange={setLang} />
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Field label="Slug (URL)" value={posts[editing].slug} onChange={(v) => update(editing, "slug", v)} />
              <Field label="Categorie" value={posts[editing].category} onChange={(v) => update(editing, "category", v)} />
              <Field label="Data (YYYY-MM-DD)" value={posts[editing].date} onChange={(v) => update(editing, "date", v)} />
            </div>
            <Field
              label={`Titlu (${lang.toUpperCase()})`}
              value={posts[editing][`title_${lang}`] ?? ""}
              onChange={(v) => update(editing, `title_${lang}`, v)}
            />
            <Field
              label={`Rezumat scurt (${lang.toUpperCase()})`}
              value={posts[editing][`excerpt_${lang}`] ?? ""}
              onChange={(v) => update(editing, `excerpt_${lang}`, v)}
              multiline
              rows={2}
            />
            <Field
              label={`Conținut articol (${lang.toUpperCase()})`}
              value={posts[editing][`body_${lang}`] ?? ""}
              onChange={(v) => update(editing, `body_${lang}`, v)}
              multiline
              rows={10}
            />
          </div>
        </div>
      )}

      <SaveBar onSave={save} saved={saved} />
    </div>
  )
}

// ─── Tab: Settings ─────────────────────────────────────────────────────────

function SettingsTab() {
  const [saved, setSaved] = useState(false)
  const [data, setData] = useState({
    name: "", title_en: "", title_ro: "", title_ru: "",
    phone: "", email: "", address: "",
    instagram: "", facebook: "", telegram: "",
  })

  useEffect(() => {
    fetch("/api/admin/content?file=settings")
      .then((r) => r.json())
      .then(setData)
      .catch(() => {})
  }, [])

  function set(field: string, value: string) {
    setData((d) => ({ ...d, [field]: value }))
    setSaved(false)
  }

  function save() {
    fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: "settings", data }),
    }).then(() => setSaved(true))
  }

  return (
    <div>
      <h2 className="text-lg font-bold text-slate-800 mb-4">Setări Site</h2>
      <div className="flex flex-col gap-4">
        <Field label="Nume (apare în header)" value={data.name} onChange={(v) => set("name", v)} />
        <div className="grid grid-cols-3 gap-3">
          <Field label="Titlu EN" value={data.title_en} onChange={(v) => set("title_en", v)} />
          <Field label="Titlu RO" value={data.title_ro} onChange={(v) => set("title_ro", v)} />
          <Field label="Titlu RU" value={data.title_ru} onChange={(v) => set("title_ru", v)} />
        </div>
        <div className="border-t border-slate-100 pt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Contact</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Telefon" value={data.phone} onChange={(v) => set("phone", v)} />
            <Field label="Email" value={data.email} onChange={(v) => set("email", v)} />
            <Field label="Adresă" value={data.address} onChange={(v) => set("address", v)} />
          </div>
        </div>
        <div className="border-t border-slate-100 pt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Social Media</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Field label="Instagram" value={data.instagram} onChange={(v) => set("instagram", v)} />
            <Field label="Facebook" value={data.facebook} onChange={(v) => set("facebook", v)} />
            <Field label="Telegram" value={data.telegram} onChange={(v) => set("telegram", v)} />
          </div>
        </div>
      </div>
      <SaveBar onSave={save} saved={saved} />
    </div>
  )
}

// ─── Pagina principală Admin ───────────────────────────────────────────────

const tabs: { id: Tab; label: string; icon: any }[] = [
  { id: "hero",         label: "Hero",          icon: Eye },
  { id: "about",        label: "Despre mine",   icon: FileText },
  { id: "services",     label: "Servicii",      icon: Layers },
  { id: "testimonials", label: "Testimoniale",  icon: MessageSquare },
  { id: "blog",         label: "Blog",          icon: BookOpen },
  { id: "settings",     label: "Setări",        icon: Settings },
]

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>("hero")

  function login() {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setError("")
    } else {
      setError("Parolă incorectă. Încearcă din nou.")
    }
  }

  // ── Login screen ──
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-3">
              <Settings className="h-6 w-6 text-violet-600" />
            </div>
            <h1 className="text-xl font-bold text-slate-800">Panou Admin</h1>
            <p className="text-sm text-slate-500 mt-1">Dr. Popovici Daniela</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Parola"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 pr-10"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-400"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              onClick={login}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-lg text-sm transition-colors"
            >
              Intră
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Dashboard ──
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-slate-100 flex flex-col shrink-0">
        <div className="p-5 border-b border-slate-100">
          <p className="font-bold text-slate-800 text-sm">Admin Panel</p>
          <p className="text-xs text-slate-400 mt-0.5">Dr. Popovici Daniela</p>
        </div>
        <nav className="flex-1 p-3 flex flex-col gap-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                activeTab === id
                  ? "bg-violet-50 text-violet-700"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-slate-100">
          <button
            onClick={() => setAuthenticated(false)}
            className="flex items-center gap-2 px-3 py-2 w-full rounded-lg text-sm text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Ieși
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {activeTab === "hero"         && <HeroTab />}
          {activeTab === "about"        && <AboutTab />}
          {activeTab === "services"     && <ServicesTab />}
          {activeTab === "testimonials" && <TestimonialsTab />}
          {activeTab === "blog"         && <BlogTab />}
          {activeTab === "settings"     && <SettingsTab />}
        </div>
      </main>
    </div>
  )
}