"use client";

import { Clock3 } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Service {
  name: string;
  price: string;
  duration: string;
  badge: string;
  href?: string;
}

interface FeaturedServiceGridProps {
  services?: Service[];
}

export default function FeaturedServiceGrid({
  services = [
    {
      name: "Signature Manicure",
      price: "$45",
      duration: "45 min",
      badge: "Best value",
      href: "/contact?service=Signature%20Manicure",
    },
    {
      name: "Gel Overlay (Natural Nails)",
      price: "$60",
      duration: "60 min",
      badge: "Long-wear",
      href: "/contact?service=Gel%20Overlay",
    },
    {
      name: "Structured Gel + Color",
      price: "$75",
      duration: "75 min",
      badge: "Studio favorite",
      href: "/contact?service=Structured%20Gel%20%2B%20Color",
    },
    {
      name: "Modern French (Add-on)",
      price: "$18",
      duration: "15 min",
      badge: "Trending",
      href: "/contact?service=Modern%20French%20Add-on",
    },
  ],
}: Partial<FeaturedServiceGridProps>) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service.name} className="rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
            <Badge variant="secondary" className="bg-secondary/15 text-foreground">
              {service.badge}
            </Badge>
            <h3 className="mt-3 text-lg font-bold text-foreground">{service.name}</h3>
            <p className="mt-2 text-2xl font-bold text-primary">{service.price}</p>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <Clock3 className="h-4 w-4" /> {service.duration}
            </p>
            <Button className="mt-4 w-full" asChild>
              <Link href={service.href || "/contact"}>Book</Link>
            </Button>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        Prices may vary for extra length, complex art, or repairs. You’ll get a confirmed quote before we begin.
      </p>
    </section>
  );
}
