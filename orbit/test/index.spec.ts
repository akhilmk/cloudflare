import {
	env,
	createExecutionContext,
	waitOnExecutionContext,
	SELF,
} from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src/index';

const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

describe('Orbit Worker', () => {
	// --- Public routes ---

	it('GET / returns the login page when unauthenticated', async () => {
		const request = new IncomingRequest('http://example.com/');
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(200);
		const text = await response.text();
		expect(text).toContain('Access Console');
		expect(text).toContain('<!DOCTYPE html>');
	});

	it('POST / with wrong credentials returns 401', async () => {
		const form = new URLSearchParams({ username: 'wrong', password: 'wrong' });
		const request = new IncomingRequest('http://example.com/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: form.toString(),
		});
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(401);
		const text = await response.text();
		expect(text).toContain('Invalid credentials');
	});

	// --- Protected routes redirect when unauthenticated ---

	it('GET /admin redirects to / when unauthenticated', async () => {
		const request = new IncomingRequest('http://example.com/admin');
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(302);
		expect(response.headers.get('Location')).toBe('/');
	});

	it('GET /ai returns 401 JSON when unauthenticated', async () => {
		const request = new IncomingRequest('http://example.com/ai?q=hello');
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(401);
		const json = await response.json<{ error: string }>();
		expect(json.error).toBe('Unauthorized');
	});

	it('GET /ai without q returns 400 when unauthenticated fallback to 401', async () => {
		const request = new IncomingRequest('http://example.com/ai');
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		// apiAuth fires first, so unauthenticated → 401
		expect(response.status).toBe(401);
	});

	// --- Logout ---

	it('GET /logout redirects to /', async () => {
		const request = new IncomingRequest('http://example.com/logout');
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(302);
		expect(response.headers.get('Location')).toBe('/');
	});

	// --- XSS safety ---

	it('POST / with XSS in error does not reflect unescaped script tags', async () => {
		const form = new URLSearchParams({ username: '<script>evil()</script>', password: 'x' });
		const request = new IncomingRequest('http://example.com/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: form.toString(),
		});
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		const text = await response.text();
		// The raw script tag must NOT appear in the rendered HTML
		expect(text).not.toContain('<script>evil()</script>');
	});
});
