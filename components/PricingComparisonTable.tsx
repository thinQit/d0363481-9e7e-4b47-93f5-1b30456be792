"use client";

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Row {
  service: string
  price: string
  time: string
  includes: string[]
}

interface PricingComparisonTableProps {
  rows?: Row[]
  className?: string
}

export default function PricingComparisonTable({
  rows = [
    { service: 'Classic Manicure', price: '$35', time: '45 min', includes: ['Shape + cuticle', 'Polish application'] },
    { service: 'Gel Coating', price: '$55', time: '60 min', includes: ['Gel prep', 'UV cure', 'Long wear'] },
    { service: 'Nail Designing', price: '$70', time: '75 min', includes: ['Custom art', 'Top coat seal'] }
  ],
  className = ''
}: Partial<PricingComparisonTableProps>) {
  return (
    <section className={cn('mx-auto max-w-7xl px-4 py-20 md:px-6', className)}>
      <div className="overflow-hidden rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="p-4">Service</th>
              <th className="p-4">Price</th>
              <th className="p-4">Time</th>
              <th className="p-4">Includes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.service} className="border-t">
                <td className="p-4 font-medium">{row.service}</td>
                <td className="p-4 font-bold text-[#4f46e5]">{row.price}</td>
                <td className="p-4">{row.time}</td>
                <td className="p-4">
                  <ul className="space-y-1">
                    {row.includes.map((inc) => (
                      <li key={inc} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#10b981]" /> {inc}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
