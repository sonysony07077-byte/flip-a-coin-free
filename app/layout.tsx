import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
    generator: 'v0.app'
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

        {/* <CHANGE> Updated favicon links with complete professional set */}
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon/mask-icon.svg" color="#FFD25A" />
        <meta name="theme-color" content="#FFD25A" />
        <meta name="msapplication-TileColor" content="#FFD25A" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FlipACoinFree",
              url: "https://flipacoinfree.com/",
              logo: "https://flipacoinfree.com/favicon/favicon-512x512.png",
              sameAs: ["https://twitter.com/flipacoinfree"],
            }),
          }}
        />
      </body>
    </html>
  )
}
