"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ServicesDropdown from "@/components/ServicesDropdown";

interface NavbarProps {
  logoText?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  onSearchOpen?: () => void;
}

export default function Navbar({
  logoText = "Luna Nail Studio",
  ctaLabel = "Book Now",
  ctaHref = "/contact",
  className = "",
  onSearchOpen = () => {},
}: Partial<NavbarProps>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-lg font-bold text-foreground">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>

          <ServicesDropdown />

          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="icon"
            onClick={onSearchOpen}
            aria-label="Search services"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button asChild className="transition-transform duration-200 hover:scale-[1.02]">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/nail-polish"
              className="text-sm font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Nail Polish
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Button
              onClick={() => {
                onSearchOpen();
                setIsOpen(false);
              }}
              variant="outline"
              className="justify-start"
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>

            <Button asChild className="transition-transform duration-200 hover:scale-[1.02]">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
