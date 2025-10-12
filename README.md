# FlipACoinNow.com - The #1 Online Coin Flip Tool

A production-ready, SEO-optimized coin flip website built with Next.js, designed to outrank competitors for "flip a coin" and related keywords.

## Features

### Core Functionality
- **Realistic Coin Flip Tool** - 3D CSS animations, WebAudio API sounds, Web Speech API voice announcements
- **Multi-Flip Mode** - Flip 2-100 coins at once with progress tracking and CSV export
- **Custom Coin Designer** - Upload custom images or choose from preset designs (Gold, Silver, Bronze, USA, Euro)
- **Weighted Coin Simulator** - Educational tool for teaching probability with adjustable bias
- **Flip History** - Track last 10 flips locally with export to CSV/JSON
- **Keyboard Shortcuts** - Spacebar to flip, full keyboard navigation
- **Live Flip Counter** - Real-time global statistics with animated counters and milestone celebrations
- **Coin Selection Sync** - Custom coin selections sync across editor, preview, and widget in real-time

### Developer Features
- **REST API** - Free tier with 1,000 requests/day, supports single/multi-flip and weighted coins
- **Embeddable Widget** - iframe and JavaScript SDK for easy integration with live preview
- **Embed Analytics** - Track widget installs and usage by domain
- **Full API Documentation** - Code examples in JavaScript, Python, PHP, and cURL
- **PostMessage Communication** - Robust iframe state synchronization with acknowledgments

### SEO & Content
- **12 Original Blog Posts** - 800-1,800 words each, targeting long-tail keywords
- **Complete JSON-LD Schemas** - SoftwareApplication, WebSite, FAQPage, BlogPosting, HowTo, BreadcrumbList
- **Dynamic Sitemap** - Auto-generated with all pages and blog posts
- **Open Graph Images** - Dynamic OG image generation for social sharing
- **Robots.txt** - Properly configured for search engines

### Accessibility & PWA
- **WCAG 2.1 AA Compliant** - Keyboard navigation, ARIA labels, screen reader support
- **High Contrast Mode** - Toggle for improved visibility
- **Large Text Mode** - Increase font sizes for readability
- **Reduced Motion** - Respects user preferences and provides toggle
- **Progressive Web App** - Installable, works offline, app shortcuts
- **Skip to Content** - Keyboard accessibility feature

## Tech Stack

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Fonts**: Inter (headlines), Poppins (body)
- **Audio**: WebAudio API for synthesized sounds, Web Speech API for voice
- **State Management**: Centralized state with localStorage persistence
- **Analytics**: Privacy-focused event tracking with GA4 integration
- **Deployment**: Vercel (recommended)

## Installation

### Option 1: Deploy to Vercel (Recommended)

Click the "Publish" button in the v0 interface to deploy directly to Vercel.

### Option 2: Local Development

1. Download the project ZIP or clone from GitHub
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000)

### Option 3: Using shadcn CLI

\`\`\`bash
npx shadcn@latest init flipacoinnow
cd flipacoinnow
npm run dev
\`\`\`

## Configuration

### Environment Variables

Create a `.env.local` file:

\`\`\`env
# Optional: Random.org API for enhanced randomness
RANDOM_ORG_API_KEY=your_api_key_here

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Required for production
NEXT_PUBLIC_SITE_URL=https://FlipACoinNow.com
\`\`\`

### Audio Files (Optional)

Replace placeholder sounds in `/public/assets/sounds/`:

- `coin-spin.mp3` - Coin spinning sound (0.6-1.2s)
- `coin-drop.mp3` - Coin landing sound (0.3s)
- `head-voice.mp3` - Voice saying "Heads"
- `tail-voice.mp3` - Voice saying "Tails"
- `celebrate.mp3` - Celebration sound (0.8s)

See `AUDIO_INSTRUCTIONS.md` for detailed specifications.

## Project Structure

\`\`\`
flipacoinnow/
├── app/
│   ├── page.tsx                 # Homepage with coin flip tool
│   ├── blog/                    # Blog system with 12 posts
│   ├── embed/                   # Embed widget page
│   ├── api-docs/                # API documentation
│   ├── faq/                     # FAQ page
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── privacy/                 # Privacy policy
│   ├── terms/                   # Terms of service
│   ├── offline/                 # PWA offline page
│   ├── api/
│   │   ├── flip/                # Flip API endpoint
│   │   ├── embed/               # Embed analytics
│   │   └── stats/               # Global statistics
│   ├── layout.tsx               # Root layout with SEO
│   ├── sitemap.ts               # Dynamic sitemap
│   └── opengraph-image.tsx      # OG image generator
├── components/
│   ├── coin-flip-tool.tsx       # Main coin flip component
│   ├── multi-flip-tool.tsx      # Multi-flip mode
│   ├── custom-coin-tool.tsx     # Custom coin designer
│   ├── weighted-coin-tool.tsx   # Weighted simulator
│   ├── flip-counter.tsx         # Live flip counter with animations
│   ├── embed-code-generator.tsx # Embed widget generator
│   ├── embed-preview.tsx        # Live widget preview with sync
│   ├── json-ld.tsx              # JSON-LD schema components
│   ├── pwa-install-prompt.tsx   # PWA install banner
│   ├── accessibility-menu.tsx   # Accessibility options
│   ├── header.tsx               # Site header
│   └── footer.tsx               # Site footer
├── lib/
│   ├── blog.ts                  # Blog post utilities
│   ├── flip-state.ts            # Centralized state management
│   ├── coin-assets.ts           # Coin asset configuration
│   ├── analytics.ts             # Privacy-focused analytics
│   └── rate-limiter.ts          # Client-side rate limiting
├── public/
│   ├── robots.txt               # Search engine directives
│   ├── manifest.json            # PWA manifest
│   ├── sdk.js                   # JavaScript SDK
│   ├── data/
│   │   └── stats.json           # Fallback statistics
│   └── assets/
│       └── sounds/              # Audio files (placeholders)
└── README.md
\`\`\`

## New Features (v2.0)

### 1. Live Flip Counter
- Real-time global statistics (total flips, today's flips, active users)
- Animated number transitions with easing
- User flip tracking with localStorage
- Milestone celebrations with confetti (respects prefers-reduced-motion)
- Optimistic UI updates with server reconciliation
- "Flip Now" CTA that scrolls to the flip tool

### 2. Coin Selection Sync
- Centralized state management across all components
- Real-time sync between custom coin editor and flip tool
- Support for preset coins (USD, EUR, INR, gold, silver, bronze)
- Custom coin support with text and image uploads
- State persistence with localStorage
- Debounced updates for performance (200ms)

### 3. Live Widget Preview
- Real iframe preview instead of static placeholder
- PostMessage communication between parent and iframe
- Sync status indicators (syncing, synced, error)
- Automatic retry logic (up to 3 attempts)
- Acknowledgment system for reliable state updates
- Proper sandbox attributes for security

### 4. Analytics & Performance
- Privacy-focused event tracking (no PII)
- Client-side rate limiting (10 flips per 10 seconds)
- Debounce and throttle utilities
- GA4 integration for flip events
- Anonymous user IDs for rate limiting only
- All animations respect prefers-reduced-motion

## SEO Strategy

### Primary Keywords
- flip a coin
- flip a coin online
- coin flip
- online coin flipper
- heads or tails

### Long-tail Keywords (60+ targeted)
- flip a coin online free
- coin flip widget embed
- coin flip api free
- weighted coin simulator
- coin flip classroom activities
- flip multiple coins online
- coin flip with sound
- And 50+ more...

### Content Strategy
1. **Pillar Content**: "Ultimate Guide to Flipping a Coin Online" (1,600 words)
2. **Educational**: Classroom activities, probability experiments
3. **Technical**: API guides, embed tutorials
4. **Comparison**: Coin flip vs spinner vs dice
5. **Use Cases**: Business decisions, game nights, DnD

### Link Building Assets
1. **Classroom Pack PDF** - 10 printable activities for teachers
2. **Research Data CSV** - 1,000 flip experiment results
3. **Embeddable Widget** - Free tool for bloggers and developers
4. **WordPress Plugin** - (Future) Listed on WordPress.org

### Outreach Targets
- Education blogs and teacher forums
- DnD and RPG communities
- Game bloggers and review sites
- Developer blogs and coding tutorials
- Product Hunt, Hacker News, Reddit

## API Usage

### Single Flip

\`\`\`bash
curl https://FlipACoinNow.com/api/flip
\`\`\`

Response:
\`\`\`json
{
  "result": "heads",
  "timestamp": "2025-01-10T12:00:00Z"
}
\`\`\`

### Multi-Flip

\`\`\`bash
curl "https://FlipACoinNow.com/api/flip?count=10"
\`\`\`

### Weighted Flip

\`\`\`bash
curl "https://FlipACoinNow.com/api/flip?headsWeight=0.7"
\`\`\`

### Get Statistics

\`\`\`bash
curl https://FlipACoinNow.com/api/stats
\`\`\`

Response:
\`\`\`json
{
  "success": true,
  "data": {
    "totalFlips": 1247893,
    "todayFlips": 15234,
    "activeUsers": 42
  }
}
\`\`\`

See `/api-docs` for complete documentation.

## Embed Widget

### iframe Method

\`\`\`html
<iframe 
  src="https://FlipACoinNow.com/widget?embed=true" 
  width="400" 
  height="500" 
  frameborder="0"
  sandbox="allow-scripts allow-same-origin"
></iframe>
\`\`\`

### JavaScript SDK

\`\`\`html
<div id="coin-flip"></div>
<script src="https://FlipACoinNow.com/sdk.js"></script>
<script>
  FlipACoin.init({
    container: '#coin-flip',
    theme: 'light',
    sound: true
  })
</script>
\`\`\`

### Widget State Sync

The widget automatically syncs with custom coin selections via postMessage:

\`\`\`javascript
// Parent page sends state to iframe
iframe.contentWindow.postMessage({
  type: 'flipacoin:state',
  id: 'unique-id',
  state: { selectedCoinId: 'usd', customCoinData: null }
}, '*');

// Iframe acknowledges receipt
window.parent.postMessage({
  type: 'flipacoin:state:ack',
  id: 'unique-id',
  status: 'ok'
}, '*');
\`\`\`

## Performance

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 1.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTFB** (Time to First Byte): < 150ms

### Optimizations
- Server-side rendering for main pages
- Static generation for blog content
- Incremental Static Regeneration for dynamic counters
- Image optimization (AVIF/WebP)
- Font preloading
- Critical CSS inlining
- Lazy loading for non-critical assets
- Debounced state updates (200ms)
- Client-side rate limiting
- RequestAnimationFrame for smooth animations

## Accessibility

### WCAG 2.1 AA Compliance
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation (Tab, Enter, Spacebar)
- Focus indicators (3px outline)
- Color contrast ratios > 4.5:1
- Screen reader announcements
- Skip to content link
- Alt text for all images

### Accessibility Features
- High contrast mode toggle
- Large text mode (120% scaling)
- Reduced motion mode
- Keyboard shortcuts
- Voice announcements for results
- Live regions for dynamic content updates

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2025 FlipACoinNow. All rights reserved.

## Support

- Email: support@flipacoinnow.com
- GitHub: github.com/flipacoinnow
- Twitter: @flipacoinnow

## Roadmap

- [x] Live flip counter with animations
- [x] Coin selection sync across components
- [x] Live widget preview with postMessage
- [x] Analytics and performance optimizations
- [ ] Multi-language support (Spanish, Hindi, Urdu, Arabic)
- [ ] WordPress plugin for easy embedding
- [ ] Mobile apps (iOS/Android)
- [ ] Advanced statistics dashboard
- [ ] Team/classroom management features
- [ ] Custom sound upload
- [ ] Coin flip tournaments
- [ ] Integration with Discord/Slack bots

---

Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
