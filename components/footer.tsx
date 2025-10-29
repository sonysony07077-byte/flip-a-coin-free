import Link from "next/link"
import { Github, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="Flip a coin - Official FlipACoinFree logo and coin symbol"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-display text-lg font-bold">Flip A Coin Free</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The online coin flipper people actually trust. Fair, fast, and free.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com/flipacoinfree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/flipacoinfree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  Flip a Coin
                </Link>
              </li>
              <li>
                <Link href="/embed" className="text-muted-foreground transition-colors hover:text-foreground">
                  Embed Widget
                </Link>
              </li>
              <li>
                <Link href="/api-docs" className="text-muted-foreground transition-colors hover:text-foreground">
                  Developer API
                </Link>
              </li>
              <li>
                <Link href="/classroom" className="text-muted-foreground transition-colors hover:text-foreground">
                  Classroom Pack
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground transition-colors hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} flipacoinfree.com. All rights reserved.</p>
          <p className="mt-2">Built with care for fair decisions everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
