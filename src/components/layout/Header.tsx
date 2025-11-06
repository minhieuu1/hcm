"use client"

import { useState } from "react"
import Link from "next/link"
import { NAVIGATION_ITEMS, APP_NAME } from "../../config/constants"
import VintageButton from "../ui/VintageButton"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b-2 border-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary flex items-center justify-center stamp-border">
              <span className="text-primary-foreground font-bold text-xl">TĐ</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-heading text-2xl font-bold text-foreground distressed-text">{APP_NAME}</h1>
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">1976 - 1986</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="px-4 py-2 text-sm font-mono uppercase tracking-wider text-foreground hover:text-primary hover:bg-muted transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            {/* <VintageButton variant="primary" size="sm">
              Đăng Ký
            </VintageButton> */}
            <Link
  href="https://metasteps.com/viewer/e0df49ab-3744-49c7-b071-09a2d4c1e6d5"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <VintageButton variant="primary" size="sm" fullWidth>
    Bảo Tàng
  </VintageButton>
</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className="px-4 py-3 text-sm font-mono uppercase tracking-wider text-foreground hover:text-primary hover:bg-muted transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* <div className="px-4 pt-2">
                <VintageButton variant="primary" size="sm" fullWidth>
                  Bảo Tàng
                </VintageButton>
              </div> */}
              <div className="px-4 pt-2">
  <Link
    href="https://metasteps.com/viewer/e0df49ab-3744-49c7-b071-09a2d4c1e6d5"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <VintageButton variant="primary" size="sm" fullWidth>
      Bảo Tàng
    </VintageButton>
  </Link>
</div>

            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
