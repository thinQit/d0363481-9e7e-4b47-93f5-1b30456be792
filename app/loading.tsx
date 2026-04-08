import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="min-h-[60vh] bg-background p-6 md:p-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Skeleton className="h-12 w-1/3 bg-muted" />
        <Skeleton className="h-64 w-full bg-muted" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Skeleton className="h-40 w-full bg-muted" />
          <Skeleton className="h-40 w-full bg-muted" />
          <Skeleton className="h-40 w-full bg-muted" />
        </div>
      </div>
    </div>
  )
}
