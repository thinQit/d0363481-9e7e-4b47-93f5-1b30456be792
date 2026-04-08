export const dynamic = 'force-dynamic';

import HeroSpotlight from '@/components/HeroSpotlight'
import CategoryBento from '@/components/CategoryBento'
import FeaturedServiceGrid from '@/components/FeaturedServiceGrid'
import TrustBadges from '@/components/TrustBadges'
import TestimonialsMasonry from '@/components/TestimonialsMasonry'
import NewsletterCard from '@/components/NewsletterCard'
import RevealOnScroll from '@/components/RevealOnScroll'
import GalleryMasonry from '@/components/GalleryMasonry'

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="Nails that look polished for weeks—without the damage."
          subtitle="Luna Nail Studio blends clean prep, premium gels, and modern nail art. Book your next set in minutes and browse our most-loved services."
          primaryCta={{ label: 'Book an Appointment', href: '/contact' }}
          secondaryCta={{ label: 'Explore Services', href: '/services' }}
        />
      </div>

      <RevealOnScroll>
        <section className="animate-fade-in-up py-20 md:py-28">
          <CategoryBento />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="animate-fade-in-up bg-muted py-20 md:py-28">
          <FeaturedServiceGrid />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="animate-fade-in-up py-20 md:py-28">
          <TrustBadges />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="animate-fade-in-up bg-muted py-20 md:py-28">
          <TestimonialsMasonry />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="animate-fade-in-up py-20 md:py-28">
          <GalleryMasonry
            headline="Fresh sets from the studio"
            subheadline="A quick look at recent manicures, gel overlays, and modern nail art."
            images={[
              { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577107/site-images/ecommerce/10330106.jpg', alt: 'Minimal gel manicure' },
              { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577159/site-images/ecommerce/10330108.jpg', alt: 'Chrome nail finish detail' },
              { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577128/site-images/ecommerce/16675634.jpg', alt: 'French tip manicure close-up' },
              { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577136/site-images/ecommerce/16675632.jpg', alt: 'Nail art set with soft tones' },
              { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577152/site-images/ecommerce/11952304.jpg', alt: 'Structured gel with glossy finish' },
              { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577149/site-images/ecommerce/10223868.jpg', alt: 'Seasonal polish palette' },
            ]}
          />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="animate-fade-in-up bg-muted py-20 md:py-28">
          <NewsletterCard />
        </section>
      </RevealOnScroll>
    </div>
  )
}
