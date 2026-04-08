"use client";

import { ShieldCheck, Sparkles, Sofa, Clock } from "lucide-react";

interface TrustBadgesProps {
  items?: { title: string; description?: string; icon: string }[];
}

export default function TrustBadges({
  items = [
    {
      title: "Hygiene-first tools",
      description: "Single-use files + sanitized implements between every client.",
      icon: "ShieldCheck",
    },
    {
      title: "Premium gel systems",
      description: "Chip-resistant wear with gentle removal practices.",
      icon: "Sparkles",
    },
    {
      title: "Comfortable, calm studio",
      description: "Soft music, clean stations, and a no-rush pace.",
      icon: "Sofa",
    },
    {
      title: "On-time appointments",
      description: "Clear timing and reminders so your day stays smooth.",
      icon: "Clock",
    },
  ],
}: Partial<TrustBadgesProps>) {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Sparkles,
    Sofa,
    Clock,
  };

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-4 md:px-6">
        {items.map((item) => {
          const Icon = iconMap[item.icon] || ShieldCheck;
          return (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <Icon className="mx-auto h-6 w-6 text-accent" />
              <p className="mt-3 text-sm font-semibold text-foreground">{item.title}</p>
              {item.description && (
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
