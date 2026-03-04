import Link from "next/link"
import { Heart, Instagram, Facebook, Send, Linkedin } from "lucide-react"
import { siteConfig, navigation } from "@/lib/content"

export function Footer() {
  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-serif text-xl font-bold">{siteConfig.name}</p>
              <p className="text-sm opacity-70">{siteConfig.title}</p>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              Creating a safe space for healing, growth, and self-discovery.
              Professional psychological support for every stage of life.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">Navigation</h3>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">Contact</h3>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <a href={`tel:${siteConfig.phone}`} className="hover:opacity-100 transition-opacity">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hover:opacity-100 transition-opacity">
                {siteConfig.email}
              </a>
              <p>{siteConfig.address}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">Follow</h3>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm opacity-50 flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" /> care
          </p>
        </div>
      </div>
    </footer>
  )
}
