import type { Metadata } from "next"
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/json-ld"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Flip A Coin Free",
  description: "Find answers to common questions about our online coin flip tool, embed widget, API, and more.",
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Flip A Coin Free",
    description: "Find answers to common questions about our online coin flip tool, embed widget, API, and more.",
    url: "https://flipacoinfree.com/faq",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flip A Coin Free - FAQ",
      },
    ],
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
  {
    question: "How many times should I flip a coin to get accurate results?",
    answer:
      "Great question! For most casual decisions, one flip is enough. But if you're studying probability or want to see the law of averages in action, try flipping 100 or even 1,000 times. You'll notice the results get closer to 50/50 the more you flip. Our multi-flip feature makes this super easy - just enter how many flips you want and hit go!",
  },
  {
    question: "Can a coin land on its edge?",
    answer:
      "In real life, yes, but it's incredibly rare - about 1 in 6,000 flips! Our digital coin flipper focuses on the two main outcomes (heads and tails) since that's what people use it for. But fun fact: if you're flipping a nickel on a soft surface, your odds of an edge landing go up slightly. Physics is wild!",
  },
  {
    question: "Is flipping a coin really 50/50?",
    answer:
      "In theory, yes! A fair coin has equal probability for heads and tails. However, real-world physics can introduce tiny biases - like how you flip it, air resistance, or the surface it lands on. Our digital coin flipper eliminates these physical factors and uses cryptographic randomness to ensure a true 50/50 chance every single time.",
  },
  {
    question: "What's the probability of getting 10 heads in a row?",
    answer:
      "The odds are pretty slim - about 1 in 1,024 (or 0.098%). Each individual flip is still 50/50, but getting the same result 10 times in a row is rare. Want to test it yourself? Use our multi-flip feature and see how long it takes to get a streak! It's a fun way to understand probability.",
  },
  {
    question: "Can I use this for sports coin toss?",
    answer:
      "Many people use our tool for sports coin tosses - whether it's deciding who kicks off in soccer, who bats first in cricket, or settling any sports dispute. The results are instant, fair, and you can even customize the coin to match your team colors or logo. Perfect for virtual games or when you don't have a physical coin handy.",
  },
  {
    question: "Does the coin flip work offline?",
    answer:
      "Yes! Once you've loaded the page, our Progressive Web App (PWA) works offline. You can flip coins even without an internet connection. Just add it to your home screen on mobile, and you'll have instant access anytime, anywhere - no data required after the initial load.",
  },
  {
    question: "How do I flip a coin 100 times quickly?",
    answer:
      "Easy! Just use our multi-flip feature. Enter '100' in the number of flips field and click the flip button. You'll get all 100 results instantly, along with a breakdown showing how many heads and tails you got. You can even export the results to a CSV file for analysis. Perfect for probability experiments or homework!",
  },
  {
    question: "Can I flip multiple coins at the same time?",
    answer:
      "Yes! Our multi-flip feature lets you flip multiple coins simultaneously. This is great for games, probability experiments, or when you need to make multiple random decisions at once. You can flip anywhere from 2 to 10,000 coins in a single click and see all the results instantly.",
  },
  {
    question: "What's the best coin flip app?",
    answer:
      "We might be biased, but we think ours is pretty great! Unlike most coin flip apps, we offer realistic physics, authentic sound effects, customizable coins, multi-flip options, export features, and even an API - all completely free. Plus, it works in your browser, so no download required. Give it a try and see for yourself!",
  },
  {
    question: "How do I make a weighted coin flip?",
    answer:
      "Head to our Weighted Coin tab! You can adjust the probability slider to favor heads or tails. For example, set it to 70% heads if you want heads to come up more often. This is perfect for teaching probability concepts, simulating biased scenarios, or just having fun with the odds. The tool shows you the exact percentage for transparency.",
  },
  {
    question: "Can I flip a coin to make a decision between more than two options?",
    answer:
      "While a traditional coin flip is for two options, you can get creative! Flip multiple times and assign different outcomes to different combinations. Or, use our multi-flip feature and assign ranges of results to different choices. For example, if you have 4 options, flip twice and use the combination of results to decide.",
  },
  {
    question: "Is there a coin flip simulator for probability homework?",
    answer:
      "Yes! Our tool is perfect for probability homework and experiments. You can flip coins hundreds or thousands of times, export the data to CSV for analysis, and even use the weighted coin feature to study biased probabilities. Teachers love it because it's free, easy to use, and helps students visualize probability concepts in real-time.",
  },
  {
    question: "Why does my coin flip history reset?",
    answer:
      "Your flip history is stored locally in your browser's storage. If you clear your browser data or use incognito/private mode, the history will reset. To keep a permanent record, use the 'Export CSV' button to download your flip history before clearing your browser data. This way, you'll always have a backup!",
  },
  {
    question: "Can I share my coin flip results?",
    answer:
      "Yes! After flipping, you can share your results on social media using our share buttons (Twitter, Facebook, LinkedIn, WhatsApp, and Reddit). You can also copy the link to share with friends. For multi-flip results, export them as a CSV file and share the data however you like. Perfect for settling debates or showing off lucky streaks!",
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to know about Flip A Coin Free - from how it works to advanced features
          </p>
        </div>

        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto" />

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-card hover:bg-accent/5 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold text-base md:text-lg pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 pt-2 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-xl border shadow-sm text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <MessageCircle className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto text-pretty">
            Can't find the answer you're looking for? Our support team is here to help you out.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
          >
            Contact Support
          </a>
        </div>
      </div>
    </>
  )
}
