import type React from 'react'

import { HeadMeta } from '@/components/layout/head-meta'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { cn } from '@/lib/style'
import { MoonIcon, SunIcon } from 'lucide-react'

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
        <p>
          This repo demonstrates an issue with CSS specificity regarding the system theme and tailwind v4 + shadcn v2.
        </p>
        <h2 className="text-2xl font-bold">Theme Debug</h2>
        <p>
          Tailwind-first apps should respect the <span className="font-medium">Tailwind Theme</span>.
        </p>
        <div className="grid gap-2">
          <div className="flex gap-6 justify-between items-center p-2 rounded-md bg-muted text-sm">
            <div className="flex flex-col">
              <span>Tailwind Theme</span>
              <span className="text-xs text-neutral-500">
                <code>dark:*</code>
              </span>
            </div>
            <code className="p-2 rounded-md text-xs bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 border border-neutral-500/50">
              <span className="inline dark:hidden">light</span>
              <span className="hidden dark:inline">dark</span>
            </code>
          </div>
          <div className="flex gap-6 justify-between items-center p-2 rounded-md bg-muted text-sm">
            <div className="flex flex-col">
              <span>Preferred Color Scheme</span>
              <span className="text-xs text-neutral-500">
                <code>[@media(prefers-color-scheme:_)]:*</code>
              </span>
            </div>
            <code className="p-2 rounded-md text-xs bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 border border-neutral-500/50">
              <span className="hidden [@media(prefers-color-scheme:light)]:flex">light</span>
              <span className="hidden [@media(prefers-color-scheme:dark)]:flex">dark</span>
            </code>
          </div>
        </div>
        <h2 className="text-2xl font-bold">Theme Variables</h2>
        <p>
          shadcn/ui and other Tailwind-first libraries use CSS variables to define colors in <code>:root</code> with
          dark theme override under <code>.dark</code>:
        </p>
        <div className="grid gap-2 text-sm">
          <div className="text-foreground bg-muted p-2 rounded-md">
            This box is styled using shadcn color utilities.
          </div>
        </div>
        <p>
          shadcn/ui <code>&lt;Button&gt;</code>'s <em>outline</em> variant uses both tailwind <code>dark:</code> in its{' '}
          <code>className</code> as well as shadcn color utilies with definitions tied to CSS variables with different{' '}
          <code>:root</code> vs. <code>.dark</code>.
        </p>
        <p>This makes a good test candidate for debugging styles with system theme:</p>
        <Button variant="outline" className="w-fit">
          Demo Button
        </Button>
        <p>
          The button should appear strictly identical with no differences between explicit light/dark theme and fallback
          to browser's system light/dark preference.
        </p>
      </section>
    </>
  )
}
