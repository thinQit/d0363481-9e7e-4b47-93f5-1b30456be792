export const dynamic = 'force-dynamic';

import HeroSpotlight from '@/components/HeroSpotlight'
import GalleryMasonry from '@/components/GalleryMasonry'
import FeaturesCards3D from '@/components/FeaturesCards3D'
import CTAVortex from '@/components/CTAVortex'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function NailPolishPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="Nail polish shades—curated, modern, wearable."
          subtitle="Browse our most-requested neutrals, seasonal brights, and glossy finishes. Want a perfect match? Bring a photo—we’ll mix your vibe."
          primaryCta={{ label: 'Book a Color Appointment', href: '/contact?service=Gel%20Polish%20(Color)' }}
          secondaryCta={{ label: 'See Services', href: '/services' }}
        />
      </div>

      <RevealOnScroll>
        <section className="animate-fade-in-up py-20 md:py-28">
          <GalleryMasonry
            headline="Shade library (studio favorites)"
            subheadline="A selection of our in-studio colors. Availability may vary by season."
            images={[
              { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577123/site-images/ecommerce/10330117.jpg', alt: 'Milk bath sheer shade' },
              { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577105/site-images/ecommerce/17485352.jpg', alt: 'Soft nude polish' },
              { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577109/site-images/ecommerce/10330112.jpg', alt: 'Ballet pink polish' },
              { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577106/site-images/ecommerce/17485353.jpg', alt: 'Cherry red polish' },
              { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577164/site-images/ecommerce/11952301.jpg', alt: 'Cocoa brown polish' },
              { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577110/site-images/ecommerce/17485350.jpg', alt: 'Champagne shimmer polish' },
            ]}
          />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="animate-fade-in-up bg-muted py-20 md:py-28">
          <FeaturesCards3D
            title="Finishes we love"
            subtitle="Upgrade your set with a finish that changes the whole look."
            features={[
              { icon: 'Droplets', title: 'Gloss', description: 'Clean, glassy shine—our everyday default.' },
              { icon: 'Sparkles', title: 'Chrome', description: 'Pearl or mirror effect over any base shade.' },
              { icon: 'Stars', title: 'Cat-eye', description: 'Magnetic velvet shimmer with movement.' },
              { icon: 'Diamond', title: 'Glitter top', description: 'Fine shimmer layered for a soft sparkle.' },
            ]}
          />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="animate-fade-in-up py-20 md:py-28">
          <CTAVortex
            title="Want a shade that matches your outfit?"
            subtitle="Send a photo and we’ll recommend 2–3 shades that match your tone and event lighting."
            ctaLabel="Send a Photo"
            ctaHref="/contact"
            secondaryCtaLabel="Book Gel Polish"
            secondaryCtaHref="/contact?service=Gel%20Polish%20(Color)"
          />
        </section>
      </RevealOnScroll>
    </div>
  )
}
