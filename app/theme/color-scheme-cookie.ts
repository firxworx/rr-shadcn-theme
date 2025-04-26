import { createCookie } from 'react-router'
import { createTypedCookie } from 'remix-utils/typed-cookie'
import { z } from 'zod'

export type ThemeMode = z.infer<typeof zThemeMode>

const cookie = createCookie('color-scheme', {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  // biome-ignore lint/nursery/noProcessEnv: process env ok for demo
  secrets: [process.env.COOKIE_SECRET ?? 'superSECRET'],
})

/**
 * Zod schema for theme mode (light/dark/system) with 'system' as default and catch fallback.
 */
export const zThemeMode = z.enum(['dark', 'light', 'system']).default('system').catch('system')

const typedCookie = createTypedCookie({ cookie, schema: zThemeMode })

export async function getColorScheme(request: Request): Promise<ThemeMode> {
  const colorScheme = typedCookie.parse(request.headers.get('Cookie'))
  return (await colorScheme) ?? 'system' // default to "system" if no cookie is found
}

export async function setColorScheme(colorScheme: string): Promise<string> {
  return await typedCookie.serialize(colorScheme)
}
