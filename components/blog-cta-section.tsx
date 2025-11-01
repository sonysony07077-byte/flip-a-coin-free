import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowRight } from "lucide-react"

export function BlogCTASection() {
  return (
    <section className="border-t border-border bg-muted/20 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Learn More About Coin Flipping</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Explore our blog for tips, tricks, and fascinating insights about coin flips, probability, and
            decision-making strategies.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="glow-primary">
              <Link href="/blog">
                Visit Our Blog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
