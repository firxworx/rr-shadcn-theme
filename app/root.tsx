import type React from 'react'
import {
  href,
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from 'react-router'

import type { Route } from './+types/root'

import '@/styles/app.css'
import { getTheme } from '@/theme/theme.server'
import { ThemeMenu } from '@/theme/theme.components'
import { Logo } from '@/components/layout/logo'

export async function loader({ request }: Route.LoaderArgs) {
  const theme = await getTheme(request)
  return { theme }
}

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

export function Layout({ children }: { children: React.ReactNode }): React.JSX.Element {
  const loaderData = useRouteLoaderData<typeof loader>('root')

  return (
    <html lang="en" dir="ltr" className={loaderData?.theme ?? 'system'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

function capitalizeFirst(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function App(): React.JSX.Element {
  return (
    <div className="flex flex-col min-h-svh">
      <header className="bg-muted dark:bg-muted/50">
        <div className="container flex items-center justify-center mx-auto py-4">
          <Link to={href('/')} viewTransition className="flex-1">
            <Logo className="h-6" />
          </Link>
          <ul className="flex items-center gap-8 text-sm">
            {[href('/'), href('/demo'), href('/about')].map((link) => (
              <li key={link}>
                <Link to={link} viewTransition className="font-semibold hover:underline">
                  {link === '/' ? 'Home' : capitalizeFirst(link.replace('/', ''))}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end flex-1">
            <ThemeMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto py-8 sm:py-16">
          <Outlet />
        </div>
      </main>
      <footer className="bg-muted dark:bg-muted/50 text-sm">
        <div className="container mx-auto py-4">
          <p className="text-center">&copy; React Router</p>
        </div>
      </footer>
    </div>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps): React.JSX.Element {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
