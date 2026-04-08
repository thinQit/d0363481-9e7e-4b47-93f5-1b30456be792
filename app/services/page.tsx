export const dynamic = 'force-dynamic';

import HeroSpotlight from '@/components/HeroSpotlight'
import ServiceCategorySection from '@/components/ServiceCategorySection'
import CTAVortex from '@/components/CTAVortex'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="Your service menu—clear pricing, beautiful results."
          subtitle="Pick a base service, then customize with art, finishes, and upgrades. Not sure what to book? We’ll guide you."
          primaryCta={{ label: 'Book an Appointment', href: '/contact' }}
          secondaryCta={{ label: 'See Nail Polish Shades', href: '/nail-polish' }}
        />
      </div>
      <RevealOnScroll><section id="manicures" className="animate-fade-in-up py-20 md:py-28"><ServiceCategorySection /></section></RevealOnScroll>
      <RevealOnScroll><section id="nail-styling" className="animate-fade-in-up bg-muted py-20 md:py-28"><ServiceCategorySection /></section></RevealOnScroll>
      <RevealOnScroll><section id="nail-designing" className="animate-fade-in-up py-20 md:py-28"><ServiceCategorySection /></section></RevealOnScroll>
      <RevealOnScroll><section id="gel-coating" className="animate-fade-in-up bg-muted py-20 md:py-28"><ServiceCategorySection /></section></RevealOnScroll>
      <RevealOnScroll>
        <section className="animate-fade-in-up py-20 md:py-28">
          <CTAVortex
            title="Not sure what to book?"
            subtitle="Tell us your nail goals (length, durability, style) and we’ll recommend the best service before you arrive."
            ctaLabel="Message Us"
            ctaHref="/contact"
            secondaryCtaLabel="See Nail Polish Menu"
            secondaryCtaHref="/nail-polish"
          />
        </section>
      </RevealOnScroll>
    </div>
  )
}
