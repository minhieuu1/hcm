import type { ButtonHTMLAttributes, ReactNode } from "react"
import { classNames } from "../../utils/helpers"

interface VintageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: ReactNode
  fullWidth?: boolean
}

export default function VintageButton({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className,
  ...props
}: VintageButtonProps) {
  const baseStyles =
    "vintage-button font-mono uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-[#a00d26] border-2 border-primary",
    secondary: "bg-secondary text-secondary-foreground hover:bg-[#4a3a2a] border-2 border-secondary",
    outline: "bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background",
    ghost: "bg-transparent text-foreground hover:bg-muted border-2 border-transparent",
  }

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }

  return (
    <button
      className={classNames(baseStyles, variants[variant], sizes[size], fullWidth && "w-full", className)}
      {...props}
    >
      {children}
    </button>
  )
}
