"use client"

import { TrustBadges } from "@/components/trust-badges"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { BlogCTASection } from "@/components/blog-cta-section"
import { CTASection } from "@/components/cta-section"
import { MultilingualSection } from "@/components/multilingual-section"
import { CoinFlipToolTabs } from "@/components/coin-flip-tool-tabs"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20 py-8 md:py-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
              Flip a Coin <span className="text-primary">Free</span> Online
            </h1>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed text-balance md:text-lg">
              Get instant, fair results with realistic sound effects—right in your browser, completely free.
            </p>
          </div>

          <CoinFlipToolTabs />

          {/* Trust Badges */}
          <div className="mt-8">
            <TrustBadges />
          </div>
        </div>

        <style jsx>{`
          .bg-grid-pattern {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        `}</style>
      </section>

      <Features />
      <HowItWorks />
      <BlogCTASection />
      <div>
        <h2 className="sr-only">Additional Information</h2>
        <CTASection />
        <MultilingualSection />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is the coin flip truly random?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Our coin flip uses cryptographically secure randomness (crypto.getRandomValues()) to ensure completely fair and unbiased results every time.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use this for free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Flip A Coin Free is 100% free with no registration, no downloads, and no hidden costs. All features including multi-flip, weighted coins, and API access are completely free.",
                },
              },
              {
                "@type": "Question",
                name: "Does it work offline?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Once you've visited the site, it works offline thanks to Progressive Web App (PWA) technology. You can flip coins anytime, anywhere.",
                },
              },
              {
                "@type": "Question",
                name: "Can I embed this on my website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We provide a free embeddable widget that you can add to any website. Just copy the embed code and paste it into your site.",
                },
              },
              {
                "@type": "Question",
                name: "How many times can I flip the coin?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can flip the coin as many times as you want. Our multi-flip feature allows you to flip up to 10,000 coins at once and see detailed statistics.",
                },
              },
              {
                "@type": "Question",
                name: "Is there an API available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We offer a free REST API that developers can use to integrate coin flip functionality into their applications. Visit our API documentation for details.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
