import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getPostBySlug } from "@/lib/blog"
import ReactMarkdown from "react-markdown"
import { Share2, Facebook, Twitter, Clock, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Custom & Weighted Coin Flips — Personalize Your Toss",
  description:
    "Learn how to customize coin flips, simulate weighted coins, and use two-coin games. Tips, examples, and how to make fair decisions with style.",
  openGraph: {
    title: "Custom & Weighted Coin Flips — Personalize Your Toss",
    description:
      "Learn how to customize coin flips, simulate weighted coins, and use two-coin games. Tips, examples, and how to make fair decisions with style.",
    url: "https://flipacoinfree.com/blog/custom-weighted-coin-flips",
    siteName: "FlipACoinFree",
    images: [
      {
        url: "https://flipacoinfree.com/og/custom-weighted-coin-flips.jpg",
        width: 1200,
        height: 630,
        alt: "Flip a coin — custom and weighted coin toss example",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom & Weighted Coin Flips — Personalize Your Toss",
    description:
      "Learn how to customize coin flips, simulate weighted coins, and use two-coin games. Tips, examples, and how to make fair decisions with style.",
    images: ["https://flipacoinfree.com/og/custom-weighted-coin-flips.jpg"],
  },
  alternates: {
    canonical: "https://flipacoinfree.com/blog/custom-weighted-coin-flips",
  },
}

export default function CustomWeightedCoinFlipsPage() {
  const post = getPostBySlug("custom-weighted-coin-flips")

  if (!post) {
    return <div>Post not found</div>
  }

  const shareUrl = "https://flipacoinfree.com/blog/custom-weighted-coin-flips"
  const shareTitle = "Custom & Weighted Coin Flips — Personalize Your Toss"

  return (
    <>
      <article className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge>Blog</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readingTime} min read
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight mb-4 md:text-5xl text-balance">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6 text-pretty">{post.excerpt}</p>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>By {post.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4 mr-1" />
                    Tweet
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-4 w-4 mr-1" />
                    Share
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/og/custom-weighted-coin-flips.jpg"
                alt="Custom and weighted coin flip examples with personalized designs"
                width={1200}
                height={630}
                className="object-cover"
                priority
              />
            </div>
          </header>

          <nav className="mb-12 p-6 bg-muted/50 rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#custom-coins" className="text-primary hover:underline">
                  Custom Coin Designs
                </a>
              </li>
              <li>
                <a href="#weighted-flips" className="text-primary hover:underline">
                  Weighted Coin Flips
                </a>
              </li>
              <li>
                <a href="#two-coin-games" className="text-primary hover:underline">
                  Two-Coin Flip Games
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-primary hover:underline">
                  Use Cases & Examples
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>

            <p className="text-pretty">
              For more on weighted probability and statistical distributions, see{" "}
              <a
                href="https://en.wikipedia.org/wiki/Weighted_random_sampling"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wikipedia's article on weighted random sampling
              </a>
              .
            </p>

            <h2>Conclusion</h2>

            <p className="text-pretty">
              Custom and weighted coin flips add personality and flexibility to your decision-making tools. Whether
              you're creating branded coins for your team, simulating probability scenarios for education, or running
              two-coin games for entertainment, these features expand what's possible beyond standard 50/50 flips.
            </p>

            <p className="text-pretty">
              <strong>Ready to customize your coin flips?</strong>
            </p>

            <div className="my-8 p-6 bg-primary/10 rounded-lg border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-3">Create Your Custom Coin Flip</h3>
              <p className="mb-4 text-pretty">
                Upload your own designs, adjust probabilities, or try two-coin games. Everything you need to personalize
                your coin flipping experience.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="https://flipacoinfree.com/">Start Customizing</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://flipacoinfree.com/weighted">Try Weighted Flips</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://flipacoinfree.com/multi">Multi-Coin Games</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Link
                  href="/blog/top-coin-flip-games"
                  className="p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <h4 className="font-semibold mb-2">Top Coin Flip Games</h4>
                  <p className="text-sm text-muted-foreground">
                    Discover fun coin flip games for parties and giveaways
                  </p>
                </Link>
                <Link
                  href="/blog/embed-api-bulk-coin-flips"
                  className="p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <h4 className="font-semibold mb-2">Embed & API Guide</h4>
                  <p className="text-sm text-muted-foreground">Integrate coin flips into your apps and websites</p>
                </Link>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              <strong>Tags:</strong> custom coin flip, weighted coin, 2 coin flip, coin toss game, head tails flip coin,
              coin flip game, toss coin head tail, penny coin flips
            </p>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://flipacoinfree.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://flipacoinfree.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Custom & Weighted Coin Flips",
                item: "https://flipacoinfree.com/blog/custom-weighted-coin-flips",
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
            "@type": "BlogPosting",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://flipacoinfree.com/blog/custom-weighted-coin-flips",
            },
            headline: "Custom & Weighted Coin Flips — Personalize Your Toss",
            description:
              "Learn how to customize coin flips, simulate weighted coins, and use two-coin games. Tips, examples, and how to make fair decisions with style.",
            image: ["https://flipacoinfree.com/og/custom-weighted-coin-flips.jpg"],
            author: { "@type": "Person", name: "FlipACoinFree Team" },
            publisher: {
              "@type": "Organization",
              name: "FlipACoinFree",
              logo: {
                "@type": "ImageObject",
                url: "https://flipacoinfree.com/logo.png",
              },
            },
            datePublished: "2025-10-10",
            dateModified: "2025-10-10",
            inLanguage: "en",
            articleSection: "Customization Guides",
            wordCount: 2400,
            keywords:
              "2 coin flip, coin toss game, head tails flip coin, coin flip game, custom flip coin, toss coin head tail, weighted coin, penny coin flips",
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can I make a custom coin for my team?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — upload front/back art and text, then save and use or embed. You can create branded coins with your team logo, colors, and custom text for both heads and tails sides.",
                },
              },
              {
                "@type": "Question",
                name: "Are weighted flips fair for giveaways?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weighted flips alter probability; for fairness in giveaways use unbiased mode or disclose weight. Always be transparent about probability adjustments when using weighted flips for contests or selections.",
                },
              },
              {
                "@type": "Question",
                name: "Can I flip two coins at the same time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — multi-flip mode supports 2+ coins and shows aggregated results. You can flip two coins simultaneously and see all possible outcomes (HH, HT, TH, TT) with their probabilities.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
