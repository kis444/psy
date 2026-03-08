// app/api/contact/route.ts
// Primește mesajele din formularul de contact și le trimite pe email via Resend

import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "daniela.popovici126@gmail.com"

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Câmpuri lipsă" }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: "Site Daniela <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `Mesaj nou de la ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Mesaj nou de pe site</h2>
          <p><strong>Nume:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
          <p><strong>Mesaj:</strong></p>
          <p style="background: #f9fafb; padding: 16px; border-radius: 8px; color: #374151;">
            ${message.replace(/\n/g, "<br/>")}
          </p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">
            Trimis de pe site-ul Dr. Popovici Daniela
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: "Nu s-a putut trimite emailul" }, { status: 500 })
  }
}