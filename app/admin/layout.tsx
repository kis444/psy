// app/admin/layout.tsx
// Layout separat pentru admin — fără header și footer public.

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}