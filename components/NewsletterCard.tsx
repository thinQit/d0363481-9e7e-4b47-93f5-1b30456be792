"use client";

import { useState } from "react";
import { MailCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface NewsletterCardProps {
  title?: string;
}

export default function NewsletterCard({
  title = "Get first access to seasonal shades + appointment drops",
}: Partial<NewsletterCardProps>) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 md:py-28">
      <Card className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Monthly updates only—new color edits, nail art trends, and last-minute openings.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Join and get a free cuticle oil mini on your first visit (while supplies last).
        </p>

        <div className="mt-5 flex flex-col gap-3 md:flex-row">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
          />
          <Button
            onClick={() => setSubmitted(true)}
            className="transition-transform duration-200 hover:scale-[1.02]"
          >
            Join the list
          </Button>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>

        {submitted && (
          <p className="mt-4 flex items-center gap-2 text-sm text-accent">
            <MailCheck className="h-4 w-4" /> Thanks! You’re on the list.
          </p>
        )}
      </Card>
    </section>
  );
}
