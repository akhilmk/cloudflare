import { env } from '$env/dynamic/private';

/**
 * Escapes all MarkdownV2 reserved characters in a user-supplied string.
 * Must be applied to every dynamic value before embedding in a message.
 * Reference: https://core.telegram.org/bots/api#markdownv2-style
 */
export function escapeMdV2(text: string): string {
    return text.replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, '\\$&');
}

/**
 * Returns true if Telegram notifications are fully enabled and configured.
 * Controlled by: TELEGRAM_ENABLED=true (plus valid bot token + chat id).
 */
export function isTelegramEnabled(): boolean {
    return (
        env.TELEGRAM_ENABLED === 'true' &&
        Boolean(env.TELEGRAM_BOT_TOKEN) &&
        Boolean(env.TELEGRAM_CHAT_ID)
    );
}

/**
 * Sends a MarkdownV2-formatted message to the configured Telegram chat.
 *
 * Reusable across the entire application:
 *   - Contact form submissions   → contact.ts
 *   - Enrolment notifications    → enrolment.ts (future)
 *   - Error / alert pings        → any module
 *
 * @param text      - Pre-formatted MarkdownV2 message string
 * @param timeoutMs - Max time to wait for Telegram API (default: 5 s)
 * @returns         - true if sent successfully, false otherwise
 */
export async function sendTelegramMessage(text: string, timeoutMs = 5000): Promise<boolean> {
    if (!isTelegramEnabled()) {
        console.info('[YuvvoLabs][Telegram] Notifications disabled or not configured, skipping.');
        return false;
    }

    const token = env.TELEGRAM_BOT_TOKEN;
    const chatId = env.TELEGRAM_CHAT_ID;

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
            body: JSON.stringify({
                chat_id: chatId,
                text: text.trim(),
                parse_mode: 'MarkdownV2'
            })
        });

        if (!res.ok) {
            const err = await res.text();
            console.error('[YuvvoLabs][Telegram] API error:', err);
            return false;
        }

        return true;
    } catch (e) {
        if (e instanceof Error && e.name === 'AbortError') {
            console.error('[YuvvoLabs][Telegram] Request timed out after', timeoutMs, 'ms');
        } else {
            console.error('[YuvvoLabs][Telegram] Fetch error:', e);
        }
        return false;
    } finally {
        clearTimeout(timer);
    }
}
