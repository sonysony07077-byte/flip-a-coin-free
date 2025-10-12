"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"

type FlipResult = "heads" | "tails"

export function WeightedCoinTool() {
  const [headsProbability, setHeadsProbability] = useState(50)
  const [isFlipping, setIsFlipping] = useState(false)
  const [result, setResult] = useState<FlipResult | null>(null)
  const [history, setHistory] = useState<FlipResult[]>([])

  const flipWeightedCoin = async () => {
    if (isFlipping) return

    setIsFlipping(true)
    setResult(null)

    // Simulate flip animation
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Generate weighted random result
    const random = Math.random() * 100
    const newResult: FlipResult = random < headsProbability ? "heads" : "tails"

    setResult(newResult)
    setHistory((prev) => [newResult, ...prev.slice(0, 99)])
    setIsFlipping(false)

    // Vibrate on mobile
    if (navigator.vibrate) {
      navigator.vibrate(200)
    }
  }

  const stats = {
    total: history.length,
    heads: history.filter((h) => h === "heads").length,
    tails: history.filter((h) => h === "tails").length,
    headsPercent:
      history.length > 0 ? ((history.filter((h) => h === "heads").length / history.length) * 100).toFixed(1) : "0",
    tailsPercent:
      history.length > 0 ? ((history.filter((h) => h === "tails").length / history.length) * 100).toFixed(1) : "0",
  }

  const resetHistory = () => {
    setHistory([])
    setResult(null)
  }

  return (
    <Card className="glass border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="font-display text-2xl">Weighted Coin Simulator</CardTitle>
        <CardDescription>Adjust the probability to simulate an unfair coin</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Educational Alert */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription className="text-sm">
            This tool is for educational purposes. Adjust the slider to change the probability of getting heads. A fair
            coin has 50% probability for each side.
          </AlertDescription>
        </Alert>

        {/* Probability Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base font-medium">Heads Probability</Label>
            <span className="text-2xl font-bold text-primary">{headsProbability}%</span>
          </div>

          <Slider
            value={[headsProbability]}
            onValueChange={(value) => setHeadsProbability(value[0])}
            min={0}
            max={100}
            step={1}
            className="w-full"
          />

          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Always Tails (0%)</span>
            <span>Fair (50%)</span>
            <span>Always Heads (100%)</span>
          </div>

          {/* Visual Representation */}
          <div className="flex h-12 overflow-hidden rounded-lg border border-border">
            <div
              className="bg-primary transition-all flex items-center justify-center text-xs font-semibold text-white"
              style={{ width: `${headsProbability}%` }}
            >
              {headsProbability > 15 && `${headsProbability}%`}
            </div>
            <div
              className="bg-[#0066FF] transition-all flex items-center justify-center text-xs font-semibold text-white"
              style={{ width: `${100 - headsProbability}%` }}
            >
              {100 - headsProbability > 15 && `${100 - headsProbability}%`}
            </div>
          </div>
        </div>

        {/* Coin Display */}
        <div className="flex flex-col items-center gap-6 py-6">
          <div className="relative" style={{ perspective: "1000px" }}>
            <div
              className={`relative h-48 w-48 transition-transform duration-1000 ${isFlipping ? "animate-spin" : ""}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center rounded-full border-8 border-primary bg-gradient-to-br from-[#FFD25A] via-[#FFC940] to-[#FFB020] shadow-2xl ${
                  result === "heads" ? "glow-primary" : ""
                }`}
              >
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-foreground">
                    {result === null ? "?" : result === "heads" ? "H" : "T"}
                  </div>
                </div>
              </div>
            </div>

            {result && !isFlipping && (
              <div className="mt-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="font-display text-3xl font-bold capitalize text-primary">{result}!</p>
              </div>
            )}
          </div>

          <Button
            size="lg"
            onClick={flipWeightedCoin}
            disabled={isFlipping}
            className="h-14 px-10 text-lg font-semibold glow-primary"
          >
            {isFlipping ? "Flipping..." : "Flip Weighted Coin"}
          </Button>
        </div>

        {/* Statistics */}
        {history.length > 0 && (
          <div className="space-y-4 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Results ({stats.total} flips)</Label>
              <Button variant="ghost" size="sm" onClick={resetHistory}>
                Clear
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
                <p className="text-3xl font-bold text-primary">{stats.heads}</p>
                <p className="text-sm text-muted-foreground">Heads ({stats.headsPercent}%)</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
                <p className="text-3xl font-bold text-[#0066FF]">{stats.tails}</p>
                <p className="text-sm text-muted-foreground">Tails ({stats.tailsPercent}%)</p>
              </div>
            </div>

            {/* Comparison */}
            <div className="rounded-lg bg-muted/30 p-4 space-y-2">
              <p className="text-sm font-medium">Expected vs Actual</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Expected Heads:</p>
                  <p className="font-semibold">{headsProbability}%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Actual Heads:</p>
                  <p className="font-semibold">{stats.headsPercent}%</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                With more flips, the actual percentage will converge toward the expected probability.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
