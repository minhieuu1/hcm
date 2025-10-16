import type { ReactNode } from "react"
import { classNames } from "../../utils/helpers"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  decoration?: boolean
  children?: ReactNode
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  decoration = true,
  children,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }

  return (
    <div className={classNames("flex flex-col gap-4 mb-12", alignClasses[align])}>
      {decoration && (
        <div className="flex items-center gap-2">
          <div className="w-12 h-0.5 bg-primary"></div>
          <div className="w-2 h-2 bg-primary rotate-45"></div>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>
      )}

      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground distressed-text">
        {title}
      </h2>

      {subtitle && <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">{subtitle}</p>}

      {children}
    </div>
  )
}
