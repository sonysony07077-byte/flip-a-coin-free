"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Copy, Check } from "lucide-react"

export function EmbedCodeGenerator() {
  const [width, setWidth] = useState("400")
  const [height, setHeight] = useState("500")
  const [showHistory, setShowHistory] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [copied, setCopied] = useState(false)

  const generateEmbedCode = () => {
    const params = new URLSearchParams({
      history: showHistory ? "true" : "false",
      sound: soundEnabled ? "true" : "false",
      embed: "true",
    })

    return `<iframe 
  src="https://flipacoinfree.com/widget?${params.toString()}" 
  width="${width}" 
  height="${height}" 
  frameborder="0"
  title="Coin Flip Widget"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  loading="lazy"
></iframe>`
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generateEmbedCode())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="glass border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="font-display text-2xl">Customize Your Widget</CardTitle>
        <CardDescription>Configure the widget settings and copy the embed code</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Dimensions */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="width">Width (px)</Label>
            <Input
              id="width"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              min="300"
              max="800"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Height (px)</Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              min="400"
              max="1000"
            />
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="show-history">Show History</Label>
              <p className="text-sm text-muted-foreground">Display flip history panel</p>
            </div>
            <Switch id="show-history" checked={showHistory} onCheckedChange={setShowHistory} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sound-enabled">Sound Effects</Label>
              <p className="text-sm text-muted-foreground">Enable coin flip sounds</p>
            </div>
            <Switch id="sound-enabled" checked={soundEnabled} onCheckedChange={setSoundEnabled} />
          </div>
        </div>

        {/* Generated Code */}
        <div className="space-y-2">
          <Label>Embed Code</Label>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs border border-border">
              <code>{generateEmbedCode()}</code>
            </pre>
            <Button
              size="sm"
              variant="outline"
              onClick={copyToClipboard}
              className="absolute top-2 right-2 bg-background"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-1" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>

        {/* JavaScript SDK Option */}
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <h4 className="font-semibold mb-2">JavaScript SDK</h4>
          <p className="text-sm text-muted-foreground mb-3">
            For more control, use our JavaScript SDK to programmatically trigger flips and listen to events.
          </p>
          <pre className="bg-background p-3 rounded text-xs overflow-x-auto">
            <code>{`<script src="https://flipacoinfree.com/sdk.js"></script>
<script>
  const flipper = new CoinFlipper('#container');
  flipper.on('flip', (result) => {
    console.log('Flip result:', result);
  });
</script>`}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}
