import { NextResponse } from "next/server"

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://your-domain.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /api/
`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
