<script lang="ts">
    import { enhance } from "$app/forms";
    import { PUBLIC_TURNSTILE_SITE_KEY } from "$env/static/public";

    let submitting = $state(false);
    let submitted = $state(false);
    let error = $state("");

    const interests = [
        "Syllabus Course (1-on-1)",
        "Academic Project Support",
        "ML Recorded Sessions",
        "ML Live Group Sessions",
        "Career Bootcamp",
        "Career Guidance Only",
        "YouTube / Free Resources",
    ];

    let selectedInterests = $state<string[]>([]);

    function toggleInterest(interest: string) {
        if (selectedInterests.includes(interest)) {
            selectedInterests = selectedInterests.filter((i) => i !== interest);
        } else {
            selectedInterests = [...selectedInterests, interest];
        }
    }

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        submitting = true;
        error = "";

        const form = e.target as HTMLFormElement;
        const data = Object.fromEntries(new FormData(form));
        data.interests = selectedInterests.join(", ");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = (await res.json()) as any;
            if (!res.ok)
                throw new Error(result.error || "Something went wrong");

            submitted = true;
        } catch (err: any) {
            error =
                err.message ||
                "Failed to send. Please try again or email us directly.";
        } finally {
            submitting = false;
        }
    }

    const faqs = [
        {
            q: "Are sessions held on this website?",
            a: "No. All sessions are conducted over Zoom or similar platforms. Once you register, we'll send you the meeting link.",
        },
        {
            q: "Do you offer certifications?",
            a: "No, we don't offer certifications or exams. Our focus is practical learning and career readiness.",
        },
        {
            q: "Is there a fee for the sessions?",
            a: "Please contact us to discuss pricing. We keep it affordable and student-friendly.",
        },
        {
            q: "Can I get project hosting for free?",
            a: "Yes! For academic project support, we include free hosting assistance as part of the service.",
        },
    ];

    let openFaq = $state<number | null>(null);
</script>

<svelte:head>
    <title>Contact — Ayora</title>
    <meta
        name="description"
        content="Get in touch with Ayora to register for courses, projects, ML sessions or career guidance."
    />
    <script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
    ></script>
</svelte:head>

<section class="page-header">
    <div
        class="glow-orb"
        style="width:500px;height:500px;background:#6c63ff;top:-200px;right:-100px;"
    ></div>
    <div class="container">
        <div class="badge">Get in Touch</div>
        <h1 class="section-title" style="text-align:left;margin-bottom:0.75rem">
            Let's Get You <br /><span class="gradient-text">Started</span>
        </h1>
        <p style="color:var(--color-muted);max-width:520px;font-size:1.05rem">
            Tell us what you're interested in and we'll reach out to schedule
            your first session. No commitment required.
        </p>
    </div>
</section>

<section class="section">
    <div class="container contact-layout">
        <!-- FORM -->
        <div class="form-side">
            {#if submitted}
                <div class="success-card">
                    <div class="success-icon">🎉</div>
                    <h2>Request Sent!</h2>
                    <p>
                        Thanks for reaching out. We'll contact you within 24
                        hours to discuss your learning goals.
                    </p>
                    <button
                        class="btn-outline"
                        onclick={() => {
                            submitted = false;
                        }}>Send Another</button
                    >
                </div>
            {:else}
                <form
                    class="contact-form"
                    onsubmit={handleSubmit}
                    id="contact-form"
                >
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@email.com"
                                required
                            />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="phone">Phone / WhatsApp</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+91 00000 00000"
                            />
                        </div>
                        <div class="form-group">
                            <label for="college">College / University</label>
                            <input
                                id="college"
                                name="college"
                                type="text"
                                placeholder="Your institution"
                            />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="year">Year of Study</label>
                        <select id="year" name="year">
                            <option value="">Select year</option>
                            <option value="1st Year">1st Year</option>
                            <option value="2nd Year">2nd Year</option>
                            <option value="3rd Year">3rd Year</option>
                            <option value="4th Year">4th Year</option>
                            <option value="Post Graduate">Post Graduate</option>
                            <option value="Pass-out / Working"
                                >Pass-out / Working</option
                            >
                        </select>
                    </div>

                    <!-- Interests -->
                    <fieldset class="form-group interests-fieldset">
                        <legend class="interests-legend"
                            >I'm Interested In *</legend
                        >
                        <div class="interests-grid">
                            {#each interests as interest}
                                <button
                                    type="button"
                                    class="interest-btn {selectedInterests.includes(
                                        interest,
                                    )
                                        ? 'selected'
                                        : ''}"
                                    onclick={() => toggleInterest(interest)}
                                    id="interest-{interest
                                        .toLowerCase()
                                        .replace(/\s+/g, '-')
                                        .replace(/[^a-z0-9-]/g, '')}"
                                >
                                    {interest}
                                </button>
                            {/each}
                        </div>
                    </fieldset>

                    <div class="form-group">
                        <label for="message"
                            >Anything else you'd like to share?</label
                        >
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell us your goals, subjects struggling with, or questions..."
                        ></textarea>
                    </div>

                    <div
                        class="cf-turnstile"
                        data-sitekey={PUBLIC_TURNSTILE_SITE_KEY}
                        data-theme="dark"
                        style="margin-bottom: 1rem"
                    ></div>

                    {#if error}
                        <div class="error-msg">{error}</div>
                    {/if}

                    <button
                        type="submit"
                        class="btn-primary submit-btn"
                        id="contact-submit-btn"
                        disabled={submitting || selectedInterests.length === 0}
                    >
                        {submitting ? "Sending..." : "Send My Interest →"}
                    </button>
                    {#if selectedInterests.length === 0}
                        <p class="form-hint">
                            Please select at least one interest above
                        </p>
                    {/if}
                </form>
            {/if}
        </div>

        <!-- SIDE INFO -->
        <div class="info-side">
            <div class="info-card card">
                <h3>What Happens Next?</h3>
                <ul class="next-steps">
                    <li>
                        <span class="step-dot">1</span><span
                            >We review your request within 24hrs</span
                        >
                    </li>
                    <li>
                        <span class="step-dot">2</span><span
                            >We send you a WhatsApp/email to schedule</span
                        >
                    </li>
                    <li>
                        <span class="step-dot">3</span><span
                            >First session is a free 30-min intro call</span
                        >
                    </li>
                    <li>
                        <span class="step-dot">4</span><span
                            >We customize a plan just for you</span
                        >
                    </li>
                </ul>
            </div>

            <div class="info-card card">
                <h3>Reach Us Directly</h3>
                <div class="contact-links">
                    <a
                        href="mailto:hello@ayora.dev"
                        class="contact-link"
                        id="contact-email-link"
                    >
                        <span>📧</span> hello@ayora.dev
                    </a>
                    <a
                        href="https://wa.me/919000000000"
                        target="_blank"
                        rel="noopener"
                        class="contact-link"
                        id="contact-wa-link"
                    >
                        <span>💬</span> WhatsApp Us
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener"
                        class="contact-link"
                        id="contact-yt-link"
                    >
                        <span>▶️</span> YouTube Channel
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- FAQ -->
    <div class="container" style="margin-top:4rem">
        <div class="badge">FAQ</div>
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-list">
            {#each faqs as faq, i}
                <div class="faq-item card" id="faq-{i}">
                    <button
                        class="faq-q"
                        onclick={() => (openFaq = openFaq === i ? null : i)}
                        aria-expanded={openFaq === i}
                    >
                        <span>{faq.q}</span>
                        <span class="faq-arrow {openFaq === i ? 'open' : ''}"
                            >▾</span
                        >
                    </button>
                    {#if openFaq === i}
                        <p class="faq-a">{faq.a}</p>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .page-header {
        position: relative;
        overflow: hidden;
        padding: 5rem 0 3rem;
        border-bottom: 1px solid var(--color-border);
    }

    .contact-layout {
        display: grid;
        grid-template-columns: 1fr 380px;
        gap: 2.5rem;
        align-items: start;
    }

    /* Form */
    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 1.25rem;
        padding: 2rem;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .form-group label {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--color-muted);
        text-transform: uppercase;
        letter-spacing: 0.06em;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        background: var(--color-surface-2);
        border: 1px solid var(--color-border);
        color: var(--color-text);
        padding: 0.7rem 1rem;
        border-radius: 0.65rem;
        font-size: 0.9rem;
        font-family: "Inter", sans-serif;
        transition:
            border-color 0.2s,
            box-shadow 0.2s;
        outline: none;
        resize: vertical;
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
        color: var(--color-muted);
        opacity: 0.6;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        border-color: var(--color-accent);
        box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.15);
    }

    /* Interests fieldset */
    .interests-fieldset {
        border: none;
        padding: 0;
        min-width: 0;
    }

    .interests-legend {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--color-muted);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 0.5rem;
        display: block;
    }

    /* Interests grid */
    .interests-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
    }

    .interest-btn {
        background: var(--color-surface-2);
        border: 1px solid var(--color-border);
        color: var(--color-muted);
        padding: 0.45rem 1rem;
        border-radius: 999px;
        font-size: 0.8rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        font-family: "Inter", sans-serif;
    }

    .interest-btn:hover {
        border-color: var(--color-accent);
        color: var(--color-text);
    }

    .interest-btn.selected {
        background: rgba(108, 99, 255, 0.15);
        border-color: var(--color-accent);
        color: var(--color-accent);
    }

    .submit-btn {
        align-self: flex-start;
        padding: 0.85rem 2rem;
    }

    .submit-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
        box-shadow: none !important;
    }

    .form-hint {
        font-size: 0.78rem;
        color: var(--color-muted);
        margin-top: -0.5rem;
    }

    .error-msg {
        background: rgba(255, 107, 107, 0.1);
        border: 1px solid rgba(255, 107, 107, 0.3);
        color: #ff6b6b;
        padding: 0.75rem 1rem;
        border-radius: 0.65rem;
        font-size: 0.875rem;
    }

    /* Success */
    .success-card {
        background: var(--color-surface);
        border: 1px solid rgba(0, 201, 167, 0.3);
        border-radius: 1.25rem;
        padding: 3rem 2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .success-icon {
        font-size: 3rem;
    }

    .success-card h2 {
        font-size: 1.75rem;
        font-weight: 800;
    }

    .success-card p {
        color: var(--color-muted);
        max-width: 380px;
    }

    /* Info side */
    .info-side {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        position: sticky;
        top: 84px;
    }

    .info-card h3 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .next-steps {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
    }

    .next-steps li {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        font-size: 0.875rem;
        color: var(--color-muted);
    }

    .step-dot {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: rgba(108, 99, 255, 0.15);
        border: 1px solid rgba(108, 99, 255, 0.3);
        color: var(--color-accent);
        font-size: 0.7rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .contact-links {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .contact-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.875rem;
        color: var(--color-muted);
        padding: 0.6rem 0.75rem;
        border-radius: 0.6rem;
        transition: all 0.2s;
        text-decoration: none;
    }

    .contact-link:hover {
        background: rgba(108, 99, 255, 0.08);
        color: var(--color-accent);
    }

    /* FAQ */
    .faq-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        max-width: 760px;
        margin: 0 auto;
    }

    .faq-item {
        padding: 1.25rem 1.5rem;
    }

    .faq-q {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: none;
        border: none;
        color: var(--color-text);
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        text-align: left;
        gap: 1rem;
        font-family: "Inter", sans-serif;
    }

    .faq-arrow {
        font-size: 1.1rem;
        color: var(--color-muted);
        transition: transform 0.3s;
        flex-shrink: 0;
    }

    .faq-arrow.open {
        transform: rotate(180deg);
    }

    .faq-a {
        margin-top: 0.75rem;
        color: var(--color-muted);
        font-size: 0.875rem;
        line-height: 1.7;
    }

    @media (max-width: 900px) {
        .contact-layout {
            grid-template-columns: 1fr;
        }
        .info-side {
            position: static;
        }
        .form-row {
            grid-template-columns: 1fr;
        }
    }
</style>
