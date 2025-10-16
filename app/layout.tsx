import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Courier_Prime, Noto_Serif } from "next/font/google"
import "../src/index.css"
import Header from "../src/components/layout/Header"
import Footer from "../src/components/layout/Footer"
import ScrollToTop from "../src/components/ui/ScrollToTop"

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
})

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier",
  display: "swap",
})

const notoSerif = Noto_Serif({
  subsets: ["latin", "vietnamese"],
  variable: "--font-noto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tổng Cục Tem Phiếu - Ký Ức Thời Bao Cấp",
  description: "Tái hiện và khám phá cuộc sống thời kỳ bao cấp Việt Nam (1976-1986)",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${playfairDisplay.variable} ${courierPrime.variable} ${notoSerif.variable}`}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  )
}
