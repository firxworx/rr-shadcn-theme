import type React from 'react'

import { HeadMeta } from '@/components/layout/head-meta'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

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
        <h2 className="text-2xl font-bold">Heads Up</h2>
        <p>
          This repo demonstrates an issue with CSS specificity regarding the system theme and tailwind v4 + shadcn v2.
        </p>
        <p>
          Everything else works: use <code>remix-themes</code>, <code>next-themes</code> (which is compatible with
          react-router), or a client-hints implementation to sidestep the issue.
        </p>
        <h2 className="text-2xl font-bold">Get the Code</h2>
        <p>
          <Link
            to="https://github.com/firxworx/rr-shadcn-theme"
            target="_blank"
            rel="noreferrer"
            className="text-sky-700 dark:text-sky-400 no-underline hover:underline"
          >
            https://github.com/firxworx/rr-shadcn-theme
          </Link>
        </p>
      </section>
    </>
  )
}
