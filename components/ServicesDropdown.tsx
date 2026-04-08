"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServicesDropdownProps {
  className?: string;
}

const links = [
  { label: "All Services", href: "/services" },
  { label: "Manicures", href: "/services#manicures" },
  { label: "Nail Styling", href: "/services#nail-styling" },
  { label: "Nail Designing", href: "/services#nail-designing" },
  { label: "Gel Coating", href: "/services#gel-coating" },
  { label: "Nail Polish", href: "/nail-polish" },
];

export default function ServicesDropdown({ className = "" }: Partial<ServicesDropdownProps>) {
  const [open, setOpen] = useState(false);
  const buttonId = useId();
  const menuId = useId();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocPointerDown(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocPointerDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocPointerDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={cn("relative", className)}>
      <button
        id={buttonId}
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        onPointerEnter={() => setOpen(true)}
        onFocus={() => setOpen(true)}
      >
        Services <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-labelledby={buttonId}
          className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-border bg-popover p-2 shadow-lg"
          onPointerLeave={() => setOpen(false)}
        >
          {links.map((item) => (
            <Link
              key={item.href}
              role="menuitem"
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
