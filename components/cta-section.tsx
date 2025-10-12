import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-t border-border py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to Flip a Coin Online Free?</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Join thousands who trust our coin toss game online for random coin picker decisions. Flip coin for decision
            making in 30+ languages - free forever, no signup required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild className="glow-primary">
              <Link href="/">
                Start Flipping Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/embed">Get Embed Code</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
