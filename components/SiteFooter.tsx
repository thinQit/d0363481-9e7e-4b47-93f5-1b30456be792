"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface SiteFooterProps {
  brandName?: string
  address?: string
  hours?: string[]
}

export default function SiteFooter({
  brandName = 'Luxe Nail Studio',
  address = '245 Blossom Avenue, Suite 12, New York, NY 10001',
  hours = ['Mon–Fri: 9:00 AM – 8:00 PM', 'Sat: 10:00 AM – 7:00 PM', 'Sun: 11:00 AM – 5:00 PM']
}: Partial<SiteFooterProps>) {
  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-[DM Sans] text-xl font-bold">{brandName}</h3>
          <p className="mt-3 text-sm text-white/80">Elegant manicure and nail artistry with salon-grade hygiene.</p>
          <Button asChild className="mt-4 bg-[#E63946] hover:bg-[#d72d3b]">
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
        <div>
          <h4 className="font-semibold">Pages</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/nail-polish">Nail Polish</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Hours</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {hours.map((line) => <li key={line}>{line}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Visit Us</h4>
          <p className="mt-3 text-sm text-white/80">{address}</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-6 md:px-6">
        <Separator className="bg-white/20" />
        <p className="pt-4 text-xs text-white/70">© {new Date().getFullYear()} {brandName}. All rights reserved.</p>
      </div>
    </footer>
  )
}
