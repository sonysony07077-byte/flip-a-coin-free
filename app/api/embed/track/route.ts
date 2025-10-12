import { NextResponse } from "next/server"

export const runtime = "edge"

interface TrackEvent {
  domain: string
  event: "install" | "flip"
  result?: string
}

// In production, this would write to a database or analytics service
// For now, we'll just log and return success
export async function POST(request: Request) {
  try {
    const body: TrackEvent = await request.json()
    const { domain, event, result } = body

    // Validate inputs
    if (!domain || !event) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In production, you would:
    // await db.embedAnalytics.create({ domain, event, result, timestamp: new Date() })

    return NextResponse.json({
      success: true,
      message: "Event tracked",
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
