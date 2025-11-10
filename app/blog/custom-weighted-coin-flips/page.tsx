import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, User, Share2, Settings, TrendingUp, Gamepad2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom & Weighted Coin Flips: Personalize Your Toss",
  description:
    "Learn how to create custom weighted coin flips with adjustable probabilities. Perfect for simulations, games, and probability experiments.",
  keywords: [
    "weighted coin flip",
    "custom coin toss",
    "biased coin flip",
    "probability adjustment",
    "coin flip simulator",
    "custom probability",
    "weighted random",
    "flip coin personalized",
  ],
  authors: [{ name: "FlipACoinFree Team" }],
  openGraph: {
    title: "Custom & Weighted Coin Flips: Personalize Your Toss",
    description:
      "Learn how to create custom weighted coin flips with adjustable probabilities. Perfect for simulations, games, and probability experiments.",
    type: "article",
    publishedTime: "2025-01-20",
    authors: ["FlipACoinFree Team"],
    images: [
      {
        url: "https://flipacoinfree.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom weighted coin flips with adjustable probabilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom & Weighted Coin Flips: Personalize Your Toss",
    description:
      "Learn how to create custom weighted coin flips with adjustable probabilities for simulations and games.",
    images: ["https://flipacoinfree.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://flipacoinfree.com/blog/custom-weighted-coin-flips",
  },
}

export default function CustomWeightedCoinFlipsPage() {
  const shareUrl = "https://flipacoinfree.com/blog/custom-weighted-coin-flips"
  const shareTitle = "Custom & Weighted Coin Flips: Personalize Your Toss"

  return (
    <>
      <article className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge>Tutorial</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                10 min read
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                January 20, 2025
              </div>
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight mb-4 md:text-5xl text-balance">
              Custom & Weighted Coin Flips: Personalize Your Toss
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6 text-pretty">
              What if your coin could land on heads 70% of the time? Discover how to create custom weighted coin flips
              for simulations, games, and probability experiments with adjustable odds.
            </p>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>By FlipACoinFree Team</span>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    Twitter
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    Facebook
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/og-image.jpg"
                alt="Custom weighted coin flips showing probability adjustment controls"
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-muted/50 rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#what-are-weighted-flips" className="text-primary hover:underline">
                  What Are Weighted Coin Flips?
                </a>
              </li>
              <li>
                <a href="#why-use-weighted" className="text-primary hover:underline">
                  Why Use Weighted Coin Flips?
                </a>
              </li>
              <li>
                <a href="#how-to-create" className="text-primary hover:underline">
                  How to Create Weighted Coin Flips
                </a>
              </li>
              <li>
                <a href="#real-world-applications" className="text-primary hover:underline">
                  Real-World Applications
                </a>
              </li>
              <li>
                <a href="#implementation-guide" className="text-primary hover:underline">
                  Implementation Guide with Code
                </a>
              </li>
              <li>
                <a href="#testing-verification" className="text-primary hover:underline">
                  Testing & Verification
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-pretty">
              Not all coin flips need to be 50/50. Sometimes you need a coin that favors one side—for game balance,
              probability simulations, or teaching statistics. Welcome to the world of weighted coin flips, where you
              control the odds.
            </p>

            <h2 id="what-are-weighted-flips">
              <Settings className="inline h-8 w-8 mr-2" />
              What Are Weighted Coin Flips?
            </h2>

            <p className="text-pretty">
              A weighted coin flip is a random outcome where the probability isn't equal. Instead of 50% heads and 50%
              tails, you might have 70% heads and 30% tails, or any other distribution you choose.
            </p>

            <p className="text-pretty">
              Think of it like a loaded dice or a biased coin in real life—except digital and completely controllable.
            </p>

            <h3>Key Characteristics</h3>

            <ul>
              <li>
                <strong>Adjustable Probability:</strong> Set any percentage from 0% to 100%
              </li>
              <li>
                <strong>Still Random:</strong> Each flip is unpredictable, just with different odds
              </li>
              <li>
                <strong>Verifiable:</strong> Over many flips, results match the set probability
              </li>
              <li>
                <strong>Customizable:</strong> Can be adjusted on the fly for different scenarios
              </li>
            </ul>

            <h2 id="why-use-weighted">
              <TrendingUp className="inline h-8 w-8 mr-2" />
              Why Use Weighted Coin Flips?
            </h2>

            <p className="text-pretty">Weighted coin flips have numerous practical applications:</p>

            <h3>1. Game Development & Balance</h3>
            <p className="text-pretty">
              Game designers use weighted randomness to create fair but exciting gameplay. A boss might have a 20%
              chance to drop rare loot, or a character might have a 65% accuracy rate.
            </p>

            <h3>2. Probability Education</h3>
            <p className="text-pretty">
              Teachers use weighted flips to demonstrate concepts like expected value, law of large numbers, and
              statistical distributions. Students can see how changing probabilities affects outcomes.
            </p>

            <h3>3. Simulations & Modeling</h3>
            <p className="text-pretty">
              Researchers model real-world scenarios where outcomes aren't equal. Weather prediction (30% chance of
              rain), medical trials (drug effectiveness rates), or economic forecasting all use weighted probabilities.
            </p>

            <h3>4. A/B Testing</h3>
            <p className="text-pretty">
              Developers gradually roll out features by showing them to a percentage of users. Start with 10%, then 25%,
              then 50%, monitoring results at each stage.
            </p>

            <h3>5. Decision Making with Preferences</h3>
            <p className="text-pretty">
              When you're leaning toward one option but want randomness to decide, set the odds to match your
              preference. 60% for option A, 40% for option B.
            </p>

            <h2 id="how-to-create">How to Create Weighted Coin Flips</h2>

            <p className="text-pretty">
              Creating a weighted coin flip is simpler than you might think. Here's the basic concept:
            </p>

            <h3>The Math Behind It</h3>

            <ol>
              <li>Generate a random number between 0 and 1</li>
              <li>Compare it to your desired probability threshold</li>
              <li>If the number is below the threshold, return "Heads"; otherwise, return "Tails"</li>
            </ol>

            <p className="text-pretty">For example, for a 70% heads probability:</p>

            <ul>
              <li>Generate random number: 0.65</li>
              <li>Compare to threshold: 0.65 &lt; 0.70</li>
              <li>Result: Heads</li>
            </ul>

            <h3>Visual Example</h3>

            <div className="not-prose my-6 p-6 bg-muted/50 rounded-lg border">
              <h4 className="text-lg font-bold mb-4">Probability Distribution</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>50/50 (Fair Coin)</span>
                    <span>50% Heads | 50% Tails</span>
                  </div>
                  <div className="h-8 flex rounded overflow-hidden">
                    <div className="bg-blue-500 w-1/2"></div>
                    <div className="bg-orange-500 w-1/2"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>70/30 (Weighted)</span>
                    <span>70% Heads | 30% Tails</span>
                  </div>
                  <div className="h-8 flex rounded overflow-hidden">
                    <div className="bg-blue-500 w-[70%]"></div>
                    <div className="bg-orange-500 w-[30%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>90/10 (Heavily Weighted)</span>
                    <span>90% Heads | 10% Tails</span>
                  </div>
                  <div className="h-8 flex rounded overflow-hidden">
                    <div className="bg-blue-500 w-[90%]"></div>
                    <div className="bg-orange-500 w-[10%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="real-world-applications">
              <Gamepad2 className="inline h-8 w-8 mr-2" />
              Real-World Applications
            </h2>

            <h3>Gaming: Critical Hit Chances</h3>
            <p className="text-pretty">
              In RPGs, a character with 15% critical hit chance uses a weighted flip. Each attack "flips a coin" with
              15% heads (critical) and 85% tails (normal hit).
            </p>

            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`function checkCriticalHit(critChance = 0.15) {
  return Math.random() < critChance ? "Critical Hit!" : "Normal Hit";
}

console.log(checkCriticalHit(0.15)); // 15% chance of critical`}</code>
            </pre>

            <h3>Weather Forecasting</h3>
            <p className="text-pretty">
              "30% chance of rain" is a weighted probability. Meteorologists use complex models, but the final
              prediction is essentially a weighted coin flip.
            </p>

            <h3>Medical Trials</h3>
            <p className="text-pretty">
              If a drug has an 80% success rate, researchers can simulate thousands of patients using weighted flips to
              predict outcomes and plan trials.
            </p>

            <h3>Sports Analytics</h3>
            <p className="text-pretty">
              A basketball player with 75% free throw accuracy can be modeled with weighted flips. Analysts simulate
              entire games to predict outcomes.
            </p>

            <h2 id="implementation-guide">Implementation Guide with Code</h2>

            <h3>Basic Weighted Coin Flip</h3>

            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`function weightedCoinFlip(headsProb = 0.5) {
  // headsProb should be between 0 and 1
  // 0.5 = 50%, 0.7 = 70%, etc.
  
  const random = Math.random();
  return random < headsProb ? "Heads" : "Tails";
}

// Examples
console.log(weightedCoinFlip(0.5));  // 50/50 fair coin
console.log(weightedCoinFlip(0.7));  // 70% heads, 30% tails
console.log(weightedCoinFlip(0.9));  // 90% heads, 10% tails`}</code>
            </pre>

            <h3>Advanced: Weighted Flipper Class</h3>

            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`class WeightedCoinFlipper {
  constructor(headsProb = 0.5) {
    this.headsProb = headsProb;
    this.history = [];
  }

  setWeight(headsProb) {
    if (headsProb < 0 || headsProb > 1) {
      throw new Error("Probability must be between 0 and 1");
    }
    this.headsProb = headsProb;
  }

  flip() {
    const result = Math.random() < this.headsProb ? "Heads" : "Tails";
    this.history.push(result);
    return result;
  }

  flipMultiple(count) {
    const results = [];
    for (let i = 0; i < count; i++) {
      results.push(this.flip());
    }
    return results;
  }

  getStats() {
    const heads = this.history.filter(r => r === "Heads").length;
    const tails = this.history.length - heads;
    
    return {
      total: this.history.length,
      heads,
      tails,
      headsPercent: (heads / this.history.length * 100).toFixed(2),
      tailsPercent: (tails / this.history.length * 100).toFixed(2),
      expectedHeads: (this.headsProb * 100).toFixed(2),
      deviation: Math.abs(
        (heads / this.history.length) - this.headsProb
      ).toFixed(4)
    };
  }

  reset() {
    this.history = [];
  }
}

// Usage
const coin = new WeightedCoinFlipper(0.7); // 70% heads
coin.flipMultiple(1000);
console.log(coin.getStats());
// Expected: ~700 heads, ~300 tails`}</code>
            </pre>

            <h3>Cryptographically Secure Weighted Flip</h3>

            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`function secureWeightedFlip(headsProb = 0.5) {
  // Use crypto API for security-critical applications
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  
  // Convert to 0-1 range
  const random = array[0] / (0xFFFFFFFF + 1);
  
  return random < headsProb ? "Heads" : "Tails";
}

console.log(secureWeightedFlip(0.65)); // Cryptographically secure`}</code>
            </pre>

            <h2 id="testing-verification">Testing & Verification</h2>

            <p className="text-pretty">
              How do you verify your weighted coin flip works correctly? Run it thousands of times and check if the
              results match the expected probability.
            </p>

            <h3>Verification Test</h3>

            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`function testWeightedFlip(headsProb, trials = 10000) {
  let heads = 0;
  
  for (let i = 0; i < trials; i++) {
    if (weightedCoinFlip(headsProb) === "Heads") {
      heads++;
    }
  }
  
  const actualProb = heads / trials;
  const expectedProb = headsProb;
  const deviation = Math.abs(actualProb - expectedProb);
  
  console.log(\`Expected: \${(expectedProb * 100).toFixed(2)}%\`);
  console.log(\`Actual: \${(actualProb * 100).toFixed(2)}%\`);
  console.log(\`Deviation: \${(deviation * 100).toFixed(2)}%\`);
  console.log(\`Status: \${deviation < 0.02 ? "✓ PASS" : "✗ FAIL"}\`);
}

// Test 70% heads probability
testWeightedFlip(0.7);
// Expected: 70.00%
// Actual: 69.87%
// Deviation: 0.13%
// Status: ✓ PASS`}</code>
            </pre>

            <h3>Expected Deviation</h3>

            <div className="not-prose my-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Number of Flips</th>
                      <th className="border border-border p-3 text-left">Expected Deviation</th>
                      <th className="border border-border p-3 text-left">Confidence Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">100</td>
                      <td className="border border-border p-3">±5%</td>
                      <td className="border border-border p-3">Low</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">1,000</td>
                      <td className="border border-border p-3">±2%</td>
                      <td className="border border-border p-3">Medium</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">10,000</td>
                      <td className="border border-border p-3">±0.5%</td>
                      <td className="border border-border p-3">High</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">100,000</td>
                      <td className="border border-border p-3">±0.2%</td>
                      <td className="border border-border p-3">Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 id="faq">Frequently Asked Questions</h2>

            <h3>Can I create a coin that always lands on heads?</h3>
            <p className="text-pretty">
              Technically yes—set the probability to 100% (1.0). But that's not really a coin flip anymore, just a
              predetermined outcome. Weighted flips are most useful when there's still genuine randomness, just with
              adjusted odds.
            </p>

            <h3>Is a weighted coin flip still random?</h3>
            <p className="text-pretty">
              Each individual flip is unpredictable. You can't know if the next flip will be heads or tails. The
              weighting only affects the long-term distribution, not individual outcomes.
            </p>

            <h3>How do I choose the right probability?</h3>
            <p className="text-pretty">
              It depends on your use case. For game balance, test different values and see what feels fair. For
              simulations, use real-world data. For teaching, try various probabilities to demonstrate different
              concepts.
            </p>

            <h3>Can weighted flips be used for gambling?</h3>
            <p className="text-pretty">
              Weighted flips are used in casino games, but they must be disclosed. A game can't advertise 50/50 odds
              while secretly using weighted probabilities—that's fraud. Legitimate games clearly state the odds.
            </p>

            <h3>How accurate are weighted flips over small sample sizes?</h3>
            <p className="text-pretty">
              Not very accurate. With only 10 flips at 70% probability, you might get 5 heads (50%) or 9 heads (90%).
              You need hundreds or thousands of flips for the actual results to closely match the expected probability.
            </p>

            <h3>Can I weight a coin flip with more than two outcomes?</h3>
            <p className="text-pretty">
              Yes! The same principle extends to multiple outcomes. Instead of heads/tails, you could have
              red/blue/green with 50%/30%/20% probabilities. This is called a weighted random selection.
            </p>

            <h3>What's the difference between weighted and biased?</h3>
            <p className="text-pretty">
              They're essentially the same. "Weighted" implies intentional design (you chose the probabilities), while
              "biased" can suggest an unintentional flaw. In practice, both mean the outcomes aren't equally likely.
            </p>

            <h3>How do I make a gradually changing weighted flip?</h3>
            <p className="text-pretty">
              You can adjust the probability over time. For example, start at 50%, increase by 1% after each flip until
              reaching 80%. This creates dynamic difficulty in games or simulates changing conditions in models.
            </p>

            <h2>Conclusion</h2>

            <p className="text-pretty">
              Weighted coin flips open up a world of possibilities beyond simple 50/50 decisions. Whether you're
              balancing a game, teaching probability, running simulations, or just want more control over random
              outcomes, weighted flips give you the power to adjust the odds while maintaining genuine randomness.
            </p>

            <p className="text-pretty">
              The beauty of weighted flips is their simplicity—a single line of code can create any probability
              distribution you need. Yet they're powerful enough to model complex real-world scenarios and create
              engaging game mechanics.
            </p>

            <div className="my-8 p-6 bg-primary/10 rounded-lg border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-3">Try Custom Weighted Coin Flips</h3>
              <p className="mb-4 text-pretty">
                Experiment with different probabilities and see how weighted flips work in real-time. Perfect for
                learning, testing, and game development.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/">Try Weighted Flips</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/api-docs">API Documentation</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Link
                  href="/blog/digital-random-flip-tools"
                  className="p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <h4 className="font-semibold mb-2">Digital Random Flip Tools</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn how RNG algorithms and randomizers work under the hood
                  </p>
                </Link>
                <Link
                  href="/blog/ultimate-guide-flip-coin-online"
                  className="p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <h4 className="font-semibold mb-2">Ultimate Guide to Online Coin Flips</h4>
                  <p className="text-sm text-muted-foreground">Complete guide to digital coin flipping technology</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Custom & Weighted Coin Flips: Personalize Your Toss",
            description:
              "Learn how to create custom weighted coin flips with adjustable probabilities for simulations, games, and probability experiments.",
            image: "https://flipacoinfree.com/og-image.jpg",
            step: [
              {
                "@type": "HowToStep",
                name: "Understand Weighted Probabilities",
                text: "Learn what weighted coin flips are and how they differ from fair 50/50 flips.",
              },
              {
                "@type": "HowToStep",
                name: "Choose Your Probability",
                text: "Decide what percentage you want for heads (e.g., 70% heads, 30% tails).",
              },
              {
                "@type": "HowToStep",
                name: "Implement the Algorithm",
                text: "Use random number generation compared against your threshold to create weighted outcomes.",
              },
              {
                "@type": "HowToStep",
                name: "Test and Verify",
                text: "Run thousands of flips to verify your implementation matches the expected probability.",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is a weighted coin flip still random?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Each individual flip is unpredictable. The weighting only affects the long-term distribution, not individual outcomes.",
                },
              },
              {
                "@type": "Question",
                name: "Can I create a coin that always lands on heads?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Technically yes—set the probability to 100%. But that's not really a coin flip anymore, just a predetermined outcome. Weighted flips are most useful when there's still genuine randomness.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
