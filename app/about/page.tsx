export const dynamic = 'force-dynamic';

import HeroSpotlight from '@/components/HeroSpotlight'
import FeaturesCards3D from '@/components/FeaturesCards3D'
import GalleryMasonry from '@/components/GalleryMasonry'
import TrustBadges from '@/components/TrustBadges'
import FAQAccordion from '@/components/FAQAccordion'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="A calm studio with serious attention to detail."
          subtitle="We’re a small team of nail artists focused on clean prep, long-wear results, and designs that feel like you."
          primaryCta={{ label: 'Meet the Team', href: '/about#team' }}
          secondaryCta={{ label: 'Book Now', href: '/contact' }}
        />
      </div>
      <RevealOnScroll><section className="animate-fade-in-up py-20 md:py-28"><FeaturesCards3D title="Our approach: prep first, then polish." features={[{ icon: 'ShieldCheck', title: 'Hygiene', description: 'Sanitized tools, fresh liners, and single-use files for every client.' }, { icon: 'Sparkles', title: 'Craft', description: 'Structured gel techniques, balanced shaping, and crisp design work.' }, { icon: 'HeartHandshake', title: 'Comfort', description: 'A calm pace, clear communication, and no-pressure recommendations.' }]} /></section></RevealOnScroll>
      <RevealOnScroll><section id="team" className="animate-fade-in-up bg-muted py-20 md:py-28"><GalleryMasonry headline="Meet your nail artists" images={[{ url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577351/site-images/team-people/12903244.jpg', alt: 'Luna Park portrait' }, { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577321/site-images/team-people/1181622.jpg', alt: 'Camila Reyes portrait' }, { url: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577335/site-images/team-people/1181734.jpg', alt: 'Noor Ahmed portrait' }]} /></section></RevealOnScroll>
      <RevealOnScroll><section id="hygiene" className="animate-fade-in-up py-20 md:py-28"><TrustBadges /></section></RevealOnScroll>
      <RevealOnScroll><section id="policies" className="animate-fade-in-up bg-muted py-20 md:py-28"><FAQAccordion /></section></RevealOnScroll>
    </div>
  )
}
