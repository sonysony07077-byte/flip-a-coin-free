import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Terms of Service | Flip A Coin Free",
  description: "Terms of service for using Flip A Coin Free, including our coin flip tool, API, and embed widget.",
  openGraph: {
    title: "Terms of Service | Flip A Coin Free",
    description: "Terms of service for using Flip A Coin Free.",
    url: "https://flipacoinfree.com/terms",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://flipacoinfree.com" },
          { name: "Terms of Service", url: "https://flipacoinfree.com/terms" },
        ]}
      />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using Flip A Coin Free ("the Service"), you accept and agree to be bound by these Terms of
            Service. If you do not agree to these terms, please do not use the Service.
          </p>

          <h2>Description of Service</h2>
          <p>
            Flip A Coin Free provides an online coin flipping tool, embeddable widget, and developer API. The Service
            uses cryptographic random number generation to simulate fair coin flips.
          </p>

          <h2>Use of Service</h2>

          <h3>Permitted Use</h3>
          <p>You may use the Service for:</p>
          <ul>
            <li>Personal decision-making and entertainment</li>
            <li>Educational purposes in classrooms and training</li>
            <li>Integration into websites via our embed widget</li>
            <li>Application development using our API</li>
            <li>Games, contests, and recreational activities</li>
          </ul>

          <h3>Prohibited Use</h3>
          <p>You may NOT use the Service for:</p>
          <ul>
            <li>Gambling or betting where real money is involved</li>
            <li>Any illegal activities or purposes</li>
            <li>Circumventing API rate limits or security measures</li>
            <li>Scraping, automated access, or abuse of the Service</li>
            <li>Reselling or redistributing the Service as your own</li>
            <li>Critical decisions where human life, safety, or significant financial loss could occur</li>
          </ul>

          <h2>API Terms</h2>
          <p>
            Use of our API is subject to rate limits (1,000 requests per day for free tier). Abuse or excessive use may
            result in API key suspension. Commercial use requires contacting us for a commercial license.
          </p>

          <h2>Embed Widget Terms</h2>
          <p>
            Our embed widget is free to use on any website. You must not modify the widget code or remove attribution
            links. We reserve the right to collect anonymous analytics on widget usage.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content, code, designs, and trademarks on Flip A Coin Free are owned by Flip A Coin Free or licensed to
            us. You may not copy, reproduce, or create derivative works without permission.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. While we strive for accuracy and fairness in
            our random number generation, we make no guarantees about the Service's availability, accuracy, or
            suitability for any particular purpose.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Flip A Coin Free and its operators shall not be liable for any damages arising from use of the Service,
            including but not limited to direct, indirect, incidental, or consequential damages. Use the Service at your
            own risk.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Flip A Coin Free from any claims, damages, or expenses arising from
            your use of the Service or violation of these Terms.
          </p>

          <h2>Changes to Service</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue the Service at any time without notice. We may also
            update these Terms periodically.
          </p>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your access to the Service immediately, without notice, for conduct that
            violates these Terms or is harmful to other users or the Service.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable laws, without regard to
            conflict of law provisions.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Contact us at{" "}
            <a href="mailto:legal@flipacoinfree.com">legal@flipacoinfree.com</a>
          </p>
        </div>
      </div>
    </>
  )
}
