"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface DownloadButtonProps {
  variant?: "default" | "outline"
  href?: string
  text?: string
}

export function DownloadButton({ variant = "default", href, text }: DownloadButtonProps) {
  const handleDownload = () => {
    const content = `
Flip A Coin Free - Classroom Activity Pack

Thank you for your interest in our classroom resources!

To receive the complete Classroom Activity Pack with 10 printable activities, 
please contact us at:

Email: contact@flipacoinfree.com
Website: https://flipacoinfree.com/contact

The pack includes:
- 10 ready-to-use probability activities
- Answer keys and implementation guides
- Common Core aligned worksheets
- Activities for all grade levels

We'll send you the complete pack within 24 hours!

Visit https://flipacoinfree.com for our free online coin flip tool.
    `.trim()

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "classroom-pack-info.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  if (href) {
    return (
      <Button size="lg" variant={variant} asChild>
        <a href={href}>{text || "Contact Us"}</a>
      </Button>
    )
  }

  return (
    <Button size="lg" variant={variant} className="gap-2" onClick={handleDownload}>
      <Download className="h-5 w-5" />
      {text || "Download Free Pack (PDF)"}
    </Button>
  )
}
