"use client"

import type React from "react"

import { useState } from "react"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import { Mail, MessageSquare, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24-48 hours.",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://flipacoinfree.com" },
          { name: "Contact", url: "https://flipacoinfree.com/contact" },
        ]}
      />

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Choose your preferred way to get in touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <Mail className="h-8 w-8 mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-3">For general inquiries and support</p>
                <a href="mailto:support@flipacoinfree.com" className="text-sm text-primary hover:underline">
                  support@flipacoinfree.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <MessageSquare className="h-8 w-8 mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Feedback</h3>
                <p className="text-sm text-muted-foreground mb-3">Share your ideas and suggestions</p>
                <a href="mailto:feedback@flipacoinfree.com" className="text-sm text-primary hover:underline">
                  feedback@flipacoinfree.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Github className="h-8 w-8 mb-3 text-primary" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground mb-3">Report bugs and contribute</p>
                <a
                  href="https://github.com/flipacoinfree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  github.com/flipacoinfree
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Frequently Asked Topics</h2>

          <h3>For Teachers</h3>
          <p>
            Interested in using Flip A Coin Free in your classroom? Download our free Classroom Pack or contact us for
            bulk licensing and custom features.
          </p>

          <h3>For Developers</h3>
          <p>
            Need help with the API or embed widget? Check our <a href="/api-docs">API Documentation</a> first. For
            technical support, email <a href="mailto:dev@flipacoinfree.com">dev@flipacoinfree.com</a>.
          </p>

          <h3>For Partnerships</h3>
          <p>
            Interested in partnering with Flip A Coin Free? We're open to collaborations with educational platforms,
            gaming sites, and developer tools. Email{" "}
            <a href="mailto:partnerships@flipacoinfree.com">partnerships@flipacoinfree.com</a>.
          </p>

          <h3>For Press & Media</h3>
          <p>
            Media inquiries and press kit requests: <a href="mailto:press@flipacoinfree.com">press@flipacoinfree.com</a>
          </p>

          <h2>Response Time</h2>
          <p>
            We typically respond within 24-48 hours during business days. For urgent issues, please mark your email
            subject with [URGENT].
          </p>
        </div>
      </div>
    </>
  )
}
