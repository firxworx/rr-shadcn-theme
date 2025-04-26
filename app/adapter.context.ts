import { unstable_createContext } from 'react-router'

export type AdapterContext = {
  cloudflare: {
    env: Env
    ctx: ExecutionContext
  }
}

/**
 * Context value is populated in worker entrypoint.
 */
export const adapterContext = unstable_createContext<AdapterContext>()
