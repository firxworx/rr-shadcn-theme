import { data } from 'react-router'

import type { Route } from './+types/api_.theme'

import { getThemeSetCookieValue } from '@/theme/theme.server'
import { THEME_INPUT_NAME, zThemeMode } from '@/theme/theme.schema'

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const themeMode = zThemeMode.parse(formData.get(THEME_INPUT_NAME))

  return data(null, {
    headers: { 'Set-Cookie': await getThemeSetCookieValue(themeMode) },
  })
}
