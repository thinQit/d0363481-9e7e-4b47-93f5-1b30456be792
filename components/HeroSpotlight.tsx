"use client";

import { Spotlight } from "@/components/ui/backgrounds/spotlight";
import { TypewriterEffect } from "@/components/ui/text/typewriter-effect";
import { Button } from "@/components/ui/button";

interface HeroSpotlightProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroSpotlight({
  title = "Nails that look polished for weeks—without the damage.",
  subtitle = "Luna Nail Studio blends clean prep, premium gels, and modern nail art.",
  primaryCta = { label: "Book an Appointment", href: "/contact" },
  secondaryCta = { label: "Explore Services", href: "/services" },
}: Partial<HeroSpotlightProps>) {
  const words = title.split(" ").map((word) => ({ text: word }));

  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden rounded-md bg-background antialiased">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill={`hsl(var(--secondary))`} />
      </div>

      <div className="animate-fade-in-up relative z-10 mx-auto w-full max-w-4xl p-4 pt-20 text-center md:pt-0">
        <TypewriterEffect
          words={words}
          className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          cursorClassName="bg-primary"
        />
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="px-8 py-6 text-lg transition-transform duration-200 hover:scale-[1.02]"
            asChild
          >
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="border-border px-8 py-6 text-lg text-foreground transition-transform duration-200 hover:scale-[1.02]"
              asChild
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
