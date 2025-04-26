import { HeadMeta } from '@/components/layout/head-meta'
import { ThemeMenu, ThemeSwitch } from '@/theme/theme.components'

export default function DemoRoute(): React.JSX.Element {
  return (
    <>
      <HeadMeta title="Demo — React Router App" description="Demo Page" />
      <section className="grid gap-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Demo Page</h1>
        <p>Includes theme switcher components!</p>
        <h2 className="text-xl font-bold -mb-2">Theme Switch</h2>
        <p>Progressive enhanced theme switch component that works without JavaScript:</p>
        <ThemeSwitch />
        <h2 className="text-xl font-bold -mb-2">Theme Menu</h2>
        <p>Theme dropdown menu based on shadcn/ui dropdown:</p>
        <div className="flex justify-center">
          <ThemeMenu />
        </div>
      </section>
    </>
  )
}
