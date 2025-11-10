import type { Metadata } from "next"
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/json-ld"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Flip A Coin Free",
  description: "Find answers to common questions about our online coin flip tool, embed widget, API, and more.",
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Flip A Coin Free",
    description: "Find answers to common questions about our online coin flip tool, embed widget, API, and more.",
    url: "https://flipacoinfree.com/faq",
    type: "website",
  },
}

const faqs = [
  {
    question: "Is the coin flip truly random?",
    answer:
      "Yes! Our random coin flip uses JavaScript's crypto.getRandomValues() which provides cryptographically secure random numbers for fair heads or tails flip results. For even more randomness, you can enable the Random.org API integration in settings, which uses atmospheric noise for true randomness in every coin toss online instant.",
  },
  {
    question: "Can I use this for important decisions?",
    answer:
      "While our flip a coin decision maker is mathematically fair and random, we recommend using it for casual decisions, games, and educational purposes. For critical decisions, consider multiple factors beyond chance when you flip coin for decision.",
  },
  {
    question: "How do I embed the coin flip on my website?",
    answer:
      "Visit our Embed page to get the embed code for our virtual coin toss. You can use either an iframe or our JavaScript SDK. The flip a coin widget is fully customizable with coin flip widget html and works on WordPress, Blogger, and any HTML site.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Flip A Coin Free is a Progressive Web App (PWA), which means you can install our coin flip app offline on your phone like a native app. Just visit the site on your mobile browser and tap 'Add to Home Screen' for quick access to flip coin online.",
  },
  {
    question: "Can I customize the coin design?",
    answer:
      "Yes! Use the Custom Coin tab to upload your own images or choose from preset designs including Gold, Silver, Bronze, USA Quarter, Euro Coin, US Dollar, and Indian Rupee. You can flip a dollar coin, euro coin flip, or flip a indian coin with realistic designs. Perfect for creating your own customizable coin flip with heads and tails combinations.",
  },
  {
    question: "What is the weighted coin simulator?",
    answer:
      "The weighted coin simulator lets you adjust the probability of heads vs tails for educational purposes. It's perfect for teaching probability, statistics, and demonstrating bias in coin toss experiments. Great for flip coin two options with custom probabilities.",
  },
  {
    question: "How do I use the API?",
    answer:
      "Visit our API Documentation page for complete details on our flip coin randomizer API. The API is free for up to 1,000 requests per day. You can flip single or multiple coins and get JSON responses for your random coin flip needs and coin flip online app integration.",
  },
  {
    question: "Can I export my flip history?",
    answer:
      "Yes! Click the 'Export CSV' button in the history panel to download your coin flip results. You can also export multi-flip results for data analysis of your heads tails online outcomes. Perfect for bulk coin flips and flip a coin 100 times experiments.",
  },
  {
    question: "Is this tool accessible?",
    answer:
      "We follow WCAG 2.1 AA guidelines for our simple coin flip tool. The tool is keyboard-navigable, includes ARIA labels, supports screen readers, and offers a high-contrast accessibility mode for all users to toss a coin online.",
  },
  {
    question: "Do you collect my flip data?",
    answer:
      "No. All coin flips are processed locally in your browser. We only collect anonymous aggregate statistics (total flips count) and embed analytics (which domains use our widget). Read our Privacy Policy for details about our coin toss online free tool.",
  },
  {
    question: "Can teachers use this in the classroom?",
    answer:
      "Yes! We offer a free Classroom Pack with 10 printable activities for teaching probability with our virtual coin. The coin flip game for kids is perfect for teaching probability, decision-making, and random sampling. Visit our Classroom page to download free resources for heads or tails online coin toss activities.",
  },
  {
    question: "Why do I need to enable sound manually?",
    answer:
      "Modern browsers require user interaction before playing audio. This prevents unwanted autoplay. Just click the coin or flip button once to enable flip coin with sound for your realistic coin flip experience.",
  },
  {
    question: "Can I flip a coin with a friend online?",
    answer:
      "Yes! Share your screen or use our embed widget to flip a coin online with a friend. The results are instant and fair for both parties. Perfect for coin toss online with friend scenarios and remote decision making.",
  },
  {
    question: "What makes this different from Google coin flip?",
    answer:
      "While you can flip a coin google or use google flip coin, our tool offers more features: customizable coins (dollar, euro, rupee), weighted probabilities, multi-flip options, export history, embeddable widget, and a free API. We provide a more comprehensive coin flipper experience than toss google.",
  },
]

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://flipacoinfree.com" },
          { name: "FAQ", url: "https://flipacoinfree.com/faq" },
        ]}
      />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">Everything you need to know about Flip A Coin Free</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-6 bg-muted rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            Can't find the answer you're looking for? Reach out to our support team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Contact Support
          </a>
        </div>
      </div>
    </>
  )
}
