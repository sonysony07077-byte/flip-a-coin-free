import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getPostBySlug } from "@/lib/blog"
import ReactMarkdown from "react-markdown"
import { Share2, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

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
            keywords:
              "2 coin flip, coin toss game, head tails flip coin, coin flip game, custom flip coin, toss coin head tail, weighted coin, penny coin flips",
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
                name: "Can I make a custom coin for my team?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — upload front/back art and text, then save and use or embed.",
                },
              },
              {
                "@type": "Question",
                name: "Are weighted flips fair for giveaways?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weighted flips alter probability; for fairness in giveaways use unbiased mode or disclose weight.",
                },
              },
              {
                "@type": "Question",
                name: "Can I flip two coins at the same time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — multi-flip mode supports 2+ coins and shows aggregated results.",
                },
              },
            ],
          }),
        }}
      />

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8">
          <Image
            src="/og/custom-weighted-coin-flips.jpg"
            alt="Flip a coin — custom and weighted coin toss example"
            width={1200}
            height={630}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-4">
            <span>By {post.author}</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4 mr-2" />
                Tweet
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4 mr-2" />
                Share
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Share2 className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none translate">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/blog/top-coin-flip-games" className="p-4 border rounded-lg hover:bg-accent transition-colors">
              <h4 className="font-semibold mb-2">Top Coin Flip Games</h4>
              <p className="text-sm text-muted-foreground">Discover fun coin flip games for parties and giveaways</p>
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
      </article>
    </>
  )
}
