<script lang="ts">
    const tracks = [
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
        { value: "6", label: "Advanced Tracks" },
        { value: "Live", label: "Hands-on Projects" },
        { value: "1-on-1", label: "Expert Mentorship" },
        { value: "Real", label: "Production Deployments" },
    ];
</script>

<svelte:head>
    <title>For Professionals — Ayora Labs</title>
    <meta
        name="description"
        content="Advanced courses for working engineers at Ayora Labs. Go deep on System Design, Golang, DevOps, serverless, and AI/RAG — all delivered live over Zoom."
    />
</svelte:head>

<!-- HERO -->
<section class="page-header">
    <div
        class="glow-orb"
        style="width:500px;height:500px;background:#6c63ff;top:-200px;right:-100px;"
    ></div>
    <div
        class="glow-orb"
        style="width:300px;height:300px;background:#00c9a7;bottom:-100px;left:5%;"
    ></div>
    <div class="container">
        <div class="badge">For Professionals</div>
        <h1 class="section-title" style="text-align:left;margin-bottom:0.75rem">
            Level Up Your<br /><span class="gradient-text"
                >Engineering Career</span
            >
        </h1>
        <p
            style="color:var(--color-muted);max-width:580px;font-size:1.05rem;line-height:1.75"
        >
            Go beyond the basics. Deep-dive courses on System Design, Golang,
            DevOps, serverless platforms, and cutting-edge AI — all taught live
            and hands-on.
        </p>
        <div style="margin-top:2rem;display:flex;gap:1rem;flex-wrap:wrap">
            <a href="/contact" class="btn-primary" id="pro-hero-cta"
                >Enroll Now →</a
            >
            <a href="#tracks" class="btn-outline" id="pro-explore-btn"
                >View All Tracks</a
            >
        </div>
    </div>
</section>

<!-- STATS -->
<section class="stats-bar">
    <div class="container stats-grid-pro">
        {#each stats as s}
            <div class="stat-item">
                <span class="stat-value gradient-text">{s.value}</span>
                <span class="stat-label">{s.label}</span>
            </div>
        {/each}
    </div>
</section>

<!-- TRACKS -->
<section class="section" id="tracks">
    <div class="container">
        <div class="badge">Curriculum</div>
        <h2 class="section-title">Advanced Engineering Tracks</h2>
        <p class="section-subtitle">
            Six in-depth modules covering the skills that distinguish senior
            engineers — all delivered live over Zoom with real project work.
        </p>

        <div class="grid-3" style="margin-bottom:4rem">
            {#each tracks as track}
                <div
                    class="card track-card"
                    id="track-{track.title
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/[^a-z-]/g, '')}"
                >
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

        <!-- How it works for pros -->
        <div class="badge">Process</div>
        <h2 class="section-title">How It Works</h2>
        <p class="section-subtitle">
            No certificates, no fluff — just focused, senior-level mentorship
            over video calls.
        </p>

        <div class="pro-steps">
            <div class="pro-step">
                <div class="ps-num">01</div>
                <h4>Pick Your Track</h4>
                <p>
                    Choose one or combine multiple tracks based on your goals
                    and current skill level.
                </p>
            </div>
            <div class="ps-arrow">→</div>
            <div class="pro-step">
                <div class="ps-num">02</div>
                <h4>Reach Out</h4>
                <p>
                    Fill out the enrolment form and we schedule a free discovery
                    call to align expectations.
                </p>
            </div>
            <div class="ps-arrow">→</div>
            <div class="pro-step">
                <div class="ps-num">03</div>
                <h4>Build & Deploy</h4>
                <p>
                    Every track ends with a real project you can actually demo
                    and add to your portfolio.
                </p>
            </div>
            <div class="ps-arrow">→</div>
            <div class="pro-step">
                <div class="ps-num">04</div>
                <h4>Ship to Production</h4>
                <p>
                    Deployments are real — VPS, serverless, containers. Not just
                    theory.
                </p>
            </div>
        </div>

        <!-- CTA -->
        <div class="pro-cta">
            <div
                class="glow-orb"
                style="width:250px;height:250px;background:#6c63ff;top:-60px;right:10%;"
            ></div>
            <div class="pro-cta-inner">
                <h2>Ready to Go Deeper?</h2>
                <p>
                    Join engineers who are mastering the production-grade skills
                    that actually matter at work.
                </p>
                <a href="/contact" class="btn-primary" id="pro-bottom-cta"
                    >Register Interest →</a
                >
            </div>
        </div>
    </div>
</section>

<style>
    .page-header {
        position: relative;
        overflow: hidden;
        padding: 5rem 0 3.5rem;
        border-bottom: 1px solid var(--color-border);
    }

    /* Stats */
    .stats-bar {
        padding: 2.5rem 0;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-surface);
    }

    .stats-grid-pro {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        text-align: center;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
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

    /* Tracks */
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
        font-size: 1rem;
        font-weight: 700;
    }

    .topic-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
    }

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

    /* Pro steps */
    .pro-steps {
        display: flex;
        align-items: flex-start;
        gap: 0;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 4rem;
    }

    .pro-step {
        flex: 1;
        min-width: 180px;
        max-width: 230px;
        text-align: center;
        padding: 1.5rem 1rem;
    }

    .ps-num {
        font-family: "Outfit", sans-serif;
        font-size: 2rem;
        font-weight: 900;
        color: var(--color-accent);
        opacity: 0.6;
        margin-bottom: 0.75rem;
    }

    .pro-step h4 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.4rem;
    }

    .pro-step p {
        font-size: 0.83rem;
        color: var(--color-muted);
        line-height: 1.6;
    }

    .ps-arrow {
        font-size: 1.5rem;
        color: var(--color-border);
        align-self: center;
        padding-bottom: 3rem;
    }

    /* Pro CTA */
    .pro-cta {
        position: relative;
        overflow: hidden;
        background: linear-gradient(
            135deg,
            rgba(108, 99, 255, 0.1) 0%,
            rgba(0, 201, 167, 0.06) 100%
        );
        border: 1px solid rgba(108, 99, 255, 0.25);
        border-radius: 1.5rem;
        padding: 4rem 3rem;
        text-align: center;
    }

    .pro-cta-inner {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .pro-cta-inner h2 {
        font-size: clamp(1.6rem, 3vw, 2.4rem);
        font-weight: 800;
    }

    .pro-cta-inner p {
        color: var(--color-muted);
        font-size: 1rem;
        max-width: 480px;
    }

    @media (max-width: 900px) {
        .stats-grid-pro {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 600px) {
        .pro-steps {
            flex-direction: column;
            align-items: center;
        }
        .ps-arrow {
            transform: rotate(90deg);
            padding: 0;
        }
    }
</style>
