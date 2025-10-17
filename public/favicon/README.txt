# Favicon Set for FlipACoinFree.com

## Generated Files

### Root Directory (/public/)
- favicon.ico (16x16, 32x32, 48x48 multi-resolution)
- apple-touch-icon.png (180x180)
- site.webmanifest

### Favicon Directory (/public/favicon/)
- icon.svg (vector, scalable)
- mask-icon.svg (Safari pinned tab, monochrome)

PNG Files:
- favicon-16x16.png (~1KB)
- favicon-32x32.png (~2KB)
- favicon-48x48.png (~3KB)
- favicon-96x96.png (~5KB)
- favicon-192x192.png (~8KB)
- favicon-512x512.png (~35KB)

WebP Files (optimized for modern browsers):
- favicon-16x16.webp
- favicon-32x32.webp
- favicon-192x192.webp
- favicon-512x512.webp

Preview:
- preview.png (shows all sizes for QA)

## Design Details

Brand Colors:
- Primary Gold: #FFD25A
- Dark Accent: #222222
- White: #FFFFFF

Design: Circular gold coin with dark rim and centered "F" letter mark.
The design is simplified for maximum legibility at small sizes (16x16, 32x32).

## Caching Recommendations

For optimal performance, set long cache headers for favicon files:

### Vercel (vercel.json)
```json
{
  "headers": [
    {
      "source": "/favicon/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
