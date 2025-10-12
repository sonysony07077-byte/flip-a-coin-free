import { NextResponse } from "next/server"

export const runtime = "edge"

// Mock statistics - in production, fetch from database
export async function GET() {
  // In production, fetch from database (Supabase, Redis, etc.)
  // For now, return mock data that increments over time

  const baseStats = {
    totalFlips: 1247893,
    todayFlips: 15234,
    activeUsers: 42,
  }

  // Add some randomness to simulate live updates
  const randomIncrement = Math.floor(Math.random() * 10)

  const stats = {
    totalFlips: baseStats.totalFlips + randomIncrement,
    todayFlips: baseStats.todayFlips + Math.floor(randomIncrement / 2),
    activeUsers: baseStats.activeUsers + Math.floor(Math.random() * 5) - 2,
  }

  return NextResponse.json({
    success: true,
    data: stats,
  })
}
