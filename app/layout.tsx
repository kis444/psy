import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/context/LanguageContext"
import { Header } from "@/components/header"  // ← Adaugă acest import
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Dr. Popovici Daniela - Licensed Psychologist",
  description: "Professional psychological support in a warm, confidential setting.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Header />  {/* ← Adaugă această linie */}
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}