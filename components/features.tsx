import { Sparkles, Code, Download, Zap, Shield, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Sparkles,
    title: "Realistic Animation",
    description: "3D animated coin toss with authentic physics and smooth animations that feel real.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Lightning-fast instant coin flip with no delays. Quick coin flip for decision making in seconds.",
  },
  {
    icon: Shield,
    title: "Provably Fair",
    description:
      "Cryptographically secure random coin flip generation. Optional Random.org integration for true randomness in every coin toss online.",
  },
  {
    icon: Download,
    title: "Export History",
    description:
      "Download your flip coin history as CSV or JSON. Track bulk coin flips and coin flip with stats for analysis.",
  },
  {
    icon: Code,
    title: "Developer API",
    description:
      "Free REST API for integrating our coin flip online app into your services. Perfect for HTML coin flip implementations.",
  },
  {
    icon: Globe,
    title: "Embeddable Widget",
    description:
      "Add our flip a coin widget to your website with simple embed coin flip widget code. Coin flip widget html ready.",
  },
]

export function Features() {
  return (
    <section className="border-b border-border py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Everything You Need for Fair Decisions with Heads or Tails
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            More than just a simple coin flip. A complete coin toss simulator online toolkit for randomization and
            decision-making with our flip a coin decision maker.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
