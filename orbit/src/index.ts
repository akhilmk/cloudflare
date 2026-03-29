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

// Admin Console — now just the static shell
app.get('/admin', pageAuth, (c) => {
	return c.html(TEMPLATES.ADMIN());
});

// AI JSON endpoint — the engine behind the Joke Engine
app.get('/ai', apiAuth, async (c) => {
	const raw = c.req.query('q');
	if (!raw) return c.json({ error: 'Missing word' }, 400);

	// Sanitize to a single word
	const q = raw.trim().split(/\s+/)[0]!.slice(0, 40);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const result = await (c.env.AI.run as any)('@cf/meta/llama-3.1-8b-instruct', {
		prompt: `Tell a short funny joke about "${q}". Under 100 words. Just the joke.`,
		max_tokens: 100,
	});

	const answer = (result as { response?: string }).response ?? 'No joke found.';
	return c.json({ q, answer });
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
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'unsafe-inline'; script-src 'unsafe-inline';" />
  <style>
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    .spinner {
      width: 14px;
      height: 14px;
      border: 2px solid #333;
      border-top: 2px solid #fff;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
  </style>
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
				<button type="submit" style="background: #000; color: #fff; border: none; padding: 15px; cursor: pointer; font-size: 0.9rem; font-weight: bold; margin-top: 10px; text-transform: uppercase; letter-spacing: 1px;">Login</button>
			</form>
		</div>
	</div>
`,
		),

	ADMIN: () =>
		htmlShell(
			'Orbit — Console',
			`
	<div style="font-family: sans-serif; padding: 40px 20px; color: #111; max-width: 700px; margin: auto;">
		<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; border-bottom: 2px solid #000; padding-bottom: 10px;">
			<h1 style="color: #000; margin: 0; font-size: 1.5rem; text-transform: uppercase; letter-spacing: 2px;">🛰️ Orbit Console</h1>
			<a href="/logout" style="color: #000; text-decoration: none; font-weight: bold; font-size: 0.8rem; text-transform: uppercase; padding: 5px 10px; border: 1px solid #000;">Sign Out</a>
		</div>
		<div style="background: #fff; padding: 30px; border: 1px solid #eee;">
			<form id="joke-form" style="display: flex; flex-direction: column; gap: 12px;">
				<label for="q" style="font-size: 0.9rem; font-weight: bold; color: #333;">Drop a word. Get a joke.</label>
				<div style="display: flex; gap: 10px;">
					<input id="q" type="text" name="q" placeholder="e.g. banana" style="flex-grow: 1; padding: 12px; border: 1px solid #000; font-family: monospace;" required />
					<button type="submit" id="submit-btn" style="background: #000; color: #fff; border: none; padding: 0 25px; cursor: pointer; font-weight: bold; text-transform: uppercase;">Get a Joke</button>
				</div>
			</form>
			<div id="result-area" style="display: none; margin-top: 40px; padding: 30px; background: #000; color: #fff; position: relative;">
				<div id="status-tag" style="position: absolute; top: 10px; right: 15px; font-size: 0.6rem; color: #444; font-family: monospace;">😄 JOKE LOADED</div>
				<div id="spinner" class="spinner" style="position: absolute; top: 10px; right: 100px; display: none;"></div>
				<strong id="about-tag" style="display: block; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; color: #666;">About: banana</strong>
				<p id="joke-text" style="font-size: 1.1rem; font-family: monospace; line-height: 1.7; overflow-wrap: break-word; margin: 0;"></p>
			</div>
		</div>
	</div>
	<script>
		const form = document.getElementById('joke-form');
		const resultArea = document.getElementById('result-area');
		const jokeText = document.getElementById('joke-text');
		const aboutTag = document.getElementById('about-tag');
		const submitBtn = document.getElementById('submit-btn');
		const statusTag = document.getElementById('status-tag');
		const spinner = document.getElementById('spinner');

		form.onsubmit = async (e) => {
			e.preventDefault();
			const q = document.getElementById('q').value;
			
			// Loading state
			submitBtn.disabled = true;
			submitBtn.innerText = 'Consulting...';
			resultArea.style.display = 'block';
			resultArea.style.opacity = '0.5';
			statusTag.innerText = '⚡ GENERATING';
			spinner.style.display = 'inline-block';
			jokeText.innerText = 'Crunching reality into a joke...';
			
			try {
				const res = await fetch(\`/ai?q=\${encodeURIComponent(q)}\`);
				const data = await res.json();
				
				if (data.error) throw new Error(data.error);
				
				jokeText.innerText = data.answer;
				aboutTag.innerText = 'About: ' + data.q;
				statusTag.innerText = '😄 JOKE LOADED';
				resultArea.style.opacity = '1';
			} catch (err) {
				jokeText.innerText = 'Error: ' + err.message;
				statusTag.innerText = '❌ FAILED';
			} finally {
				submitBtn.disabled = false;
				submitBtn.innerText = 'Get a Joke';
				spinner.style.display = 'none';
			}
		};
	</script>
`,
		),
};

export default app;