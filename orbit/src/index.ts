/**
 * Orbit — Secured Edge Explorer
 * Cloudflare Worker with cookie-based auth + Cloudflare AI chat interface.
 *
 * - Run `npm run dev` to start a development server
 * - Run `npm run deploy` to publish the worker
 *
 * Secrets (USERNAME, PASSWORD, COOKIE_SECRET) must be set via:
 *   wrangler secret put USERNAME
 *   wrangler secret put PASSWORD
 *   wrangler secret put COOKIE_SECRET
 * For local dev, create a .dev.vars file (gitignored).
 */

import { Hono } from 'hono';
import { setSignedCookie, getSignedCookie, deleteCookie } from 'hono/cookie';
import type { MiddlewareHandler } from 'hono';

const app = new Hono<{ Bindings: Env }>();

// --- UTILITIES ---

/** Escape HTML special characters to prevent XSS in server-rendered templates. */
function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

// --- 1. MIDDLEWARE (defined before routes so they can be referenced) ---

const pageAuth: MiddlewareHandler<{ Bindings: Env }> = async (c, next) => {
	const session = await getSignedCookie(c, c.env.COOKIE_SECRET, 'orbit_session');
	if (!session) return c.redirect('/');
	await next();
};

const apiAuth: MiddlewareHandler<{ Bindings: Env }> = async (c, next) => {
	const session = await getSignedCookie(c, c.env.COOKIE_SECRET, 'orbit_session');
	if (!session) return c.json({ error: 'Unauthorized' }, 401);
	await next();
};

// --- 2. ROUTES ---

app.get('/', async (c) => {
	if (await getSignedCookie(c, c.env.COOKIE_SECRET, 'orbit_session')) return c.redirect('/admin');
	return c.html(TEMPLATES.HOME());
});

app.post('/', async (c) => {
	const body = await c.req.parseBody();
	if (body.username === c.env.USERNAME && body.password === c.env.PASSWORD) {
		await setSignedCookie(c, 'orbit_session', 'authenticated_user', c.env.COOKIE_SECRET, {
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'Lax',
			maxAge: 3600,
		});
		return c.redirect('/admin');
	}
	return c.html(TEMPLATES.HOME('Invalid credentials. Please try again.'), 401);
});

// Admin Console — protected by pageAuth
app.get('/admin', pageAuth, async (c) => {
	const raw = c.req.query('q');
	// Sanitize to a single word — prevents multi-word prompt inflation
	const q = raw ? raw.trim().split(/\s+/)[0]!.slice(0, 40) : '';
	let answer = '';

	if (q) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const result = await (c.env.AI.run as any)('@cf/meta/llama-3.1-8b-instruct', {
			prompt: `Tell a short funny joke about "${q}". Under 100 words. Just the joke.`,
			max_tokens: 100,
		});
		answer = (result as { response?: string }).response ?? '';
	}
	return c.html(TEMPLATES.ADMIN(answer, q));
});

// AI JSON endpoint — protected by apiAuth
app.get('/ai', apiAuth, async (c) => {
	const q = c.req.query('q');
	if (!q) return c.json({ error: 'Missing query parameter: q' }, 400);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const result = await (c.env.AI.run as any)('@cf/meta/llama-3.1-8b-instruct', {
		prompt: `Answer in one word. Question: ${q}`,
	});
	return c.json({ answer: (result as { response?: string }).response ?? '' });
});

app.get('/logout', (c) => {
	// Path must match the cookie's path so browsers delete it correctly.
	deleteCookie(c, 'orbit_session', { path: '/' });
	return c.redirect('/');
});

// --- 3. HTML TEMPLATES ---

/** Shared HTML document shell with CSP meta tag and proper structure. */
function htmlShell(title: string, body: string): string {
	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'unsafe-inline'; script-src 'none';" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;background:#fff;">
${body}
</body>
</html>`;
}

const TEMPLATES = {
	HOME: (error?: string) =>
		htmlShell(
			'Orbit — Access Console',
			`
	<div style="font-family: sans-serif; padding: 60px 20px; color: #111; max-width: 800px; margin: auto; text-align: center;">
		<h1 style="font-size: 3.5rem; margin-bottom: 10px; color: #000; letter-spacing: -1px;">🛰️ Orbit</h1>
		<p style="font-size: 1.1rem; color: #777; margin-bottom: 40px; text-transform: uppercase; letter-spacing: 2px;">Secured Edge Explorer</p>
		<div style="max-width: 400px; margin: auto; border: 2px solid #000; padding: 40px; text-align: left;">
			<h2 style="text-align: center; color: #000; margin-top: 0; margin-bottom: 30px; text-transform: uppercase; font-size: 1.2rem; letter-spacing: 1px;">Access Console</h2>
			${error ? `<p role="alert" style="color: #000; background: #f0f0f0; padding: 12px; border-radius: 4px; text-align: center; font-size: 0.9rem; border: 1px solid #000;">${escapeHtml(error)}</p>` : ''}
			<form action="/" method="POST" style="display: flex; flex-direction: column; gap: 20px;">
				<div>
					<label for="username" style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 0.8rem; text-transform: uppercase;">User</label>
					<input id="username" type="text" name="username" autocomplete="username" style="width: 100%; padding: 12px; border: 1px solid #000; box-sizing: border-box; font-family: monospace;" placeholder="admin" required />
				</div>
				<div>
					<label for="password" style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 0.8rem; text-transform: uppercase;">Pass</label>
					<input id="password" type="password" name="password" autocomplete="current-password" style="width: 100%; padding: 12px; border: 1px solid #000; box-sizing: border-box; font-family: monospace;" placeholder="••••••••" required />
				</div>
				<button type="submit" style="background: #000; color: #fff; border: none; padding: 15px; cursor: pointer; font-size: 0.9rem; font-weight: bold; margin-top: 10px; text-transform: uppercase; letter-spacing: 1px;">Initialize &rarr;</button>
			</form>
		</div>
	</div>
`,
		),

	ADMIN: (answer?: string, query?: string) =>
		htmlShell(
			'Orbit — Console',
			`
	<div style="font-family: sans-serif; padding: 40px 20px; color: #111; max-width: 700px; margin: auto;">
		<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; border-bottom: 2px solid #000; padding-bottom: 10px;">
			<h1 style="color: #000; margin: 0; font-size: 1.5rem; text-transform: uppercase; letter-spacing: 2px;">🛰️ Orbit Console</h1>
			<a href="/logout" style="color: #000; text-decoration: none; font-weight: bold; font-size: 0.8rem; text-transform: uppercase; padding: 5px 10px; border: 1px solid #000;">Sign Out</a>
		</div>
		<div style="background: #fff; padding: 30px; border: 1px solid #eee;">
			<form action="/admin" method="GET" style="display: flex; flex-direction: column; gap: 12px;">
				<label for="q" style="font-size: 0.9rem; font-weight: bold; color: #333;">Drop a word. Get a joke.</label>
				<div style="display: flex; gap: 10px;">
					<input id="q" type="text" name="q" value="${escapeHtml(query ?? '')}" placeholder="e.g. banana" style="flex-grow: 1; padding: 12px; border: 1px solid #000; font-family: monospace;" required />
					<button type="submit" style="background: #000; color: #fff; border: none; padding: 0 25px; cursor: pointer; font-weight: bold; text-transform: uppercase;">Get a Joke</button>
				</div>
			</form>
			${answer
				? `
			<div role="region" aria-label="Joke" style="margin-top: 40px; padding: 30px; background: #000; color: #fff; position: relative;">
				<div style="position: absolute; top: 10px; right: 15px; font-size: 0.6rem; color: #444; font-family: monospace;">😄 JOKE LOADED</div>
				<strong style="display: block; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; color: #666;">About: ${escapeHtml(query ?? '')}</strong>
				<p style="font-size: 1.1rem; font-family: monospace; line-height: 1.7; overflow-wrap: break-word; margin: 0;">${escapeHtml(answer)}</p>
			</div>`
				: ''
			}
		</div>
	</div>
`,
		),
};

export default app;