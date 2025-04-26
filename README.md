# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

Tailwind CSS v4 and shadcn/ui added for styling.

The main `app.css` file imports a separate `shadcn.css` file with the shadcn/ui palette.

The shadcn CLI configuration `components.json` references the `shadcn.css` file.

### shadcn CLI

```sh
pnpm shadcn add button
```

The `postshadcn` script in `package.json` will run `pnpm lint:fix` after you use the shadcn CLI to add a component or block. 

Do not be alarmed if there are errors from the `lint:fix` process! Most components require _some_ manual adjustment (usually very minor) to integrate with the rest of a codebase.

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
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
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
