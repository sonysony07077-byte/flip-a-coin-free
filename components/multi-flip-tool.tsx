"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Download } from "lucide-react"

type FlipResult = "heads" | "tails"

interface MultiFlipResult {
  flips: FlipResult[]
  heads: number
  tails: number
  timestamp: number
}

export function MultiFlipTool() {
  const [flipCount, setFlipCount] = useState<number>(10)
  const [isFlipping, setIsFlipping] = useState(false)
  const [progress, setProgress] = useState(0)
  const [results, setResults] = useState<MultiFlipResult | null>(null)

  const performMultiFlip = async () => {
    setIsFlipping(true)
    setProgress(0)
    setResults(null)

    const flips: FlipResult[] = []
    const delay = Math.max(50, 2000 / flipCount) // Adjust speed based on count

    for (let i = 0; i < flipCount; i++) {
      // Generate random result
      const array = new Uint32Array(1)
      crypto.getRandomValues(array)
      const result: FlipResult = array[0] % 2 === 0 ? "heads" : "tails"
      flips.push(result)

      // Update progress
      setProgress(((i + 1) / flipCount) * 100)

      // Small delay for visual feedback
      await new Promise((resolve) => setTimeout(resolve, delay))
    }

    const heads = flips.filter((f) => f === "heads").length
    const tails = flips.filter((f) => f === "tails").length

    setResults({
      flips,
      heads,
      tails,
      timestamp: Date.now(),
    })

    setIsFlipping(false)
  }

  const exportResults = () => {
    if (!results) return

    const csv = [
      "Flip Number,Result",
      ...results.flips.map((result, index) => `${index + 1},${result}`),
      "",
      "Summary",
      `Total Flips,${results.flips.length}`,
      `Heads,${results.heads}`,
      `Tails,${results.tails}`,
      `Heads %,${((results.heads / results.flips.length) * 100).toFixed(2)}`,
      `Tails %,${((results.tails / results.flips.length) * 100).toFixed(2)}`,
    ].join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `multi-flip-${flipCount}-${Date.now()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const headsPercent = results ? (results.heads / results.flips.length) * 100 : 0
  const tailsPercent = results ? (results.tails / results.flips.length) * 100 : 0

  return (
    <Card className="glass border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="font-display text-2xl">Multi-Flip Mode</CardTitle>
        <CardDescription>Flip multiple coins at once and see aggregate results</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Flip Count Selection */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Number of Flips</Label>
          <RadioGroup
            value={String(flipCount)}
            onValueChange={(v) => setFlipCount(Number(v))}
            className="grid grid-cols-5 gap-2"
          >
            {[2, 3, 5, 10, 100].map((count) => (
              <div key={count}>
                <RadioGroupItem value={String(count)} id={`flip-${count}`} className="peer sr-only" />
                <Label
                  htmlFor={`flip-${count}`}
                  className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 [&:has([data-state=checked])]:border-primary"
                >
                  {count}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Flip Button */}
        <Button
          size="lg"
          onClick={performMultiFlip}
          disabled={isFlipping}
          className="w-full h-12 text-lg font-semibold glow-primary"
        >
          {isFlipping ? `Flipping... (${Math.round(progress)}%)` : `Flip ${flipCount} Coins`}
        </Button>

        {/* Progress Bar */}
        {isFlipping && (
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-center text-sm text-muted-foreground">{Math.round(progress)}% complete</p>
          </div>
        )}

        {/* Results */}
        {results && !isFlipping && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
                <p className="text-3xl font-bold text-primary">{results.heads}</p>
                <p className="text-sm text-muted-foreground">Heads ({headsPercent.toFixed(1)}%)</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
                <p className="text-3xl font-bold text-[#0066FF]">{results.tails}</p>
                <p className="text-sm text-muted-foreground">Tails ({tailsPercent.toFixed(1)}%)</p>
              </div>
            </div>

            {/* Visual Distribution */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Distribution</Label>
              <div className="flex h-8 overflow-hidden rounded-lg">
                <div
                  className="bg-primary transition-all"
                  style={{ width: `${headsPercent}%` }}
                  title={`Heads: ${headsPercent.toFixed(1)}%`}
                />
                <div
                  className="bg-[#0066FF] transition-all"
                  style={{ width: `${tailsPercent}%` }}
                  title={`Tails: ${tailsPercent.toFixed(1)}%`}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Heads: {headsPercent.toFixed(1)}%</span>
                <span>Tails: {tailsPercent.toFixed(1)}%</span>
              </div>
            </div>

            {/* Flip Sequence (for smaller counts) */}
            {flipCount <= 10 && (
              <div className="space-y-2">
                <Label className="text-sm font-medium">Sequence</Label>
                <div className="flex flex-wrap gap-2">
                  {results.flips.map((flip, index) => (
                    <div
                      key={index}
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${
                        flip === "heads" ? "bg-primary/20 text-primary" : "bg-[#0066FF]/20 text-[#0066FF]"
                      }`}
                      title={`Flip ${index + 1}: ${flip}`}
                    >
                      {flip === "heads" ? "H" : "T"}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Export Button */}
            <Button variant="outline" onClick={exportResults} className="w-full bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Export Results as CSV
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
