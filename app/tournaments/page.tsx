import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Disc Golf Tournament Calendar 2025 | Betting Schedule & Previews",
  description:
    "Complete 2024 disc golf tournament calendar with betting previews, odds, and analysis. Never miss a betting opportunity with our comprehensive tournament guide.",
  keywords:
    "disc golf tournament calendar, PDGA events 2024, disc golf pro tour, tournament betting, disc golf schedule, major championships",
}

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">2025 Disc Golf Tournament Calendar</h1>
            <p className="text-xl text-green-100 mb-8">
              Complete betting guide to every major disc golf tournament. Get previews, odds, and expert analysis for
              maximum CoolBet value.
            </p>
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
              <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                Start Betting on CoolBet <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tournament Calendar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Championships & Elite Series</h2>

            <div className="grid gap-6 mb-12">
              {/* PDGA World Championships */}
              <Card className="border-l-4 border-l-gold-500 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-gold-100 text-gold-800">Major Championship</Badge>
                        <Badge variant="outline">Aug 26-30, 2025</Badge>
                      </div>
                      <CardTitle className="text-2xl">PDGA World Championships</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-base">
                        <MapPin className="h-4 w-4" />
                        Leicester, Massachusetts • Maple Hill Disc Golf Course
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gold-600">$75,000+</p>
                      <p className="text-sm text-gray-600">Prize Pool</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The most prestigious event in professional disc golf. The world's best players compete on the
                    legendary Maple Hill course for the ultimate prize. Paul McBeth looks to reclaim his title while
                    Ricky Wysocki and rising stars challenge for the crown.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">Defending Champion</p>
                      <p className="text-gray-700">Ricky Wysocki</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">Course Par</p>
                      <p className="text-gray-700">62 (18 holes)</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">Field Size</p>
                      <p className="text-gray-700">144 players</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href="/tournaments/pdga-worlds-2025">Full Betting Preview</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet on CoolBet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* European Open */}
              <Card className="border-l-4 border-l-blue-500 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-100 text-blue-800">Elite Series</Badge>
                        <Badge variant="outline">Jul 14-20, 2025</Badge>
                      </div>
                      <CardTitle className="text-2xl">European Open</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-base">
                        <MapPin className="h-4 w-4" />
                        Nokia, Finland • Beast Course
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">€50,000</p>
                      <p className="text-sm text-gray-600">Prize Pool</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Europe's premier disc golf event attracts the world's elite to Finland's challenging Beast course.
                    Known for dramatic weather changes and unique course design that can shake up the usual favorites.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href="/tournaments/european-open-2025">Betting Preview</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet on CoolBet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* DGPT Championship */}
              <Card className="border-l-4 border-l-purple-500 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-purple-100 text-purple-800">Season Finale</Badge>
                        <Badge variant="outline">Oct 23-26, 2025</Badge>
                      </div>
                      <CardTitle className="text-2xl">DGPT Championship</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-base">
                        <MapPin className="h-4 w-4" />
                        Charlotte, North Carolina • Hornets Nest Park
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600">$100,000</p>
                      <p className="text-sm text-gray-600">Prize Pool</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The season-ending championship featuring only the top 72 players from the Disc Golf Pro Tour. High
                    stakes, elite field, and season-long storylines culminate in disc golf's richest event.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href="/tournaments/dgpt-championship-2025">Betting Preview</Link>
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

            {/* Upcoming Events Grid */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Elite Series</Badge>
                  <CardTitle className="text-lg">Ledgestone Insurance Open</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Aug 7-10 • Peoria, IL
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Multi-course event featuring Northwood Black and Sunset Hills. Known for hot weather and scoring
                    opportunities.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild size="sm">
                      <Link href="/tournaments/ledgestone-2025">Preview</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Silver Series</Badge>
                  <CardTitle className="text-lg">Discraft Great Lakes Open</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Jul 24-27 • Milford, MI
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Technical wooded course that rewards accuracy over distance. Often produces surprise winners and
                    betting value.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild size="sm">
                      <Link href="/tournaments/great-lakes-open-2025">Preview</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Elite Series</Badge>
                  <CardTitle className="text-lg">MVP Open</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Sep 11-14 • Maple Hill, MA
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Return to the legendary Maple Hill course. Perfect preparation event for players heading to Worlds.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild size="sm">
                      <Link href="/tournaments/mvp-open-2025">Preview</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Major</Badge>
                  <CardTitle className="text-lg">United States Disc Golf Championship</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Oct 1-5 • Rock Hill, SC
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    America's oldest major championship. Winthrop Gold course provides the ultimate test of disc golf
                    skills.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild size="sm">
                      <Link href="/tournaments/usdgc-2025">Preview</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Elite Series</Badge>
                  <CardTitle className="text-lg">Des Moines Challenge</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Aug 28-31 • Des Moines, IA
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Challenging course layout with water hazards and elevation changes. Weather can be a major factor.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild size="sm">
                      <Link href="/tournaments/des-moines-challenge-2025">Preview</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Silver Series</Badge>
                  <CardTitle className="text-lg">Beaver State Fling</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Jul 17-20 • Estacada, OR
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Pacific Northwest's premier event. Milo McIver's wooded fairways and elevation create unique
                    challenges.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild size="sm">
                      <Link href="/tournaments/beaver-state-fling-2025">Preview</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tournament Betting Tips */}
            <div className="bg-gradient-to-r from-blue-900 to-green-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Tournament Betting Strategy</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-3">🎯 Key Factors to Consider</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Course layout and player strengths</li>
                    <li>• Weather forecast and conditions</li>
                    <li>• Recent player form and injuries</li>
                    <li>• Historical performance at venue</li>
                    <li>• Field strength and competition level</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">💰 CoolBet Betting Tips</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Compare odds across different markets</li>
                    <li>• Look for value in head-to-head matchups</li>
                    <li>• Consider live betting during rounds</li>
                    <li>• Use CoolBet's enhanced odds promotions</li>
                    <li>• Track your bets and analyze results</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                  <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                    Start Betting on CoolBet <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
