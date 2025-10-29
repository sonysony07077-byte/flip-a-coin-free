import type { Metadata } from "next"
import { OrganizationJsonLd, BreadcrumbJsonLd } from "@/components/json-ld"
import { CheckCircle2, Code, Globe, Shield, Zap, Users, Award, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - The Story Behind Flip A Coin Free | Flip A Coin Free",
  description:
    "Learn about Flip A Coin Free, the #1 online coin flip tool trusted by teachers, developers, and decision-makers worldwide.",
  openGraph: {
    title: "About Us - The Story Behind Flip A Coin Free",
    description:
      "Learn about Flip A Coin Free, the #1 online coin flip tool trusted by teachers, developers, and decision-makers worldwide.",
    url: "https://flipacoinfree.com/about",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <>
      <OrganizationJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://flipacoinfree.com" },
          { name: "About", url: "https://flipacoinfree.com/about" },
        ]}
      />

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">About Flip A Coin Free</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The world's most advanced online coin flipper, trusted by millions across 30+ languages for fair, instant
            decisions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid gap-6 md:grid-cols-4 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">1M+</p>
              <p className="text-sm text-muted-foreground">Monthly Users</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">30+</p>
              <p className="text-sm text-muted-foreground">Languages</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Code className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">100K+</p>
              <p className="text-sm text-muted-foreground">API Calls Daily</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">99.9%</p>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Our Mission</h2>
          <p>
            We created Flip A Coin Free with a simple goal: build the most realistic, fair, and feature-rich online coin
            flipper that works for everyone, everywhere. What started as a basic randomization tool has evolved into a
            comprehensive platform trusted by educators, developers, content creators, and millions of everyday users
            who need quick, unbiased decisions.
          </p>
          <p>
            Unlike basic coin flip websites that offer nothing more than a static image toggle, we've invested in
            creating an authentic experience. Our 3D physics engine simulates real coin behavior—you'll see the coin
            tumble through the air with realistic rotation, hear the metallic clink as it lands, and watch it settle
            naturally. This attention to detail matters because it builds trust. When the outcome feels real, you know
            it's fair.
          </p>
          <p>
            We're also committed to accessibility and inclusion. That's why Flip A Coin Free is available in over 30
            languages including Hindi, Urdu, Spanish, French, German, Arabic, Japanese, Chinese, Portuguese, Russian,
            and many more. Whether you're in Mumbai, Madrid, or Montreal, you can flip a coin in your native language.
          </p>

          <h2>What Makes Us Different from Other Coin Flip Tools</h2>
          <p>
            There are dozens of coin flip websites out there, but most are bare-bones tools with minimal functionality.
            Here's what sets Flip A Coin Free apart and why we're the preferred choice for serious users:
          </p>

          <h3>1. Advanced Randomization Technology</h3>
          <p>
            While most coin flip sites use basic JavaScript Math.random() (which isn't truly random), we employ
            cryptographically secure randomness using the Web Crypto API. For users who need absolute certainty, we also
            offer integration with Random.org, which uses atmospheric noise to generate true random numbers. Every flip
            is provably fair, and we document our algorithms publicly so you can verify the integrity yourself.
          </p>

          <h3>2. Multiple Flip Modes for Every Use Case</h3>
          <p>Most coin flippers only let you flip one coin at a time. We offer four distinct modes:</p>
          <ul>
            <li>
              <strong>Single Flip:</strong> Classic heads or tails with realistic 3D animation
            </li>
            <li>
              <strong>Multi-Flip:</strong> Flip 2, 3, 5, 10, 50, 100, or even 1,000 coins simultaneously with instant
              statistical analysis
            </li>
            <li>
              <strong>Weighted Coin:</strong> Adjust probability for educational experiments or simulations (e.g., 70%
              heads, 30% tails)
            </li>
            <li>
              <strong>Custom Coin:</strong> Upload your own images for heads and tails—perfect for branded decisions or
              creative projects
            </li>
          </ul>

          <h3>3. Developer-Friendly API</h3>
          <p>
            We're the only major coin flip platform offering a free, well-documented REST API. Developers can integrate
            coin flip functionality into their applications, games, or automation workflows with just a few lines of
            code. Our API supports:
          </p>
          <ul>
            <li>Single and bulk flips (up to 1,000 per request)</li>
            <li>Weighted probability for custom scenarios</li>
            <li>JSON responses with detailed statistics</li>
            <li>100 requests per minute on the free tier (10,000 per day)</li>
            <li>No authentication required for basic usage</li>
          </ul>
          <p>
            Check out our{" "}
            <Link href="/api-docs" className="text-primary hover:underline">
              API documentation
            </Link>{" "}
            with code examples in JavaScript, Python, PHP, and cURL.
          </p>

          <h3>4. Embeddable Widget for Websites and Streams</h3>
          <p>
            Want to add a coin flipper to your blog, gaming site, or Twitch stream? Our embeddable widget is the easiest
            way to do it. Simply copy a snippet of code and paste it into your site—no technical expertise required. The
            widget is fully customizable with options for:
          </p>
          <ul>
            <li>Light or dark theme to match your site design</li>
            <li>Sound effects on/off</li>
            <li>History tracking visibility</li>
            <li>Size adjustments (small, medium, large)</li>
            <li>Custom coin images for branding</li>
          </ul>
          <p>
            Thousands of content creators, educators, and streamers use our widget because it's reliable, fast, and
            looks professional. Get your{" "}
            <Link href="/embed" className="text-primary hover:underline">
              embed code here
            </Link>
            .
          </p>

          <h3>5. Comprehensive History and Analytics</h3>
          <p>
            Unlike basic tools that forget your flips the moment you refresh the page, we maintain a complete history of
            every flip. You can:
          </p>
          <ul>
            <li>Review past results with timestamps</li>
            <li>Export data as CSV or JSON for analysis</li>
            <li>View statistical breakdowns (heads/tails percentage, streaks, patterns)</li>
            <li>Track long-term trends for probability experiments</li>
          </ul>
          <p>
            This makes our tool invaluable for students conducting experiments, researchers gathering data, or anyone
            who wants to verify fairness over time.
          </p>

          <h3>6. Educational Resources for Teachers</h3>
          <p>
            We've built extensive resources specifically for educators. Our{" "}
            <Link href="/classroom" className="text-primary hover:underline">
              classroom pack
            </Link>{" "}
            includes 10 printable activities covering probability, statistics, experimental design, and decision-making.
            Teachers use our weighted coin simulator to demonstrate bias, our multi-flip tool for large-scale
            experiments, and our history export feature for data analysis lessons.
          </p>

          <h3>7. Works Offline as a Progressive Web App</h3>
          <p>
            Install Flip A Coin Free on your device and use it even without an internet connection. Our Progressive Web
            App (PWA) technology means you can flip coins on a plane, in a remote location, or anywhere else offline
            access is needed. Just visit our site, click "Install" in your browser, and you're set.
          </p>

          <h3>8. Multiple Currency Coins</h3>
          <p>
            While most sites only show a generic coin, we offer authentic representations of real-world currency coins
            including US Dollar, Euro, Indian Rupee, British Pound, and more. This adds cultural relevance and makes the
            experience more relatable for international users.
          </p>

          <h2>Why Choose Flip A Coin Free?</h2>
          <div className="grid gap-4 my-6 not-prose">
            {[
              {
                icon: Shield,
                text: "Cryptographically secure randomness—every flip is genuinely fair and verifiable",
              },
              {
                icon: Zap,
                text: "Realistic 3D animations with authentic physics and sound effects for an immersive experience",
              },
              {
                icon: Globe,
                text: "Available in 30+ languages including Hindi, Urdu, Spanish, French, German, Arabic, Japanese, and Chinese",
              },
              {
                icon: Code,
                text: "Free REST API with 100 requests/minute—integrate coin flips into your apps and games",
              },
              {
                icon: Award,
                text: "Embeddable widget for websites, blogs, and live streams with full customization options",
              },
              {
                icon: CheckCircle2,
                text: "WCAG 2.1 AA accessible—designed for users with disabilities including screen reader support",
              },
              {
                icon: Shield,
                text: "Privacy-first approach: we don't track individual flips or sell your data",
              },
              {
                icon: Users,
                text: "Educational resources with 10 printable classroom activities for teaching probability",
              },
              {
                icon: Zap,
                text: "Works offline as a Progressive Web App—flip coins anywhere, anytime",
              },
              {
                icon: TrendingUp,
                text: "Complete flip history with CSV/JSON export for data analysis and experiments",
              },
              {
                icon: Globe,
                text: "Multiple currency coins: Dollar, Euro, Rupee, Pound, and custom coin upload",
              },
              {
                icon: Code,
                text: "Weighted coin simulator for probability experiments and bias demonstrations",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <feature.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>

          <h2>Built for Everyone</h2>

          <h3>Teachers & Students</h3>
          <p>
            Our platform is designed with education in mind. Teachers use Flip A Coin Free to teach probability theory,
            demonstrate the law of large numbers, and conduct hands-on experiments. The multi-flip tool lets students
            flip 100 or 1,000 coins instantly to see how results converge toward 50/50 over time. The weighted coin
            simulator is perfect for teaching about bias and experimental design—students can set a 70% heads
            probability and observe how the results differ from a fair coin.
          </p>
          <p>
            Our classroom pack includes ready-to-use activities like "Probability Experiments," "Coin Flip Streaks,"
            "Decision-Making Games," and "Statistical Analysis Projects." All materials are available in multiple
            languages and can be printed or used digitally. We also provide teacher guides with learning objectives,
            discussion questions, and answer keys.
          </p>

          <h3>Developers & Engineers</h3>
          <p>
            Integrate randomization into your projects with our robust API. Whether you're building a game that needs
            random outcomes, an app that makes decisions, or an automation script that requires unpredictability, our
            API handles it all. We provide comprehensive documentation with code examples in JavaScript, Python, PHP,
            Ruby, and more. Our JavaScript SDK makes integration even simpler with promise-based methods and error
            handling built in.
          </p>
          <p>
            The API supports bulk operations (up to 1,000 flips per request), weighted probabilities, and detailed
            response data including timestamps, statistics, and metadata. Rate limits are generous on the free tier (100
            requests/minute), and we offer enterprise plans for high-volume applications. Visit our{" "}
            <Link href="/api-docs" className="text-primary hover:underline">
              API documentation
            </Link>{" "}
            to get started.
          </p>

          <h3>Content Creators & Streamers</h3>
          <p>
            Thousands of YouTubers, Twitch streamers, and bloggers use our embeddable widget to engage their audiences.
            Add interactive coin flips to your live streams for giveaways, challenges, or viewer decisions. The widget
            works seamlessly in OBS, Streamlabs, and other broadcasting software. You can customize the appearance to
            match your brand, enable or disable sound effects, and even use custom coin images with your logo.
          </p>
          <p>
            Our analytics dashboard lets you track how many flips your audience makes, which helps you understand
            engagement. The widget is lightweight, loads fast, and won't slow down your site or stream. Get your{" "}
            <Link href="/embed" className="text-primary hover:underline">
              embed code
            </Link>{" "}
            and start engaging your audience today.
          </p>

          <h3>Researchers & Data Analysts</h3>
          <p>
            Need random data for simulations, Monte Carlo methods, or statistical analysis? Our platform generates
            cryptographically secure random outcomes that you can export in CSV or JSON format. The multi-flip tool can
            generate thousands of data points in seconds, and the history feature maintains a complete record of every
            flip with timestamps.
          </p>
          <p>
            For research requiring absolute randomness, we offer integration with Random.org, which uses atmospheric
            noise rather than algorithmic pseudo-randomness. This ensures your data meets the highest standards for
            scientific research and academic publications.
          </p>

          <h3>Everyone Else</h3>
          <p>
            Sometimes you just need to make a quick decision. Should you go to the gym or watch Netflix? Order pizza or
            cook dinner? Take the job offer or stay put? Life is full of tough choices, and a coin flip can help you
            break the tie. Our tool makes it fast, fair, and surprisingly fun. The realistic animation and sound effects
            add a satisfying tactile quality that makes decision-making feel more deliberate and final.
          </p>

          <h2>Technical Excellence</h2>
          <p>We've built Flip A Coin Free using modern web technologies to ensure speed, reliability, and security:</p>
          <ul>
            <li>
              <strong>Next.js 16:</strong> Server-side rendering for fast page loads and excellent SEO
            </li>
            <li>
              <strong>React 19:</strong> Smooth, responsive UI with optimized rendering
            </li>
            <li>
              <strong>Web Crypto API:</strong> Cryptographically secure random number generation
            </li>
            <li>
              <strong>Three.js:</strong> Realistic 3D coin physics and animations
            </li>
            <li>
              <strong>Progressive Web App:</strong> Installable, works offline, feels like a native app
            </li>
            <li>
              <strong>Vercel Edge Network:</strong> Global CDN ensures fast loading times worldwide
            </li>
            <li>
              <strong>Uptime Monitoring:</strong> 99.9% uptime with automatic failover and redundancy
            </li>
          </ul>

          <h2>Our Commitment to Transparency</h2>
          <p>
            We believe in radical transparency. That's why we publicly document our randomization algorithms, publish
            our privacy practices, and provide open access to our API. You can verify the fairness of our coin flips by
            reviewing the code, running statistical tests on exported data, or using third-party randomness verification
            tools.
          </p>
          <p>
            We don't track individual flip results, we don't sell your data to advertisers, and we don't require account
            creation for basic usage. Your privacy matters to us, and we've designed our platform to respect it from the
            ground up.
          </p>

          <h2>Join Our Community</h2>
          <p>
            Flip A Coin Free is used by millions of people worldwide—from students learning probability in São Paulo to
            developers building apps in San Francisco to streamers entertaining audiences in Seoul. We're proud to serve
            such a diverse, global community.
          </p>
          <p>
            We're constantly improving based on user feedback. Have an idea for a new feature? Found a bug? Want to
            share how you're using our tool? We genuinely want to hear from you.
          </p>

          <h2>Get in Touch</h2>
          <p>Have questions, feedback, or want to partner with us? We'd love to hear from you.</p>
          <ul>
            <li>
              Email: <a href="mailto:support@flipacoinfree.com">support@flipacoinfree.com</a>
            </li>
            <li>
              Twitter:{" "}
              <a href="https://twitter.com/flipacoinfree" target="_blank" rel="noreferrer noopener">
                @flipacoinfree
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/flipacoinfree" target="_blank" rel="noreferrer noopener">
                github.com/flipacoinfree
              </a>
            </li>
          </ul>

          <div className="not-prose mt-12 p-8 bg-muted rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Try the world's most advanced coin flipper, explore our API, or embed the widget on your site. Everything
              you need for fair, instant decisions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Flip a Coin Now
              </Link>
              <Link
                href="/api-docs"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                View API Docs
              </Link>
              <Link
                href="/embed"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Get Embed Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
