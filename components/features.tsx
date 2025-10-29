import { Sparkles, Code, Download, Zap, Shield, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Sparkles,
    title: "Realistic Animation",
    description:
      "Watch a 3D coin spin through the air with physics that actually feels right. It's surprisingly satisfying!",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "No waiting around—flip and get your answer immediately. Perfect when you need to make a quick call.",
  },
  {
    icon: Shield,
    title: "Provably Fair",
    description:
      "We use cryptographically secure randomness to ensure every flip is genuinely fair. You can even connect to Random.org for true randomness if you want extra confidence.",
  },
  {
    icon: Download,
    title: "Export History",
    description:
      "Download your flip history as CSV or JSON files. Great for tracking patterns or running your own experiments.",
  },
  {
    icon: Code,
    title: "Developer API",
    description: "Free REST API that lets you add coin flips to your own projects. We've made it simple to integrate.",
  },
  {
    icon: Globe,
    title: "Embeddable Widget",
    description:
      "Drop our coin flipper right into your website with a simple code snippet. Works great on blogs, gaming sites, and more.",
  },
]

export function Features() {
  return (
    <section className="border-b border-border py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Everything You Need for Fair Decisions</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            This isn't just another coin flipper. We've built a complete toolkit for randomization and decision-making
            that actually works the way you need it to.
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
