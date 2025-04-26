import type { RouteConfig } from '@react-router/dev/routes'
import { flatRoutes } from '@react-router/fs-routes'

/**
 * @see https://reactrouter.com/how-to/file-route-conventions
 */
export default flatRoutes({
  ignoredRouteFiles: ['**/.*', '**/__*', '**/*.test.{js,ts,jsx,tsx}'],
}) satisfies RouteConfig

/*
 * Example of a standard route configuration (alternative to `flatRoutes()`):
 */
// import { type RouteConfig, index } from '@react-router/dev/routes'
// export default [index('routes/home.tsx')] satisfies RouteConfig
