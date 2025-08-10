import { ArrowRight, Target, TrendingUp, BookOpen, Users, Star, Calendar, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-green-500/20 text-green-100 border-green-400/30 w-fit">
                #1 Disc Golf Betting Guide - Powered by CoolBet
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Master Disc Golf <span className="text-green-400">Betting</span> Like a Pro
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Get expert disc golf betting tips, tournament previews, and exclusive CoolBet bonuses. Start winning
                with our proven strategies and live tournament coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                    Join CoolBet Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/guides/how-to-bet">Learn How to Bet</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Professional+Disc+Golf+Tournament+Betting"
                alt="Professional disc golf tournament betting with CoolBet"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Disc Golf Betting News</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with tournament previews, betting odds, and expert analysis from the disc golf world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Tournament Preview</Badge>
                <CardTitle className="text-lg">2025 PDGA World Championships Betting Guide</CardTitle>
                <CardDescription>Complete betting preview with CoolBet odds and expert picks</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/news/pdga-worlds-2024-betting-preview"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read Full Preview →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-100 text-green-800">Player Analysis</Badge>
                <CardTitle className="text-lg">Paul McBeth vs Ricky Wysocki: Head-to-Head Stats</CardTitle>
                <CardDescription>Betting insights for the sport's biggest rivalry</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/news/mcbeth-vs-wysocki-betting-analysis"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Analysis →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-purple-100 text-purple-800">Betting Tips</Badge>
                <CardTitle className="text-lg">How Weather Affects Disc Golf Betting Odds</CardTitle>
                <CardDescription>Expert guide to weather-based betting strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/news/weather-betting-strategies" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn Strategies →
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/news">View All News & Tournament Previews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Disc Golf Betting Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the edge you need with expert analysis, proven strategies, and exclusive CoolBet partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Expert Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  In-depth tournament previews, player stats, and course analysis for every major event.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Live Tournament Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Real-time updates, live betting opportunities, and round-by-round analysis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">CoolBet Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Exclusive bonuses, enhanced odds, and premium betting features through our CoolBet partnership.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Complete Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  From beginner basics to advanced strategies, everything you need to bet successfully.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Upcoming Tournaments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get ready for the biggest disc golf betting opportunities of the season.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">PDGA World Championships</CardTitle>
                    <CardDescription>Leicester, Massachusetts</CardDescription>
                  </div>
                  <Badge variant="outline">Aug 26-30, 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  The most prestigious event in disc golf with $75,000+ prize pool
                </p>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/tournaments/pdga-worlds-2025">Betting Preview</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                      Bet on CoolBet
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">European Open</CardTitle>
                    <CardDescription>Nokia, Finland</CardDescription>
                  </div>
                  <Badge variant="outline">Jul 14-20, 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Elite Series event with international field and unique course design
                </p>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                    <Link href="/tournaments/european-open-2025">Betting Preview</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                      Bet on CoolBet
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">DGPT Championship</CardTitle>
                    <CardDescription>Charlotte, North Carolina</CardDescription>
                  </div>
                  <Badge variant="outline">Oct 23-26, 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Season finale with the top 72 players competing for the title
                </p>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Link href="/tournaments/dgpt-championship-2025">Betting Preview</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                      Bet on CoolBet
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link href="/tournaments">View Full Tournament Calendar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Guides Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Master Disc Golf Betting</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive guides will take you from beginner to expert in disc golf betting with CoolBet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="/guides/what-is-disc-golf">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    What is Disc Golf?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Learn the basics of disc golf, rules, scoring, and why it's perfect for betting on CoolBet.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="/guides/how-to-bet">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors">How to Bet</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Step-by-step guide to placing your first disc golf bet on CoolBet and understanding odds.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="/guides/where-to-bet">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">Where to Bet</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Why CoolBet is the top choice for disc golf betting with exclusive bonuses and features.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="/guides/how-it-works">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-200 transition-colors">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Understanding betting markets, CoolBet strategies, and maximizing your winning potential.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Winning with CoolBet?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Join thousands of successful disc golf bettors who trust our expert analysis and CoolBet's premium platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
              <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                Join CoolBet Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/guides/how-to-bet">Read Our Guides</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
