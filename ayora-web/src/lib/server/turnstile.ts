import { env } from '$env/dynamic/private';

export interface TurnstileResult {
    ok: boolean;
    error?: string;
}

/**
 * Verifies a Cloudflare Turnstile token against the siteverify API.
 * Reusable across any route that needs bot protection (contact, enroll, etc.)
 *
 * @param token  - The `cf-turnstile-response` value from the form submission
 * @param remoteIp - Optional: the client's IP from `cf-connecting-ip` header
 */
export async function verifyTurnstile(
    token: string | undefined,
    remoteIp?: string
): Promise<TurnstileResult> {
    if (!token) {
        return { ok: false, error: 'Bot check failed (missing token)' };
    }

    const secretKey = env.TURNSTILE_SECRET;
    if (!secretKey) {
        console.error('[Ayora] Missing TURNSTILE_SECRET environment variable');
        return { ok: false, error: 'Server configuration error' };
    }

    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);
    if (remoteIp) formData.append('remoteip', remoteIp);

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: formData
    });

    const outcome = (await res.json()) as { success: boolean };
    if (!outcome.success) {
        return { ok: false, error: 'Bot check failed (invalid token)' };
    }

    return { ok: true };
}
