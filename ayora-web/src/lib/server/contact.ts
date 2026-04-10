/**
 * Contact form — shared server-side logic.
 * Validation + persistence are separated here so:
 *   - +server.ts stays as a thin HTTP adapter
 *   - DB/email logic can be swapped in without touching the route
 */

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

export interface SaveContactResult {
    requestId: string;
}

/**
 * Persists a contact form submission.
 * Generates a unique requestId per submission — use it to correlate all log
 * lines for a single request (e.g. grep logs for the ID).
 *
 * TODO: Replace console.log with a real DB insert (D1, KV, Resend email, etc.)
 *       Store requestId alongside the record for full traceability.
 *
 * @param payload - A validated and normalised ContactPayload
 * @returns { requestId } — include in API response for client-side correlation
 */
export async function saveContact(payload: ContactPayload): Promise<SaveContactResult> {
    const requestId = crypto.randomUUID();
    const eventId = 'CONTACT_FORM'; // Static ID for bulk filtering in logs

    console.log(`[Ayora][${eventId}][${requestId}] New submission event`);
    console.log(`[Ayora][${eventId}][${requestId}] Payload:`, JSON.stringify(payload, null, 2));

    // TODO: await db.insert({ ...payload, requestId, eventId });

    return { requestId };
}
