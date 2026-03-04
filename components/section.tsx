import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "soft" | "card"
  id?: string
}

export function Section({ children, className, variant = "default", id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 px-4",
        variant === "soft" && "bg-soft-section",
        variant === "card" && "bg-card",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
          {label}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
