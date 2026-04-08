'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

interface SearchCommandProps {
  open?: boolean
  onClose?: () => void
  items?: { label: string; href: string; type: string }[]
}

export default function SearchCommand({
  open = false,
  onClose = () => {},
  items = [
    { label: 'Classic Manicure', href: '/services#manicures', type: 'Service' },
    { label: 'Gel Coating', href: '/services#gel-coating', type: 'Service' },
    { label: 'Nude Pink Shade', href: '/nail-polish', type: 'Shade' },
    { label: 'French White', href: '/nail-polish', type: 'Shade' }
  ]
}: Partial<SearchCommandProps>) {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query) return items
    return items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()))
  }, [query, items])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] bg-black/40 p-4" onClick={onClose}>
      <Card className="mx-auto mt-20 max-w-2xl rounded-xl border p-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search services or shades..." />
          <button onClick={onClose} aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4 space-y-2">
          {results.map((r) => (
            <Link key={r.label} href={r.href} className="block rounded-md border p-3 hover:bg-slate-50" onClick={onClose}>
              <p className="text-sm font-medium">{r.label}</p>
              <p className="text-xs text-muted-foreground">{r.type}</p>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  )
}
