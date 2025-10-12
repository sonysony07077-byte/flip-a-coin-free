import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, MousePointer, BarChart3, Download, Keyboard, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "How It Works - Flip A Coin Free Online Tool",
  description:
    "Learn how to use our free online coin flip tool. Simple steps to flip a coin, view results, and track your flip history. Perfect for quick decisions and probability experiments.",
  openGraph: {
    title: "How It Works - Flip A Coin Free Online Tool",
    description:
      "Learn how to use our free online coin flip tool. Simple steps to flip a coin, view results, and track your flip history.",
    url: "https://flipacoinfree.com/how-it-works",
    type: "website",
  },
}

const steps = [
  {
    icon: MousePointer,
    title: "Click or Press Space",
    description:
      "Click the 'Flip Coin' button, press the spacebar on your keyboard, or click directly on the coin to start flipping. Our virtual coin flipper responds instantly to your input.",
  },
  {
    icon: Coins,
    title: "Watch the Coin Flip",
    description:
      "The coin will spin in 3D with realistic animation and sound effects. Our online coin flip simulator uses cryptographically secure randomness for fair results every time.",
  },
  {
    icon: BarChart3,
    title: "See Your Result",
    description:
      "The coin lands on either heads or tails. The result is announced visually and optionally with voice. Your flip history is automatically tracked with statistics showing heads vs tails percentages.",
  },
  {
    icon: Download,
    title: "Export Your Data",
    description:
      "Download your flip history as a CSV file for analysis. Perfect for probability experiments, classroom activities, or tracking decision-making patterns over time.",
  },
]

const features = [
  {
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    description: "Press Space to flip instantly. Perfect for rapid coin tosses and quick decisions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Works perfectly on phones and tablets with touch support and haptic feedback.",
  },
  {
    icon: BarChart3,
    title: "Statistics Tracking",
    description: "Automatic tracking of all flips with real-time statistics and percentages.",
  },
]

const modes = [
  {
    title: "Single Flip",
    description:
      "The classic coin flip experience. Perfect for quick yes/no decisions, settling disputes, or making random choices. Our coin toss simulator provides instant results with realistic animation.",
  },
  {
    title: "Multi-Flip",
    description:
      "Flip multiple coins at once - from 2 to 1000 coins. Ideal for probability experiments, statistical analysis, and classroom demonstrations. See aggregate results instantly with our bulk coin flipper.",
  },
  {
    title: "Custom Coin",
    description:
      "Design your own coin with custom text and colors. Choose from preset designs including dollar coin flip, euro coin flip, and rupee coin flip. Perfect for branded decisions or themed games.",
  },
  {
    title: "Weighted Coin",
    description:
      "Adjust the probability to create biased flips. Great for teaching about probability, fairness, and statistical bias. Set any percentage from 0% to 100% heads probability.",
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://flipacoinfree.com" },
          { name: "How It Works", url: "https://flipacoinfree.com/how-it-works" },
        ]}
      />

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Coins className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">How to Use Our Coin Flip Tool</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our free online coin flipper makes it easy to flip a coin for quick decisions, probability experiments, or
            just for fun. Learn how to use all the features of our virtual coin toss simulator.
          </p>
        </div>

        {/* Main Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Simple Steps to Flip a Coin</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <Card key={step.title}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary mb-1">Step {index + 1}</div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Different Modes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Four Ways to Flip</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {modes.map((mode) => (
              <Card key={mode.title}>
                <CardHeader>
                  <CardTitle>{mode.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{mode.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Powerful Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">How We Ensure Fair Coin Flips</CardTitle>
            <CardDescription>The technology behind our random coin toss generator</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Cryptographically Secure Randomness</h3>
              <p className="text-muted-foreground">
                We use the browser's built-in{" "}
                <code className="bg-muted px-1 py-0.5 rounded">crypto.getRandomValues()</code> API, which provides
                cryptographically secure random numbers. This ensures truly random and unpredictable coin flip results.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">No Bias or Manipulation</h3>
              <p className="text-muted-foreground">
                Our coin flip algorithm is completely fair with exactly 50% probability for heads and 50% for tails
                (unless you're using the weighted coin mode). The results cannot be predicted or manipulated.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Client-Side Processing</h3>
              <p className="text-muted-foreground">
                All coin flips happen directly in your browser. No data is sent to our servers, ensuring privacy and
                instant results. Your flip history is stored locally on your device.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Tips for Best Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Use the spacebar for rapid flipping when you need multiple quick coin tosses</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Enable sound effects for a more realistic coin flip experience</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Turn on voice announcements for accessibility or hands-free operation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Export your flip history to analyze patterns or use in probability lessons</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Try the multi-flip tool for large-scale probability experiments</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Use custom coins to make decisions more fun and personalized</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Flip?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start using our free online coin flip tool now. No registration required, works on all devices, and provides
            instant results for all your decision-making needs.
          </p>
          <Button size="lg" asChild>
            <a href="/">Start Flipping Coins</a>
          </Button>
        </div>
      </div>
    </>
  )
}
