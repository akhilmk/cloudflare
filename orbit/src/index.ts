/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Hono } from 'hono';

const app = new Hono<{ Bindings: Env }>();

app.get('/', (c) => {
	const env = c.env;
	return c.text(`Hello World! \n${env.HELLO_MSG}`);
});
app.get('/ai', async (c) => {
	const result = await c.env.AI.run('@cf/meta/llama-3.1-8b-instruct' as any, {
		prompt: 'What is the capital of France?'
	});
	return c.json(result);
});

export default app;