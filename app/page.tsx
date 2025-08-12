import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">DG</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">DiscBet</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/tournaments" className="text-gray-600 hover:text-gray-900">
              Tournaments
            </a>
            <a href="/players" className="text-gray-600 hover:text-gray-900">
              Players
            </a>
            <a href="/leaderboard" className="text-gray-600 hover:text-gray-900">
              Leaderboard
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="secondary" className="mb-4">
          🥏 Professional Disc Golf Betting
        </Badge>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Bet on the Best
          <span className="text-green-600"> Disc Golf</span> Action
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of disc golf fans betting on professional tournaments, player performances, and championship
          outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <a href="/betting">Start Betting Now</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/odds">View Live Odds</a>
          </Button>
        </div>
      </section>

      {/* What is Disc Golf Pro Tour Section */}
      <section className="container mx-auto px-4 py-16 bg-white/50 rounded-lg mx-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">What is the Disc Golf Pro Tour?</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                The Disc Golf Pro Tour (DGPT) is the premier professional disc golf circuit, featuring the world's best
                players competing in elite tournaments across the globe.
              </p>
              <p className="text-gray-600 mb-4">
                From Major Championships to DGPT Elite Series events, these tournaments showcase incredible skill,
                strategy, and athleticism as players navigate challenging courses with precision throws.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Major Championships (World Championships, US Championships)</li>
                <li>• DGPT Elite Series (Premium tournament tier)</li>
                <li>• International events across multiple continents</li>
                <li>• Top professional players competing for substantial prize pools</li>
              </ul>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">2025 Season Highlights</h4>
              <div className="space-y-2 text-sm text-green-700">
                <div>🏆 PDGA Pro World Championships - Finland</div>
                <div>🇺🇸 US Disc Golf Championship - South Carolina</div>
                <div>🇪🇺 European Disc Golf Festival - Estonia</div>
                <div>🎯 DGPT Championship Final - Virginia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Disc Golf Betting Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">How Disc Golf Betting Works</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tournament Winner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bet on which player will win the entire tournament. Odds reflect each player's chances based on recent
                  performance and course fit.
                </p>
                <div className="mt-3 p-2 bg-gray-50 rounded text-sm">
                  <strong>Example:</strong> Paul McBeth +150 (bet $100 to win $150)
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Round Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bet on specific round outcomes like lowest round score, hole-in-one props, or head-to-head matchups
                  between players.
                </p>
                <div className="mt-3 p-2 bg-gray-50 rounded text-sm">
                  <strong>Example:</strong> Calvin Heimburg to shoot under par in Round 1
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Live Betting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Place bets during tournaments as action unfolds. Odds update in real-time based on current leaderboard
                  positions.
                </p>
                <div className="mt-3 p-2 bg-gray-50 rounded text-sm">
                  <strong>Example:</strong> Live odds change after each hole completion
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Understanding Odds</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
              <div>
                <strong>Positive odds (+150):</strong> Amount you win on a $100 bet
              </div>
              <div>
                <strong>Negative odds (-200):</strong> Amount you bet to win $100
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Upcoming 2025 Tournaments</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Discraft Supreme Flight Open
                <Badge>Feb 28 - Mar 2</Badge>
              </CardTitle>
              <CardDescription>Brooksville, FL, USA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Paul McBeth</span>
                  <span className="font-semibold">+180</span>
                </div>
                <div className="flex justify-between">
                  <span>Calvin Heimburg</span>
                  <span className="font-semibold">+220</span>
                </div>
                <div className="flex justify-between">
                  <span>Ricky Wysocki</span>
                  <span className="font-semibold">+250</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                <a href="/tournament/discraft-supreme-flight-open">Bet Now</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                The Open at Austin (DGPT+)
                <Badge variant="secondary">Mar 20 - 23</Badge>
              </CardTitle>
              <CardDescription>Austin, TX, USA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Kristin Tattar</span>
                  <span className="font-semibold">+140</span>
                </div>
                <div className="flex justify-between">
                  <span>Paige Pierce</span>
                  <span className="font-semibold">+190</span>
                </div>
                <div className="flex justify-between">
                  <span>Catrina Allen</span>
                  <span className="font-semibold">+240</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                <a href="/tournament/open-at-austin">View Odds</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                PDGA Champions Cup (Major)
                <Badge variant="destructive">Major</Badge>
              </CardTitle>
              <CardDescription>Stockton, CA, USA • May 1-4</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Eagle McMahon</span>
                  <span className="font-semibold">+160</span>
                </div>
                <div className="flex justify-between">
                  <span>Simon Lizotte</span>
                  <span className="font-semibold">+200</span>
                </div>
                <div className="flex justify-between">
                  <span>Anthony Barela</span>
                  <span className="font-semibold">+280</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                <a href="/tournament/pdga-champions-cup">Early Odds</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                PDGA Pro World Championships
                <Badge variant="destructive">Major</Badge>
              </CardTitle>
              <CardDescription>Tampere & Nokia, Finland • Jul 30 - Aug 3</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Paul McBeth</span>
                  <span className="font-semibold">+120</span>
                </div>
                <div className="flex justify-between">
                  <span>Calvin Heimburg</span>
                  <span className="font-semibold">+180</span>
                </div>
                <div className="flex justify-between">
                  <span>Ricky Wysocki</span>
                  <span className="font-semibold">+220</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                <a href="/tournament/pdga-pro-worlds">Championship Odds</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                U.S. Disc Golf Championship
                <Badge variant="destructive">Major</Badge>
              </CardTitle>
              <CardDescription>Rock Hill, SC, USA • Oct 9-12</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Kristin Tattar</span>
                  <span className="font-semibold">+130</span>
                </div>
                <div className="flex justify-between">
                  <span>Paige Pierce</span>
                  <span className="font-semibold">+170</span>
                </div>
                <div className="flex justify-between">
                  <span>Catrina Allen</span>
                  <span className="font-semibold">+210</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                <a href="/tournament/us-disc-golf-championship">Place Bets</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                DGPT Championship (Final)
                <Badge>Oct 16 - 19</Badge>
              </CardTitle>
              <CardDescription>Lynchburg, VA, USA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Season Leader</span>
                  <span className="font-semibold">TBD</span>
                </div>
                <div className="flex justify-between">
                  <span>Top 8 Qualify</span>
                  <span className="font-semibold">TBD</span>
                </div>
                <div className="flex justify-between">
                  <span>Championship Final</span>
                  <span className="font-semibold">TBD</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                <a href="/tournament/dgpt-championship">Season Finale</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" asChild>
            <a href="/tournaments">View All Tournaments</a>
          </Button>
        </div>
      </section>

      {/* Featured Tournaments */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Featured Tournaments</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                PDGA World Championships
                <Badge variant="destructive">Live</Badge>
              </CardTitle>
              <CardDescription>Leicester, Massachusetts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Paul McBeth</span>
                  <span className="font-semibold">+150</span>
                </div>
                <div className="flex justify-between">
                  <span>Calvin Heimburg</span>
                  <span className="font-semibold">+200</span>
                </div>
                <div className="flex justify-between">
                  <span>Ricky Wysocki</span>
                  <span className="font-semibold">+250</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                View All Odds
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                US Disc Golf Championship
                <Badge>Upcoming</Badge>
              </CardTitle>
              <CardDescription>Rock Hill, South Carolina</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Kristin Tattar</span>
                  <span className="font-semibold">+120</span>
                </div>
                <div className="flex justify-between">
                  <span>Paige Pierce</span>
                  <span className="font-semibold">+180</span>
                </div>
                <div className="flex justify-between">
                  <span>Catrina Allen</span>
                  <span className="font-semibold">+220</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                Place Bets
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                European Open
                <Badge variant="secondary">Next Week</Badge>
              </CardTitle>
              <CardDescription>Nokia, Finland</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Eagle McMahon</span>
                  <span className="font-semibold">+175</span>
                </div>
                <div className="flex justify-between">
                  <span>Simon Lizotte</span>
                  <span className="font-semibold">+190</span>
                </div>
                <div className="flex justify-between">
                  <span>Niklas Anttila</span>
                  <span className="font-semibold">+300</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                Early Odds
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DG</span>
                </div>
                <span className="text-xl font-bold">DiscBet</span>
              </div>
              <p className="text-gray-400">The premier destination for disc golf betting and tournament coverage.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Betting</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/odds" className="hover:text-white">
                    Live Odds
                  </a>
                </li>
                <li>
                  <a href="/tournaments" className="hover:text-white">
                    Tournaments
                  </a>
                </li>
                <li>
                  <a href="/player-props" className="hover:text-white">
                    Player Props
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/help-center" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/responsible-gaming" className="hover:text-white">
                    Responsible Gaming
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/terms-of-service" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/age-verification" className="hover:text-white">
                    Age Verification
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DiscBet. All rights reserved. Bet responsibly.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
