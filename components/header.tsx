"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Flip a coin - Official FlipACoinFree logo and coin symbol"
            width={40}
            height={40}
            className="h-10 w-10"
            priority
            quality={90}
          />
          <span className="font-display text-xl font-bold">
            Flip<span className="text-primary">A</span>Coin
            <span className="text-accent"> Free</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Home
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            How It Works
          </Link>
          <Link
            href="/embed"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Embed
          </Link>
          <Link
            href="/api-docs"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            API
          </Link>
          <Link href="/blog" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Blog
          </Link>
          <Link
            href="/classroom"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Classroom
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/embed"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Embed
            </Link>
            <Link
              href="/api-docs"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              API
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/classroom"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Classroom
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
