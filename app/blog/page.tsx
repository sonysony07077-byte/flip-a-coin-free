import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/blog"
import { Clock, Calendar, Globe } from "lucide-react"

export const metadata = {
  title: "Blog — Coin Flip Guides, Tutorials & Research | Flip A Coin Free",
  description:
    "Learn about coin flips, probability, randomness, and decision-making. Expert guides, classroom activities, developer tutorials, and research.",
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="font-display text-4xl font-bold md:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Expert guides, tutorials, and research about coin flips, probability, and randomness.
        </p>
      </div>

      <div className="mx-auto max-w-4xl mb-12">
        <Card className="border-2 bg-primary/5 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                <strong className="font-semibold">🌐 FlipACoinFree.com is now available in 30+ languages!</strong> Enjoy
                flipping a coin online in Hindi, Urdu, French, Arabic, Japanese, and more — automatically in your
                language.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Posts */}
      <div className="mb-16">
        <h2 className="font-display text-2xl font-bold mb-6">Featured Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} min read
                    </div>
                  </div>
                  <CardTitle className="font-display text-xl leading-tight">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* All Posts */}
      <div>
        <h2 className="font-display text-2xl font-bold mb-6">All Articles</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} min read
                    </div>
                  </div>
                  <CardTitle className="font-display text-lg leading-tight">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
