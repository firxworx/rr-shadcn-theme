import { useRouteLoaderData } from 'react-router'

import type { loader as rootLoader } from '@/root'
import type { ThemeMode } from '@/theme/theme.schema'

export function useTheme(): ThemeMode {
  const data = useRouteLoaderData<typeof rootLoader>('root')
  return data?.theme ?? 'system'
}
