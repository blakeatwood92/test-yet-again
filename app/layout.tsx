import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@/components/analytics"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Disc Golf Betting",
  description: "Your premier disc golf betting platform",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Suspense fallback={null}>
          {children}
          <Analytics gaId="G-E9DG2DJY2N" />
        </Suspense>
      </body>
    </html>
  )
}
