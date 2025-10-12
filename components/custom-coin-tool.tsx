"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Coins } from "lucide-react"
import { setFlipACoinState, getFlipACoinState, type RealCoinId } from "@/lib/flip-state"
import { COIN_ASSETS } from "@/lib/coin-assets"

type CoinPreset = "gold" | "silver" | "bronze" | "dollar" | "eur" | "inr"

interface CustomCoin {
  type: "preset" | "custom"
  preset?: CoinPreset
  headsText?: string
  tailsText?: string
  headsImage?: string
  tailsImage?: string
}

function getInitialPreset(): CoinPreset {
  const initialState = getFlipACoinState()
  if (initialState.selectedCoinType === "real") {
    const coinId = initialState.selectedCoinId
    // Map coin IDs back to presets
    const idToPreset: Record<string, CoinPreset> = {
      usd: "dollar",
      eur: "eur",
      inr: "inr",
      gold: "gold",
      silver: "silver",
      bronze: "bronze",
    }
    return idToPreset[coinId] || "dollar"
  }
  return "dollar"
}

export function CustomCoinTool() {
  const initialState = getFlipACoinState()
  const [selectedPreset, setSelectedPreset] = useState<CoinPreset>(getInitialPreset())
  const [headsText, setHeadsText] = useState(initialState.customCoinData?.headsText || "Heads")
  const [tailsText, setTailsText] = useState(initialState.customCoinData?.tailsText || "Tails")
  const [headsImage, setHeadsImage] = useState<string | null>(initialState.customCoinData?.headsImage || null)
  const [tailsImage, setTailsImage] = useState<string | null>(initialState.customCoinData?.tailsImage || null)

  const handleImageUpload = (side: "heads" | "tails", event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        if (side === "heads") {
          setHeadsImage(result)
        } else {
          setTailsImage(result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePresetSelect = (preset: CoinPreset) => {
    setSelectedPreset(preset)
    // Don't update global state - just update local preview
  }

  const handleApplyPreset = () => {
    const coinIdMap: Record<CoinPreset, RealCoinId> = {
      dollar: "usd",
      eur: "eur",
      inr: "inr",
      gold: "gold",
      silver: "silver",
      bronze: "bronze",
    }

    setFlipACoinState({
      selectedCoinType: "real",
      selectedCoinId: coinIdMap[selectedPreset],
      customCoinData: null,
    })
  }

  const handleApplyCustomCoin = () => {
    setFlipACoinState({
      selectedCoinType: "custom",
      selectedCoinId: "custom",
      customCoinData: {
        headsText,
        tailsText,
        headsImage,
        tailsImage,
        headsContent: headsText,
        tailsContent: tailsText,
        colors: { from: "#FFD25A", to: "#FFB020" },
      },
    })
  }

  const resetCustomization = () => {
    setHeadsText("Heads")
    setTailsText("Tails")
    setHeadsImage(null)
    setTailsImage(null)
  }

  // Convert preset keys to match COIN_ASSETS
  const presetMap: Record<CoinPreset, RealCoinId> = {
    dollar: "usd",
    eur: "eur",
    inr: "inr",
    gold: "gold",
    silver: "silver",
    bronze: "bronze",
  }

  const getPresetAsset = (preset: CoinPreset) => {
    const coinId = presetMap[preset]
    return COIN_ASSETS[coinId] || COIN_ASSETS.usd
  }

  return (
    <Card className="glass border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="font-display text-2xl flex items-center gap-2">
          <Coins className="h-6 w-6" />
          Custom Coin Designer
        </CardTitle>
        <CardDescription>Choose a real coin design or upload your own</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="presets" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="presets">Real Coins</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>

          <TabsContent value="presets" className="space-y-4 mt-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(presetMap).map(([key, coinId]) => {
                const preset = COIN_ASSETS[coinId]
                if (!preset) return null
                return (
                  <button
                    key={key}
                    onClick={() => handlePresetSelect(key as CoinPreset)}
                    className={`flex items-center gap-3 rounded-lg border-2 p-4 text-left transition-all hover:border-primary/50 ${
                      selectedPreset === key ? "border-primary bg-primary/10" : "border-border"
                    }`}
                  >
                    <div
                      className="h-12 w-12 rounded-full border-4 border-white/20 shadow-lg flex items-center justify-center text-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${preset.colors.from}, ${preset.colors.to})`,
                      }}
                    >
                      {preset.headsContent}
                    </div>
                    <div>
                      <p className="font-semibold">{preset.name}</p>
                      <p className="text-xs text-muted-foreground">{preset.description}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Preview */}
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <p className="mb-4 text-sm font-medium text-center">Preview</p>
              <div className="flex justify-center gap-6">
                <div className="text-center">
                  <div
                    className="mx-auto h-24 w-24 rounded-full border-4 border-white/20 shadow-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${getPresetAsset(selectedPreset).colors.from}, ${getPresetAsset(selectedPreset).colors.to})`,
                    }}
                  >
                    <span className="text-4xl">{getPresetAsset(selectedPreset).headsContent}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Heads</p>
                </div>
                <div className="text-center">
                  <div
                    className="mx-auto h-24 w-24 rounded-full border-4 border-white/20 shadow-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${getPresetAsset(selectedPreset).colors.from}, ${getPresetAsset(selectedPreset).colors.to})`,
                    }}
                  >
                    <span className="text-4xl">{getPresetAsset(selectedPreset).tailsContent}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Tails</p>
                </div>
              </div>
            </div>

            <Button onClick={handleApplyPreset} className="w-full glow-primary">
              Apply Selected Coin
            </Button>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4 mt-4">
            {/* Custom Text */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heads-text">Heads Text</Label>
                <Input
                  id="heads-text"
                  value={headsText}
                  onChange={(e) => setHeadsText(e.target.value)}
                  placeholder="Enter text for heads side"
                  maxLength={20}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tails-text">Tails Text</Label>
                <Input
                  id="tails-text"
                  value={tailsText}
                  onChange={(e) => setTailsText(e.target.value)}
                  placeholder="Enter text for tails side"
                  maxLength={20}
                />
              </div>
            </div>

            {/* Custom Images */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heads-image">Heads Image (Optional)</Label>
                <div className="flex items-center gap-4">
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <label htmlFor="heads-image" className="cursor-pointer">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Heads Image
                      <input
                        id="heads-image"
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={(e) => handleImageUpload("heads", e)}
                      />
                    </label>
                  </Button>
                </div>
                {headsImage && (
                  <div className="relative h-24 w-24 rounded-lg border border-border overflow-hidden">
                    <img
                      src={headsImage || "/placeholder.svg"}
                      alt="Heads preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="tails-image">Tails Image (Optional)</Label>
                <div className="flex items-center gap-4">
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <label htmlFor="tails-image" className="cursor-pointer">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Tails Image
                      <input
                        id="tails-image"
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={(e) => handleImageUpload("tails", e)}
                      />
                    </label>
                  </Button>
                </div>
                {tailsImage && (
                  <div className="relative h-24 w-24 rounded-lg border border-border overflow-hidden">
                    <img
                      src={tailsImage || "/placeholder.svg"}
                      alt="Tails preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Preview */}
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <p className="mb-4 text-sm font-medium text-center">Preview</p>
              <div className="flex justify-center gap-6">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-full border-4 border-primary bg-gradient-to-br from-primary to-yellow-600 shadow-xl flex items-center justify-center overflow-hidden">
                    {headsImage ? (
                      <img src={headsImage || "/placeholder.svg"} alt="Heads" className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-lg font-bold text-white px-2 text-center break-words">{headsText}</span>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Heads</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-full border-4 border-[#0066FF] bg-gradient-to-br from-[#0066FF] to-[#003D99] shadow-xl flex items-center justify-center overflow-hidden">
                    {tailsImage ? (
                      <img src={tailsImage || "/placeholder.svg"} alt="Tails" className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-lg font-bold text-white px-2 text-center break-words">{tailsText}</span>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Tails</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={resetCustomization} className="flex-1 bg-transparent">
                Reset
              </Button>
              <Button onClick={handleApplyCustomCoin} className="flex-1 glow-primary">
                Apply Custom Coin
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
