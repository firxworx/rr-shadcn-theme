import type React from 'react'
import { data, Form } from 'react-router'

import type { Route } from './+types/_index'

import { zThemeMode, setColorScheme } from '@/theme/color-scheme-cookie'
import { HeadMeta } from '@/components/layout/head-meta'
import { Button } from '@/components/ui/button'

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const colorScheme = zThemeMode.parse(formData.get('color-scheme'))

  return data(null, {
    headers: { 'Set-Cookie': await setColorScheme(colorScheme) },
  })
}

export default function IndexRoute(): React.JSX.Element {
  return (
    <>
      <HeadMeta title="React Router App" description="Welcome to React Router!" />
      <Form navigate={false} method="POST" className="p-10">
        <div className="flex items-center justify-center gap-4">
          <button type="submit" name="color-scheme" value="dark">
            Dark
          </button>
          <button type="submit" name="color-scheme" value="light">
            Light
          </button>
          <button type="submit" name="color-scheme" value="system">
            System
          </button>
        </div>
      </Form>
      <section className="grid gap-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Welcome to React Router!</h1>
        <div className="flex items-center gap-4">
          <Button type="button" variant="default" className="w-fit">
            Default Button
          </Button>
          <Button type="button" variant="secondary" className="w-fit">
            Secondary Button
          </Button>
          <Button type="button" variant="outline" className="w-fit">
            Outline Button
          </Button>
        </div>
      </section>
    </>
  )
}
