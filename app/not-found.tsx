import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="mb-2 text-4xl font-bold text-foreground">Page not found</h1>
      <p className="mb-6 text-muted-foreground">Sorry, we couldn’t find the page you’re looking for.</p>
      <Button asChild className="transition-all duration-200 hover:scale-105">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}
