import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, DollarSign, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "How to Bet on Disc Golf: Complete Beginner's Guide 2025 | Step-by-Step Tutorial",
  description:
    "Learn exactly how to bet on disc golf with our comprehensive step-by-step guide. Discover the best sportsbooks, understand odds, and master winning strategies for disc golf betting success.",
  keywords:
    "how to bet on disc golf, disc golf betting guide, disc golf betting tutorial, disc golf odds explained, disc golf betting strategy, disc golf betting tips, professional disc golf betting, disc golf sportsbooks, PDGA betting guide",
  openGraph: {
    title: "How to Bet on Disc Golf: Complete Step-by-Step Guide 2025",
    description:
      "Master disc golf betting with our expert tutorial. Learn odds, strategies, and find the best sportsbooks.",
    type: "article",
    url: "https://your-domain.com/guides/how-to-bet",
  },
  alternates: {
    canonical: "https://your-domain.com/guides/how-to-bet",
  },
}

export default function HowToBet() {
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Bet on Disc Golf",
            description: "Complete step-by-step guide to betting on disc golf tournaments",
            image: "https://your-domain.com/disc-golf-betting-guide.jpg",
            totalTime: "PT15M",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "USD",
              value: "10",
            },
            supply: [
              {
                "@type": "HowToSupply",
                name: "Sportsbook Account",
              },
              {
                "@type": "HowToSupply",
                name: "Initial Deposit",
              },
            ],
            tool: [
              {
                "@type": "HowToTool",
                name: "CoolBet Sportsbook",
              },
            ],
            step: [
              {
                "@type": "HowToStep",
                name: "Choose a Sportsbook",
                text: "Select a reputable sportsbook that offers disc golf betting markets",
                url: "https://your-domain.com/guides/how-to-bet#choose-sportsbook",
              },
              {
                "@type": "HowToStep",
                name: "Understand Disc Golf Odds",
                text: "Learn how to read and interpret disc golf betting odds",
                url: "https://your-domain.com/guides/how-to-bet#understand-odds",
              },
              {
                "@type": "HowToStep",
                name: "Place Your First Bet",
                text: "Follow our step-by-step process to place your first disc golf bet",
                url: "https://your-domain.com/guides/how-to-bet#place-bet",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              How to Bet on Disc Golf: Complete Step-by-Step Guide
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Master disc golf betting with our comprehensive tutorial. From understanding odds to placing winning bets
              - everything you need to know in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
                <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                  Start Betting Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="#quick-start">Quick Start Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick Start: Bet on Disc Golf in 5 Minutes
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center border-2 border-blue-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <CardTitle>Choose CoolBet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Sign up with our recommended sportsbook for the best disc golf betting experience.
                  </p>
                  <Button asChild className="bg-blue-500 hover:bg-blue-600">
                    <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                      Join CoolBet
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-green-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <CardTitle>Make Deposit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Fund your account with as little as $10 to start betting on disc golf tournaments.
                  </p>
                  <div className="text-sm text-gray-500">Minimum: $10 | Bonus: 100% Match</div>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-purple-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <CardTitle>Place Your Bet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Navigate to disc golf markets and place your first bet on upcoming tournaments.
                  </p>
                  <div className="text-sm text-gray-500">Start with $5-10 bets</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Alert className="mb-8 border-orange-200 bg-orange-50">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-800">
                <strong>Important:</strong> Always gamble responsibly and only bet what you can afford to lose. Disc
                golf betting should be fun and entertaining.
              </AlertDescription>
            </Alert>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Guide to Disc Golf Betting</h2>

              <div className="mb-8">
                <Image
                  src="/disc-golf-betting-leaderboard.png"
                  alt="How to bet on disc golf - step by step tutorial with odds and betting interface"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg mb-6"
                />
              </div>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Disc golf betting</strong> is exploding in popularity as the sport grows worldwide. With major
                tournaments offering substantial prize pools and professional coverage, betting on disc golf has never
                been more accessible or exciting. This complete guide will teach you everything you need to know to
                start betting successfully on disc golf in 2025.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="font-bold text-blue-900 mb-2">🎯 Why Bet on Disc Golf?</h3>
                <ul className="text-blue-800 space-y-1">
                  <li>
                    • <strong>Undervalued market:</strong> Less competition means better odds
                  </li>
                  <li>
                    • <strong>Predictable factors:</strong> Weather and course knowledge matter
                  </li>
                  <li>
                    • <strong>Year-round action:</strong> Tournaments from February to October
                  </li>
                  <li>
                    • <strong>Growing coverage:</strong> More live streams and data available
                  </li>
                  <li>
                    • <strong>Diverse betting options:</strong> From tournament winners to prop bets
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Choose a Reputable Sportsbook</h3>
              <p className="text-gray-700 mb-6">
                The first step is selecting a trustworthy sportsbook that offers disc golf betting markets. Look for
                licensed operators with good customer reviews and competitive odds.
              </p>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-green-900 mb-3">Recommended Sportsbook Features:</h4>
                <ul className="space-y-2 text-green-800">
                  <li>✓ Licensed and regulated operation</li>
                  <li>✓ Competitive disc golf odds</li>
                  <li>✓ Live betting options</li>
                  <li>✓ Mobile-friendly platform</li>
                  <li>✓ Fast payouts and good customer service</li>
                  <li>✓ Welcome bonuses for new customers</li>
                </ul>
                <div className="mt-4">
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                      Join Our Recommended Sportsbook
                    </Link>
                  </Button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Understanding Disc Golf Odds</h3>
              <p className="text-gray-700 mb-6">
                Disc golf odds work similarly to other sports betting. They represent the probability of an outcome and
                determine your potential payout.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">American Odds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-2">Example: +150 or -200</p>
                    <p className="text-sm text-gray-600">
                      Positive numbers show profit on $100 bet. Negative numbers show amount needed to win $100.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Decimal Odds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-2">Example: 2.50 or 1.50</p>
                    <p className="text-sm text-gray-600">
                      Multiply your stake by the decimal to calculate total return including stake.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Fractional Odds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-2">Example: 3/2 or 1/2</p>
                    <p className="text-sm text-gray-600">
                      Shows profit relative to stake. 3/2 means $3 profit for every $2 wagered.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Types of Disc Golf Bets</h3>
              <p className="text-gray-700 mb-6">
                Disc golf offers various betting markets, from simple tournament winners to complex prop bets.
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Tournament Winner (Outright)</h4>
                  <p className="text-gray-700">
                    Bet on which player will win the entire tournament. Offers the highest payouts but requires
                    predicting the overall champion.
                  </p>
                  <p className="text-sm text-blue-600 mt-1">
                    Example: Paul McBeth to win PDGA World Championships (+300)
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Head-to-Head Matchups</h4>
                  <p className="text-gray-700">
                    Bet on which player will finish higher between two specific competitors. Easier to predict than
                    outright winners.
                  </p>
                  <p className="text-sm text-green-600 mt-1">Example: Ricky Wysocki vs. Calvin Heimburg (-110 each)</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Top 5/Top 10 Finishes</h4>
                  <p className="text-gray-700">
                    Bet on a player to finish within the top 5 or top 10. Lower risk than outright winner bets.
                  </p>
                  <p className="text-sm text-purple-600 mt-1">Example: Paige Pierce Top 5 Finish (-150)</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Round Betting</h4>
                  <p className="text-gray-700">
                    Bet on individual round outcomes, such as lowest round score or round winner.
                  </p>
                  <p className="text-sm text-orange-600 mt-1">Example: Lowest Round 1 Score Under 58.5 (+120)</p>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Prop Bets</h4>
                  <p className="text-gray-700">
                    Special bets on specific events like aces (holes-in-one), course records, or playoff outcomes.
                  </p>
                  <p className="text-sm text-red-600 mt-1">Example: Will there be an ace in Round 1? Yes (+250)</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Placing Your First Bet</h3>
              <p className="text-gray-700 mb-6">
                Once you've chosen a sportsbook and understand the odds, follow these steps to place your first disc
                golf bet:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <ol className="space-y-3 text-gray-700">
                  <li>
                    <strong>1. Create an account</strong> with your chosen sportsbook and verify your identity
                  </li>
                  <li>
                    <strong>2. Make a deposit</strong> using your preferred payment method
                  </li>
                  <li>
                    <strong>3. Navigate to disc golf</strong> in the sports betting section
                  </li>
                  <li>
                    <strong>4. Select a tournament</strong> and browse available betting markets
                  </li>
                  <li>
                    <strong>5. Choose your bet</strong> and click on the odds to add to your bet slip
                  </li>
                  <li>
                    <strong>6. Enter your stake</strong> amount and review the potential payout
                  </li>
                  <li>
                    <strong>7. Confirm your bet</strong> and wait for the tournament results
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential Betting Strategies</h3>
              <p className="text-gray-700 mb-6">
                Successful disc golf betting requires more than luck. Here are proven strategies to improve your
                chances:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                      Research is Key
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Study player recent form and statistics</li>
                      <li>• Analyze course layouts and conditions</li>
                      <li>• Check weather forecasts (wind affects disc flight)</li>
                      <li>• Review head-to-head records</li>
                      <li>• Follow professional disc golf news</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                      Bankroll Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Set a betting budget and stick to it</li>
                      <li>• Never bet more than 5% on a single wager</li>
                      <li>• Keep detailed records of your bets</li>
                      <li>• Don't chase losses with bigger bets</li>
                      <li>• Take breaks if you're on a losing streak</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Factors That Affect Disc Golf Performance</h3>
              <p className="text-gray-700 mb-4">
                Understanding what influences player performance is crucial for making informed bets:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Weather Conditions</h4>
                  <p className="text-blue-800 text-sm">
                    Wind is the biggest factor in disc golf. Strong winds can completely change disc flight patterns and
                    favor certain playing styles.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Course Design</h4>
                  <p className="text-green-800 text-sm">
                    Some players excel on wooded, technical courses while others prefer open, distance-focused layouts.
                    Research course history and player performance.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Recent Form</h4>
                  <p className="text-purple-800 text-sm">
                    Look at players' recent tournament results, round ratings, and any injuries or personal issues that
                    might affect performance.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-900 mb-2">Course Familiarity</h4>
                  <p className="text-orange-800 text-sm">
                    Players who have competed at a venue before often have an advantage. Check historical results at the
                    same course.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Betting Mistakes to Avoid</h3>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
                <ul className="space-y-2 text-red-800">
                  <li>
                    • <strong>Betting with your heart:</strong> Don't bet on your favorite player without objective
                    analysis
                  </li>
                  <li>
                    • <strong>Ignoring weather:</strong> Wind and rain dramatically affect disc golf outcomes
                  </li>
                  <li>
                    • <strong>Chasing losses:</strong> Don't increase bet sizes to recover previous losses
                  </li>
                  <li>
                    • <strong>Betting too many markets:</strong> Focus on markets you understand best
                  </li>
                  <li>
                    • <strong>Not shopping for odds:</strong> Different sportsbooks offer different odds - find the best
                    value
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Betting on Disc Golf</h3>
              <p className="text-gray-700 mb-6">
                Many sportsbooks now offer live betting during disc golf tournaments, allowing you to bet as the action
                unfolds. This can be particularly valuable when weather conditions change or players start hot or cold.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-bold text-blue-900 mb-2">Live Betting Tips</h4>
                <ul className="space-y-1 text-blue-800">
                  <li>• Watch live streams to gauge player form and conditions</li>
                  <li>• Look for value when odds shift dramatically after bad holes</li>
                  <li>• Consider weather changes that might favor certain players</li>
                  <li>• Be quick - live odds change rapidly during tournaments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-900 to-blue-800 text-white p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Place Your First Disc Golf Bet?</h3>
        <p className="text-green-100 mb-6">
          Start with our recommended sportsbook and use the strategies you've learned to make informed bets.
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
  )
}
