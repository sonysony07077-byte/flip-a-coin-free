"use client"

import { useState } from "react"
import { Accessibility, Eye, EyeOff, Type, Contrast } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"

export function AccessibilityMenu() {
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    document.documentElement.classList.toggle("high-contrast")
  }

  const toggleLargeText = () => {
    setLargeText(!largeText)
    document.documentElement.classList.toggle("large-text")
  }

  const toggleReduceMotion = () => {
    setReduceMotion(!reduceMotion)
    document.documentElement.classList.toggle("reduce-motion")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 hover:bg-muted rounded-md transition-colors" aria-label="Accessibility options">
          <Accessibility className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Accessibility</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem checked={highContrast} onCheckedChange={toggleHighContrast}>
          <Contrast className="h-4 w-4 mr-2" />
          High Contrast
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem checked={largeText} onCheckedChange={toggleLargeText}>
          <Type className="h-4 w-4 mr-2" />
          Large Text
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem checked={reduceMotion} onCheckedChange={toggleReduceMotion}>
          <EyeOff className="h-4 w-4 mr-2" />
          Reduce Motion
        </DropdownMenuCheckboxItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <a href="#main-content" className="w-full">
            <Eye className="h-4 w-4 mr-2" />
            Skip to Content
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
