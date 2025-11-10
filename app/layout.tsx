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
  title: {
    default: "Flip a Coin Free - Realistic Online Coin Flipper with Sound",
    template: "%s | Flip a Coin Free",
  },
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
    "random decision maker",
    "yes no coin flip",
    "coin toss simulator",
    "virtual coin flip",
  ],
  authors: [{ name: "Flip A Coin Free", url: "https://flipacoinfree.com" }],
  creator: "Flip A Coin Free",
  publisher: "Flip A Coin Free",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    site: "@flipacoinfree",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.jpg", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1Z8E1XBFE0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Z8E1XBFE0', {
              page_path: window.location.pathname,
              send_page_view: true
            });
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
                  name: "Flip A Coin Free",
                  url: "https://flipacoinfree.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://flipacoinfree.com/logo.png",
                    width: 512,
                    height: 512,
                  },
                  sameAs: ["https://twitter.com/flipacoinfree"],
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "Customer Support",
                    url: "https://flipacoinfree.com/contact",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://flipacoinfree.com/#website",
                  url: "https://flipacoinfree.com",
                  name: "Flip A Coin Free",
                  description:
                    "Free realistic coin flip simulator with sound, multi-language support, embeddable widget, and API access.",
                  publisher: { "@id": "https://flipacoinfree.com/#org" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://flipacoinfree.com/blog?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                  inLanguage: "en-US",
                },
                {
                  "@type": "WebApplication",
                  name: "Flip A Coin Free Simulator",
                  applicationCategory: "UtilityApplication",
                  operatingSystem: "All",
                  url: "https://flipacoinfree.com",
                  description:
                    "A realistic online coin flip tool with sound effects, voice announcements, multi-flip capability, embed widget, and developer API.",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  browserRequirements: "Requires JavaScript. Modern browser recommended.",
                  featureList: [
                    "Realistic coin flip animation",
                    "Voice announcements in 30+ languages",
                    "Multi-flip capability (up to 10,000 flips)",
                    "Weighted coin simulation",
                    "Export results to CSV/JSON",
                    "Embeddable widget",
                    "Developer API",
                    "Offline mode",
                  ],
                  screenshot: "https://flipacoinfree.com/og-image.png",
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://flipacoinfree.com/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://flipacoinfree.com",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
