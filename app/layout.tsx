import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleTranslate } from "@/components/google-translate"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://flipacoinfree.com"),
  alternates: {
    canonical: "https://flipacoinfree.com",
  },
  title: "Flip a Coin Free - Realistic Online Coin Flipper with Sound",
  description:
    "Flip a coin free online - realistic heads or tails coin toss with human voice and sound. Now in 30+ languages! Fast, fair, multi-flip & export. Try now - no app.",
  keywords: [
    "flip a coin",
    "flip a coin online",
    "coin flip",
    "coin toss",
    "online coin flipper",
    "random coin flip",
    "heads or tails",
    "coin flip online free",
    "flip a coin instant",
    "coin flip widget embed",
    "coin flip api",
    "weighted coin simulator",
  ],
  authors: [{ name: "Flip A Coin Free" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flipacoinfree.com",
    siteName: "Flip A Coin Free",
    title: "Flip a Coin Free - Realistic Online Coin Flipper with Sound",
    description:
      "Flip a coin free online - realistic heads or tails coin toss with human voice and sound. Now in 30+ languages! Fast, fair, multi-flip & export. Try now - no app.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flip A Coin Free - Online Coin Flipper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flip a Coin Free - Realistic Online Coin Flipper with Sound",
    description:
      "Flip a coin free online - realistic heads or tails coin toss with human voice and sound. Now in 30+ languages! Fast, fair, multi-flip & export. Try now - no app.",
    images: ["/og-image.png"],
    creator: "@flipacoinfree",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Primary favicon - ICO format for broad compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />

        {/* SVG favicon for modern browsers - scalable and sharp */}
        <link rel="icon" href="/favicon/icon.jpg" type="image/svg+xml" />

        {/* PNG favicons for different sizes */}
        <link rel="icon" href="/favicon/favicon-16x16.jpg" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon/favicon-32x32.jpg" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon/favicon-48x48.jpg" type="image/png" sizes="48x48" />

        {/* Apple Touch Icon - 180x180 is the standard size */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.jpg" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Safari Pinned Tab Icon */}
        <link rel="mask-icon" href="/favicon/icon.jpg" color="#FFD25A" />

        {/* Theme colors for browser UI */}
        <meta name="theme-color" content="#FFD25A" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
        <meta name="msapplication-TileColor" content="#FFD25A" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="font-sans antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1Z8E1XBFE0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Z8E1XBFE0');
          `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <GoogleTranslate />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://flipacoinfree.com/#org",
                  name: "FlipACoinFree",
                  url: "https://flipacoinfree.com",
                  logo: "https://flipacoinfree.com/logo.png",
                  sameAs: ["https://twitter.com/flipacoinfree"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://flipacoinfree.com/#website",
                  url: "https://flipacoinfree.com",
                  name: "FlipACoinFree",
                  description: "Free realistic coin flip simulator — embeddable widget, API, multi-language.",
                  publisher: { "@id": "https://flipacoinfree.com/#org" },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "FlipACoinFree Simulator",
                  applicationCategory: "WebApplication",
                  operatingSystem: "All",
                  url: "https://flipacoinfree.com",
                  description: "A realistic online coin flip tool with sound, embed widget and API.",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
