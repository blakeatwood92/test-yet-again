"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Betting Guides",
      href: "/guides",
      submenu: [
        { name: "What is Disc Golf?", href: "/guides/what-is-disc-golf" },
        { name: "How to Bet on Disc Golf", href: "/guides/how-to-bet" },
        { name: "Best Disc Golf Sportsbooks", href: "/guides/where-to-bet" },
        { name: "How Disc Golf Betting Works", href: "/guides/how-it-works" },
      ],
    },
    { name: "Tournament Calendar", href: "/tournaments" },
    { name: "News & Analysis", href: "/news" },
    { name: "Player Stats", href: "/players" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              DiscGolf<span className="text-blue-600">Bet</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Betting Guides</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link
                      href="/guides/what-is-disc-golf"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">What is Disc Golf?</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Complete beginner's guide to disc golf and betting basics
                      </p>
                    </Link>
                    <Link
                      href="/guides/how-to-bet"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">How to Bet on Disc Golf</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Step-by-step betting guide with CoolBet strategies
                      </p>
                    </Link>
                    <Link
                      href="/guides/where-to-bet"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Best Disc Golf Sportsbooks</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Why CoolBet is the top choice for disc golf betting
                      </p>
                    </Link>
                    <Link
                      href="/guides/how-it-works"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">How It Works</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Advanced strategies and betting market analysis
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/tournaments" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Tournaments
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    News
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/players" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Players
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                Bet on CoolBet
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Betting Guides</p>
                  <Link
                    href="/guides/what-is-disc-golf"
                    className="block text-gray-700 hover:text-blue-600 transition-colors pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    What is Disc Golf?
                  </Link>
                  <Link
                    href="/guides/how-to-bet"
                    className="block text-gray-700 hover:text-blue-600 transition-colors pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    How to Bet
                  </Link>
                  <Link
                    href="/guides/where-to-bet"
                    className="block text-gray-700 hover:text-blue-600 transition-colors pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Where to Bet
                  </Link>
                  <Link
                    href="/guides/how-it-works"
                    className="block text-gray-700 hover:text-blue-600 transition-colors pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    How It Works
                  </Link>
                </div>
                <Link
                  href="/tournaments"
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Tournaments
                </Link>
                <Link
                  href="/news"
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  News
                </Link>
                <Link
                  href="/players"
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Players
                </Link>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 mt-6">
                  <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                    Bet on CoolBet
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
