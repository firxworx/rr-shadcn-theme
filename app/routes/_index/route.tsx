import { useState } from 'react'
import type React from 'react'

import { HeadMeta } from '@/components/layout/head-meta'
import { Button } from '@/components/ui/button'

export default function IndexRoute(): React.JSX.Element {
  const [buttonClickCount, setButtonClickCount] = useState<number>(0)

  const handleButtonClick = () => {
    setButtonClickCount((prev) => prev + 1)
  }

  return (
    <>
      <HeadMeta title="React Router App" description="Welcome to React Router!" />
      <section className="grid gap-6 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold">Welcome to React Router!</h1>
        <p>This SSR app template comes with tailwindcss and shadcn.</p>
        <div className="flex items-center gap-4">
          <Button type="button" variant="default" className="w-fit" onClick={handleButtonClick}>
            Default Button
          </Button>
          <Button type="button" variant="secondary" className="w-fit" onClick={handleButtonClick}>
            Secondary Button
          </Button>
          <Button type="button" variant="outline" className="w-fit" onClick={handleButtonClick}>
            Outline Button
          </Button>
        </div>
        {!!buttonClickCount && (
          <div className="bg-muted p-4 rounded-md animate-in fade-in">
            You clicked a button {buttonClickCount === 1 ? '1 time' : `${buttonClickCount} times`}
          </div>
        )}
      </section>
    </>
  )
}
