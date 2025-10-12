/**
 * Analytics Tracking for Flip Events
 * Privacy-focused, no PII collection
 */

export interface FlipEvent {
  coinId: string
  mode: "single" | "multi" | "custom" | "weighted"
  source: "homepage" | "widget" | "embed"
  userId?: string // Anonymous ID only
  timestamp: number
}

/**
 * Track a flip event
 */
export function trackFlip(event: Omit<FlipEvent, "timestamp">): void {
  const fullEvent: FlipEvent = {
    ...event,
    timestamp: Date.now(),
  }

  // Send to analytics if available (GA4, etc.)
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "flip_action", {
      coin_id: event.coinId,
      mode: event.mode,
      source: event.source,
      event_category: "engagement",
      non_interaction: false,
    })
  }

  // Also track locally for stats
  trackLocalFlip(fullEvent)
}

/**
 * Track flip locally for counter
 */
function trackLocalFlip(event: FlipEvent): void {
  if (typeof window === "undefined") return

  try {
    const key = "flip_events_today"
    const today = new Date().toDateString()
    const stored = localStorage.getItem(key)
    const data = stored ? JSON.parse(stored) : { date: today, count: 0 }

    // Reset if new day
    if (data.date !== today) {
      data.date = today
      data.count = 0
    }

    data.count++
    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    // Silent fail
  }
}

/**
 * Track custom events
 */
export function trackEvent(eventName: string, properties?: Record<string, any>): void {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", eventName, properties)
  }
}

/**
 * Get anonymous user ID (for rate limiting, not tracking)
 */
export function getAnonymousUserId(): string {
  if (typeof window === "undefined") return "anonymous"

  let userId = localStorage.getItem("anon_user_id")
  if (!userId) {
    userId = `anon_${Math.random().toString(36).slice(2)}_${Date.now()}`
    localStorage.setItem("anon_user_id", userId)
  }
  return userId
}
