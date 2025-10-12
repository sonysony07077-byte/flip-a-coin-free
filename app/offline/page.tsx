import type { Metadata } from "next"
import OfflineClientPage from "./OfflineClientPage"

export const metadata: Metadata = {
  title: "Offline | Flip A Coin Free",
  description: "You are currently offline. Flip A Coin Free works offline once cached.",
}

export default function OfflinePage() {
  return <OfflineClientPage />
}
