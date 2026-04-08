"use client";

import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Testimonial {
  name: string
  service: string
  text: string
  rating: number
}

interface TestimonialsMasonryProps {
  testimonials?: Testimonial[]
}

export default function TestimonialsMasonry({
  testimonials = [
    { name: 'Amelia R.', service: 'Gel Coating', text: 'My nails lasted 3 weeks with zero chips. Stunning finish.', rating: 5 },
    { name: 'Jasmine K.', service: 'Nail Designing', text: 'They recreated my inspiration perfectly. Super talented artists!', rating: 5 },
    { name: 'Sofia T.', service: 'Manicure', text: 'Clean studio, gentle staff, and very punctual appointments.', rating: 5 },
    { name: 'Nina P.', service: 'Nail Polish', text: 'Huge shade collection and long-lasting polish options.', rating: 4 }
  ]
}: Partial<TestimonialsMasonryProps>) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {testimonials.map((t) => (
          <Card key={t.name + t.service} className="mb-4 break-inside-avoid rounded-xl border p-5">
            <div className="mb-2 flex items-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />)}
            </div>
            <Badge variant="secondary">{t.service}</Badge>
            <p className="mt-3 text-sm text-muted-foreground">{t.text}</p>
            <p className="mt-4 text-sm font-semibold">{t.name}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
