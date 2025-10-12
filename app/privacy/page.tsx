import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Privacy Policy - How We Handle Your Data | Flip A Coin Free",
  description:
    "Learn how Flip A Coin Free protects your privacy. We don't track individual flips and follow strict data protection practices.",
  openGraph: {
    title: "Privacy Policy - How We Handle Your Data | Flip A Coin Free",
    description:
      "Learn how Flip A Coin Free protects your privacy. We don't track individual flips and follow strict data protection practices.",
    url: "https://flipacoinfree.com/privacy",
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://flipacoinfree.com" },
          { name: "Privacy Policy", url: "https://flipacoinfree.com/privacy" },
        ]}
      />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Our Privacy Commitment</h2>
          <p>
            At Flip A Coin Free, we take your privacy seriously. This policy explains what data we collect, how we use
            it, and your rights regarding your information.
          </p>

          <h2>What We Collect</h2>

          <h3>Individual Coin Flips</h3>
          <p>
            <strong>We do NOT collect or store individual coin flip results.</strong> All flips are processed locally in
            your browser. Your flip history is stored only on your device using browser localStorage and is never
            transmitted to our servers.
          </p>

          <h3>Aggregate Statistics</h3>
          <p>We collect anonymous aggregate data:</p>
          <ul>
            <li>Total number of flips performed (global counter)</li>
            <li>Page views and session duration (via analytics)</li>
            <li>Browser type and device category (for optimization)</li>
          </ul>
          <p>This data cannot be linked to individual users or specific flip results.</p>

          <h3>Embed Analytics</h3>
          <p>When you embed our widget on your website, we collect:</p>
          <ul>
            <li>Domain name where the widget is embedded</li>
            <li>Number of flips performed through the embed</li>
            <li>Widget installation date</li>
          </ul>
          <p>This helps us understand widget usage and improve the service. Individual flip results are not tracked.</p>

          <h3>API Usage</h3>
          <p>When you use our API, we collect:</p>
          <ul>
            <li>API key and request count (for rate limiting)</li>
            <li>Request timestamps (for abuse prevention)</li>
            <li>IP address (temporarily, for security)</li>
          </ul>
          <p>API flip results are returned to you but not stored on our servers.</p>

          <h2>Cookies</h2>
          <p>We use minimal cookies:</p>
          <ul>
            <li>
              <strong>Theme preference:</strong> Stores your dark/light mode choice
            </li>
            <li>
              <strong>Analytics:</strong> Anonymous usage tracking (you can opt out)
            </li>
          </ul>
          <p>We do not use advertising cookies or third-party tracking cookies.</p>

          <h2>Third-Party Services</h2>

          <h3>Random.org (Optional)</h3>
          <p>
            If you enable Random.org integration for enhanced randomness, flip requests are sent to Random.org's API.
            Review their privacy policy at{" "}
            <a href="https://www.random.org/privacy/" target="_blank" rel="noreferrer noopener">
              random.org/privacy
            </a>
            .
          </p>

          <h3>Analytics</h3>
          <p>
            We use privacy-focused analytics to understand how users interact with our site. No personally identifiable
            information is collected.
          </p>

          <h2>Data Storage</h2>
          <p>Your flip history is stored locally in your browser's localStorage. To clear this data:</p>
          <ul>
            <li>Click "Clear History" in the flip tool</li>
            <li>Clear your browser's localStorage</li>
            <li>Use incognito/private browsing mode</li>
          </ul>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access any data we hold about you (contact us for API usage data)</li>
            <li>Request deletion of your API key and associated data</li>
            <li>Opt out of analytics tracking</li>
            <li>Export your local flip history (via CSV export)</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Flip A Coin Free is safe for all ages. We do not knowingly collect personal information from children.
            Teachers using our classroom pack should review their school's privacy policies.
          </p>

          <h2>Security</h2>
          <p>We implement industry-standard security measures:</p>
          <ul>
            <li>HTTPS encryption for all connections</li>
            <li>Secure API key generation and storage</li>
            <li>Rate limiting to prevent abuse</li>
            <li>Regular security audits</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy occasionally. Changes will be posted on this page with an updated date.
            Continued use of Flip A Coin Free after changes constitutes acceptance of the new policy.
          </p>

          <h2>Contact Us</h2>
          <p>Questions about privacy? Contact us at:</p>
          <ul>
            <li>
              Email: <a href="mailto:privacy@flipacoinfree.com">privacy@flipacoinfree.com</a>
            </li>
            <li>
              Contact form: <a href="/contact">/contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
