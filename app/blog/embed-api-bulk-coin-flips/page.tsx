import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getPostBySlug } from "@/lib/blog"
import ReactMarkdown from "react-markdown"
import { Share2, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Embed & API: Integrate Coin Flips Into Apps & Giveaways",
  description:
    "Integrate FlipACoinFree into sites and apps — embed code, API examples, bulk flips for contests and sports, plus tips for fair results and logging.",
  openGraph: {
    title: "Embed & API: Integrate Coin Flips Into Apps & Giveaways",
    description:
      "Integrate FlipACoinFree into sites and apps — embed code, API examples, bulk flips for contests and sports, plus tips for fair results and logging.",
    url: "https://flipacoinfree.com/blog/embed-api-bulk-coin-flips",
    siteName: "FlipACoinFree",
    images: [
      {
        url: "https://flipacoinfree.com/og/embed-api-bulk-coin-flips.jpg",
        width: 1200,
        height: 630,
        alt: "Flip a coin — embed and API integration example",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Embed & API: Integrate Coin Flips Into Apps & Giveaways",
    description:
      "Integrate FlipACoinFree into sites and apps — embed code, API examples, bulk flips for contests and sports, plus tips for fair results and logging.",
    images: ["https://flipacoinfree.com/og/embed-api-bulk-coin-flips.jpg"],
  },
  alternates: {
    canonical: "https://flipacoinfree.com/blog/embed-api-bulk-coin-flips",
  },
}

export default function EmbedAPIBulkCoinFlipsPage() {
  const post = getPostBySlug("embed-api-bulk-coin-flips")

  if (!post) {
    return <div>Post not found</div>
  }

  const shareUrl = "https://flipacoinfree.com/blog/embed-api-bulk-coin-flips"
  const shareTitle = "Embed & API: Integrate Coin Flips Into Apps & Giveaways"

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
              "@id": "https://flipacoinfree.com/blog/embed-api-bulk-coin-flips",
            },
            headline: "Embed & API: Integrate Coin Flips Into Apps & Giveaways",
            description:
              "Integrate FlipACoinFree into sites and apps — embed code, API examples, bulk flips for contests and sports, plus tips for fair results and logging.",
            image: ["https://flipacoinfree.com/og/embed-api-bulk-coin-flips.jpg"],
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
              "coin flip com, coin flip custom, coin flip API, embed coin flip widget, coin flip yes no, coin spin online, digital toss coin, flip a coin site, heads or tails online, coin flip website",
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
                name: "How do I embed the coin flip widget on my website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use the iframe snippet or JavaScript SDK; customize theme and sound parameters. Visit our embed documentation for detailed instructions.",
                },
              },
              {
                "@type": "Question",
                name: "Does FlipACoinFree provide an API for developers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — sample endpoints include /api/flip and /api/batchflip; see API docs for keys and limits.",
                },
              },
              {
                "@type": "Question",
                name: "Can I run bulk flips for giveaways and export results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — use the batchflip endpoint or the admin export to CSV for audits.",
                },
              },
            ],
          }),
        }}
      />

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8">
          <Image
            src="/og/embed-api-bulk-coin-flips.jpg"
            alt="Flip a coin — embed and API integration example"
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
            <Link
              href="/blog/custom-weighted-coin-flips"
              className="p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <h4 className="font-semibold mb-2">Custom & Weighted Coin Flips</h4>
              <p className="text-sm text-muted-foreground">Learn how to personalize your coin flips</p>
            </Link>
            <Link
              href="/blog/digital-coin-flip-guide"
              className="p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <h4 className="font-semibold mb-2">Digital Coin Flip Guide</h4>
              <p className="text-sm text-muted-foreground">Understand how online coin flips work</p>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
