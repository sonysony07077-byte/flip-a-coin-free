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
            The #1 online coin flip tool in 30+ languages, trusted worldwide for heads or tails decisions
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Our Mission</h2>
          <p>
            Flip A Coin Free was created to provide the most realistic, fair, and accessible online coin flip experience
            in 30+ multi languages. Whether you need a quick coin flip, dollar coin flip, euro coin flip, or Indian
            rupee coin flip, we've got you covered. Our virtual coin flipper is perfect for teachers demonstrating
            probability, a developer needing a random decision API, or anyone making a quick choice with our coin toss
            simulator. Now available in Hindi, Urdu, Spanish, French, German, Arabic, Japanese, Chinese, and 22 more
            languages.
          </p>

          <h2>Why Flip A Coin Free?</h2>
          <div className="grid gap-4 my-6 not-prose">
            {[
              "Cryptographically secure randomness for fair coin flips",
              "Realistic 3D animations and authentic sounds",
              "Multiple currency coins: Dollar, Euro, Rupee, and more",
              "Free embeddable widget for any website",
              "Developer-friendly API with generous free tier",
              "WCAG 2.1 AA accessible for all users",
              "Privacy-first: no tracking of individual flips",
              "Educational resources for teachers and classrooms",
              "Progressive Web App - works offline as a virtual coin",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <h2>Built for Everyone</h2>
          <p>
            <strong>Teachers & Students:</strong> Use our classroom pack with 10 printable activities to teach
            probability, statistics, and decision-making with our coin toss online tool in multiple languages. The
            weighted coin simulator helps demonstrate bias and experimental design. Perfect for heads or tails
            experiments in the classroom.
          </p>
          <p>
            <strong>Developers:</strong> Integrate our coin flip API or embed widget into your projects with 30+ multi
            language support. Full documentation, code examples in multiple languages, and a JavaScript SDK make
            integration seamless for your flip coin applications.
          </p>
          <p>
            <strong>Content Creators:</strong> Embed our coinflip widget on your blog, gaming site, or educational
            platform. Track usage with our analytics dashboard for your online coin flip needs.
          </p>
          <p>
            <strong>Everyone Else:</strong> Sometimes you just need to flip a coin or toss a coin for a quick decision.
            We make it fast, fair, and fun with our random coin flip tool.
          </p>

          <h2>Our Commitment</h2>
          <p>
            We're committed to maintaining Flip A Coin Free as a free, accessible tool for everyone. We believe in
            transparency, which is why we document our randomness algorithms, publish our privacy practices, and provide
            open access to our API.
          </p>

          <h2>Contact Us</h2>
          <p>Have questions, feedback, or partnership inquiries? We'd love to hear from you.</p>
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
