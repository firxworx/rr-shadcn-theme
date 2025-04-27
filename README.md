# react-router

A react-router SSR (remix) full-stack application template with tailwind v4 + shadcn/ui + light/dark theme support.

Configured for deployment as a Cloudflare worker.

Demo: https://rr-shadcn-theme.bitcurve.workers.dev/

Repo: https://github.com/firxworx/rr-shadcn-theme

## Configuration

Revise `wrangler.jsonc` to reflect your account details and enable deployments.

## Development

Run `pnpm typegen` first and any time you signficantly revise routes or edit `wrangler.jsonc`.

Development

```sh
pnpm dev
```

Build 

```sh
pnpm build
```

## shadcn/ui 

### Configuration

The main `app.css` file imports a separate `shadcn.css` file with the shadcn/ui palette.

The shadcn CLI config file `components.json` references the `shadcn.css` file so that it makes changes there.

Review the CSS files after adding any components in case you need to make any adjustments.

### shadcn CLI

The shadcn CLI is available via the `shadcn` scipt defined in `package.json`. Usage:

```sh
pnpm shadcn add button
```

The `postshadcn` script in `package.json` will run `pnpm lint:fix` after any shadcn CLI command.

Do not be alarmed if you see errors from the `lint:fix` process! This is by design!

Many components require _some_ manual adjustment to fully integrate them with the rest of a codebase.

### Theme Support

The shadcn color palette in `shadcn.css` is revised from the stock shadcn installation to use CSS `light-dark()`

A custom `dark` variant is used that respects the palette definitions.

The arrangement respects the user's `prefers-color-scheme` media-query as default theme while also supporting manual light/dark selection using a class on the document `html` element.

This approach has advantages over the stock shadcn approach and negates the need for `next-themes`, `remix-themes`, and other solutions that require JavaScript to work and add a lot of unnecessary complexity to manage the potential gap between server and client rendering with SSR.

Thanks to `@sergiodxa` and `@rossipedia` for their input on this!

Refer to `README.md` of https://github.com/sergiodxa/react-router-color-scheme-example for details on how the light/dark/system theme works. 

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
pnpm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
