# Deployment Guide

## Vercel Deployment (Recommended)

### One-Click Deploy

1. Click "Publish" in the v0 interface
2. Connect your GitHub account
3. Configure environment variables (optional)
4. Deploy

### Manual Vercel Deployment

1. Install Vercel CLI:
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. Deploy:
   \`\`\`bash
   vercel
   \`\`\`

3. Follow prompts to link project

4. Set environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add `RANDOM_ORG_API_KEY` (optional)
   - Add `NEXT_PUBLIC_GA_ID` (optional)

### Custom Domain Setup

1. Go to Project Settings > Domains
2. Add `flipacoinfree.com`
3. Configure DNS:
   \`\`\`
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   \`\`\`

## Alternative Hosting

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Site Settings

### Cloudflare Pages

1. Connect GitHub repository
2. Framework preset: Next.js
3. Build command: `npx @cloudflare/next-on-pages@1`
4. Build output directory: `.vercel/output/static`

### Self-Hosted (Node.js)

1. Build the project:
   \`\`\`bash
   npm run build
   \`\`\`

2. Start production server:
   \`\`\`bash
   npm start
   \`\`\`

3. Use PM2 for process management:
   \`\`\`bash
   npm i -g pm2
   pm2 start npm --name "flipacoinfree" -- start
   pm2 save
   pm2 startup
   \`\`\`

4. Configure Nginx reverse proxy:
   \`\`\`nginx
   server {
       listen 80;
       server_name flipacoinfree.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   \`\`\`

## Post-Deployment Checklist

### SEO Setup

- [ ] Submit sitemap to Google Search Console
  - URL: `https://flipacoinfree.com/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify domain ownership in both consoles
- [ ] Set up Google Analytics (if using)
- [ ] Configure Google Tag Manager (optional)
- [ ] Test structured data with Google Rich Results Test
- [ ] Check mobile-friendliness with Google Mobile-Friendly Test

### Performance

- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Test Core Web Vitals in PageSpeed Insights
- [ ] Enable Brotli compression
- [ ] Configure CDN caching headers
- [ ] Test on slow 3G connection
- [ ] Verify image optimization (AVIF/WebP)

### Security

- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Configure HSTS header
- [ ] Set up CSP (Content Security Policy)
- [ ] Enable rate limiting on API endpoints
- [ ] Review CORS settings
- [ ] Scan for vulnerabilities with Snyk

### Monitoring

- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure error tracking (Sentry)
- [ ] Set up performance monitoring (Vercel Analytics)
- [ ] Create status page (optional)
- [ ] Set up alerts for downtime

### Marketing

- [ ] Submit to Product Hunt
- [ ] Post on Hacker News (Show HN)
- [ ] Share on Reddit (r/InternetIsBeautiful, r/webdev)
- [ ] Tweet launch announcement
- [ ] Email outreach to education blogs
- [ ] Contact teacher resource sites
- [ ] Reach out to DnD/gaming communities

## Environment Variables

### Required for Production

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://flipacoinfree.com
\`\`\`

### Optional

\`\`\`env
# Enhanced randomness (Random.org)
RANDOM_ORG_API_KEY=your_api_key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=flipacoinfree.com

# Error tracking
SENTRY_DSN=your_sentry_dsn

# Email (for contact form)
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your_sendgrid_api_key
\`\`\`

## Troubleshooting

### Build Errors

**Error**: `Module not found: Can't resolve '@/components/...'`
- **Fix**: Ensure `tsconfig.json` has correct path aliases

**Error**: `Could not resolve value for theme function`
- **Fix**: Use `var(--color-xxx)` instead of `theme()` in CSS

### Runtime Errors

**Error**: Audio not playing
- **Fix**: User must interact with page first (browser policy)

**Error**: PWA not installing
- **Fix**: Ensure HTTPS is enabled and manifest.json is accessible

### Performance Issues

**Slow LCP**
- Check image sizes and formats
- Ensure fonts are preloaded
- Verify CDN is working

**High CLS**
- Add explicit width/height to images
- Avoid injecting content above fold
- Use CSS containment

## Scaling

### High Traffic Handling

1. **Enable ISR** (Incremental Static Regeneration):
   \`\`\`tsx
   export const revalidate = 3600 // 1 hour
   \`\`\`

2. **Use Edge Functions** for API routes:
   \`\`\`tsx
   export const runtime = 'edge'
   \`\`\`

3. **Implement Redis caching** for API responses:
   \`\`\`bash
   npm install @upstash/redis
   \`\`\`

4. **Add rate limiting**:
   \`\`\`bash
   npm install @upstash/ratelimit
   \`\`\`

### Database (if needed)

For storing flip statistics:

1. **Vercel KV** (Redis):
   \`\`\`bash
   vercel env pull
   \`\`\`

2. **Supabase** (PostgreSQL):
   \`\`\`bash
   npm install @supabase/supabase-js
   \`\`\`

3. **PlanetScale** (MySQL):
   \`\`\`bash
   npm install @planetscale/database
   \`\`\`

## Backup & Recovery

1. **Code**: Backed up on GitHub
2. **Environment Variables**: Export from Vercel dashboard
3. **Analytics Data**: Export from Google Analytics monthly
4. **User Data**: Not stored (privacy-first)

## Support

For deployment issues:
- Email: dev@flipacoinfree.com
- GitHub Issues: github.com/flipacoinfree/issues
- Vercel Support: vercel.com/support
