"use client";

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CategoryItem {
  title: string
  href: string
  imageSrc: string
}

interface CategoryBentoProps {
  categories?: CategoryItem[]
  className?: string
}

export default function CategoryBento({
  categories = [
    { title: 'Manicures', href: '/services#manicures', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577195/site-images/beauty-salon/12774385.jpg' },
    { title: 'Nail Styling', href: '/services#nail-styling', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577177/site-images/beauty-salon/10517484.jpg' },
    { title: 'Nail Designing', href: '/services#nail-designing', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577220/site-images/beauty-salon/10318045.jpg' },
    { title: 'Gel Coating', href: '/services#gel-coating', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577181/site-images/beauty-salon/11169551.jpg' },
    { title: 'Nail Polish', href: '/nail-polish', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577218/site-images/beauty-salon/13212603.jpg' }
  ],
  className = ''
}: Partial<CategoryBentoProps>) {
  return (
    <section className={cn('mx-auto max-w-7xl px-4 py-20 md:px-6', className)}>
      <div className="grid gap-4 md:grid-cols-6">
        {categories.map((cat, index) => (
          <Link
            key={cat.title}
            href={cat.href}
            className={cn(
              'group relative overflow-hidden rounded-xl border',
              index === 0 ? 'md:col-span-3 md:row-span-2' : 'md:col-span-3'
            )}
          >
            <Image src={cat.imageSrc} alt={cat.title} width={1200} height={800} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 md:h-full" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 font-[DM Sans] text-xl font-bold text-white">{cat.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
