import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Click Flip",
    description:
      "Press the flip button or hit spacebar to start the coin flip animation. Works as a quick coin flip tool for instant coin flip decisions in 30+ languages.",
  },
  {
    number: "02",
    title: "Watch Animation",
    description:
      "Enjoy the realistic coin flip with authentic sound effects and physics. Our virtual coin toss provides a true heads or tails online experience.",
  },
  {
    number: "03",
    title: "Get Result",
    description:
      "See your heads or tails result instantly with voice announcement. Our flip coin with sound feature provides clear visual confirmation.",
  },
  {
    number: "04",
    title: "Track History",
    description:
      "View your flip history, coin toss statistics, and export data. Perfect for tracking random heads tails results and flip a coin 100 times experiments.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">How It Works - Coin Toss Online Instant</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Simple, fast, and fair. Start using our flip coin simulator free in seconds with our coin toss generator.
            Now available in 30+ multi languages worldwide.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.number} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 text-6xl font-bold text-primary/20">{step.number}</div>
                <h3 className="mb-2 font-display text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-4xl text-primary/30 lg:block">
                  →
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
