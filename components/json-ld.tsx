export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Flip a Coin Free",
    url: "https://flipacoinfree.com/",
    description:
      "Flip a Coin Free lets you toss a coin online instantly with realistic animations. Now available in 30+ languages worldwide.",
    publisher: {
      "@type": "Organization",
      name: "FlipACoinFree",
      url: "https://flipacoinfree.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://flipacoinfree.com/logo.png",
      },
    },
    inLanguage: [
      "en",
      "hi",
      "ur",
      "es",
      "fr",
      "de",
      "ar",
      "pt",
      "ru",
      "ja",
      "zh-CN",
      "zh-TW",
      "it",
      "ko",
      "tr",
      "id",
      "th",
      "vi",
      "bn",
      "fa",
      "ms",
      "tl",
      "pl",
      "nl",
      "ro",
      "el",
      "cs",
      "sv",
      "hu",
      "uk",
      "ta",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://flipacoinfree.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    alternateName: "Flip a Coin Online",
    keywords: ["flip a coin", "coin toss online", "virtual coin flip", "head or tail", "flip coin simulator"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function SoftwareApplicationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Flip A Coin Free",
    url: "https://flipacoinfree.com",
    description:
      "Flip a coin online instantly with realistic sound, animation and exportable results. Free, fair, embeddable coin flip widget and developer API.",
    applicationCategory: "Game",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1247",
    },
    author: {
      "@type": "Organization",
      name: "Flip A Coin Free",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Flip A Coin Free",
    url: "https://flipacoinfree.com",
    logo: "https://flipacoinfree.com/logo.png",
    description: "The #1 online coin flip tool with realistic animations, sounds, and embeddable widgets.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@flipacoinfree.com",
    },
    sameAs: ["https://twitter.com/flipacoinfree", "https://github.com/flipacoinfree"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQJsonLd({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function HowToJsonLd({
  name,
  description,
  steps,
}: {
  name: string
  description: string
  steps: Array<{ name: string; text: string }>
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
