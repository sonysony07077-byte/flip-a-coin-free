"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Zap } from "lucide-react"

interface FlipStats {
  total_flips: number
  today_flips: number
  active_users: number
  last_updated?: string
}

interface FlipCounterProps {
  onFlipNow?: () => void
}

export function FlipCounter({ onFlipNow }: FlipCounterProps) {
  const [stats, setStats] = useState<FlipStats>({
    total_flips: 0,
    today_flips: 0,
    active_users: 0,
  })
  const [userFlips, setUserFlips] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [showMilestone, setShowMilestone] = useState(false)

  // Load stats on mount
  useEffect(() => {
    loadStats()
    loadUserFlips()

    // Refresh stats every 30 seconds
    const interval = setInterval(loadStats, 30000)
    return () => clearInterval(interval)
  }, [])

  // Check for milestones
  useEffect(() => {
    checkMilestone(stats.total_flips)
  }, [stats.total_flips])

  async function loadStats() {
    try {
      const res = await fetch("/api/stats")
      if (res.ok) {
        const data = await res.json()
        if (data.success && data.data) {
          animateStats({
            total_flips: data.data.totalFlips || 0,
            today_flips: data.data.todayFlips || 0,
            active_users: data.data.activeUsers || 0,
          })
        }
      }
    } catch (e) {
      // Fallback to static file
      try {
        const fallback = await fetch("/data/stats.json")
        const data = await fallback.json()
        animateStats(data)
      } catch (err) {
        console.error("[v0] Failed to load stats:", err)
      }
    } finally {
      setIsLoading(false)
    }
  }

  function loadUserFlips() {
    if (typeof window === "undefined") return
    const saved = localStorage.getItem("user_flip_count")
    setUserFlips(saved ? Number.parseInt(saved, 10) : 0)
  }

  function animateStats(newStats: FlipStats) {
    // Animate from current to new values
    const duration = 700
    const start = performance.now()
    const oldStats = { ...stats }

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)

      setStats({
        total_flips: Math.floor(oldStats.total_flips + (newStats.total_flips - oldStats.total_flips) * eased),
        today_flips: Math.floor(oldStats.today_flips + (newStats.today_flips - oldStats.today_flips) * eased),
        active_users: Math.floor(oldStats.active_users + (newStats.active_users - oldStats.active_users) * eased),
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  function easeOutCubic(t: number): number {
    return --t * t * t + 1
  }

  function checkMilestone(total: number) {
    const milestones = [100000, 500000, 1000000, 5000000]
    const lastMilestone = Number.parseInt(localStorage.getItem("last_milestone") || "0", 10)

    for (const milestone of milestones) {
      if (total >= milestone && lastMilestone < milestone) {
        setShowMilestone(true)
        localStorage.setItem("last_milestone", String(milestone))
        triggerConfetti()
        setTimeout(() => setShowMilestone(false), 5000)
        break
      }
    }
  }

  function triggerConfetti() {
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    // Simple confetti effect
    const count = 50
    const container = document.createElement("div")
    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    `
    document.body.appendChild(container)

    for (let i = 0; i < count; i++) {
      const confetti = document.createElement("div")
      confetti.style.cssText = `
        position: absolute;
        width: 10px;
        height: 10px;
        background: ${["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"][Math.floor(Math.random() * 5)]};
        top: -10px;
        left: ${Math.random() * 100}%;
        opacity: 1;
        transform: rotate(${Math.random() * 360}deg);
        animation: confetti-fall ${2 + Math.random() * 2}s linear forwards;
      `
      container.appendChild(confetti)
    }

    // Add animation
    const style = document.createElement("style")
    style.textContent = `
      @keyframes confetti-fall {
        to {
          transform: translateY(100vh) rotate(${360 + Math.random() * 360}deg);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)

    setTimeout(() => {
      document.body.removeChild(container)
      document.head.removeChild(style)
    }, 5000)
  }

  function incrementUserFlip() {
    const newCount = userFlips + 1
    setUserFlips(newCount)
    localStorage.setItem("user_flip_count", String(newCount))

    // Optimistically increment total
    setStats((prev) => ({
      ...prev,
      total_flips: prev.total_flips + 1,
      today_flips: prev.today_flips + 1,
    }))

    // Post to server
    fetch("/api/flip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count: 1 }),
    }).catch(() => {
      // Silent fail - optimistic update already applied
    })
  }

  // Expose increment function globally
  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(window as any).__incrementFlipCounter = incrementUserFlip
    }
  }, [userFlips])

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toLocaleString()
  }

  return (
    <Card className="glass border-2 border-primary/20 overflow-hidden relative">
      {showMilestone && (
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm z-10 flex items-center justify-center animate-in fade-in duration-500">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">🎉 Milestone Reached!</div>
            <div className="text-2xl font-semibold">{formatNumber(stats.total_flips)} Total Flips</div>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Total Flips - Main Counter */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Total Flips</span>
            </div>
            <div
              className="text-4xl md:text-5xl font-bold text-primary tabular-nums"
              role="status"
              aria-live="polite"
              aria-label={`Total flips: ${stats.total_flips.toLocaleString()}`}
            >
              {isLoading ? "..." : formatNumber(stats.total_flips)}
            </div>
          </div>

          {/* Small Inline Counters */}
          <div className="md:col-span-2 grid grid-cols-3 gap-4">
            {/* Today */}
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">Today</div>
              <div className="text-2xl font-bold tabular-nums">
                {isLoading ? "..." : formatNumber(stats.today_flips)}
              </div>
            </div>

            {/* Your Flips */}
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">Your Flips</div>
              <div className="text-2xl font-bold text-primary tabular-nums">{formatNumber(userFlips)}</div>
            </div>

            {/* Live Now */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">Live</span>
              </div>
              <div className="text-2xl font-bold tabular-nums flex items-center justify-center gap-1">
                <Users className="h-4 w-4" />
                {isLoading ? "..." : stats.active_users}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="md:col-span-1 flex items-center justify-center md:justify-end gap-2">
            <Button onClick={onFlipNow} size="lg" className="glow-primary font-semibold" aria-label="Flip coin now">
              <Zap className="h-4 w-4 mr-2" />
              Flip Now
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
