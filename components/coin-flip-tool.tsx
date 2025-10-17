"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ShareButtons } from "@/components/share-buttons"
import { FlipCounter } from "@/components/flip-counter"
import { getFlipACoinState, onFlipACoinStateChange, type FlipACoinState } from "@/lib/flip-state"
import { getCoinAsset } from "@/lib/coin-assets"
import { trackFlip } from "@/lib/analytics"
import { rateLimiter } from "@/lib/rate-limiter"

type FlipResult = "heads" | "tails"

interface FlipHistory {
  result: FlipResult
  timestamp: number
}

const Volume2Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
)

const VolumeXIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="22" x2="16" y1="9" y2="15" />
    <line x1="16" x2="22" y1="9" y2="15" />
  </svg>
)

const RotateCcwIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
)

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
)

interface CoinFlipToolProps {
  onFlipNow?: () => void
}

export function CoinFlipTool({ onFlipNow }: CoinFlipToolProps) {
  const [coinState, setCoinState] = useState<FlipACoinState>(getFlipACoinState())
  const [isFlipping, setIsFlipping] = useState(false)
  const [result, setResult] = useState<FlipResult | null>(null)
  const [history, setHistory] = useState<FlipHistory[]>([])
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [useRandomOrg, setUseRandomOrg] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [totalRotation, setTotalRotation] = useState(0)
  const audioContextRef = useRef<AudioContext | null>(null)
  const coinFlipAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setMounted(true)
    const savedHistory = localStorage.getItem("flipHistory")
    const savedSound = localStorage.getItem("soundEnabled")
    const savedVoice = localStorage.getItem("voiceEnabled")

    if (savedHistory) setHistory(JSON.parse(savedHistory))
    if (savedSound !== null) setSoundEnabled(savedSound === "true")
    if (savedVoice !== null) setVoiceEnabled(savedVoice === "true")

    if (typeof window !== "undefined" && soundEnabled) {
      coinFlipAudioRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coin-flip-88793-TwfvWak51tiNtgAnf4Yi95xAKdU5W2.mp3")
      coinFlipAudioRef.current.preload = "none"
    }

    const unsubscribe = onFlipACoinStateChange((newState) => {
      setCoinState(newState)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (mounted && history.length > 0) {
      localStorage.setItem("flipHistory", JSON.stringify(history.slice(0, 10)))
    }
  }, [history, mounted])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("soundEnabled", String(soundEnabled))
      localStorage.setItem("voiceEnabled", String(voiceEnabled))
    }
  }, [soundEnabled, voiceEnabled, mounted])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" && !isFlipping) {
        e.preventDefault()
        flipCoin()
      }
    }
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isFlipping])

  const generateRandomResult = async (): Promise<FlipResult> => {
    const array = new Uint32Array(1)
    crypto.getRandomValues(array)
    return array[0] % 2 === 0 ? "heads" : "tails"
  }

  const playFlipSound = useCallback(() => {
    if (!soundEnabled || !coinFlipAudioRef.current) return

    try {
      if (coinFlipAudioRef.current.readyState === 0) {
        coinFlipAudioRef.current.load()
      }
      coinFlipAudioRef.current.currentTime = 0
      coinFlipAudioRef.current.play().catch(() => {})
    } catch (error) {}
  }, [soundEnabled])

  const playCoinDrop = useCallback(() => {
    if (!soundEnabled) return

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }

    const ctx = audioContextRef.current
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.type = "sine"
    oscillator.frequency.setValueAtTime(200, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1)

    gainNode.gain.setValueAtTime(0.2, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1)

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.1)
  }, [soundEnabled])

  const speakResult = useCallback(
    (result: FlipResult) => {
      if (!voiceEnabled || typeof window === "undefined") return

      const utterance = new SpeechSynthesisUtterance(result)
      utterance.rate = 1.0
      utterance.pitch = 1.0
      utterance.volume = 0.8
      window.speechSynthesis.speak(utterance)
    },
    [voiceEnabled],
  )

  const flipCoin = async () => {
    if (isFlipping) return

    if (!rateLimiter.isAllowed("flip_action", { maxRequests: 10, windowMs: 10000 })) {
      return
    }

    setIsFlipping(true)
    setResult(null)

    playFlipSound()

    const newResult = await generateRandomResult()
    const spins = 6
    const targetRotation = newResult === "heads" ? 0 : 180
    const newTotalRotation = totalRotation + spins * 360 + (targetRotation - (totalRotation % 360))
    setTotalRotation(newTotalRotation)

    await new Promise((resolve) => setTimeout(resolve, 3000))

    setResult(newResult)
    setIsFlipping(false)

    playCoinDrop()
    setTimeout(() => speakResult(newResult), 200)

    const newFlip: FlipHistory = {
      result: newResult,
      timestamp: Date.now(),
    }
    setHistory((prev) => [newFlip, ...prev.slice(0, 9)])

    trackFlip({
      coinId: coinState.selectedCoinId,
      mode: "single",
      source: typeof window !== "undefined" && window.location.pathname.includes("widget") ? "widget" : "homepage",
    })

    if (typeof window !== "undefined" && (window as any).__incrementFlipCounter) {
      ;(window as any).__incrementFlipCounter()
    }

    if (navigator.vibrate) {
      navigator.vibrate(200)
    }
  }

  const resetHistory = () => {
    setHistory([])
    localStorage.removeItem("flipHistory")
  }

  const exportHistory = () => {
    const csv = [
      "Result,Timestamp,Date",
      ...history.map((h) => `${h.result},${h.timestamp},${new Date(h.timestamp).toISOString()}`),
    ].join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `coin-flip-history-${Date.now()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const stats = {
    total: history.length,
    heads: history.filter((h) => h.result === "heads").length,
    tails: history.filter((h) => h.result === "tails").length,
    headsPercent:
      history.length > 0
        ? ((history.filter((h) => h.result === "heads").length / history.length) * 100).toFixed(1)
        : "0",
    tailsPercent:
      history.length > 0
        ? ((history.filter((h) => h.result === "tails").length / history.length) * 100).toFixed(1)
        : "0",
  }

  const getCurrentCoin = () => {
    if (coinState.selectedCoinType === "custom" && coinState.customCoinData && coinState.lastUpdated) {
      const hasHeadsImage =
        coinState.customCoinData.headsImage && coinState.customCoinData.headsImage.startsWith("data:")
      const hasTailsImage =
        coinState.customCoinData.tailsImage && coinState.customCoinData.tailsImage.startsWith("data:")

      return {
        headsContent: hasHeadsImage ? coinState.customCoinData.headsImage : coinState.customCoinData.headsText || "H",
        tailsContent: hasTailsImage ? coinState.customCoinData.tailsImage : coinState.customCoinData.tailsText || "T",
        headsLabel: coinState.customCoinData.headsText || "Heads",
        tailsLabel: coinState.customCoinData.tailsText || "Tails",
        headsColor: coinState.customCoinData.colors || { from: "#FFD25A", to: "#FFB020" },
        tailsColor: { from: "#0066FF", to: "#0052CC" },
        hasHeadsImage,
        hasTailsImage,
      }
    }

    if (coinState.selectedCoinType === "real" && coinState.lastUpdated && coinState.selectedCoinId !== "gold") {
      const asset = getCoinAsset(coinState.selectedCoinId)
      if (asset) {
        return {
          headsContent: asset.headsContent,
          tailsContent: asset.tailsContent,
          headsLabel: "Heads",
          tailsLabel: "Tails",
          headsColor: asset.colors,
          tailsColor: asset.colors,
          hasHeadsImage: false,
          hasTailsImage: false,
        }
      }
    }

    return {
      headsContent: "H",
      tailsContent: "T",
      headsLabel: "HEADS",
      tailsLabel: "TAILS",
      headsColor: { from: "#FFD25A", to: "#FFB020" },
      tailsColor: { from: "#0066FF", to: "#0052CC" },
      hasHeadsImage: false,
      hasTailsImage: false,
    }
  }

  const currentCoin = getCurrentCoin()

  return (
    <div className="mx-auto max-w-6xl">
      <Card className="glass border-2 border-primary/20 p-6 shadow-2xl md:p-10">
        <Tabs defaultValue="flip" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="flip">Flip Coin</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="flip" className="mt-0">
            <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
              {/* Coin Area */}
              <div className="flex flex-col items-center justify-center gap-8">
                {/* Coin Display */}
                <div className="relative" style={{ perspective: "1000px" }}>
                  <div
                    className={`relative h-64 w-64 cursor-pointer ${isFlipping ? "animate-flip" : ""}`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateX(${totalRotation}deg)`,
                      transition: isFlipping ? "transform 3s ease-in-out" : "transform 0.3s ease",
                    }}
                    onClick={flipCoin}
                    role="button"
                    tabIndex={0}
                    aria-label="Click to flip coin"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        flipCoin()
                      }
                    }}
                  >
                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-full border-8 border-primary shadow-2xl glow-primary overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        background: `linear-gradient(to bottom right, ${currentCoin.headsColor.from}, ${currentCoin.headsColor.to})`,
                      }}
                    >
                      <div className="text-center w-full h-full flex items-center justify-center relative">
                        {currentCoin.hasHeadsImage ? (
                          <img
                            src={currentCoin.headsContent || "/placeholder.svg"}
                            alt="Heads"
                            className="h-full w-full object-cover rounded-full"
                            loading="lazy"
                          />
                        ) : (
                          <>
                            <div className="text-7xl font-bold text-white drop-shadow-lg">
                              {currentCoin.headsContent}
                            </div>
                            <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/90 absolute bottom-8">
                              {currentCoin.headsLabel}
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-full border-8 border-[#0066FF] shadow-2xl overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateX(180deg)",
                        background: `linear-gradient(to bottom right, ${currentCoin.tailsColor.from}, ${currentCoin.tailsColor.to})`,
                      }}
                    >
                      <div className="text-center w-full h-full flex items-center justify-center relative">
                        {currentCoin.hasTailsImage ? (
                          <img
                            src={currentCoin.tailsContent || "/placeholder.svg"}
                            alt="Tails"
                            className="h-full w-full object-cover rounded-full"
                            loading="lazy"
                          />
                        ) : (
                          <>
                            <div className="text-7xl font-bold text-white drop-shadow-lg">
                              {currentCoin.tailsContent}
                            </div>
                            <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/90 absolute bottom-8">
                              {currentCoin.tailsLabel}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {result && !isFlipping && (
                    <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                      <p className="font-display text-4xl font-bold capitalize text-primary">{result}!</p>
                      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
                        Result: {result}
                      </p>
                    </div>
                  )}

                  {isFlipping && (
                    <div className="mt-8 text-center">
                      <p className="font-display text-2xl font-semibold text-muted-foreground animate-pulse">
                        Flipping...
                      </p>
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={flipCoin}
                    disabled={isFlipping}
                    className="h-16 px-12 text-lg font-bold shadow-2xl bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary hover:to-primary/90 transition-all hover:scale-105 hover:shadow-primary/50 border-2 border-primary/20 relative overflow-hidden group"
                  >
                    <span className="relative z-10">{isFlipping ? "Flipping..." : "Flip Coin"}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    aria-label={soundEnabled ? "Mute sounds" : "Enable sounds"}
                    className="h-14"
                  >
                    {soundEnabled ? <Volume2Icon /> : <VolumeXIcon />}
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Press <kbd className="rounded bg-muted px-2 py-1 font-mono text-xs font-semibold">Space</kbd> to
                    flip or click the coin
                  </p>
                </div>
              </div>

              {/* History Panel */}
              <div className="flex flex-col gap-4">
                <FlipCounter onFlipNow={onFlipNow} />
                <ShareButtons />

                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">History</h3>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={exportHistory}
                      disabled={history.length === 0}
                      aria-label="Export history"
                      title="Export as CSV"
                    >
                      <DownloadIcon />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={resetHistory}
                      disabled={history.length === 0}
                      aria-label="Clear history"
                      title="Clear history"
                    >
                      <RotateCcwIcon />
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold">{stats.total}</p>
                      <p className="text-xs text-muted-foreground">Total</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">{stats.heads}</p>
                      <p className="text-xs text-muted-foreground">Heads ({stats.headsPercent}%)</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#0066FF]">{stats.tails}</p>
                      <p className="text-xs text-muted-foreground">Tails ({stats.tailsPercent}%)</p>
                    </div>
                  </div>
                </div>

                {/* History List */}
                <div className="flex-1 space-y-2 overflow-y-auto max-h-[400px]">
                  {history.length === 0 ? (
                    <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-border">
                      <p className="text-sm text-muted-foreground">No flips yet. Start flipping!</p>
                    </div>
                  ) : (
                    history.map((flip, index) => (
                      <div
                        key={flip.timestamp}
                        className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3 transition-colors hover:bg-muted"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                              flip.result === "heads" ? "bg-primary/20 text-primary" : "bg-[#0066FF]/20 text-[#0066FF]"
                            }`}
                          >
                            {flip.result === "heads" ? "H" : "T"}
                          </div>
                          <span className="font-medium capitalize">{flip.result}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">#{history.length - index}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-0">
            <div className="space-y-6 py-4">
              <div className="space-y-4">
                <h3 className="font-display text-lg font-semibold">Audio Settings</h3>

                <div className="flex items-center justify-between rounded-lg border border-border p-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="sound-toggle" className="text-base font-medium">
                      Sound Effects
                    </Label>
                    <p className="text-sm text-muted-foreground">Play coin flip and landing sounds</p>
                  </div>
                  <Switch id="sound-toggle" checked={soundEnabled} onCheckedChange={setSoundEnabled} />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-border p-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="voice-toggle" className="text-base font-medium">
                      Voice Announcement
                    </Label>
                    <p className="text-sm text-muted-foreground">Speak the result out loud</p>
                  </div>
                  <Switch id="voice-toggle" checked={voiceEnabled} onCheckedChange={setVoiceEnabled} />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-lg font-semibold">Randomness</h3>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use the browser's cryptographically secure random number generator (crypto.getRandomValues) for
                    excellent randomness.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
