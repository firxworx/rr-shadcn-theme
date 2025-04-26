import { useCallback } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { Form, href, useFetcher } from 'react-router'

import type { action as themeAction } from '@/routes/api_.theme'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { THEME_INPUT_NAME, type ThemeMode } from '@/theme/theme.schema'

interface ThemeSwitchProps {
  className?: string
}

/**
 * Progressively enhanced theme switch component that works without JavaScript.
 */
export function ThemeSwitch({ className }: ThemeSwitchProps): React.JSX.Element {
  return (
    <Form navigate={false} method="POST" action={href('/api/theme')} className={className}>
      <div className="flex items-center justify-center gap-4">
        <Button type="submit" name={THEME_INPUT_NAME} variant="ghost" value="dark" className="cursor-pointer">
          Dark
        </Button>
        <Button type="submit" name={THEME_INPUT_NAME} variant="ghost" value="light" className="cursor-pointer">
          Light
        </Button>
        <Button type="submit" name={THEME_INPUT_NAME} variant="ghost" value="system" className="cursor-pointer">
          System
        </Button>
      </div>
    </Form>
  )
}

/**
 * Theme switch dropdown menu component that requires JavaScript.
 */
export function ThemeMenu(): React.JSX.Element {
  const fetcher = useFetcher<typeof themeAction>()

  const handleThemeChange = useCallback(
    (theme: ThemeMode) => {
      const formData = new FormData()
      formData.append(THEME_INPUT_NAME, theme)

      fetcher.submit(formData, {
        method: 'post',
        action: href('/api/theme'),
      })
    },
    [fetcher.submit],
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            aria-hidden="true"
          />
          <MoonIcon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            aria-hidden="true"
          />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer" onClick={() => handleThemeChange('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => handleThemeChange('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => handleThemeChange('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
