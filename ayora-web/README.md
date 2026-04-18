# YuvvoLabs — Web

A [SvelteKit](https://svelte.dev/docs/kit) project deployed to **Cloudflare Workers** using the [`@sveltejs/adapter-cloudflare`](https://svelte.dev/docs/kit/adapter-cloudflare).

> **Deployment model:** Assets-based (static assets served from Cloudflare's CDN, SSR/API routes run as Cloudflare Worker functions at the edge).

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | SvelteKit |
| Adapter | `@sveltejs/adapter-cloudflare` (Workers + Assets) |
| Styling | Tailwind CSS + Vanilla CSS |
| Deploy target | Cloudflare Workers |
| Language | TypeScript |

---

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte        # Global nav & footer
│   ├── +page.svelte          # Home page
│   ├── courses/              # Courses page
│   ├── projects/             # Projects page
│   ├── sessions/             # ML sessions page
│   ├── career/               # Career bootcamp page
│   ├── professionals/        # Advanced courses for engineers
│   ├── contact/              # Contact page
│   └── api/
│       └── contact/
│           └── +server.ts    # POST /api/contact — form submissions
└── lib/                      # Shared utilities
```

---

## Developing

Install dependencies and start the local dev server:

```sh
npm install
npm run dev
```

> SvelteKit uses Vite under the hood. The Cloudflare adapter runs during `build`, not `dev`.

---

## Building & Deploying

Build the production bundle (output goes to `.svelte-kit/cloudflare`):

```sh
npm run build
```

Deploy to Cloudflare Workers via Wrangler:

```sh
npx wrangler deploy
```

Preview the production build locally:

```sh
npm run preview
```

---

## Cloudflare Notes

- **Adapter:** `adapter-cloudflare` targets Cloudflare Workers with static asset support. Assets are served from Cloudflare's CDN; server routes run as Worker functions.
- **No Node.js APIs:** Worker runtime does not support `fs`, `path`, or other Node built-ins. Use Web APIs only.
- **Environment variables:** Public values go in `vars` inside `wrangler.jsonc`; sensitive keys are set as Wrangler secrets.
- **Type Generation:** Keep your IDE in sync with environment variables and Cloudflare bindings:
  ```sh
  npm run gen
  ```
- **`$types` generation:** SvelteKit generates `+server.ts` types (`./$types`) only after `npm run build` or `npm run dev`.

> 📄 For detailed setup of secrets, Turnstile, and Telegram notifications see [`doc/dev-notes.md`](doc/dev-notes.md).

---

## Recreate This Project

```sh
npx sv@0.12.4 create --template minimal --types ts \
  --add tailwindcss="plugins:none" \
  sveltekit-adapter="adapter:cloudflare+cfTarget:workers" \
  --install npm yuvvolabs-web
```
