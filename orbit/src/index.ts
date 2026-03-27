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
	const query = c.req.query('q');

	if (!query) {
		return c.text('Ask me any "one-word" question. \nExample: /ai?q=what is the capital of India');
	}

	const result = await c.env.AI.run('@cf/meta/llama-3.1-8b-instruct' as any, {
		prompt: `Answer the following question. 
		Guidelines:
		1. If the answer is a simple factual name (even if it is multiple words like "New Delhi" or "Elon Musk"), provide ONLY that name.
		2. Do NOT provide sentences, punctuation, or any extra text. 
		3. If the question requires a long explanation and cannot be answered with a short name, respond exactly with: "I can only answer one-word questions."
		
		Question: ${query}`,
	});
	return c.text(result.response);
});

export default app;