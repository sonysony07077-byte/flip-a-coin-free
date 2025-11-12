"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Loader2, Info, X } from "lucide-react"
import { onFlipACoinStateChange, getFlipACoinState, initIframeListener } from "@/lib/flip-state"
import { Button } from "@/components/ui/button"

interface EmbedPreviewProps {
  width?: string
  height?: string
  showHistory?: boolean
  soundEnabled?: boolean
}

export function EmbedPreview({
  width = "400",
  height = "500",
  showHistory = true,
  soundEnabled = true,
}: EmbedPreviewProps) {
  const [syncStatus, setSyncStatus] = useState<"syncing" | "synced" | "error">("syncing")
  const [retryCount, setRetryCount] = useState(0)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const ackTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    initIframeListener()

    const loadingTimer = setTimeout(() => {
      setIsInitialLoading(false)
    }, 5000)

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "flipacoin:state:ack") {
        setSyncStatus("synced")
        setRetryCount(0)
        setIsInitialLoading(false)
        if (ackTimeoutRef.current) {
          clearTimeout(ackTimeoutRef.current)
        }
      }
    }

    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
      if (ackTimeoutRef.current) {
        clearTimeout(ackTimeoutRef.current)
      }
      clearTimeout(loadingTimer)
    }
  }, [])

  useEffect(() => {
    const unsubscribe = onFlipACoinStateChange((state) => {
      sendStateToIframe(state)
    })

    const timer = setTimeout(() => {
      const initialState = getFlipACoinState()
      sendStateToIframe(initialState)
    }, 1000)

    return () => {
      unsubscribe()
      clearTimeout(timer)
    }
  }, [])

  const sendStateToIframe = (state: any) => {
    if (!iframeRef.current?.contentWindow) return

    setSyncStatus("syncing")
    const messageId = Math.random().toString(36).slice(2)

    iframeRef.current.contentWindow.postMessage(
      {
        type: "flipacoin:state",
        id: messageId,
        state,
      },
      "*",
    )

    if (ackTimeoutRef.current) {
      clearTimeout(ackTimeoutRef.current)
    }

    ackTimeoutRef.current = setTimeout(() => {
      if (retryCount < 3) {
        setRetryCount((prev) => prev + 1)
        sendStateToIframe(state)
      } else {
        setSyncStatus("error")
      }
    }, 500)
  }

  const params = new URLSearchParams({
    history: showHistory ? "true" : "false",
    sound: soundEnabled ? "true" : "false",
    embed: "true",
  })

  return (
    <Card className="glass border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="font-display text-2xl">Live Preview</CardTitle>
        <CardDescription>See how the widget will look on your site</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {showWelcomeMessage && (
          <Alert className="border-blue-500/50 bg-blue-500/10 relative">
            <Info className="h-4 w-4 text-blue-500" />
            <AlertDescription className="text-sm text-blue-700 dark:text-blue-400 pr-8">
              <p className="font-medium mb-2">Welcome to Live Preview!</p>
              <p className="text-xs leading-relaxed">
                Sorry for inconvenience, Live Preview Section some time take more time to show preview. So I suggest you
                use widget code in your website to see preview. That I want our user feel 😊. I will solve this problem
                in future. Thank you 🫠
              </p>
            </AlertDescription>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-6 w-6"
              onClick={() => setShowWelcomeMessage(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </Alert>
        )}

        {isInitialLoading && (
          <Alert className="border-amber-500/50 bg-amber-500/10">
            <Loader2 className="h-4 w-4 animate-spin text-amber-500" />
            <AlertDescription className="text-sm text-amber-700 dark:text-amber-400">
              <p className="font-medium">Loading preview, please wait...</p>
            </AlertDescription>
          </Alert>
        )}

        {!isInitialLoading && syncStatus === "syncing" && (
          <Alert>
            <AlertCircle className="h-4 w-4 animate-pulse" />
            <AlertDescription className="text-sm">Syncing preview...</AlertDescription>
          </Alert>
        )}

        {!isInitialLoading && syncStatus === "synced" && (
          <Alert className="border-green-500/50 bg-green-500/10">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <AlertDescription className="text-sm text-green-700 dark:text-green-400">
              Preview synced with your settings
            </AlertDescription>
          </Alert>
        )}

        {!isInitialLoading && syncStatus === "error" && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              Preview sync failed. The widget will still work when embedded.
            </AlertDescription>
          </Alert>
        )}

        <div className="rounded-lg border-2 border-border bg-muted/30 p-4 flex items-center justify-center">
          <iframe
            ref={iframeRef}
            id="widget-preview-iframe"
            src={`/widget?${params.toString()}`}
            width={width}
            height={height}
            className="border-0 rounded-lg bg-background shadow-lg"
            title="Coin Flip Widget Preview"
            sandbox="allow-scripts allow-same-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        <p className="text-xs text-muted-foreground text-center">
          This is a live preview. Changes to coin selection will update in real-time.
        </p>
      </CardContent>
    </Card>
  )
}
