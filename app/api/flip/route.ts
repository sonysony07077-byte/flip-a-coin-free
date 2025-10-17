import { NextResponse } from "next/server"

export const runtime = "edge"

interface FlipRequest {
  count?: number
  weighted?: boolean
  probability?: number
}

export async function POST(request: Request) {
  try {
    const body: FlipRequest = await request.json()
    const { count = 1, weighted = false, probability = 50 } = body

    // Validate inputs
    if (count < 1 || count > 1000) {
      return NextResponse.json({ error: "Count must be between 1 and 1000" }, { status: 400 })
    }

    if (weighted && (probability < 0 || probability > 100)) {
      return NextResponse.json({ error: "Probability must be between 0 and 100" }, { status: 400 })
    }

    // Generate flips
    const flips: string[] = []
    for (let i = 0; i < count; i++) {
      const random = Math.random() * 100
      const result = weighted ? (random < probability ? "heads" : "tails") : random < 50 ? "heads" : "tails"
      flips.push(result)
    }

    // Calculate statistics
    const heads = flips.filter((f) => f === "heads").length
    const tails = flips.filter((f) => f === "tails").length

    // Global counter is incremented client-side for better performance

    return NextResponse.json({
      success: true,
      data: {
        flips,
        count,
        heads,
        tails,
        headsPercent: ((heads / count) * 100).toFixed(2),
        tailsPercent: ((tails / count) * 100).toFixed(2),
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

export async function GET() {
  // Simple single flip for GET requests
  const result = Math.random() < 0.5 ? "heads" : "tails"

  return NextResponse.json({
    success: true,
    data: {
      result,
      timestamp: new Date().toISOString(),
    },
  })
}
