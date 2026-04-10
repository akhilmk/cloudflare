# Developer Documentation

Internal notes for engineers working on Ayora Labs Web.  
For project overview and deployment, see the main [README](../README.md).

---

## Contents

- [Cloudflare Turnstile (Bot Protection)](#cloudflare-turnstile-bot-protection)
- [Telegram Notifications](#telegram-notifications)

---

## Cloudflare Turnstile (Bot Protection)

Turnstile protects the contact form from bots. It is a CAPTCHA-free, privacy-first alternative to reCAPTCHA.

### Environment Variables

| Variable | Where | Description |
|----------|-------|-------------|
| `PUBLIC_TURNSTILE_SITE_KEY` | `wrangler.jsonc` → `vars` | Public key embedded in the frontend widget |
| `TURNSTILE_SECRET` | Wrangler secret | Server-side key for verifying widget tokens |

### Local Development

Add to `.env`:
```bash
PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAC2xrnVM2AQb-kIK
TURNSTILE_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> Cloudflare provides a set of **always-pass / always-fail test keys** for local dev:
> - Site key (always passes): `1x00000000000000000000AA`
> - Secret (always passes): `1x0000000000000000000000000000000AA`

### Production Setup

`PUBLIC_TURNSTILE_SITE_KEY` is a non-sensitive public value — add it to `vars` in `wrangler.jsonc`:
```jsonc
"vars": {
    "PUBLIC_TURNSTILE_SITE_KEY": "your-site-key"
}
```

`TURNSTILE_SECRET` is sensitive — set it as a Wrangler secret:
```bash
npx wrangler secret put TURNSTILE_SECRET
```

### Regenerate Types After Adding Bindings

To sync your TypeScript definitions (`src/worker-configuration.d.ts`) with the new variables and secrets:

```bash
# Recommended: Targets the specific file in src/
npm run cf-typegen

# Or use the generic shorthand
npm run gen

# Or calling wrangler directly
npx wrangler types ./src/worker-configuration.d.ts
```

---

## Telegram Notifications

When a contact form is submitted, the server fans out to all registered **notification channels**. Telegram is the active channel.

The feature is **disabled by default** — no messages are sent unless explicitly enabled.

### Environment Variables

| Variable | Where | Sensitive? | Description |
|----------|-------|-----------|-------------|
| `TELEGRAM_ENABLED` | `wrangler.jsonc` → `vars` | ❌ No | Feature flag — set to `"true"` to activate |
| `TELEGRAM_BOT_TOKEN` | Wrangler secret | ✅ Yes | Bot API token from @BotFather |
| `TELEGRAM_CHAT_ID` | Wrangler secret | ✅ Yes | Target chat/group ID |

> `TELEGRAM_ENABLED` is a plain **var** (not a secret) because `"true"` / `"false"` is not sensitive. Plain vars are visible in the Cloudflare dashboard and easier to toggle.

### Step 1: Create a Telegram Bot

1. Open Telegram → search **@BotFather**
2. Send `/newbot` and follow the prompts
3. Copy the **Bot Token** (format: `123456789:ABCdef...`)

### Step 2: Get Your Chat ID

1. Add the bot to a group or start a private chat with it
2. Send any message to it
3. Visit in your browser (replace `<TOKEN>`):
   ```
   https://api.telegram.org/bot<TOKEN>/getUpdates
   ```
4. Find `"chat":{"id":...}` — that is your **Chat ID**
   - Groups: negative integer (e.g. `-1001234567890`)
   - Private chats: positive integer

### Step 3: Local Development

Add to `.env`:
```bash
TELEGRAM_ENABLED=true
TELEGRAM_BOT_TOKEN=123456789:ABCdefGhIjKlMnOpQrStUvWxYz
TELEGRAM_CHAT_ID=-1001234567890
```

> ⚠️ `.env` is gitignored — never commit credentials.

### Step 4: Production Setup

`TELEGRAM_ENABLED` goes in `wrangler.jsonc` under `vars` (non-sensitive):
```jsonc
"vars": {
    "PUBLIC_TURNSTILE_SITE_KEY": "...",
    "TELEGRAM_ENABLED": "true"
}
```

Bot credentials go in as Wrangler secrets:
```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_CHAT_ID
```

Verify secrets are registered:
```bash
npx wrangler secret list
```

### Toggling Without Touching Source Code

You **never need to edit source code or redeploy** just to enable/disable Telegram.

**Recommended — Cloudflare Dashboard:**
1. Go to **Cloudflare Dashboard** → Workers & Pages → `ayora-web`
2. Settings → **Variables and Secrets**
3. Add or edit `TELEGRAM_ENABLED` → set to `true` or `false`
4. Click **Save** — takes effect on the next request instantly

> Dashboard variables **override** `wrangler.jsonc` values, so this always wins without redeployment.

**Alternative — Wrangler CLI (also no redeploy):**
```bash
npx wrangler secret put TELEGRAM_ENABLED
# → type: true  (or false to disable)
```

Only edit `wrangler.jsonc` if you are **already redeploying** for other changes.

### Adding More Notification Channels

The system uses a simple plugin pattern in `src/lib/server/contact.ts`.

To add a new channel (e.g. Google Sheets, email, Slack):

1. Implement a `NotificationChannel` function:
   ```ts
   const googleSheetsChannel: NotificationChannel = async (payload) => {
       await appendToSheet(payload);
   };
   ```
2. Add it to the `channels` array in `saveContact()`:
   ```ts
   const channels: NotificationChannel[] = [
       telegramChannel,
       googleSheetsChannel, // ← done
   ];
   ```

All channels run **concurrently** via `Promise.allSettled` — one failure never blocks others.

### Monitoring & Debugging

You can monitor notifications in real-time via the **Cloudflare Dashboard**:
1. Go to **Workers & Pages** → `ayora-web`
2. Click the **Logs** tab → **Begin log stream**

#### Useful Log Filters
Paste these into the "Search logs" box to filter specific events:

| Goal | Filter String |
|------|---------------|
| **All Ayora logs** | `[Ayora]` |
| **Only Telegram logs** | `[Ayora][Telegram]` |
| **Only Contact Form logic** | `[Ayora][CONTACT_FORM]` |
| **Only Errors/Warnings** | `level:error` or `level:warn` |

#### Debugging a "Silent" Failure
If a user submits a form but no Telegram message arrives:
1. Ensure `TELEGRAM_ENABLED` is actually `"true"` in the dashboard.
2. Check logs for `[Ayora][Telegram] API error`. If you see `401 Unauthorized`, your bot token is wrong.
3. Check for `[Ayora][Telegram] Notifications disabled`. This means your credentials (`BOT_TOKEN` or `CHAT_ID`) are missing or empty.

---

### Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| No messages received | `TELEGRAM_ENABLED` is not `"true"` | Check vars in wrangler.jsonc or dashboard |
| `API error: 401` | Bad bot token | Re-run `wrangler secret put TELEGRAM_BOT_TOKEN` |
| `API error: 400` | Wrong chat ID | Re-check with `getUpdates` |
| Message formatting broken | Special chars in user input | Already handled by `escapeMdV2()` |
| Request timed out | Edge network issue | Check Cloudflare Workers logs |
