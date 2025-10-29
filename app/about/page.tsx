import type { Metadata } from "next"
import { OrganizationJsonLd, BreadcrumbJsonLd } from "@/components/json-ld"
import { CheckCircle2 } from "lucide-react"

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

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Flip A Coin Free</h1>
          <p className="text-lg text-muted-foreground">
            The online coin flipper trusted by people in over 30 languages for quick, fair decisions
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Our Mission</h2>
          <p>
            We built Flip A Coin Free because we wanted the most realistic and fair online coin flip experience
            possible—one that works in 30+ languages. Whether you need a quick flip, want to use a dollar coin, euro, or
            Indian rupee, we've got you covered. Teachers use our virtual coin flipper to demonstrate probability.
            Developers integrate our API for random decisions. And plenty of folks just use it to make quick choices.
            Now available in Hindi, Urdu, Spanish, French, German, Arabic, Japanese, Chinese, and 22 more languages.
          </p>

          <h2>Why Choose Us?</h2>
          <div className="grid gap-4 my-6 not-prose">
            {[
              "Cryptographically secure randomness—every flip is genuinely fair",
              "Realistic 3D animations with authentic sound effects",
              "Multiple currency coins: Dollar, Euro, Rupee, and more",
              "Free embeddable widget you can add to any website",
              "Developer-friendly API with a generous free tier",
              "WCAG 2.1 AA accessible—built for everyone",
              "Privacy-first approach: we don't track your individual flips",
              "Educational resources designed for teachers and classrooms",
              "Works offline as a Progressive Web App",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <h2>Built for Everyone</h2>
          <p>
            <strong>Teachers & Students:</strong> Our classroom pack includes 10 printable activities for teaching
            probability, statistics, and decision-making in multiple languages. The weighted coin simulator is perfect
            for demonstrating bias and experimental design. Great for hands-on probability experiments.
          </p>
          <p>
            <strong>Developers:</strong> Integrate our coin flip API or embed widget into your projects with support for
            30+ languages. We've included full documentation, code examples in multiple programming languages, and a
            JavaScript SDK to make integration straightforward.
          </p>
          <p>
            <strong>Content Creators:</strong> Embed our widget on your blog, gaming site, or educational platform.
            Track usage with our analytics dashboard to see how your audience engages with it.
          </p>
          <p>
            <strong>Everyone Else:</strong> Sometimes you just need to flip a coin for a quick decision. We've made it
            fast, fair, and actually fun to use.
          </p>

          <h2>Our Commitment</h2>
          <p>
            We're committed to keeping Flip A Coin Free accessible to everyone. That's why we document our randomness
            algorithms, publish our privacy practices, and provide open access to our API. Transparency matters to us.
          </p>

          <h2>Get in Touch</h2>
          <p>Have questions, feedback, or want to partner with us? We'd genuinely love to hear from you.</p>
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
        </div>
      </div>
    </>
  )
}
