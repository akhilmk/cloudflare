import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import { verifyTurnstile } from '$lib/server/turnstile';
import { validateContactBody, buildContactPayload, saveContact } from '$lib/server/contact';

/**
 * POST /api/contact
 * Thin HTTP adapter — delegates all logic to $lib/server/*.
 * Reusable REST endpoint: callable by the web UI, mobile apps, or any API client.
 */
export const POST = async ({ request, platform }: RequestEvent) => {
    try {
        const body = (await request.json()) as Record<string, unknown>;

        // 1. Bot protection
        const ip = request.headers.get('cf-connecting-ip') ?? undefined;
        const turnstile = await verifyTurnstile(body['cf-turnstile-response'] as string, ip);
        if (!turnstile.ok) {
            const status = turnstile.error?.includes('missing') ? 400 : 403;
            return json({ ok: false, error: turnstile.error }, { status });
        }

        // 2. Field validation
        const validation = validateContactBody(body);
        if (!validation.ok) {
            return json({ ok: false, error: validation.error }, { status: 400 });
        }

        // 3. Persist & Notify (Background task)
        const payload = buildContactPayload(body);

        // On Cloudflare, use waitUntil to return response immediately 
        // while the background work (Telegram, etc.) finishes.
        if (platform?.ctx?.waitUntil) {
            platform.ctx.waitUntil(saveContact(payload));
        } else {
            // Fallback for local dev/testing
            await saveContact(payload);
        }

        return json({
            ok: true,
            message: 'Received! We will be in touch soon.'
        }, { status: 200 });
    } catch (err) {
        console.error('[YuvvoLabs] Contact API error:', err);
        return json({ ok: false, error: 'Internal server error' }, { status: 500 });
    }
};
