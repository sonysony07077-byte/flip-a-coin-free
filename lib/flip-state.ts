/**
 * Centralized Flip State Management
 * Manages coin selection, custom coins, and syncs across all components
 */

import { debounce } from "./rate-limiter"

export type CoinType = "real" | "custom"
export type RealCoinId = "usd" | "eur" | "inr" | "gold" | "silver" | "bronze"

export interface CustomCoinData {
  headsText: string
  tailsText: string
  headsImage: string | null
  tailsImage: string | null
  headsContent?: string
  tailsContent?: string
  colors?: { from: string; to: string }
}

export interface FlipACoinState {
  selectedCoinType: CoinType
  selectedCoinId: RealCoinId | "custom"
  customCoinData: CustomCoinData | null
  soundEnabled: boolean
  voiceEnabled: boolean
  lastUpdated: string
}

const STORAGE_KEY = "flipacoin_state_v1"
const DEFAULT_STATE: FlipACoinState = {
  selectedCoinType: "real",
  selectedCoinId: "gold",
  customCoinData: {
    headsText: "HEADS",
    tailsText: "TAILS",
    headsImage: null,
    tailsImage: null,
    headsContent: "H",
    tailsContent: "T",
    colors: { from: "#FFD25A", to: "#FFB020" }, // Gold for heads
  },
  soundEnabled: true,
  voiceEnabled: true,
  lastUpdated: new Date().toISOString(), // Set initial timestamp
}

const listeners = new Set<(state: FlipACoinState) => void>()

export function loadState(): FlipACoinState {
  if (typeof window === "undefined") return DEFAULT_STATE

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_STATE

    const parsed = JSON.parse(raw)
    return { ...DEFAULT_STATE, ...parsed }
  } catch (e) {
    return DEFAULT_STATE
  }
}

function saveState(state: FlipACoinState): void {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Silent fail - localStorage might be full or disabled
  }
}

export function getFlipACoinState(): FlipACoinState {
  return loadState()
}

const debouncedPostToIframe = debounce((state: FlipACoinState) => {
  if (typeof window === "undefined") return

  const iframe = document.querySelector<HTMLIFrameElement>("#widget-preview-iframe")
  if (iframe?.contentWindow) {
    const messageId = Math.random().toString(36).slice(2)
    iframe.contentWindow.postMessage(
      {
        type: "flipacoin:state",
        id: messageId,
        state,
      },
      "*",
    )
  }
}, 200)

export function setFlipACoinState(patch: Partial<FlipACoinState>): FlipACoinState {
  const currentState = loadState()
  const newState: FlipACoinState = {
    ...currentState,
    ...patch,
    lastUpdated: new Date().toISOString(),
  }

  saveState(newState)

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("flipacoin:statechange", {
        detail: newState,
      }),
    )
  }

  listeners.forEach((fn) => fn(newState))

  debouncedPostToIframe(newState)

  return newState
}

export function onFlipACoinStateChange(callback: (state: FlipACoinState) => void): () => void {
  listeners.add(callback)

  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<FlipACoinState>
    callback(customEvent.detail)
  }

  if (typeof window !== "undefined") {
    window.addEventListener("flipacoin:statechange", handler)
  }

  return () => {
    listeners.delete(callback)
    if (typeof window !== "undefined") {
      window.removeEventListener("flipacoin:statechange", handler)
    }
  }
}

export function initIframeListener(): void {
  if (typeof window === "undefined") return

  window.addEventListener("message", (event) => {
    if (event.data?.type === "flipacoin:state:ack") {
      // Acknowledged
    }

    if (event.data?.type === "flipacoin:state:request") {
      const state = getFlipACoinState()
      debouncedPostToIframe(state)
    }
  })
}
