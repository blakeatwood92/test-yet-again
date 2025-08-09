import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Users, Trophy, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "What is Disc Golf? Complete Beginner's Guide to Disc Golf Betting",
  description:
    "Learn everything about disc golf: rules, scoring, equipment, and why it's perfect for betting. Complete beginner's guide to understanding disc golf before you start betting.",
  keywords:
    "what is disc golf, disc golf rules, disc golf scoring, disc golf equipment, disc golf betting basics, professional disc golf",
}

export default function WhatIsDiscGolf() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">What is Disc Golf? Your Complete Guide</h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover the fastest-growing sport in America and why it's becoming a betting favorite worldwide.
            </p>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
              <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                Start Betting on Disc Golf <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Disc Golf</h2>

              <div className="mb-8">
                <Image
                  src="/disc-golf-course.png"
                  alt="Professional disc golf course with players"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg mb-6"
                />
              </div>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Disc golf</strong> is a precision sport that combines the strategy of traditional golf with the
                accessibility and excitement of frisbee. Players throw specialized discs toward elevated metal baskets,
                aiming to complete each hole in the fewest throws possible.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">How Disc Golf Works</h3>
              <p className="text-gray-700 mb-6">
                Similar to ball golf, disc golf courses typically feature 18 holes with varying distances, obstacles,
                and terrain. Each hole has a designated tee area where players begin and a target basket where they aim
                to land their disc. The player with the lowest total score wins.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-6 w-6 text-blue-600 mr-2" />
                      Basic Rules
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Each throw counts as one stroke</li>
                      <li>• Play from where your disc lands</li>
                      <li>• Complete each hole in order</li>
                      <li>• Lowest total score wins</li>
                      <li>• Out-of-bounds adds penalty strokes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="h-6 w-6 text-green-600 mr-2" />
                      Scoring System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Ace:</strong> Hole-in-one (1 throw)
                      </li>
                      <li>
                        • <strong>Eagle:</strong> 2 under par
                      </li>
                      <li>
                        • <strong>Birdie:</strong> 1 under par
                      </li>
                      <li>
                        • <strong>Par:</strong> Expected score
                      </li>
                      <li>
                        • <strong>Bogey:</strong> 1 over par
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Discs</h3>
              <p className="text-gray-700 mb-4">
                Professional disc golfers use different types of discs for various shots, similar to how golfers use
                different clubs:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Drivers</h4>
                    <p className="text-sm text-gray-700">
                      Long-distance throws off the tee. Designed for maximum distance and speed.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Mid-Range</h4>
                    <p className="text-sm text-gray-700">
                      Controlled, accurate throws for approach shots and shorter distances.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Putters</h4>
                    <p className="text-sm text-gray-700">
                      Short, precise throws near the basket. Designed for accuracy and control.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Disc Golf</h3>
              <p className="text-gray-700 mb-6">
                The Professional Disc Golf Association (PDGA) sanctions tournaments worldwide, with major events
                offering substantial prize pools. Top professionals like Paul McBeth, Ricky Wysocki, and Paige Pierce
                compete in events that attract thousands of spectators and millions of online viewers.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-12">
                <Card className="text-center">
                  <CardHeader>
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <CardTitle>50,000+</CardTitle>
                    <CardDescription>Active PDGA Members</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <Target className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <CardTitle>8,000+</CardTitle>
                    <CardDescription>Disc Golf Courses Worldwide</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <Clock className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                    <CardTitle>3,000+</CardTitle>
                    <CardDescription>Sanctioned Events Annually</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Disc Golf is Perfect for Betting</h3>
              <p className="text-gray-700 mb-4">
                Disc golf offers unique betting opportunities that make it increasingly popular among sports bettors:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>
                  <strong>Predictable Factors:</strong> Weather, course conditions, and player form significantly impact
                  performance
                </li>
                <li>
                  <strong>Statistical Analysis:</strong> Detailed round ratings and historical performance data
                  available
                </li>
                <li>
                  <strong>Growing Coverage:</strong> More tournaments streamed live with professional commentary
                </li>
                <li>
                  <strong>Diverse Markets:</strong> Tournament winners, head-to-head matchups, round scores, and prop
                  bets
                </li>
                <li>
                  <strong>Year-Round Action:</strong> Professional tours run from February through October
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-bold text-blue-900 mb-2">Pro Tip for Bettors</h4>
                <p className="text-blue-800">
                  Understanding course layouts and weather conditions is crucial for disc golf betting success. Wind,
                  rain, and temperature can dramatically affect disc flight patterns and player performance.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Major Disc Golf Events</h3>
              <p className="text-gray-700 mb-4">
                The biggest betting opportunities come during major championships and tour events:
              </p>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900">PDGA World Championships</h4>
                  <p className="text-gray-700">
                    The most prestigious event in disc golf, held annually with the world's best players.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900">Disc Golf Pro Tour</h4>
                  <p className="text-gray-700">
                    Elite series featuring the top professional players competing for substantial prize pools.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900">Major Championships</h4>
                  <p className="text-gray-700">
                    Including the US Open, European Open, and other premier events with international fields.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-900 to-green-800 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Betting on Disc Golf?</h3>
              <p className="text-blue-100 mb-6">
                Now that you understand the sport, learn how to place your first disc golf bet with our comprehensive
                betting guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
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
          </div>
        </div>
      </section>
    </div>
  )
}
