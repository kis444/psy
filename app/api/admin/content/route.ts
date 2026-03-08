// app/api/admin/content/route.ts
// Citește și scrie conținut în MongoDB (funcționează pe Vercel)

import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

const DB_NAME = "psy-site"
const COLLECTION = "content"

const ALLOWED_FILES = new Set([
  "hero", "about", "services", "testimonials", "settings", "blog/blog"
])

async function getCollection() {
  const client = await clientPromise
  return client.db(DB_NAME).collection(COLLECTION)
}

// GET /api/admin/content?file=hero
export async function GET(req: NextRequest) {
  const file = req.nextUrl.searchParams.get("file")
  if (!file || !ALLOWED_FILES.has(file)) {
    return NextResponse.json({ error: "Invalid file" }, { status: 400 })
  }

  try {
    const col = await getCollection()
    const doc = await col.findOne({ _id: file as any })

    if (!doc) {
      // Prima oară: citește din JSON local și salvează în MongoDB
      try {
        const data = await import(`@/content/cms/${file}.json`)
        await col.replaceOne(
          { _id: file as any },
          { _id: file as any, data: data.default },
          { upsert: true }
        )
        return NextResponse.json(data.default)
      } catch {
        return NextResponse.json({ error: "Not found" }, { status: 404 })
      }
    }

    return NextResponse.json(doc.data)
  } catch (error) {
    console.error("MongoDB GET error:", error)
    return NextResponse.json({ error: "Database error" }, { status: 500 })
  }
}

// POST /api/admin/content
export async function POST(req: NextRequest) {
  const body = await req.json()
  const { file, data } = body

  if (!file || !ALLOWED_FILES.has(file)) {
    return NextResponse.json({ error: "Invalid file" }, { status: 400 })
  }

  try {
    const col = await getCollection()
    await col.replaceOne(
      { _id: file as any },
      { _id: file as any, data },
      { upsert: true }
    )
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("MongoDB POST error:", error)
    return NextResponse.json({ error: "Database error" }, { status: 500 })
  }
}