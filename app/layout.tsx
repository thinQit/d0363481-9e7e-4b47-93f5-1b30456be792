import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const headingFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Luna Nail Studio | Modern Manicures, Gel & Nail Art in Brookside, CA",
  description:
    "Book manicures, gel coating, nail styling, and custom nail designs at Luna Nail Studio. Clean prep, premium gels, and a calm, modern studio in Brookside, CA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-background text-foreground antialiased`}
      >
        <Navbar logoText="Luna Nail Studio" ctaLabel="Book Now" ctaHref="/contact" />
        <main className="pt-16">{children}</main>
        <FooterMultiColumn
          brand="Luna Nail Studio"
          description="Modern manicures, clean gel, and artful designs—done beautifully in a calm Brookside studio."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Nail Polish", href: "/nail-polish" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Services",
              links: [
                { label: "Manicures", href: "/services#manicures" },
                { label: "Nail Styling", href: "/services#nail-styling" },
                { label: "Nail Designing", href: "/services#nail-designing" },
                { label: "Gel Coating", href: "/services#gel-coating" },
                { label: "Nail Polish", href: "/nail-polish" },
              ],
            },
            {
              title: "Policies",
              links: [
                { label: "Cancellation & Late Policy", href: "/about#policies" },
                { label: "Hygiene Standards", href: "/about#hygiene" },
                { label: "Book Appointment", href: "/contact#form" },
              ],
            },
          ]}
          copyright="© 2026 Luna Nail Studio. All rights reserved."
        />
      </body>
    </html>
  );
}
