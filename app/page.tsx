import { ArrowRight, Target, TrendingUp, BookOpen, Users, Star } from "lucide-react"
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
                #1 Disc Golf Betting Guide
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Master Disc Golf <span className="text-green-400">Betting</span> Like a Pro
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover the best disc golf betting strategies, top sportsbooks, and expert insights. Start winning with
                our comprehensive guides and proven tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                    Start Betting Now <ArrowRight className="ml-2 h-5 w-5" />
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
                src="/placeholder-swu9j.png"
                alt="Professional disc golf tournament betting"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Disc Golf Betting Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the edge you need with expert analysis, proven strategies, and the best betting opportunities in disc
              golf.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Expert Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  In-depth player statistics, course analysis, and weather impact assessments for every major
                  tournament.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Proven Strategies</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Time-tested betting strategies specifically designed for disc golf tournaments and player matchups.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Complete Guides</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  From beginner basics to advanced techniques, our comprehensive guides cover everything you need to
                  know.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guides Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Master Disc Golf Betting</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive guides will take you from beginner to expert in disc golf betting.
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
                    Learn the basics of disc golf, rules, scoring, and why it's perfect for betting.
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
                    Step-by-step guide to placing your first disc golf bet and understanding odds.
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
                    Top-rated sportsbooks for disc golf betting with exclusive bonuses and features.
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
                    Understanding betting markets, strategies, and maximizing your winning potential.
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Winning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Join thousands of successful disc golf bettors who trust our expert analysis and proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
              <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
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
