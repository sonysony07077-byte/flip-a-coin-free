"use client"

import { WifiOff } from "lucide-react"

export default function OfflineClientPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
      <WifiOff className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
      <h1 className="text-4xl font-bold mb-4">You're Offline</h1>
      <p className="text-lg text-muted-foreground mb-8">
        It looks like you've lost your internet connection. Don't worry - Flip A Coin Free works offline once you've
        visited it before!
      </p>
      <div className="bg-muted p-6 rounded-lg text-left">
        <h2 className="font-semibold mb-3">What you can do offline:</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>✓ Flip coins with full animations</li>
          <li>✓ Use multi-flip mode</li>
          <li>✓ Access your flip history</li>
          <li>✓ Export results to CSV</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Note: API calls, embed analytics, and blog content require an internet connection.
        </p>
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Try Again
      </button>
    </div>
  )
}
