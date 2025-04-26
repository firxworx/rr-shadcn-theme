import { createCookie } from 'react-router'
import { createTypedCookie } from 'remix-utils/typed-cookie'

import { zThemeMode, type ThemeMode } from '@/theme/theme.schema'

const THEME_COOKIE_NAME = 'rr_theme' as const

// biome-ignore lint/nursery/noProcessEnv: process env usage for cookie secret
const THEME_COOKIE_SECRET = process.env.COOKIE_SECRET ?? 'superSECRET'

const cookie = createCookie(THEME_COOKIE_NAME, {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secrets: [THEME_COOKIE_SECRET],
})

const typedThemeCookie = createTypedCookie({ cookie, schema: zThemeMode })

/**
 * Get current theme mode (light/dark/system) from request cookie.
 * Falls back to 'system' if not set.
 */
export async function getTheme(request: Request): Promise<ThemeMode> {
  const themeMode = typedThemeCookie.parse(request.headers.get('Cookie'))
  return (await themeMode) ?? 'system'
}

/**
 * Return serialized cookie string to change to the given theme.
 * Add a `Set-Cookie` header to the response with with the value returned by this function.
 */
export async function getThemeSetCookieValue(nextTheme: string): Promise<string> {
  return await typedThemeCookie.serialize(nextTheme)
}
