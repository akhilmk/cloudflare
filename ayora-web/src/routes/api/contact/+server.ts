import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

interface ContactBody {
    name?: string;
    email?: string;
    phone?: string;
    college?: string;
    year?: string;
    interests?: string;
    message?: string;
    'cf-turnstile-response'?: string;
}

/**
 * POST /api/contact
 * Receives contact form submissions from the Ayora website.
 * Currently logs to console — replace with DB insert later.
 */
export const POST = async ({ request }: RequestEvent) => {
    try {
        const body = (await request.json()) as ContactBody;
        const turnstileToken = body['cf-turnstile-response'];

        // 1. Verify Turnstile Token
        if (!turnstileToken) {
            return json({ ok: false, error: 'Bot check failed (missing token)' }, { status: 400 });
        }

        const secretKey = env.TURNSTILE_SECRET;
        if (!secretKey) {
            console.error('[Ayora] Missing TURNSTILE_SECRET environment variable');
            return json({ ok: false, error: 'Server configuration error' }, { status: 500 });
        }

        const ip = request.headers.get('cf-connecting-ip') || '';

        const formData = new URLSearchParams();
        formData.append('secret', secretKey);
        formData.append('response', turnstileToken);
        formData.append('remoteip', ip);

        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: formData
        });

        const outcome = await verifyRes.json() as { success: boolean };
        if (!outcome.success) {
            return json({ ok: false, error: 'Bot check failed (invalid token)' }, { status: 403 });
        }

        const { name, email, phone, college, year, interests, message } = body;

        // Basic validation
        if (!name || !email) {
            return json({ ok: false, error: 'Name and email are required' }, { status: 400 });
        }

        const payload = {
            timestamp: new Date().toISOString(),
            name,
            email,
            phone: phone || null,
            college: college || null,
            year: year || null,
            interests: interests || '',
            message: message || ''
        };

        // TODO: Replace with DB insert
        console.log('[Ayora] New contact form submission:');
        console.log(JSON.stringify(payload, null, 2));

        return json({ ok: true, message: 'Received! We will be in touch soon.' }, { status: 200 });
    } catch (err) {
        console.error('[Ayora] Contact API error:', err);
        return json({ ok: false, error: 'Internal server error' }, { status: 500 });
    }
};
