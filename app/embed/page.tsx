import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmbedCodeGenerator } from "@/components/embed-code-generator"
import { EmbedPreview } from "@/components/embed-preview"
import { Code, Zap, BarChart3, Shield } from "lucide-react"

export const metadata = {
  title: "Embed Coin Flip Widget | Flip A Coin Free",
  description:
    "Add a free coin flip widget to your website with a simple embed code. Customizable, responsive, and analytics included.",
}

export default function EmbedPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="font-display text-4xl font-bold md:text-5xl">Embed Coin Flip Widget</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Add a free, customizable coin flip widget to your website. No signup required, works everywhere.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-4 mb-12">
        <Card>
          <CardContent className="pt-6">
            <Code className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Easy Integration</h3>
            <p className="text-sm text-muted-foreground">Copy-paste embed code. Works with any CMS.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <Zap className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">Optimized for performance. No slowdowns.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <BarChart3 className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Analytics Included</h3>
            <p className="text-sm text-muted-foreground">Track flips and engagement on your site.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Privacy First</h3>
            <p className="text-sm text-muted-foreground">No tracking cookies. GDPR compliant.</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Code Generator */}
        <div>
          <EmbedCodeGenerator />
        </div>

        {/* Preview */}
        <div>
          <EmbedPreview />
        </div>
      </div>

      {/* Integration Guides */}
      <div className="mt-16">
        <h2 className="font-display text-3xl font-bold text-center mb-8">Integration Guides</h2>
        <Tabs defaultValue="html" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="wordpress">WordPress</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="blogger">Blogger</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>HTML / Static Sites</CardTitle>
                <CardDescription>Add the embed code anywhere in your HTML</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`<!-- Add this where you want the coin flip to appear -->
<iframe 
  src="https://flipacoinfree.com/widget" 
  width="400" 
  height="500" 
  frameborder="0"
  title="Coin Flip Widget"
></iframe>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wordpress" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>WordPress</CardTitle>
                <CardDescription>Add to any post or page using the HTML block</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Edit your post or page in WordPress</li>
                  <li>Add a new block and select "Custom HTML"</li>
                  <li>Paste the embed code from above</li>
                  <li>Publish or update your page</li>
                </ol>
                <p className="text-sm text-muted-foreground">
                  Alternatively, install our free WordPress plugin for easier management.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>React / Next.js</CardTitle>
                <CardDescription>Use as a component in your React app</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import React from 'react';

export function CoinFlipWidget() {
  return (
    <iframe 
      src="https://flipacoinfree.com/widget" 
      width="400" 
      height="500" 
      frameBorder="0"
      title="Coin Flip Widget"
      style={{ border: 'none' }}
    />
  );
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blogger" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Blogger</CardTitle>
                <CardDescription>Add to your Blogger posts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Go to your Blogger dashboard</li>
                  <li>Create or edit a post</li>
                  <li>Switch to HTML view (not Compose)</li>
                  <li>Paste the embed code</li>
                  <li>Switch back to Compose to see the preview</li>
                  <li>Publish your post</li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
