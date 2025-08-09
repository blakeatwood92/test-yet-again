// Centralized affiliate link management
// Update this file to easily change all affiliate links across the site

export const AFFILIATE_LINKS = {
  // Primary sportsbook affiliate link
  coolbet: "https://coolbet.com",

  // Add more affiliate links as needed
  // Example: betmgm: "https://your-betmgm-affiliate-link.com",
  // Example: draftkings: "https://your-draftkings-affiliate-link.com",
} as const

// Helper function to get affiliate link
export function getAffiliateLink(provider: keyof typeof AFFILIATE_LINKS): string {
  return AFFILIATE_LINKS[provider]
}

// Usage example:
// import { getAffiliateLink } from "@/lib/affiliate-links"
// const coolbetLink = getAffiliateLink("coolbet")
