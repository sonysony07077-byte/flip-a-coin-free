"use client"

import { TrustBadges } from "@/components/trust-badges"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
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
              Flip a Coin instantly with realistic sound and fair results—free in your browser.
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
      <CTASection />
      <MultilingualSection />
    </div>
  )
}
