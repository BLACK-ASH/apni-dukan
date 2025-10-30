import ThemeToggle from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export default async function HomePage() {
  return (
    <div className="">
      <div className="text-2xl underline">Hello world</div>
      <ThemeToggle />
      <Button>Click Me</Button>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <Skeleton className="min-w-3xl min-h-2xl" />
    </div>
  )
}
