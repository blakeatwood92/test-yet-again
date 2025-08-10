import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Disc Golf Betting Guide | Expert Tips & CoolBet Sportsbook Reviews 2025",
  description:
    "Master disc golf betting with our expert guides, tournament previews, and CoolBet partnership. Get the best odds, strategies, and analysis for professional disc golf tournaments.",
  keywords:
    "disc golf betting, how to bet on disc golf, CoolBet disc golf, disc golf sportsbooks, disc golf betting guide, PDGA betting, disc golf odds, professional disc golf betting",
  openGraph: {
    title: "Disc Golf Betting Guide | Expert Tips & CoolBet Reviews 2025",
    description: "Master disc golf betting with expert guides, tournament previews, and CoolBet partnership.",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://your-domain.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Disc Golf Betting Guide",
              description: "Expert disc golf betting tips, tournament previews, and CoolBet sportsbook reviews",
              url: "https://your-domain.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://your-domain.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
