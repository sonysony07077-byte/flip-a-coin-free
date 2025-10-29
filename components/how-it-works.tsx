import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Click Flip",
    description:
      "Hit the flip button or just press your spacebar. Works in over 30 languages, so you can use it wherever you are.",
  },
  {
    number: "02",
    title: "Watch Animation",
    description:
      "The coin spins with realistic physics and sound effects. We wanted it to feel like flipping a real coin—and honestly, it does.",
  },
  {
    number: "03",
    title: "Get Result",
    description:
      "See your result right away, complete with voice announcement. No guessing, no confusion—just a clear heads or tails.",
  },
  {
    number: "04",
    title: "Track History",
    description:
      "Check your flip history and stats anytime. Want to flip 100 times and see the distribution? Go for it—we'll track everything.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We've kept it simple. Four steps and you're done. Now available in 30+ languages worldwide.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.number} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 text-6xl font-bold text-primary/40">{step.number}</div>
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
