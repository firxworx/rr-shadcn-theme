import type React from 'react'

import { HeadMeta } from '@/components/layout/head-meta'
import { Button } from '@/components/ui/button'

export default function IndexRoute(): React.JSX.Element {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <>
      <HeadMeta title="React Router App" description="Welcome to React Router!" />
      <section className="grid gap-6 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold">Welcome to React Router!</h1>
        <p>This SSR app template comes with tailwindcss and shadcn.</p>
        <div className="flex items-center gap-4">
          <Button type="button" variant="default" className="w-fit" onClick={handleClick}>
            Default Button
          </Button>
          <Button type="button" variant="secondary" className="w-fit" onClick={handleClick}>
            Secondary Button
          </Button>
          <Button type="button" variant="outline" className="w-fit" onClick={handleClick}>
            Outline Button
          </Button>
        </div>
      </section>
    </>
  )
}
