import { createRequestHandler } from 'react-router'

// @ts-ignore - no types until build
import * as build from 'virtual:react-router/server-build'

import { adapterContext, type AdapterContext } from '@/adapter.context'

// const build = await import('virtual:react-router/server-build')
const handler = createRequestHandler(build)

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    try {
      const contextValue: AdapterContext = {
        cloudflare: {
          env,
          ctx,
        },
      }

      const context = new Map([[adapterContext, contextValue]])
      return handler(request, context)
    } catch (error: unknown) {
      console.error(error)
      return new Response('Internal Server Error', { status: 500 })
    }
  },
} satisfies ExportedHandler<Env>
