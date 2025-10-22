"use client"

import { useState, useEffect } from "react"
import { Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "ur", name: "اردو", flag: "🇵🇰" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "zh-CN", name: "简体中文", flag: "🇨🇳" },
  { code: "zh-TW", name: "繁體中文", flag: "🇹🇼" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "id", name: "Indonesia", flag: "🇮🇩" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩" },
  { code: "fa", name: "فارسی", flag: "🇮🇷" },
  { code: "ms", name: "Melayu", flag: "🇲🇾" },
  { code: "tl", name: "Filipino", flag: "🇵🇭" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "ro", name: "Română", flag: "🇷🇴" },
  { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
  { code: "cs", name: "Čeština", flag: "🇨🇿" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
  { code: "hu", name: "Magyar", flag: "🇭🇺" },
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
]

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("en")
  const [mounted, setMounted] = useState(false)
  const [isChanging, setIsChanging] = useState(false)
  const [isTranslateReady, setIsTranslateReady] = useState(false)

  useEffect(() => {
    setMounted(true)

    const checkTranslateReady = () => {
      if (window.google && window.google.translate) {
        setIsTranslateReady(true)
        return true
      }
      return false
    }

    const pollInterval = setInterval(() => {
      if (checkTranslateReady()) {
        clearInterval(pollInterval)
      }
    }, 500)

    setTimeout(() => clearInterval(pollInterval), 10000)

    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop()?.split(";").shift()
      return null
    }

    const googtransCookie = getCookie("googtrans")
    if (googtransCookie) {
      const langCode = googtransCookie.split("/")[2]
      if (langCode) {
        setCurrentLang(langCode)
        localStorage.setItem("selectedLanguage", langCode)
      }
    } else {
      const hasVisited = localStorage.getItem("hasVisited")

      if (!hasVisited) {
        localStorage.setItem("hasVisited", "true")
        const browserLang = navigator.language.split("-")[0]
        const supportedLang = languages.find((lang) => lang.code.startsWith(browserLang))

        if (supportedLang && supportedLang.code !== "en") {
          const waitForTranslate = setInterval(() => {
            if (checkTranslateReady()) {
              clearInterval(waitForTranslate)
              changeLanguage(supportedLang.code)
            }
          }, 500)
          setTimeout(() => clearInterval(waitForTranslate), 5000)
        }
      } else {
        setCurrentLang("en")
        localStorage.setItem("selectedLanguage", "en")
      }
    }

    return () => {
      clearInterval(pollInterval)
    }
  }, [])

  const changeLanguage = (langCode: string) => {
    if (isChanging || currentLang === langCode || !isTranslateReady) {
      console.log("[v0] Language change blocked:", { isChanging, currentLang, langCode, isTranslateReady })
      return
    }

    console.log("[v0] Changing language to:", langCode)
    setIsChanging(true)
    setCurrentLang(langCode)
    localStorage.setItem("selectedLanguage", langCode)

    const cookieValue = langCode === "en" ? "/en/en" : `/en/${langCode}`
    const domain = window.location.hostname

    document.cookie = `googtrans=${cookieValue}; path=/; max-age=31536000; SameSite=Lax`
    document.cookie = `googtrans=${cookieValue}; path=/; domain=.${domain}; max-age=31536000; SameSite=Lax`

    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  if (!mounted) {
    return null
  }

  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 relative">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline text-lg">{currentLanguage.flag}</span>
          {isChanging && <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full animate-pulse" />}
          {!isTranslateReady && mounted && (
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-500 rounded-full animate-pulse" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-[400px] overflow-y-auto w-56">
        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Select Language</div>
        {!isTranslateReady && <div className="px-2 py-2 text-xs text-muted-foreground">Loading translations...</div>}
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="flex items-center gap-3 cursor-pointer"
            disabled={isChanging || !isTranslateReady}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className={currentLang === lang.code ? "font-semibold" : ""}>{lang.name}</span>
            {currentLang === lang.code && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
