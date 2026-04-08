"use client";

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright?: string;
  logoUrl?: string;
}

export default function FooterMultiColumn({
  brand = 'ShopFront',
  description = 'Trusted shopping with curated essentials, secure checkout, and fast delivery.',
  columns = [],
  copyright,
  logoUrl = '',
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="animate-fade-in-up grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            {logoUrl ? <img src={logoUrl} alt={brand || ''} className="mb-2 h-8 w-auto" /> : <h3 className="text-lg font-bold">{brand}</h3>}
            <p className="mt-3 text-sm text-background/70">{description}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-background">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8 bg-background/20" />
        <p className="text-center text-sm text-background/50">{copyright || `© ${new Date().getFullYear()} ${brand}. All rights reserved.`}</p>
      </div>
    </footer>
  );
}
