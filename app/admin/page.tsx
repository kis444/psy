"use client"

import { useEffect } from "react"
import CMS from "decap-cms-app"

export default function AdminPage() {
  useEffect(() => {
    // Inițializează CMS doar în browser
    if (typeof window !== 'undefined') {
      CMS.init()
    }
  }, [])

  return (
    <div>
      {/* CMS se va încărca aici */}
      <div id="nc-root" />
    </div>
  )
}