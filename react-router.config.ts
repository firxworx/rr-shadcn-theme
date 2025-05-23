import type { Config } from '@react-router/dev/config'

declare module 'react-router' {
  interface Future {
    unstable_middleware: true
  }
}

export default {
  ssr: true,
  future: {
    unstable_optimizeDeps: true,
    unstable_viteEnvironmentApi: true,
    unstable_middleware: true,
    unstable_splitRouteModules: true,
  },
} satisfies Config
