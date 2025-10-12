"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CoinFlipTool } from "@/components/coin-flip-tool"
import { useRef } from "react"
import dynamic from "next/dynamic"

const MultiFlipTool = dynamic(
  () => import("@/components/multi-flip-tool").then((mod) => ({ default: mod.MultiFlipTool })),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted rounded-lg" />,
  },
)

const CustomCoinTool = dynamic(
  () => import("@/components/custom-coin-tool").then((mod) => ({ default: mod.CustomCoinTool })),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted rounded-lg" />,
  },
)

const WeightedCoinTool = dynamic(
  () => import("@/components/weighted-coin-tool").then((mod) => ({ default: mod.WeightedCoinTool })),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted rounded-lg" />,
  },
)

export function CoinFlipToolTabs() {
  const flipToolRef = useRef<HTMLDivElement>(null)

  const scrollToFlipTool = () => {
    flipToolRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <div className="mt-6" ref={flipToolRef}>
      <Tabs defaultValue="single" className="mx-auto max-w-6xl">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="single">Single Flip</TabsTrigger>
          <TabsTrigger value="multi">Multi-Flip</TabsTrigger>
          <TabsTrigger value="custom">Custom Coin</TabsTrigger>
          <TabsTrigger value="weighted">Weighted</TabsTrigger>
        </TabsList>

        <TabsContent value="single">
          <CoinFlipTool onFlipNow={scrollToFlipTool} />
        </TabsContent>

        <TabsContent value="multi">
          <MultiFlipTool />
        </TabsContent>

        <TabsContent value="custom">
          <CustomCoinTool />
        </TabsContent>

        <TabsContent value="weighted">
          <WeightedCoinTool />
        </TabsContent>
      </Tabs>
    </div>
  )
}
