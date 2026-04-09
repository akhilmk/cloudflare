import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface ContactBody {
    name?: string;
    email?: string;
    phone?: string;
    college?: string;
    year?: string;
    interests?: string;
    message?: string;
}

/**
 * POST /api/contact
 * Receives contact form submissions from the Ayora website.
 * Currently logs to console — replace with DB insert later.
 */
export const POST: RequestHandler = async ({ request }) => {
    try {
        const body = (await request.json()) as ContactBody;

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
