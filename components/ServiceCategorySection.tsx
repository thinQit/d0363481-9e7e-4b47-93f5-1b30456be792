"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ServiceItem {
  name: string;
  price: string;
}
interface ServiceCategorySectionProps {
  title?: string;
  description?: string;
  items?: ServiceItem[];
  addons?: ServiceItem[];
  ctaHref?: string;
}

export default function ServiceCategorySection({
  title = "Manicures",
  description = "Clean prep and a polished finish—perfect for everyday.",
  items = [
    { name: "Express Manicure", price: "$35" },
    { name: "Signature Manicure", price: "$45" },
    { name: "Spa Manicure", price: "$60" },
  ],
  addons = [
    { name: "Paraffin treatment", price: "$12" },
    { name: "Nail repair (per nail)", price: "$6" },
    { name: "Cuticle oil mini", price: "$8" },
  ],
  ctaHref = "/contact",
}: Partial<ServiceCategorySectionProps>) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 md:px-6">
      <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      <p className="mt-2 text-muted-foreground">{description}</p>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
          >
            <span className="text-foreground">{item.name}</span>
            <span className="font-semibold text-foreground">{item.price}</span>
          </div>
        ))}
      </div>

      <Separator className="my-6" />

      <h3 className="font-semibold text-foreground">Add-ons</h3>
      <div className="mt-3 space-y-3">
        {addons.map((addon) => (
          <div
            key={addon.name}
            className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
          >
            <span className="text-foreground">{addon.name}</span>
            <span className="font-semibold text-foreground">{addon.price}</span>
          </div>
        ))}
      </div>

      <Button className="mt-6" asChild>
        <Link href={ctaHref}>Book {title}</Link>
      </Button>
    </section>
  );
}
