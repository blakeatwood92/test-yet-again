import type { Metadata } from "next"
import Link from "next/link"
import { Trophy, TrendingUp, Target, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export const metadata: Metadata = {
  title: "Disc Golf Player Stats & Betting Analysis | Top Pro Rankings 2025",
  description:
    "Complete disc golf player statistics, betting analysis, and performance data. Get insights on Paul McBeth, Ricky Wysocki, and all top professionals for better betting decisions.",
  keywords:
    "disc golf player stats, Paul McBeth betting, Ricky Wysocki analysis, disc golf rankings, player performance data, PDGA ratings",
}

export default function PlayersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Disc Golf Player Stats & Analysis</h1>
            <p className="text-xl text-purple-100 mb-8">
              Complete player statistics, betting analysis, and performance data to make smarter CoolBet decisions.
            </p>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
              <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                Bet on CoolBet <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Players */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Professional Players</h2>

            <div className="grid gap-6 mb-12">
              {/* Paul McBeth */}
              <Card className="border-l-4 border-l-gold-500 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center">
                        <Trophy className="h-8 w-8 text-gold-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Paul McBeth</CardTitle>
                        <CardDescription className="text-base">6x World Champion • Discraft</CardDescription>
                        <div className="flex gap-2 mt-2">
                          <Badge className="bg-gold-100 text-gold-800">GOAT</Badge>
                          <Badge variant="outline">1036 Rating</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gold-600">+275</p>
                      <p className="text-sm text-gray-600">CoolBet Worlds Odds</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">2025 Wins</p>
                      <p className="text-2xl font-bold text-blue-600">4</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">Top 10s</p>
                      <p className="text-2xl font-bold text-green-600">14</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">Avg Round Rating</p>
                      <p className="text-2xl font-bold text-purple-600">1048</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">2025 Earnings</p>
                      <p className="text-2xl font-bold text-orange-600">$95K</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The greatest disc golfer of all time is having a strong 2025 season. McBeth's consistency and clutch
                    performance make him a reliable betting choice, especially at major championships where his
                    experience shines.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href="/players/paul-mcbeth">Full Analysis</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet on CoolBet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Ricky Wysocki */}
              <Card className="border-l-4 border-l-blue-500 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Star className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Ricky Wysocki</CardTitle>
                        <CardDescription className="text-base">2023 World Champion • Dynamic Discs</CardDescription>
                        <div className="flex gap-2 mt-2">
                          <Badge className="bg-blue-100 text-blue-800">Defending Champ</Badge>
                          <Badge variant="outline">1032 Rating</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">+320</p>
                      <p className="text-sm text-gray-600">CoolBet Worlds Odds</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">2025 Wins</p>
                      <p className="text-2xl font-bold text-blue-600">3</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">Top 10s</p>
                      <p className="text-2xl font-bold text-green-600">15</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">Avg Round Rating</p>
                      <p className="text-2xl font-bold text-purple-600">1040</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">2025 Earnings</p>
                      <p className="text-2xl font-bold text-orange-600">$102K</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The defending World Champion is playing at an elite level. Wysocki's power game and mental toughness
                    make him a strong favorite for major events, offering solid betting value on CoolBet.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href="/players/ricky-wysocki">Full Analysis</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet on CoolBet
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Calvin Heimburg */}
              <Card className="border-l-4 border-l-green-500 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Target className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Calvin Heimburg</CardTitle>
                        <CardDescription className="text-base">2022 World Champion • Innova</CardDescription>
                        <div className="flex gap-2 mt-2">
                          <Badge className="bg-green-100 text-green-800">Consistency King</Badge>
                          <Badge variant="outline">1028 Rating</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">+450</p>
                      <p className="text-sm text-gray-600">CoolBet Worlds Odds</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">2025 Wins</p>
                      <p className="text-2xl font-bold text-blue-600">2</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">Top 10s</p>
                      <p className="text-2xl font-bold text-green-600">17</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">Avg Round Rating</p>
                      <p className="text-2xl font-bold text-purple-600">1036</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm">2025 Earnings</p>
                      <p className="text-2xl font-bold text-orange-600">$88K</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Known for his incredible consistency and course management. Heimburg rarely has bad rounds, making
                    him excellent value for top-5 and top-10 bets on CoolBet, especially on technical courses.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href="/players/calvin-heimburg">Full Analysis</Link>
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

            {/* Rising Stars */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Rising Stars & Value Picks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Gannon Buhr</CardTitle>
                      <CardDescription>Age 20 • Discraft</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Current Rating</span>
                      <span className="font-semibold">1018</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <div className="flex justify-between">
                      <span className="text-sm">2025 Earnings</span>
                      <span className="font-semibold">$55K</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      The youngest player to consistently compete with the elite. Great betting value at major events.
                    </p>
                    <Button asChild size="sm" className="w-full">
                      <Link href="/players/gannon-buhr">View Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Eagle McMahon</CardTitle>
                      <CardDescription>Age 27 • Discmania</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Current Rating</span>
                      <span className="font-semibold">1025</span>
                    </div>
                    <Progress value={78} className="h-2" />
                    <div className="flex justify-between">
                      <span className="text-sm">2025 Earnings</span>
                      <span className="font-semibold">$62K</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Explosive distance and improving consistency. Strong value pick for open, distance-friendly
                      courses.
                    </p>
                    <Button asChild size="sm" className="w-full">
                      <Link href="/players/eagle-mcmahon">View Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Kristin Tattar</CardTitle>
                      <CardDescription>FPO #1 • Kastaplast</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Current Rating</span>
                      <span className="font-semibold">965</span>
                    </div>
                    <Progress value={95} className="h-2" />
                    <div className="flex justify-between">
                      <span className="text-sm">2025 Earnings</span>
                      <span className="font-semibold">$48K</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Dominant FPO player with incredible consistency. Safe betting choice for women's divisions.
                    </p>
                    <Button asChild size="sm" className="w-full">
                      <Link href="/players/kristin-tattar">View Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Player Comparison Tool */}
            <div className="bg-gradient-to-r from-blue-900 to-purple-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Player Betting Analysis</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-3">🎯 Key Betting Metrics</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Current form and recent results</li>
                    <li>• Course-specific performance history</li>
                    <li>• Head-to-head records vs field</li>
                    <li>• Weather and condition preferences</li>
                    <li>• Major championship experience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">💰 CoolBet Value Tips</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Look for players with course history</li>
                    <li>• Consider weather impact on playing styles</li>
                    <li>• Young players often offer great odds</li>
                    <li>• Check for injury reports and form</li>
                    <li>• Use head-to-head markets for value</li>
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
