import Link from "next/link"
import { Target, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">
                DiscGolf<span className="text-blue-400">Bet</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your ultimate guide to disc golf betting. Expert analysis, proven strategies, and the best betting
              opportunities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Betting Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guides/what-is-disc-golf" className="text-gray-400 hover:text-white transition-colors">
                  What is Disc Golf?
                </Link>
              </li>
              <li>
                <Link href="/guides/how-to-bet" className="text-gray-400 hover:text-white transition-colors">
                  How to Bet on Disc Golf
                </Link>
              </li>
              <li>
                <Link href="/guides/where-to-bet" className="text-gray-400 hover:text-white transition-colors">
                  Best Disc Golf Sportsbooks
                </Link>
              </li>
              <li>
                <Link href="/guides/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How Disc Golf Betting Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://coolbet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Start Betting
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/guides/how-to-bet" className="text-gray-400 hover:text-white transition-colors">
                  Betting Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 DiscGolfBet. All rights reserved. Please gamble responsibly.</p>
        </div>
      </div>
    </footer>
  )
}
