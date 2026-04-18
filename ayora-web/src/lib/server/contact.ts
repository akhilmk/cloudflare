import { sendTelegramMessage, escapeMdV2 } from '$lib/server/telegram';

/**
 * Contact form — shared server-side logic.
 * Validation + persistence are separated here so:
 *   - +server.ts stays as a thin HTTP adapter
 *   - Notification channels can be added/removed without touching the route
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ContactPayload {
    name: string;
    email: string;
    phone?: string | null;
    college?: string | null;
    year?: string | null;
    interests?: string;
    message?: string;
    timestamp: string;
}

export interface ValidationResult {
    ok: boolean;
    error?: string;
}

/**
 * A NotificationChannel is any async function that receives a ContactPayload
 * and sends it to some downstream system.
 *
 * Extend by adding new channels to the `channels` array in saveContact().
 * Examples:
 *   - telegramChannel    ← implemented below
 *   - googleSheetsChannel ← add later, no changes needed elsewhere
 *   - emailChannel        ← add later, no changes needed elsewhere
 */
type NotificationChannel = (payload: ContactPayload) => Promise<void>;

// ─── Validation ──────────────────────────────────────────────────────────────

/**
 * Validates required fields from a raw contact form body.
 */
export function validateContactBody(body: Record<string, unknown>): ValidationResult {
    const { name, email } = body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return { ok: false, error: 'Name is required' };
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return { ok: false, error: 'A valid email is required' };
    }

    return { ok: true };
}

// ─── Payload Builder ─────────────────────────────────────────────────────────

/**
 * Builds a normalised ContactPayload from raw form body.
 * Call this after validation passes.
 */
export function buildContactPayload(body: Record<string, unknown>): ContactPayload {
    return {
        timestamp: new Date().toISOString(),
        name: (body.name as string).trim(),
        email: (body.email as string).trim(),
        phone: (body.phone as string) || null,
        college: (body.college as string) || null,
        year: (body.year as string) || null,
        interests: (body.interests as string) || '',
        message: (body.message as string) || ''
    };
}

// ─── Notification Channels ───────────────────────────────────────────────────

/**
 * Formats a ContactPayload as a safe MarkdownV2 Telegram message
 * and sends it.
 */
const telegramChannel: NotificationChannel = async (payload) => {
    const humanTime = new Date(payload.timestamp).toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short'
    });

    // Safely escape every user-supplied value
    const field = (value: string | null | undefined, fallback = 'N/A') =>
        escapeMdV2(value?.trim() || fallback);

    const message = [
        `🆕 *New Contact Submission*`,
        ``,
        `👤 *Name:* ${field(payload.name)}`,
        `📧 *Email:* ${field(payload.email)}`,
        `📱 *Phone:* ${field(payload.phone)}`,
        `🏫 *College:* ${field(payload.college)}`,
        `🎓 *Year:* ${field(payload.year)}`,
        ``,
        `💡 *Interests:*`,
        field(payload.interests, 'None selected'),
        ``,
        `💬 *Message:*`,
        field(payload.message, 'No message provided'),
        ``,
        `⏰ *Time:* ${escapeMdV2(humanTime)} \\(IST\\)`
    ].join('\n');

    const sent = await sendTelegramMessage(message);

    if (sent) {
        console.log('[YuvvoLabs][Contact][Telegram] Notification sent successfully');
    } else {
        console.warn('[YuvvoLabs][Contact][Telegram] Notification failed or skipped');
    }
};

/**
 * FUTURE: Google Sheets channel — uncomment and implement when ready.
 *
 * const googleSheetsChannel: NotificationChannel = async (payload) => {
 *     await appendToSheet(payload);
 * };
 */

// ─── Persistence Entry Point ─────────────────────────────────────────────────

/**
 * Persists a contact form submission and fans-out to all notification channels.
 *
 * To add a new destination (Google Sheets, email, Slack, etc.):
 *   1. Implement a new `NotificationChannel` function above
 *   2. Add it to the `channels` array below — nothing else changes
 *
 * @param payload - A validated and normalised ContactPayload
 */
export async function saveContact(payload: ContactPayload): Promise<void> {
    const eventId = 'CONTACT_FORM';

    console.log(`[YuvvoLabs][${eventId}] New submission received`);
    // TODO: await db.insert({ ...payload, eventId });
    console.log(`[YuvvoLabs][${eventId}] Payload:`, JSON.stringify(payload, null, 2));

    // ── Notification channels ────────────────────────────────────────────────
    // Add new channels here — order matters for logging clarity only.
    const channels: NotificationChannel[] = [
        telegramChannel,
        // googleSheetsChannel,  ← add when ready
        // emailChannel,         ← add when ready
    ];

    // Run all channels concurrently; one failure won't block others.
    const results = await Promise.allSettled(channels.map((ch) => ch(payload)));

    results.forEach((result, i) => {
        if (result.status === 'rejected') {
            console.error(`[YuvvoLabs][${eventId}] Channel[${i}] threw an error:`, result.reason);
        }
    });
}
