"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

export function ShareButtons() {
  const shareUrl = "https://flipacoinfree.com"

  const shareContent = {
    whatsapp: {
      text: "🪙 Just discovered this amazing FREE coin flipper! 🎯\n\n✨ Flip a coin online instantly\n🌍 Works in 30+ languages\n🔊 Realistic sound effects\n📊 Track your flip history\n⚡ No app needed - works in browser!\n\nPerfect for quick decisions, games, or settling debates! Try it now 👇",
      emoji: "💬",
    },
    facebook: {
      text: "🪙 Flip a Coin Free - The Best Online Coin Flipper! 🎯\n\nI've been using this amazing tool for quick decisions and it's fantastic! Features realistic animations, sound effects, and works in 30+ languages worldwide. 🌍\n\n✅ Instant coin flips\n✅ Fair & random results  \n✅ Track flip history\n✅ Multi-language support\n✅ 100% Free - No app needed!\n\nCheck it out:",
      emoji: "👍",
    },
    quora: {
      text: "Best Free Online Coin Flipper Tool - Flip a Coin Free\n\nI found an excellent online coin flipper that works perfectly for making quick decisions. It features realistic animations, sound effects, flip history tracking, and supports 30+ languages. The tool uses cryptographically secure randomness for fair results. Highly recommended for anyone needing a reliable virtual coin toss!",
      emoji: "💡",
    },
  }

  const handleShare = (platform: keyof typeof shareContent) => {
    const content = shareContent[platform]
    const encodedUrl = encodeURIComponent(shareUrl)
    const encodedText = encodeURIComponent(content.text)

    const urls = {
      whatsapp: `https://wa.me/?text=${encodedText}%0A%0A${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
      quora: `https://www.quora.com/share?url=${encodedUrl}&title=${encodedText}`,
    }

    window.open(urls[platform], "_blank", "width=600,height=500,scrollbars=yes")
  }

  return (
    <div className="rounded-lg border border-border bg-muted/30 p-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Share2 className="h-4 w-4 text-primary" />
          <span>Share this tool with friends:</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            onClick={() => handleShare("whatsapp")}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-0 shadow-md hover:shadow-lg transition-all"
          >
            <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </Button>
          <Button
            size="sm"
            onClick={() => handleShare("facebook")}
            className="bg-[#1877F2] hover:bg-[#166FE5] text-white border-0 shadow-md hover:shadow-lg transition-all"
          >
            <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </Button>
          <Button
            size="sm"
            onClick={() => handleShare("quora")}
            className="bg-[#B92B27] hover:bg-[#A52622] text-white border-0 shadow-md hover:shadow-lg transition-all"
          >
            <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.738 18.701c-.831 0-1.448-.521-1.988-1.378l-1.277 1.94c-.989 1.378-2.158 2.126-3.473 2.126-2.158 0-3.902-1.378-3.902-3.573 0-2.126 1.744-3.573 3.902-3.573.494 0 .988.07 1.413.211l.919-1.378c-1.059-1.024-1.744-2.477-1.744-4.112C6.588 5.373 9.096 3 12.738 3c3.642 0 6.15 2.373 6.15 5.964 0 1.635-.685 3.088-1.744 4.112l.919 1.378c.425-.141.919-.211 1.413-.211 2.158 0 3.902 1.447 3.902 3.573 0 2.195-1.744 3.573-3.902 3.573-1.315 0-2.484-.748-3.473-2.126l-1.277-1.94c-.54.857-1.157 1.378-1.988 1.378zm0-13.701c-2.018 0-3.473 1.447-3.473 3.573 0 1.024.425 1.94 1.059 2.618l2.414-3.643 2.414 3.643c.634-.678 1.059-1.594 1.059-2.618 0-2.126-1.455-3.573-3.473-3.573z" />
            </svg>
            Quora
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">Help others discover this free tool! 🎯</p>
      </div>
    </div>
  )
}
