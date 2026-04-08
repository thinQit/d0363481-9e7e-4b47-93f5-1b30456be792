"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = "Fresh sets from the studio",
  subheadline,
  images = [],
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    lastActiveRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedImage(null);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      lastActiveRef.current?.focus();
    };
  }, [selectedImage]);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {headline}
          </h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>

        <div className="mt-12 columns-2 gap-4 md:columns-3">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              className="group card-hover relative mb-4 w-full overflow-hidden rounded-xl border border-border bg-card text-left"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img.url}
                alt={img.alt}
                width={800}
                height={800}
                unoptimized
                className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
              />
              {img.caption && (
                <div className="p-3">
                  <p className="text-sm text-foreground">{img.caption}</p>
                </div>
              )}
            </button>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setSelectedImage(null);
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={selectedImage.alt}
              className="relative w-full max-w-5xl"
            >
              <Button
                ref={closeButtonRef}
                variant="outline"
                className="absolute right-0 top-0 z-10 bg-background/90"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </Button>

              <div className="mt-12">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  width={1200}
                  height={900}
                  unoptimized
                  className="max-h-[80vh] w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
