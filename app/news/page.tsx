import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Disc Golf Betting News & Tournament Analysis | Latest Updates 2025",
  description:
    "Stay updated with the latest disc golf betting news, tournament previews, player analysis, and expert betting tips. Get the edge with our comprehensive coverage.",
  keywords:
    "disc golf betting news, tournament previews, disc golf analysis, betting tips, PDGA news, disc golf pro tour, tournament betting guide",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Disc Golf Betting News & Analysis</h1>
            <p className="text-xl text-blue-100 mb-8">
              Stay ahead of the competition with expert tournament previews, player analysis, and exclusive CoolBet
              betting insights.
            </p>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
              <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                Bet on CoolBet <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-blue-500 shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Tournament Preview</Badge>
                  <CardTitle className="text-2xl">2025 PDGA World Championships: Complete Betting Guide</CardTitle>
                  <CardDescription className="text-base">
                    Expert analysis, CoolBet odds, and betting strategies for disc golf's biggest event
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The 2025 PDGA World Championships in Leicester, Massachusetts promises to be the most competitive
                    worlds in recent memory. With Paul McBeth looking to reclaim his title and rising stars like Gannon
                    Buhr making their mark, the betting opportunities are endless.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href="/news/pdga-worlds-2024-betting-preview">Read Full Preview</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet on CoolBet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-green-100 text-green-800">Player Analysis</Badge>
                  <CardTitle className="text-2xl">Paul McBeth vs Ricky Wysocki: The Ultimate Rivalry</CardTitle>
                  <CardDescription className="text-base">
                    Head-to-head stats, betting trends, and what to expect in their next matchup
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The McBeth-Wysocki rivalry has defined professional disc golf for over a decade. Our comprehensive
                    analysis breaks down their head-to-head record, course preferences, and betting value for upcoming
                    tournaments.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href="/news/mcbeth-vs-wysocki-betting-analysis">View Analysis</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet on CoolBet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Latest News Grid */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-purple-100 text-purple-800">Betting Strategy</Badge>
                  <CardTitle className="text-lg">How Weather Affects Disc Golf Betting Odds</CardTitle>
                  <CardDescription>Master weather-based betting strategies with CoolBet</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Wind, rain, and temperature dramatically impact disc flight and player performance. Learn how to use
                    weather forecasts to find betting value.
                  </p>
                  <Link
                    href="/news/weather-betting-strategies"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">Tournament Recap</Badge>
                  <CardTitle className="text-lg">European Open 2025: Betting Lessons Learned</CardTitle>
                  <CardDescription>What the Nokia tournament taught us about betting</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    The European Open delivered surprises and upsets. We analyze what went right, what went wrong, and
                    how to apply these lessons to future bets.
                  </p>
                  <Link href="/news/european-open-2024-recap" className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-red-100 text-red-800">Breaking News</Badge>
                  <CardTitle className="text-lg">Calvin Heimburg Injury Update</CardTitle>
                  <CardDescription>How this affects upcoming tournament odds</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Calvin Heimburg's shoulder injury could impact his performance at upcoming events. We break down the
                    betting implications and value opportunities.
                  </p>
                  <Link href="/news/heimburg-injury-update" className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Course Analysis</Badge>
                  <CardTitle className="text-lg">Maple Hill: The Ultimate Betting Guide</CardTitle>
                  <CardDescription>Master the most challenging course in disc golf</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Maple Hill's technical layout favors certain playing styles. Learn which players excel here and how
                    to bet accordingly on CoolBet.
                  </p>
                  <Link href="/news/maple-hill-betting-guide" className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-green-100 text-green-800">Rising Stars</Badge>
                  <CardTitle className="text-lg">Gannon Buhr: The Next Big Thing?</CardTitle>
                  <CardDescription>Why the young star is a smart betting pick</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    At just 20 years old, Gannon Buhr is already competing with the elite. We analyze his rapid rise and
                    betting potential for major events.
                  </p>
                  <Link href="/news/gannon-buhr-analysis" className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-yellow-100 text-yellow-800">CoolBet Special</Badge>
                  <CardTitle className="text-lg">Exclusive CoolBet Disc Golf Promotions</CardTitle>
                  <CardDescription>Enhanced odds and special offers for disc golf bettors</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    CoolBet is offering enhanced odds on major disc golf tournaments. Get the inside scoop on the best
                    promotions and how to maximize your value.
                  </p>
                  <Link href="/news/coolbet-promotions" className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-gradient-to-r from-blue-900 to-green-800 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Never Miss a Betting Opportunity</h3>
              <p className="text-blue-100 mb-6">
                Get tournament previews, betting tips, and exclusive CoolBet promotions delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                />
                <Button className="bg-green-500 hover:bg-green-600">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
