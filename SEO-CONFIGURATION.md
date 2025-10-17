# SEO & Domain Configuration Guide

## ✅ Current Configuration Status

### 1. Domain Redirects (vercel.json)
**Status:** ✅ Configured

The `vercel.json` file includes a permanent 301 redirect from `www.flipacoinfree.com` to `https://flipacoinfree.com`:

\`\`\`json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [{ "type": "host", "value": "www.flipacoinfree.com" }],
      "destination": "https://flipacoinfree.com/$1",
      "permanent": true
    }
  ]
}
\`\`\`

**What this does:**
- All traffic from www subdomain redirects to root domain
- Uses 301 (permanent) redirect for SEO benefits
- Preserves the full URL path during redirect
- Prevents duplicate content issues in Google Search

---

### 2. Canonical URLs (app/layout.tsx)
**Status:** ✅ Configured

The layout uses Next.js Metadata API to automatically generate canonical tags:

\`\`\`typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://flipacoinfree.com"),
  alternates: {
    canonical: "https://flipacoinfree.com",
  },
  // ... other metadata
}
\`\`\`

**What this does:**
- Automatically generates `<link rel="canonical" href="https://flipacoinfree.com/[current-page]" />` for every page
- Tells search engines the preferred URL for each page
- Prevents duplicate content penalties
- Works dynamically for all routes (/, /blog, /faq, etc.)

**Example output in HTML:**
\`\`\`html
<link rel="canonical" href="https://flipacoinfree.com/" />
<link rel="canonical" href="https://flipacoinfree.com/blog" />
<link rel="canonical" href="https://flipacoinfree.com/faq" />
\`\`\`

---

### 3. Sitemap (app/sitemap.ts)
**Status:** ✅ Configured

Dynamic sitemap generation with correct domain:

\`\`\`typescript
const baseUrl = "https://flipacoinfree.com"
\`\`\`

**Accessible at:** `https://flipacoinfree.com/sitemap.xml`

**What this includes:**
- Homepage (priority 1.0)
- Main pages (embed, api-docs, blog, faq, about, contact, privacy)
- All blog posts with individual lastModified dates
- Proper change frequencies and priorities

---

### 4. Robots.txt (public/robots.txt)
**Status:** ✅ Configured

\`\`\`
User-agent: *
Allow: /

Sitemap: https://flipacoinfree.com/sitemap.xml
Host: flipacoinfree.com
\`\`\`

**What this does:**
- Allows all search engines to crawl the site
- Points to the sitemap location
- Specifies the preferred host (non-www)
- Blocks sensitive directories (/admin, /private, etc.)

---

### 5. Structured Data (app/layout.tsx)
**Status:** ✅ Configured

JSON-LD schema markup for organization:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FlipACoinFree",
  "url": "https://flipacoinfree.com/",
  "logo": "https://flipacoinfree.com/favicon/favicon-512x512.png",
  "sameAs": ["https://twitter.com/flipacoinfree"]
}
\`\`\`

---

## 🚀 Vercel Deployment Checklist

### In Vercel Dashboard (vercel.com/dashboard)

1. **Go to Project Settings → Domains**
   
2. **Set Primary Domain:**
   - Primary: `flipacoinfree.com` ✅
   - Alias: `www.flipacoinfree.com` (for redirect)

3. **Verify DNS Settings:**
   - A Record: `76.76.21.21` (Vercel)
   - CNAME for www: `cname.vercel-dns.com`

4. **SSL Certificate:**
   - Should show "Valid" for both domains
   - Auto-renewed by Vercel

---

## 📊 Expected SEO Results

After deployment, you should see:

### Google Search Console
- Only `https://flipacoinfree.com` URLs indexed
- No duplicate content warnings
- Canonical tags properly recognized
- Sitemap successfully processed

### Testing Tools
1. **Google Rich Results Test:** https://search.google.com/test/rich-results
   - Should show valid Organization schema

2. **Canonical Tag Checker:**
   \`\`\`bash
   curl -I https://www.flipacoinfree.com
   # Should return: Location: https://flipacoinfree.com/
   \`\`\`

3. **View Page Source:**
   - Look for: `<link rel="canonical" href="https://flipacoinfree.com/" />`
   - Should appear in `<head>` section

---

## 🔍 Verification Steps

### 1. Test WWW Redirect
\`\`\`bash
curl -I https://www.flipacoinfree.com
\`\`\`
Expected response:
\`\`\`
HTTP/2 301
location: https://flipacoinfree.com/
\`\`\`

### 2. Check Canonical Tags
Visit any page and view source (Ctrl+U):
- Homepage: `<link rel="canonical" href="https://flipacoinfree.com/" />`
- Blog: `<link rel="canonical" href="https://flipacoinfree.com/blog" />`
- FAQ: `<link rel="canonical" href="https://flipacoinfree.com/faq" />`

### 3. Verify Sitemap
Visit: https://flipacoinfree.com/sitemap.xml
- Should show XML with all pages
- All URLs should use `https://flipacoinfree.com`

### 4. Check Robots.txt
Visit: https://flipacoinfree.com/robots.txt
- Should reference correct sitemap URL
- Should specify correct host

---

## 📈 SEO Benefits

With this configuration, you get:

1. **No Duplicate Content** - Single canonical domain
2. **Link Equity Consolidation** - All backlinks point to one domain
3. **Better Crawl Budget** - Search engines don't waste time on duplicates
4. **Improved Rankings** - Clear signals to search engines
5. **Professional Setup** - Follows Google's best practices

---

## 🛠️ Maintenance

### When Adding New Pages
- Canonical tags are automatic (via metadataBase)
- Sitemap updates automatically (via sitemap.ts)
- No manual configuration needed

### When Changing Domain
1. Update `metadataBase` in `app/layout.tsx`
2. Update `baseUrl` in `app/sitemap.ts`
3. Update `public/robots.txt`
4. Update `vercel.json` redirect rules
5. Update Vercel project domain settings

---

## 📞 Support Resources

- **Next.js Metadata API:** https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- **Vercel Redirects:** https://vercel.com/docs/projects/project-configuration#redirects
- **Google Search Central:** https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

---

**Last Updated:** 2025-01-18
**Configuration Version:** 1.0
**Status:** Production Ready ✅
