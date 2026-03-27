# 🛰️ Orbit

This project is a experimental sandbox for exploring **Cloudflare Workers**, **Hono**, and the Cloudflare development platform.

## 🚀 Purpose
A demo application designed to sample key Cloudflare features, including:
- **Worker Scripting**: Building serverless functions with TypeScript and the Hono framework.
- **Environment Variables**: Confuguring simple string values (`vars`) for your environment.
- **Service Bindings**: Using the **Cloudflare Workers AI** binding to run machine learning models directly in the Worker.
- **Custom Domains**: Managing routing patterns and custom subdomains (e.g., `orbit.yuvvolabs.com`).
- **Developer Workflow**: Using Wrangler for local development, type generation, and deployment.

## 🛠️ Usage

### Local Development
Run the development server locally:
```bash
npm run dev
```

### Type Generation
Regenerate TypeScript types whenever you change `wrangler.jsonc` (to sync your `c.env` bindings):
```bash
npm run cf-typegen
```

### Deployment
Deploy the Worker to Cloudflare:
```bash
npm run deploy
```

---
*Created as part of the Yuvvo Labs exploration.*
