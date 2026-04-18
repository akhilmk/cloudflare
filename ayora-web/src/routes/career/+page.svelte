<script lang="ts">
    const tracks = [
        {
            icon: "🐧",
            title: "Linux",
            color: "#ff9f43",
            lessons: [
                "Terminal basics",
                "File system",
                "Permissions",
                "Bash scripting",
                "Package management",
                "SSH & remote access",
            ],
        },
        {
            icon: "🔀",
            title: "Git & GitHub",
            color: "#6c63ff",
            lessons: [
                "Init & clone",
                "Branching & merging",
                "Pull requests",
                "Rebase & cherry-pick",
                "GitHub Actions intro",
                "Open source contribution",
            ],
        },
        {
            icon: "🖥️",
            title: "Frontend Basics",
            color: "#00c9a7",
            lessons: [
                "HTML5 semantics",
                "CSS layouts",
                "Responsive design",
                "JavaScript DOM",
                "Fetch API",
                "Intro to React/SvelteKit",
            ],
        },
        {
            icon: "⚙️",
            title: "Backend Basics",
            color: "#ff6b6b",
            lessons: [
                "HTTP fundamentals",
                "REST APIs",
                "Node.js / Python Flask",
                "Databases (SQL)",
                "Authentication basics",
                "Deploying servers",
            ],
        },
        {
            icon: "🌐",
            title: "Networking",
            color: "#54a0ff",
            lessons: [
                "OSI model",
                "TCP/IP",
                "DNS & HTTP",
                "Firewalls & VPNs",
                "Socket programming",
                "Cloud networking basics",
            ],
        },
        {
            icon: "📋",
            title: "Career Essentials",
            color: "#a29bfe",
            lessons: [
                "Building a portfolio",
                "Resume crafting",
                "LinkedIn optimization",
                "Mock interviews",
                "GitHub profile setup",
                "Negotiating your first offer",
            ],
        },
    ];

    const milestones = [
        {
            label: "Week 1-2",
            title: "Foundation",
            desc: "Linux, Git, Terminal — the tools every developer uses daily.",
        },
        {
            label: "Week 3-4",
            title: "Web Basics",
            desc: "HTML, CSS, and JavaScript fundamentals with hands-on exercises.",
        },
        {
            label: "Week 5-6",
            title: "Backend & APIs",
            desc: "Build your first REST API and connect it to a simple frontend.",
        },
        {
            label: "Week 7-8",
            title: "Networking & Deploy",
            desc: "Understand how the internet works and deploy your project live.",
        },
        {
            label: "Week 9-10",
            title: "Job Readiness",
            desc: "Resume, portfolio, GitHub, LinkedIn, and mock interview prep.",
        },
    ];
</script>

<svelte:head>
    <title>Career Guidance — YuvvoLabs</title>
    <meta
        name="description"
        content="Career bootcamp for freshers: Linux, Git, Frontend, Backend, Networking and interview prep at YuvvoLabs."
    />
</svelte:head>

<section class="page-header">
    <div
        class="glow-orb"
        style="width:500px;height:500px;background:#54a0ff;top:-200px;left:-100px;"
    ></div>
    <div class="container">
        <div class="badge">Career Guidance</div>
        <h1 class="section-title" style="text-align:left;margin-bottom:0.75rem">
            Graduate Ready. <br /><span class="gradient-text"
                >Career Ready.</span
            >
        </h1>
        <p style="color:var(--color-muted);max-width:560px;font-size:1.05rem">
            A practical 10-week bootcamp covering everything a fresh graduate
            needs to land their first IT role — taught live over Zoom.
        </p>
        <div style="margin-top:1.5rem">
            <a
                href="/contact?interest=career-bootcamp"
                class="btn-primary"
                id="career-hero-cta">Enroll in Bootcamp →</a
            >
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="badge">Curriculum</div>
        <h2 class="section-title">What You'll Learn</h2>
        <p class="section-subtitle">
            Six tracks — all essentials for the modern IT professional,
            condensed and practical.
        </p>

        <div class="grid-3" style="margin-bottom:4rem">
            {#each tracks as track}
                <div class="card track-card">
                    <div class="track-header">
                        <span
                            class="track-icon"
                            style="background:{track.color}18;border-color:{track.color}30"
                            >{track.icon}</span
                        >
                        <h3 style="color:{track.color}">{track.title}</h3>
                    </div>
                    <ul class="lesson-list">
                        {#each track.lessons as l}
                            <li>
                                <span class="bullet" style="color:{track.color}"
                                    >▸</span
                                >
                                {l}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>

        <!-- Timeline -->
        <div class="badge">Program Timeline</div>
        <h2 class="section-title">10-Week Roadmap</h2>
        <p class="section-subtitle">
            A structured path from zero to job-ready in 10 focused weeks.
        </p>
        <div class="timeline">
            {#each milestones as m, i}
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-line-container">
                        {#if i < milestones.length - 1}
                            <div class="timeline-line"></div>
                        {/if}
                    </div>
                    <div class="timeline-content card">
                        <span class="tl-label">{m.label}</span>
                        <h4>{m.title}</h4>
                        <p>{m.desc}</p>
                    </div>
                </div>
            {/each}
        </div>

        <!-- CTA -->
        <div class="career-cta">
            <h2>Ready to Start? Let's Talk.</h2>
            <p>
                No upfront commitment. Just reach out and we'll walk you through
                the program that suits you best.
            </p>
            <a
                href="/contact?interest=career-bootcamp"
                class="btn-primary"
                id="career-bottom-cta">Contact Us →</a
            >
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

    .track-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .track-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .track-icon {
        width: 42px;
        height: 42px;
        border-radius: 0.6rem;
        border: 1px solid;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        flex-shrink: 0;
    }

    .track-header h3 {
        font-size: 1.1rem;
        font-weight: 700;
    }

    .lesson-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
    }

    .lesson-list li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: var(--color-muted);
    }

    .bullet {
        font-size: 0.75rem;
        flex-shrink: 0;
    }

    /* Timeline */
    .timeline {
        display: flex;
        flex-direction: column;
        gap: 0;
        position: relative;
        max-width: 700px;
        margin: 0 auto 4rem;
    }

    .timeline-item {
        display: grid;
        grid-template-columns: 20px 2px 1fr;
        gap: 0 1.5rem;
        align-items: start;
        margin-bottom: 1.5rem;
    }

    .timeline-dot {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: var(--color-accent);
        border: 2px solid var(--color-bg);
        outline: 2px solid var(--color-accent);
        justify-self: center;
        flex-shrink: 0;
        margin-top: 1.5rem;
    }

    .timeline-line-container {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .timeline-line {
        width: 2px;
        height: calc(100% + 1.5rem);
        background: var(--color-border);
    }

    .timeline-content {
        padding: 1.25rem;
        grid-column: 3;
    }

    .tl-label {
        font-size: 0.72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--color-accent);
        display: block;
        margin-bottom: 0.4rem;
    }

    .timeline-content h4 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.3rem;
    }

    .timeline-content p {
        color: var(--color-muted);
        font-size: 0.875rem;
        line-height: 1.6;
    }

    /* Career CTA */
    .career-cta {
        background: linear-gradient(
            135deg,
            rgba(84, 160, 255, 0.1) 0%,
            rgba(108, 99, 255, 0.1) 100%
        );
        border: 1px solid rgba(84, 160, 255, 0.25);
        border-radius: 1.25rem;
        padding: 3rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .career-cta h2 {
        font-size: 1.75rem;
        font-weight: 800;
    }

    .career-cta p {
        color: var(--color-muted);
        font-size: 0.95rem;
        max-width: 480px;
    }
</style>
