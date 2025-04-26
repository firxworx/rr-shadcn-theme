import { z } from 'zod'

/**
 * Type representing theme mode (light/dark/system).
 */
export type ThemeMode = z.infer<typeof zThemeMode>

/**
 * Zod schema for theme mode (light/dark/system) with 'system' as default and catch fallback.
 */
export const zThemeMode = z.enum(['dark', 'light', 'system']).default('system').catch('system')

/**
 * Form input name for theme used by theme switch feature.
 */
export const THEME_INPUT_NAME = 'theme' as const
