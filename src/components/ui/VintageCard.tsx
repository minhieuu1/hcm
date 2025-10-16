import type { ReactNode } from "react"
import { classNames } from "../../utils/helpers"

interface VintageCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  stamp?: boolean
}

export default function VintageCard({ children, className, hover = false, stamp = false }: VintageCardProps) {
  return (
    <div
      className={classNames(
        "bg-card text-card-foreground p-6 shadow-lg",
        stamp ? "stamp-border" : "border border-border",
        hover && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  )
}
