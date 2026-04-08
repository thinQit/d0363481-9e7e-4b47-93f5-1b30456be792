"use client";

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface WireframePreviewProps {
  enabled?: boolean
}

export default function WireframePreview({ enabled = true }: Partial<WireframePreviewProps>) {
  if (!enabled) return null

  const pages = [
    { page: 'Home', sections: ['HeroSpotlight', 'CategoryBento', 'FeaturedServiceGrid', 'TrustBadges', 'TestimonialsMasonry', 'NewsletterCard', 'SiteFooter'] },
    { page: 'Services', sections: ['ServiceCategorySection', 'PricingComparisonTable', 'FAQAccordion'] },
    { page: 'Nail Polish', sections: ['CategoryBento', 'FeaturedServiceGrid', 'NewsletterCard'] },
    { page: 'About Us', sections: ['TrustBadges', 'TestimonialsMasonry'] },
    { page: 'Contact', sections: ['Navbar', 'Contact Form', 'SiteFooter'] }
  ]

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-[DM Sans] text-3xl font-bold">Wireframe Preview</h1>
        <Badge>Dev Only</Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {pages.map((p) => (
          <Card key={p.page} className="rounded-xl border p-5">
            <h2 className="text-lg font-semibold">{p.page}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {p.sections.map((s) => <li key={s}>• {s}</li>)}
            </ul>
            <Link href={p.page === 'Home' ? '/' : '/' + p.page.toLowerCase().replaceAll(' ', '-')} className="mt-4 inline-block text-sm font-medium text-[#4f46e5]">
              Open page →
            </Link>
          </Card>
        ))}
      </div>
    </section>
  )
}
