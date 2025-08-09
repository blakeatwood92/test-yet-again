import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Star, Shield, Smartphone, CreditCard, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Best Disc Golf Betting Sites 2024 | Top Sportsbooks Reviewed",
  description:
    "Find the best disc golf betting sites with our comprehensive reviews. Compare odds, bonuses, and features at top-rated sportsbooks for disc golf betting.",
  keywords:
    "best disc golf betting sites, disc golf sportsbooks, where to bet on disc golf, disc golf betting odds, online disc golf betting",
}

export default function WhereToBet() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Best Disc Golf Betting Sites 2024</h1>
            <p className="text-xl text-purple-100 mb-8">
              Compare top-rated sportsbooks offering disc golf betting markets, exclusive bonuses, and competitive odds.
            </p>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
              <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                Join Our #1 Recommended Site <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Disc Golf Betting Sites</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We've tested and reviewed the best sportsbooks for disc golf betting based on odds, markets, bonuses,
                and user experience.
              </p>
            </div>

            {/* Featured Sportsbook */}
            <div className="mb-12">
              <Card className="border-2 border-green-500 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge className="bg-green-500 text-white mb-2">EDITOR'S CHOICE</Badge>
                      <CardTitle className="text-2xl text-gray-900">CoolBet</CardTitle>
                      <CardDescription className="text-lg">
                        Premium disc golf betting experience with competitive odds
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 font-bold text-gray-900">5.0/5</span>
                      </div>
                      <p className="text-sm text-gray-600">Based on our review</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Why We Recommend CoolBet:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 text-green-500 mr-2" />
                          Licensed and regulated operation
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-green-500 mr-2" />
                          Comprehensive disc golf markets
                        </li>
                        <li className="flex items-center">
                          <Smartphone className="h-4 w-4 text-green-500 mr-2" />
                          Excellent mobile betting app
                        </li>
                        <li className="flex items-center">
                          <CreditCard className="h-4 w-4 text-green-500 mr-2" />
                          Fast deposits and withdrawals
                        </li>
                        <li className="flex items-center">
                          <Headphones className="h-4 w-4 text-green-500 mr-2" />
                          24/7 customer support
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="bg-green-50 p-4 rounded-lg mb-4">
                        <h4 className="font-bold text-green-900 mb-2">Welcome Bonus</h4>
                        <p className="text-green-800 text-lg font-bold">100% Match up to $200</p>
                        <p className="text-green-700 text-sm">Plus free bets on disc golf tournaments</p>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>
                          <strong>Min Deposit:</strong> $10
                        </p>
                        <p>
                          <strong>Payout Time:</strong> 24-48 hours
                        </p>
                        <p>
                          <strong>Live Betting:</strong> Yes
                        </p>
                        <p>
                          <strong>Mobile App:</strong> iOS & Android
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                      <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Claim Bonus & Start Betting <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Comparison Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What Makes a Great Disc Golf Betting Site?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Security & Licensing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Licensed by reputable gaming authorities with SSL encryption and responsible gambling tools.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <CardTitle>Competitive Odds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Best-in-class odds on disc golf tournaments with regular promotions and enhanced odds offers.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle>Mobile Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      User-friendly mobile apps and responsive websites for betting on the go during tournaments.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Betting Markets Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Disc Golf Betting Markets</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Tournament Markets</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Tournament Winner (Outright)</li>
                      <li>• Top 5/Top 10 Finishes</li>
                      <li>• Head-to-Head Matchups</li>
                      <li>• Group Betting</li>
                      <li>• Nationality of Winner</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Special Markets</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Round Winner</li>
                      <li>• Lowest Round Score</li>
                      <li>• Hole-in-One (Ace) Props</li>
                      <li>• Playoff Betting</li>
                      <li>• Course Record Props</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Choose Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Choose the Right Sportsbook</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">1. Check Licensing and Regulation</h4>
                  <p className="text-gray-700">
                    Ensure the sportsbook is licensed by a reputable gaming authority and operates legally in your
                    jurisdiction.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">2. Compare Odds and Markets</h4>
                  <p className="text-gray-700">
                    Look for competitive odds on disc golf events and a wide variety of betting markets beyond just
                    tournament winners.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">3. Evaluate Payment Options</h4>
                  <p className="text-gray-700">
                    Choose sportsbooks with fast, secure payment methods and reasonable withdrawal times that suit your
                    preferences.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">4. Test Customer Support</h4>
                  <p className="text-gray-700">
                    Quality customer service is essential. Look for 24/7 support via multiple channels including live
                    chat and phone.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">5. Read Terms and Conditions</h4>
                  <p className="text-gray-700">
                    Always review bonus terms, wagering requirements, and withdrawal policies before signing up.
                  </p>
                </div>
              </div>
            </div>

            {/* Bonus Comparison */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Welcome Bonus Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left">Sportsbook</th>
                      <th className="border border-gray-300 p-3 text-left">Welcome Bonus</th>
                      <th className="border border-gray-300 p-3 text-left">Min Deposit</th>
                      <th className="border border-gray-300 p-3 text-left">Wagering Req.</th>
                      <th className="border border-gray-300 p-3 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">CoolBet</td>
                      <td className="border border-gray-300 p-3">100% up to $200</td>
                      <td className="border border-gray-300 p-3">$10</td>
                      <td className="border border-gray-300 p-3">1x</td>
                      <td className="border border-gray-300 p-3">
                        <Button asChild size="sm" className="bg-green-500 hover:bg-green-600">
                          <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                            Claim Bonus
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="mb-12">
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-900 mb-4">🛡️ Betting Safety Tips</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">Before You Sign Up:</h4>
                    <ul className="space-y-1 text-yellow-800 text-sm">
                      <li>• Verify the sportsbook's license</li>
                      <li>• Read user reviews and ratings</li>
                      <li>• Check payment method security</li>
                      <li>• Review responsible gambling tools</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">While Betting:</h4>
                    <ul className="space-y-1 text-yellow-800 text-sm">
                      <li>• Set deposit and loss limits</li>
                      <li>• Never bet more than you can afford</li>
                      <li>• Take regular breaks from betting</li>
                      <li>• Keep records of your bets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Is disc golf betting legal?</h4>
                  <p className="text-gray-700 text-sm">
                    Disc golf betting is legal in jurisdictions where sports betting is permitted. Always check your
                    local laws and only use licensed sportsbooks.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">What tournaments can I bet on?</h4>
                  <p className="text-gray-700 text-sm">
                    Major PDGA events, Disc Golf Pro Tour tournaments, and World Championships typically offer the most
                    betting markets.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Can I bet on disc golf live?</h4>
                  <p className="text-gray-700 text-sm">
                    Yes, many sportsbooks offer live betting on disc golf tournaments, allowing you to bet as the action
                    unfolds.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">What's the minimum bet amount?</h4>
                  <p className="text-gray-700 text-sm">
                    Most sportsbooks have minimum bets of $1-$5, making disc golf betting accessible to all bankroll
                    sizes.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-900 to-blue-800 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Betting on Disc Golf?</h3>
              <p className="text-purple-100 mb-6">
                Join our top-rated sportsbook and get exclusive bonuses for disc golf betting.
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
