'use client'

import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-background px-6 text-center">
      <h2 className="mb-3 text-3xl font-bold text-foreground">Something went wrong</h2>
      <p className="mb-6 max-w-xl text-muted-foreground">{error.message || 'Please try again.'}</p>
      <Button onClick={() => reset()} className="transition-all duration-200 hover:scale-105">
        Try again
      </Button>
    </div>
  )
}
