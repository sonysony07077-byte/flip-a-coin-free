/**
 * Coin Asset Configuration
 * Maps coin IDs to their visual assets and metadata
 */

import type { RealCoinId } from "./flip-state"

export interface CoinAsset {
  id: string
  name: string
  description: string
  svg?: string
  texture?: string
  headsContent: string
  tailsContent: string
  colors: {
    from: string
    to: string
  }
  denomination?: string
}

export const COIN_ASSETS: Record<RealCoinId, CoinAsset> = {
  usd: {
    id: "usd",
    name: "US Dollar",
    description: "American dollar coin",
    headsContent: "🗽",
    tailsContent: "🦅",
    colors: { from: "#C9C9C9", to: "#A8A8A8" },
    denomination: "$1",
  },
  eur: {
    id: "eur",
    name: "Euro",
    description: "European euro coin",
    headsContent: "€",
    tailsContent: "★",
    colors: { from: "#FFD700", to: "#DAA520" },
    denomination: "€1",
  },
  inr: {
    id: "inr",
    name: "Indian Rupee",
    description: "Indian rupee coin",
    headsContent: "₹",
    tailsContent: "🦁",
    colors: { from: "#C0C0C0", to: "#A8A8A8" },
    denomination: "₹10",
  },
  gold: {
    id: "gold",
    name: "Gold Coin",
    description: "Classic gold coin",
    headsContent: "H",
    tailsContent: "T",
    colors: { from: "#FFD25A", to: "#FFB020" },
  },
  silver: {
    id: "silver",
    name: "Silver Coin",
    description: "Shiny silver coin",
    headsContent: "H",
    tailsContent: "T",
    colors: { from: "#E8E8E8", to: "#B8B8B8" },
  },
  bronze: {
    id: "bronze",
    name: "Bronze Coin",
    description: "Antique bronze coin",
    headsContent: "H",
    tailsContent: "T",
    colors: { from: "#CD7F32", to: "#8B4513" },
  },
}

/**
 * Get coin asset by ID
 */
export function getCoinAsset(coinId: string): CoinAsset | null {
  return COIN_ASSETS[coinId as RealCoinId] || null
}

/**
 * Get all available coin assets
 */
export function getAllCoinAssets(): CoinAsset[] {
  return Object.values(COIN_ASSETS)
}
