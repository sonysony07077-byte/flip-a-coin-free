import { Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MultilingualSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 ring-2 ring-primary/20">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h2 className="font-display text-2xl font-bold mb-3 flex items-center gap-2">
                    30+ Multi Language Support
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    FlipACoinFree.com now supports 30+ languages worldwide with automatic language detection and instant
                    translation. Whether you're in India, USA, Germany, France, Japan, or anywhere else, enjoy flipping
                    a coin in your native language—Hindi, Urdu, Spanish, Arabic, Japanese, Chinese, and more.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
