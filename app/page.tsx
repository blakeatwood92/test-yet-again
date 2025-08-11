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
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Tournaments
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Players
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
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
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Start Betting Now
          </Button>
          <Button size="lg" variant="outline">
            View Live Odds
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
                  <a href="#" className="hover:text-white">
                    Live Odds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tournaments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Player Props
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Responsible Gaming
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
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
