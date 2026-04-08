"use client";

import Image from 'next/image';

interface LogoCloudProps {
  headline?: string;
  logos: { name: string; imageUrl: string }[];
}

export default function LogoCloud({ headline = 'Trusted by leading brands', logos = [] }: Partial<LogoCloudProps>) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        {headline && <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">{headline}</p>}
        <div className="animate-fade-in-up flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <Image key={i} src={logo.imageUrl} alt={logo.name} width={140} height={40} unoptimized className="h-8 w-auto object-contain opacity-60 transition-all duration-200 hover:scale-105 hover:opacity-100 md:h-10" />
          ))}
        </div>
      </div>
    </section>
  );
}
