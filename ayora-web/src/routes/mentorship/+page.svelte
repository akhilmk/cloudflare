<script lang="ts">
    // --- FROM CAREER (GRADUATE TRACK) ---
    const graduateTracks = [
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

    // --- FROM PROFESSIONALS (ADVANCED TRACK) ---
    const advancedTracks = [
        {
            icon: "🏗️",
            title: "Backend & System Design",
            color: "#6c63ff",
            topics: [
                "REST & gRPC API design",
                "Database design patterns",
                "Caching strategies",
                "Message queues",
                "Microservices architecture",
                "Load balancing basics",
            ],
        },
        {
            icon: "🐳",
            title: "Containerization & Monitoring",
            color: "#00c9a7",
            topics: [
                "Docker fundamentals",
                "Docker Compose",
                "ELK stack (Elasticsearch, Logstash, Kibana)",
                "Prometheus setup",
                "Grafana dashboards",
                "Alerting & observability",
            ],
        },
        {
            icon: "🐹",
            title: "Advanced Golang",
            color: "#54a0ff",
            topics: [
                "Goroutines & channels",
                "Concurrency patterns",
                "Context & cancellation",
                "Performance profiling",
                "Go testing & benchmarks",
                "Building CLIs & APIs",
            ],
        },
        {
            icon: "🖥️",
            title: "Live VPS Hosting",
            color: "#ff9f43",
            topics: [
                "Domain registration",
                "VPS provisioning",
                "Reverse proxy (Nginx / Caddy)",
                "SSL/TLS setup",
                "App deployment pipelines",
                "Server hardening basics",
            ],
        },
        {
            icon: "☁️",
            title: "Serverless Deployment",
            color: "#ff6b6b",
            topics: [
                "Cloudflare Workers",
                "Google Cloud Run",
                "Edge functions",
                "Serverless databases",
                "Cold-start optimisation",
                "Cost & scaling considerations",
            ],
        },
        {
            icon: "🤖",
            title: "AI & RAG Projects",
            color: "#a29bfe",
            topics: [
                "Retrieval-Augmented Generation",
                "Ollama local LLM setup",
                "ChromaDB & Vector Databases",
                "Semantic search",
                "Embedding pipelines",
                "End-to-end RAG application",
            ],
        },
    ];

    const stats = [
        { value: "12", label: "Learning Tracks" },
        { value: "Live", label: "Mentorship" },
        { value: "1-on-1", label: "Guidance" },
        { value: "Real", label: "Production Skills" },
    ];
</script>

<svelte:head>
    <title>Mentorship — YuvvoLabs</title>
    <meta
        name="description"
        content="From fresh graduate bootcamps to advanced engineering tracks. Live 1-on-1 mentorship at YuvvoLabs."
    />
</svelte:head>

<section class="page-header">
    <div
        class="glow-orb"
        style="width:600px;height:600px;background:#6c63ff;top:-200px;right:-100px;"
    ></div>
    <div
        class="glow-orb"
        style="width:400px;height:400px;background:#00c9a7;bottom:-100px;left:5%;"
    ></div>
    <div class="container">
        <div class="badge">Mentorship Programs</div>
        <h1 class="section-title" style="text-align:left;margin-bottom:0.75rem">
            Grow Your<br /><span class="gradient-text">Engineering Career</span>
        </h1>
        <p
            style="color:var(--color-muted);max-width:600px;font-size:1.1rem;line-height:1.75"
        >
            Bridge the gap from student to professional, or junior to senior.
            Live, hands-on tracks delivered one-on-one or in small groups.
        </p>
        <div style="margin-top:2rem;display:flex;gap:1rem;flex-wrap:wrap">
            <a href="#graduate-track" class="btn-primary">Freshers Track ↓</a>
            <a href="#advanced-track" class="btn-outline"
                >Professional Track ↓</a
            >
        </div>
    </div>
</section>

<!-- STATS -->
<section class="stats-bar">
    <div class="container stats-grid">
        {#each stats as s}
            <div class="stat-item">
                <span class="stat-value gradient-text">{s.value}</span>
                <span class="stat-label">{s.label}</span>
            </div>
        {/each}
    </div>
</section>

<!-- GRADUATE BOOTCAMP SECTION -->
<section class="section" id="graduate-track">
    <div class="container">
        <div class="badge">For Students & Freshers</div>
        <h2 class="section-title">Graduate Ready Bootcamp</h2>
        <p class="section-subtitle">
            A practical 10-week curriculum covering everything a fresh graduate
            needs to land their first IT role.
        </p>

        <div class="grid-3" style="margin-bottom:4rem">
            {#each graduateTracks as track}
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

        <!-- Roadmap Timeline -->
        <h3
            class="section-title-small"
            style="text-align:center;margin-bottom:2rem"
        >
            10-Week Roadmap
        </h3>
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
    </div>
</section>

<!-- ADVANCED TRACKS SECTION -->
<section class="section alt-bg" id="advanced-track">
    <div class="container">
        <div class="badge badge-pro">For Working Professionals</div>
        <h2 class="section-title">Advanced Engineering tracks</h2>
        <p class="section-subtitle">
            Six in-depth modules covering the skills that distinguish senior
            engineers — System Design, DevOps, and more.
        </p>

        <div class="grid-3" style="margin-bottom:4rem">
            {#each advancedTracks as track}
                <div class="card track-card">
                    <div class="track-header">
                        <span
                            class="track-icon"
                            style="background:{track.color}18;border-color:{track.color}30"
                            >{track.icon}</span
                        >
                        <h3 style="color:{track.color}">{track.title}</h3>
                    </div>
                    <ul class="topic-list">
                        {#each track.topics as t}
                            <li>
                                <span class="bullet" style="color:{track.color}"
                                    >▸</span
                                >
                                {t}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- UNIFIED PROCESS SECTION -->
<section class="section">
    <div class="container">
        <div class="badge">Our Method</div>
        <h2 class="section-title">How Mentorship Works</h2>
        <p class="section-subtitle">
            Practical, direct, and project-focused learning over video calls.
        </p>

        <div class="process-steps">
            <div class="p-step">
                <div class="ps-num">01</div>
                <h4>Pick Your Path</h4>
                <p>
                    Choose the graduate bootcamp or specific advanced
                    engineering tracks.
                </p>
            </div>
            <div class="ps-arrow">→</div>
            <div class="p-step">
                <div class="ps-num">02</div>
                <h4>Discovery Call</h4>
                <p>
                    Register interest and we schedule a free 1-on-1 call to
                    align goals.
                </p>
            </div>
            <div class="ps-arrow">→</div>
            <div class="p-step">
                <div class="ps-num">03</div>
                <h4>Build & Deploy</h4>
                <p>
                    Work on real projects as you learn, ending with a live
                    production deployment.
                </p>
            </div>
        </div>

        <div class="mentorship-cta card">
            <h2>Ready to Begin?</h2>
            <p>
                Join dozens of engineers and graduates who have accelerated
                their careers with YuvvoLabs.
            </p>
            <a
                href="/contact?interest=mentorship-graduate-track"
                class="btn-primary">Register Your Interest →</a
            >
        </div>
    </div>
</section>

<style>
    .page-header {
        position: relative;
        overflow: hidden;
        padding: 6rem 0 4rem;
        border-bottom: 1px solid var(--color-border);
    }

    .alt-bg {
        background: linear-gradient(
            180deg,
            rgba(108, 99, 255, 0.05) 0%,
            transparent 100%
        );
        border-top: 1px solid var(--color-border);
        border-bottom: 1px solid var(--color-border);
    }

    /* Stats */
    .stats-bar {
        padding: 2.5rem 0;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-surface);
    }
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        text-align: center;
    }
    .stat-value {
        font-family: "Outfit", sans-serif;
        font-size: 2rem;
        font-weight: 800;
    }
    .stat-label {
        color: var(--color-muted);
        font-size: 0.82rem;
        font-weight: 500;
    }

    /* Track Cards */
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
        font-size: 1.05rem;
        font-weight: 700;
    }
    .lesson-list,
    .topic-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
    }
    .lesson-list li,
    .topic-list li {
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
        max-width: 700px;
        margin: 0 auto;
    }
    .timeline-item {
        display: grid;
        grid-template-columns: 20px 2px 1fr;
        gap: 0 1.5rem;
        margin-bottom: 1.5rem;
    }
    .timeline-dot {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: var(--color-accent);
        outline: 2px solid var(--color-accent);
        border: 2px solid var(--color-bg);
        margin-top: 1.5rem;
        justify-self: center;
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
        color: var(--color-accent);
        display: block;
        margin-bottom: 0.4rem;
    }

    /* Process steps */
    .process-steps {
        display: flex;
        justify-content: center;
        gap: 0;
        flex-wrap: wrap;
        margin-bottom: 4rem;
    }
    .p-step {
        flex: 1;
        min-width: 200px;
        max-width: 260px;
        text-align: center;
        padding: 1.5rem;
    }
    .ps-num {
        font-family: "Outfit", sans-serif;
        font-size: 2rem;
        font-weight: 900;
        color: var(--color-accent);
        opacity: 0.5;
        margin-bottom: 0.5rem;
    }
    .ps-arrow {
        font-size: 1.5rem;
        color: var(--color-border);
        align-self: center;
        padding-bottom: 3rem;
    }

    /* CTA */
    .mentorship-cta {
        background: linear-gradient(
            135deg,
            rgba(108, 99, 255, 0.12) 0%,
            rgba(0, 201, 167, 0.06) 100%
        );
        border: 1px solid rgba(108, 99, 255, 0.25);
        padding: 3rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;
    }

    .badge-pro {
        background: rgba(0, 201, 167, 0.12);
        color: #00c9a7;
        border-color: rgba(0, 201, 167, 0.25);
    }

    @media (max-width: 900px) {
        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 600px) {
        .process-steps {
            flex-direction: column;
            align-items: center;
        }
        .ps-arrow {
            transform: rotate(90deg);
            padding: 0;
        }
    }
</style>
