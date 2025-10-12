"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CoinFlipTool } from "@/components/coin-flip-tool"
import { getFlipACoinState, onFlipACoinStateChange, type FlipACoinState } from "@/lib/flip-state"

function WidgetContent() {
  const searchParams = useSearchParams()
  const showHistory = searchParams.get("history") !== "false"
  const soundEnabled = searchParams.get("sound") !== "false"
  const isEmbed = searchParams.get("embed") === "true"
  const [coinState, setCoinState] = useState<FlipACoinState>(getFlipACoinState())

  useEffect(() => {
    // Listen for state updates from parent
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "flipacoin:state") {
        const { id, state } = event.data
        setCoinState(state)

        // Send acknowledgment
        if (window.parent && isEmbed) {
          window.parent.postMessage(
            {
              type: "flipacoin:state:ack",
              id,
              status: "ok",
            },
            "*",
          )
        }
      }
    }

    window.addEventListener("message", handleMessage)

    // Request initial state from parent if embedded
    if (isEmbed && window.parent) {
      window.parent.postMessage({ type: "flipacoin:state:request" }, "*")
    }

    // Subscribe to local state changes
    const unsubscribe = onFlipACoinStateChange((newState) => {
      setCoinState(newState)
    })

    return () => {
      window.removeEventListener("message", handleMessage)
      unsubscribe()
    }
  }, [isEmbed])

  return (
    <div className="min-h-screen bg-transparent p-4">
      <CoinFlipTool />
    </div>
  )
}

export default function WidgetPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WidgetContent />
    </Suspense>
  )
}
