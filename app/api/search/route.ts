import { NextResponse } from "next/server";

type SearchResult = {
  type: "service" | "shade";
  title: string;
  href: string;
  meta?: string;
};

const SERVICES: SearchResult[] = [
  {
    type: "service",
    title: "Express Manicure",
    href: "/services#manicures",
    meta: "From $35 • 35 min",
  },
  {
    type: "service",
    title: "Signature Manicure",
    href: "/services#manicures",
    meta: "From $45 • 45 min",
  },
  {
    type: "service",
    title: "Spa Manicure",
    href: "/services#manicures",
    meta: "From $60 • 60 min",
  },
  {
    type: "service",
    title: "Soft Gel Extensions",
    href: "/services#nail-styling",
    meta: "From $85 • 90 min",
  },
  {
    type: "service",
    title: "Builder Gel Rebalance",
    href: "/services#nail-styling",
    meta: "From $70 • 75 min",
  },
  {
    type: "service",
    title: "Nail Art (Level 1)",
    href: "/services#nail-designing",
    meta: "From $15",
  },
  {
    type: "service",
    title: "Nail Art (Level 2)",
    href: "/services#nail-designing",
    meta: "From $30",
  },
  {
    type: "service",
    title: "Nail Art (Level 3)",
    href: "/services#nail-designing",
    meta: "From $55",
  },
  {
    type: "service",
    title: "Gel Polish (Color)",
    href: "/services#gel-coating",
    meta: "From $50 • 50 min",
  },
  {
    type: "service",
    title: "Structured Gel + Color",
    href: "/services#gel-coating",
    meta: "From $75 • 75 min",
  },
  {
    type: "service",
    title: "Gel Overlay (Natural Nails)",
    href: "/services#gel-coating",
    meta: "From $60 • 60 min",
  },
];

const SHADES: SearchResult[] = [
  {
    type: "shade",
    title: "Milk Bath",
    href: "/nail-polish",
    meta: "Sheer • Gloss",
  },
  {
    type: "shade",
    title: "Soft Nude",
    href: "/nail-polish",
    meta: "Neutrals • Gloss",
  },
  {
    type: "shade",
    title: "Ballet Pink",
    href: "/nail-polish",
    meta: "Pinks • Gloss",
  },
  {
    type: "shade",
    title: "Cherry Classic",
    href: "/nail-polish",
    meta: "Reds • Gloss",
  },
  {
    type: "shade",
    title: "Cocoa Glaze",
    href: "/nail-polish",
    meta: "Browns • Gloss",
  },
  {
    type: "shade",
    title: "Sky Satin",
    href: "/nail-polish",
    meta: "Blues • Gloss",
  },
  {
    type: "shade",
    title: "Sage Studio",
    href: "/nail-polish",
    meta: "Greens • Gloss",
  },
  {
    type: "shade",
    title: "Champagne Shimmer",
    href: "/nail-polish",
    meta: "Glitter • Shimmer",
  },
];

const SEARCH_SOURCE: SearchResult[] = [...SERVICES, ...SHADES];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get("q") || "").trim().toLowerCase();

    if (!q) {
      return NextResponse.json({ results: [] }, { status: 200 });
    }

    const results = SEARCH_SOURCE.filter((item) => {
      const haystack = `${item.title} ${item.meta ?? ""}`.toLowerCase();
      return haystack.includes(q);
    }).slice(0, 10);

    return NextResponse.json({ results }, { status: 200 });
  } catch (error) {
    console.error("[SEARCH_API_ERROR]", error);

    return NextResponse.json(
      { results: [], message: "Unable to complete search right now." },
      { status: 500 }
    );
  }
}
