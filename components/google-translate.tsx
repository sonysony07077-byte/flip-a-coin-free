"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: any
  }
}

export function GoogleTranslate() {
  useEffect(() => {
    const loadGoogleTranslate = () => {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          try {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages:
                  "en,hi,ur,es,fr,de,ar,pt,ru,ja,zh-CN,zh-TW,it,ko,tr,id,th,vi,bn,fa,ms,tl,pl,nl,ro,el,cs,sv,hu,uk,ta",
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
                multilanguagePage: true,
              },
              "google_translate_element",
            )
          } catch (error) {
            // Silent error in production
          }
        }
      }

      const existingScript = document.querySelector('script[src*="translate.google.com"]')

      if (!existingScript) {
        const script = document.createElement("script")
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        script.async = true
        script.defer = true
        document.body.appendChild(script)

        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script)
          }
        }
      } else {
        if (window.google && window.google.translate) {
          window.googleTranslateElementInit()
        }
      }
    }

    // Load after page is fully loaded
    if (document.readyState === "complete") {
      setTimeout(loadGoogleTranslate, 1000)
    } else {
      window.addEventListener("load", () => {
        setTimeout(loadGoogleTranslate, 1000)
      })
    }
  }, [])

  return (
    <div
      id="google_translate_element"
      style={{
        position: "absolute",
        left: "-9999px",
        opacity: 0,
        pointerEvents: "none",
        visibility: "hidden",
      }}
    />
  )
}
