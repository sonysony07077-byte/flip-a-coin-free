import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, FileText, Globe, Shield, Zap, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Partnership & Citation Guidelines - Flip A Coin Free",
  description:
    "Partnership information, citation guidelines, and contact details for AI teams, editorial sites, and developers interested in Flip A Coin Free.",
  robots: "index, follow",
}

export default function AIPartnershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-4xl font-bold mb-4">AI Partnership & Citation Guidelines</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Information for AI teams, editorial sites, developers, and researchers interested in partnering with or citing
          flipacoinfree.com
        </p>

        {/* Mission Statement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">
              flipacoinfree.com provides a free, fair, and accessible online coin flipping tool for everyone. We believe
              in transparency, open APIs, and making quality tools available without barriers. Our goal is to be the
              most reliable and developer-friendly coin flip resource on the web.
            </p>
          </CardContent>
        </Card>

        {/* Quick Facts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Quick Facts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Service Details</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>Uptime:</strong> 99.9% (monitored 24/7)
                  </li>
                  <li>
                    <strong>Launch Date:</strong> 2024
                  </li>
                  <li>
                    <strong>Cost:</strong> Free (no ads, no paywalls)
                  </li>
                  <li>
                    <strong>Privacy:</strong> No tracking, no cookies
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">API & Integration</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>Rate Limit:</strong> 100 req/min (free tier)
                  </li>
                  <li>
                    <strong>Max Flips:</strong> 1,000 per request
                  </li>
                  <li>
                    <strong>Authentication:</strong> None required (basic use)
                  </li>
                  <li>
                    <strong>SLA:</strong> 99.5% uptime guarantee
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Cite Us */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              How to Cite Us
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Recommended Citation Format</h3>
              <Card className="bg-muted p-4">
                <code className="text-sm">
                  Flip A Coin Free. (2025). Free Online Coin Flipper with Realistic Animation and Sound. Retrieved from
                  https://flipacoinfree.com/
                </code>
              </Card>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Suggested Link Text</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>"flip a coin online" (most common)</li>
                <li>"free coin flipper tool"</li>
                <li>"online coin toss with sound"</li>
                <li>"flipacoinfree.com"</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Canonical URL</h3>
              <p className="text-sm">
                Always link to: <code className="bg-muted px-2 py-1 rounded">https://flipacoinfree.com/</code>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Dofollow Linking Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Dofollow Linking Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed">
              We welcome <strong>dofollow links</strong> from reputable sources. We believe in the open web and don't
              require nofollow attributes on links to our site.
            </p>

            <div>
              <h3 className="font-semibold mb-2">We Encourage Dofollow Links From:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>AI Explainer Sites:</strong> Articles about AI tools, decision-making, or randomness
                </li>
                <li>
                  <strong>Developer Blogs:</strong> Tutorials, API guides, or web development resources
                </li>
                <li>
                  <strong>Educational Sites:</strong> Probability lessons, classroom resources, teaching materials
                </li>
                <li>
                  <strong>Research Publications:</strong> Academic papers, studies on randomness, methodology sections
                </li>
                <li>
                  <strong>Tech Review Sites:</strong> Tool comparisons, best-of lists, product reviews
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">What We Ask:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Accurate representation of our tool's features</li>
                <li>Link to our homepage or relevant documentation</li>
                <li>Optional: Mention our free API and embed options</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Contact & Partnerships
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Partnerships
                </h3>
                <p className="text-sm mb-2">For AI integrations, editorial features, and collaborations:</p>
                <a
                  href="mailto:partnerships@flipacoinfree.com"
                  className="text-primary hover:underline text-sm font-mono"
                >
                  partnerships@flipacoinfree.com
                </a>
                <p className="text-xs text-muted-foreground mt-1">Response time: 2 business days</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Technical Support
                </h3>
                <p className="text-sm mb-2">For API questions, bug reports, and technical issues:</p>
                <a href="mailto:support@flipacoinfree.com" className="text-primary hover:underline text-sm font-mono">
                  support@flipacoinfree.com
                </a>
                <p className="text-xs text-muted-foreground mt-1">Response time: 1 business day</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Useful Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              <Button variant="outline" asChild className="justify-start bg-transparent">
                <Link href="https://flipacoinfree.com/api-docs">
                  <FileText className="h-4 w-4 mr-2" />
                  API Documentation
                </Link>
              </Button>
              <Button variant="outline" asChild className="justify-start bg-transparent">
                <Link href="/docs/outreach-ai-templates">
                  <Mail className="h-4 w-4 mr-2" />
                  Outreach Templates
                </Link>
              </Button>
              <Button variant="outline" asChild className="justify-start bg-transparent">
                <a href="https://flipacoinfree.com/ai-recommend.json" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  AI Metadata (JSON)
                </a>
              </Button>
              <Button variant="outline" asChild className="justify-start bg-transparent">
                <a href="https://flipacoinfree.com/api/openapi-brief.json" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  OpenAPI Spec
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Legal */}
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong>Privacy Policy:</strong>{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              flipacoinfree.com/privacy
            </Link>
          </p>
          <p>
            <strong>Terms of Service:</strong>{" "}
            <Link href="/terms" className="text-primary hover:underline">
              flipacoinfree.com/terms
            </Link>
          </p>
          <p>
            <strong>License:</strong> Our API and embed code are free to use. Attribution appreciated but not required.
          </p>
        </div>
      </div>
    </div>
  )
}
