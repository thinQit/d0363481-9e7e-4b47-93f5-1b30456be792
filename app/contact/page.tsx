"use client";

export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTAVortex from "@/components/CTAVortex";

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="animate-fade-in-up overflow-hidden">
        <HeroSpotlight
          title="Book your appointment—fast."
          subtitle="Send your preferred day/time and any inspo photos. We’ll confirm availability and your total before you arrive."
          primaryCta={{ label: "Start Booking", href: "/contact#form" }}
          secondaryCta={{ label: "Call the Studio", href: "tel:+15105550198" }}
        />
      </div>

      <RevealOnScroll>
        <section id="form" className="animate-fade-in-up py-20 md:py-28">
          <ContactForm
            headline="Appointment request"
            subheadline="We reply within 1 business day. For same-day requests, please call."
            contactInfo={[
              { icon: "Phone", label: "Phone", value: "(510) 555-0198" },
              { icon: "Mail", label: "Email", value: "hello@lunanailstudio.com" },
              {
                icon: "MapPin",
                label: "Address",
                value: "214 Bloomfield Ave, Suite 3B, Brookside, CA 94610",
              },
            ]}
          />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="animate-fade-in-up bg-muted py-20 md:py-28">
          <FAQAccordion />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="animate-fade-in-up py-20 md:py-28">
          <CTAVortex
            title="Need help picking a service?"
            subtitle="Tell us your goal—long wear, minimal look, or statement art—and we’ll suggest the perfect booking."
            ctaLabel="View Services"
            ctaHref="/services"
            secondaryCtaLabel="See Nail Polish Shades"
            secondaryCtaHref="/nail-polish"
          />
        </section>
      </RevealOnScroll>
    </div>
  );
}
