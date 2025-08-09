import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, BarChart3, Clock, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "How Disc Golf Betting Works: Complete Strategy Guide 2024",
  description:
    "Understand how disc golf betting works with our comprehensive guide. Learn betting strategies, market analysis, and tips for consistent profits.",
  keywords:
    "how disc golf betting works, disc golf betting strategy, disc golf betting markets, disc golf betting tips, professional disc golf betting guide",
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">How Disc Golf Betting Works</h1>
            <p className="text-xl text-orange-100 mb-8">
              Master the mechanics of disc golf betting and develop winning strategies for consistent profits.
            </p>
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
              <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                Apply These Strategies <ArrowRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Mechanics of Disc Golf Betting</h2>

              <div className="mb-8">
                <Image
                  src="/disc-golf-betting-chart.png"
                  alt="Disc golf betting strategy and odds analysis"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg mb-6"
                />
              </div>

              <p className="text-lg text-gray-700 mb-6">
                Disc golf betting operates on the same fundamental principles as other sports betting, but with unique
                factors that create profitable opportunities for informed bettors. Understanding these mechanics is
                crucial for long-term success.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Betting Markets</h3>
              <p className="text-gray-700 mb-6">
                Disc golf betting markets are created by sportsbooks based on player performance data, course
                conditions, weather forecasts, and betting action. Here's how different markets work:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="h-6 w-6 text-gold-600 mr-2" />
                      Tournament Winner Markets
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm mb-3">
                      Outright winner bets offer the highest payouts but require predicting the tournament champion from
                      a field of 100+ players.
                    </p>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <strong>Example:</strong> Paul McBeth +300 means a $100 bet wins $300 if he wins the tournament.
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-6 w-6 text-blue-600 mr-2" />
                      Head-to-Head Markets
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm mb-3">
                      Matchup bets between two players offer better odds than outright winners and are easier to
                      analyze.
                    </p>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <strong>Example:</strong> Ricky Wysocki -110 vs Calvin Heimburg -110 (even money both ways).
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Factors That Drive Odds</h3>
              <p className="text-gray-700 mb-6">
                Successful disc golf betting requires understanding what factors sportsbooks consider when setting odds
                and how to identify when they've made mistakes.
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Player Form and Statistics</h4>
                  <p className="text-gray-700 mb-2">
                    Recent tournament results, round ratings, and statistical trends heavily influence odds.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Last 5 tournament finishes</li>
                    <li>• Average round rating over past 12 months</li>
                    <li>• Putting statistics and scramble rates</li>
                    <li>• Performance in similar conditions</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Course-Specific Performance</h4>
                  <p className="text-gray-700 mb-2">
                    Some players excel on certain course types, creating value opportunities.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Historical performance at the venue</li>
                    <li>• Success on similar course layouts</li>
                    <li>• Adaptation to course-specific challenges</li>
                    <li>• Local knowledge advantages</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Weather and Environmental Factors</h4>
                  <p className="text-gray-700 mb-2">
                    Weather conditions can dramatically shift player advantages and create betting value.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Wind speed and direction impact</li>
                    <li>• Rain effects on disc flight and grip</li>
                    <li>• Temperature influence on disc stability</li>
                    <li>• Altitude effects at mountain courses</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Betting Strategies</h3>
              <p className="text-gray-700 mb-6">
                Moving beyond basic bets requires understanding advanced strategies that professional bettors use to
                gain an edge.
              </p>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-blue-900 mb-3">Value Betting Strategy</h4>
                <p className="text-blue-800 mb-3">
                  Value betting involves finding odds that don't accurately reflect the true probability of an outcome.
                  This requires:
                </p>
                <ul className="space-y-2 text-blue-800">
                  <li>• Calculating your own probability estimates</li>
                  <li>• Compare your estimates to bookmaker odds</li>
                  <li>• Betting when you find positive expected value</li>
                  <li>• Maintaining detailed records to track accuracy</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-6 w-6 text-green-600 mr-2" />
                      Statistical Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Track player performance metrics</li>
                      <li>• Analyze course-specific statistics</li>
                      <li>• Monitor weather impact patterns</li>
                      <li>• Calculate expected scores</li>
                      <li>• Identify statistical outliers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-6 w-6 text-purple-600 mr-2" />
                      Timing Your Bets
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Early odds often offer better value</li>
                      <li>• Monitor line movements</li>
                      <li>• Consider live betting opportunities</li>
                      <li>• Watch for injury/withdrawal news</li>
                      <li>• Track weather forecast changes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bankroll Management Systems</h3>
              <p className="text-gray-700 mb-6">
                Proper bankroll management is more important than picking winners. Here are proven systems used by
                professional bettors:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-3">The Kelly Criterion</h4>
                  <p className="text-green-800 mb-2">
                    A mathematical formula that determines optimal bet sizing based on your edge and bankroll:
                  </p>
                  <div className="bg-white p-3 rounded border text-center font-mono text-sm">
                    Bet Size = (bp - q) / b
                  </div>
                  <p className="text-green-700 text-sm mt-2">
                    Where b = odds, p = probability of winning, q = probability of losing
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-orange-900 mb-3">Fixed Percentage System</h4>
                  <p className="text-orange-800 mb-2">
                    Simpler approach: bet a fixed percentage (1-5%) of your bankroll on each wager.
                  </p>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Conservative: 1-2% per bet</li>
                    <li>• Moderate: 2-3% per bet</li>
                    <li>• Aggressive: 3-5% per bet</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reading Tournament Dynamics</h3>
              <p className="text-gray-700 mb-6">
                Disc golf tournaments have unique dynamics that create betting opportunities throughout the event.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Round 1-2</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Early rounds separate contenders from the field. Look for players who start hot or struggle with
                      course conditions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Moving Day</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Round 3 often determines the final leaderboard. Players make their move or fall out of contention.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Final Round</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Pressure situations favor experienced players. Consider head-to-head records and clutch
                      performance history.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Betting Strategies</h3>
              <p className="text-gray-700 mb-6">
                Live betting during disc golf tournaments offers unique opportunities as conditions and player
                performance become clearer.
              </p>

              <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-purple-900 mb-3">Live Betting Opportunities</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-2">Early Round Value</h5>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Players struggling with conditions</li>
                      <li>• Unexpected hot starts</li>
                      <li>• Weather changes mid-round</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-2">Final Round Drama</h5>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Leaderboard shake-ups</li>
                      <li>• Pressure situations</li>
                      <li>• Playoff possibilities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Betting Mistakes</h3>
              <p className="text-gray-700 mb-6">
                Avoiding these common mistakes can significantly improve your disc golf betting results:
              </p>

              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">❌ Betting on Favorites Only</h4>
                    <p className="text-red-800 text-sm">
                      Top players don't always offer value. Look for overlooked contenders with good course fits.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">❌ Ignoring Weather Forecasts</h4>
                    <p className="text-red-800 text-sm">
                      Weather dramatically affects disc golf. Always check conditions before betting.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">❌ Chasing Losses</h4>
                    <p className="text-red-800 text-sm">
                      Increasing bet sizes after losses leads to bigger losses. Stick to your bankroll plan.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">❌ Not Shopping for Odds</h4>
                    <p className="text-red-800 text-sm">
                      Different sportsbooks offer different odds. Always find the best value for your bets.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Your Betting System</h3>
              <p className="text-gray-700 mb-6">
                Successful disc golf betting requires a systematic approach. Here's how to build your own winning
                system:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Develop Your Analysis Process</h4>
                    <p className="text-gray-700 text-sm">
                      Create a checklist of factors to evaluate before each bet: player form, course fit, weather, etc.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Track Your Results</h4>
                    <p className="text-gray-700 text-sm">
                      Keep detailed records of all bets including reasoning, odds, and outcomes to identify patterns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Refine Your Strategy</h4>
                    <p className="text-gray-700 text-sm">
                      Regularly review your results and adjust your approach based on what's working and what isn't.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Stay Disciplined</h4>
                    <p className="text-gray-700 text-sm">
                      Stick to your system even during losing streaks. Consistency is key to long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-900 to-red-800 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Put These Strategies to Work?</h3>
              <p className="text-orange-100 mb-6">
                Start applying these proven disc golf betting strategies with our recommended sportsbook.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
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
                  <Link href="/guides/where-to-bet">Find Best Sportsbooks</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
