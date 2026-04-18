<script lang="ts">
    const offerings = [
        {
            icon: "📚",
            title: "Syllabus Courses",
            desc: "Structured coverage of college syllabi with concise explanations and one-on-one tutoring available.",
            color: "#6c63ff",
            link: "/courses",
        },
        {
            icon: "🤖",
            title: "AI Academic Projects",
            desc: "End-to-end AI-powered project support with live guidance and free hosting for your deliverables.",
            color: "#00c9a7",
            link: "/projects",
        },
        {
            icon: "🧠",
            title: "ML Sessions",
            desc: "Recorded and live group sessions on Machine Learning fundamentals and applied techniques.",
            color: "#ff9f43",
            link: "/sessions",
        },
        {
            icon: "💼",
            title: "Career Bootcamp",
            desc: "Git, Linux, Frontend, Backend, Networking — everything a fresh grad needs to land their first IT role.",
            color: "#ff6b6b",
            link: "/career",
        },
        {
            icon: "▶️",
            title: "YouTube Resources",
            desc: "Curated playlists and recorded lectures linked from our YouTube channel to complement your learning.",
            color: "#54a0ff",
            link: "#",
        },
        {
            icon: "🎯",
            title: "Career Guidance",
            desc: "Personalised roadmaps for students entering the IT field — mentored by industry professionals.",
            color: "#a29bfe",
            link: "/career",
        },
    ];

    const stats = [
        { value: "500+", label: "Students Mentored" },
        { value: "1-on-1", label: "Personalized Sessions" },
        { value: "50+", label: "Recorded Lectures" },
        { value: "100%", label: "Career Focused" },
    ];

    const proHighlights = [
        {
            icon: "🏗️",
            title: "System Design & Backend",
            desc: "Microservices, caching, message queues, and database patterns for engineers ready to architect at scale.",
            color: "#6c63ff",
        },
        {
            icon: "🐹",
            title: "Advanced Golang",
            desc: "Goroutines, concurrency, profiling, and building production-grade CLIs and APIs in idiomatic Go.",
            color: "#54a0ff",
        },
        {
            icon: "🤖",
            title: "AI & RAG Projects",
            desc: "Build real Retrieval-Augmented Generation apps with Ollama, ChromaDB, vector databases, and semantic search.",
            color: "#a29bfe",
        },
    ];
</script>

<svelte:head>
    <title>YuvvoLabs — Students & Professionals</title>
    <meta
        name="description"
        content="YuvvoLabs helps students break into IT and enables working engineers to level up with advanced courses in System Design, Golang, DevOps, and AI."
    />
</svelte:head>

<!-- HERO -->
<section class="hero">
    <div
        class="glow-orb"
        style="width:600px;height:600px;background:#6c63ff;top:-200px;left:-100px;"
    ></div>
    <div
        class="glow-orb"
        style="width:400px;height:400px;background:#00c9a7;bottom:-100px;right:-50px;"
    ></div>

    <div class="container hero-inner">
        <div class="hero-content">
            <div class="badge">For Students & Engineers</div>
            <h1 class="hero-title">
                Your Leap Into
                <br />
                <span class="gradient-text">Professional IT</span>
                <br />
                Starts Here
            </h1>
            <p class="hero-desc">
                From syllabus to career-ready: structured courses, AI projects,
                live ML sessions, and personalised career mentorship — all
                delivered over Zoom.
            </p>
            <div class="hero-actions">
                <a href="/courses" class="btn-primary" id="hero-explore-btn"
                    >Explore Courses →</a
                >
                <a href="/contact" class="btn-outline" id="hero-contact-btn"
                    >Get in Touch</a
                >
            </div>
        </div>
        <div class="hero-visual">
            <div
                class="floating-card"
                style="top:10%;right:5%;animation-delay:0s"
            >
                <span>📚</span> Syllabus Covered
            </div>
            <div
                class="floating-card"
                style="top:40%;right:-5%;animation-delay:0.5s"
            >
                <span>🤖</span> AI Projects
            </div>
            <div
                class="floating-card"
                style="top:70%;right:8%;animation-delay:1s"
            >
                <span>🚀</span> Career Ready
            </div>
            <div class="hero-badge-stack">
                <div class="stack-icon">⚡</div>
                <div class="stack-label">Yuvvo</div>
                <div class="stack-sub">Students → Engineers → Leaders</div>
            </div>
        </div>
    </div>
</section>

<!-- STATS -->
<section class="stats-section">
    <div class="container stats-grid">
        {#each stats as stat}
            <div class="stat-item">
                <span class="stat-value gradient-text">{stat.value}</span>
                <span class="stat-label">{stat.label}</span>
            </div>
        {/each}
    </div>
</section>

<!-- WHAT WE OFFER -->
<section class="section offerings">
    <div class="container">
        <div class="badge">What We Offer</div>
        <h2 class="section-title">
            Everything You Need to <br />Level Up Your Career
        </h2>
        <p class="section-subtitle">
            From your first year of college to landing your first job — we've
            got you covered.
        </p>

        <div class="grid-3">
            {#each offerings as o}
                <a
                    href={o.link}
                    class="card offering-card"
                    id="offering-{o.title.toLowerCase().replace(/\s+/g, '-')}"
                >
                    <div
                        class="offering-icon"
                        style="background: {o.color}18; border-color: {o.color}30;"
                    >
                        <span style="font-size:1.6rem">{o.icon}</span>
                    </div>
                    <h3>{o.title}</h3>
                    <p>{o.desc}</p>
                    <span class="offering-arrow" style="color:{o.color}"
                        >Learn more →</span
                    >
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- FOR PROFESSIONALS TEASER -->
<section class="section pro-teaser">
    <div class="container">
        <div class="pro-teaser-header">
            <div class="badge badge-pro">For Professionals</div>
            <h2 class="section-title">
                Already a Developer?
                <br /><span class="gradient-text">Go Deeper.</span>
            </h2>
            <p class="section-subtitle">
                Advanced courses for working engineers — System Design, Golang,
                DevOps, Serverless, and AI/RAG. All hands-on, all real-world.
            </p>
        </div>

        <div class="grid-3" style="margin-bottom:2.5rem">
            {#each proHighlights as h}
                <div class="card pro-highlight-card">
                    <div
                        class="offering-icon"
                        style="background:{h.color}18;border-color:{h.color}30"
                    >
                        <span style="font-size:1.6rem">{h.icon}</span>
                    </div>
                    <h3>{h.title}</h3>
                    <p>{h.desc}</p>
                </div>
            {/each}
        </div>

        <div style="text-align:center">
            <a href="/professionals" class="btn-primary" id="home-pro-cta"
                >Explore Professional Tracks →</a
            >
        </div>
    </div>
</section>

<!-- HOW IT WORKS -->
<section class="section how-it-works">
    <div class="container">
        <div class="badge">Process</div>
        <h2 class="section-title">Simple. Direct. Effective.</h2>
        <p class="section-subtitle">
            No complex platforms, no certifications — just focused learning over
            video calls.
        </p>

        <div class="steps">
            <div class="step">
                <div class="step-num">01</div>
                <h3>Choose Your Path</h3>
                <p>
                    Pick from courses, projects, ML sessions or career guidance
                    based on your goals.
                </p>
            </div>
            <div class="step-connector">→</div>
            <div class="step">
                <div class="step-num">02</div>
                <h3>Register & Connect</h3>
                <p>
                    Fill out our contact form and we'll reach out to schedule
                    your first session.
                </p>
            </div>
            <div class="step-connector">→</div>
            <div class="step">
                <div class="step-num">03</div>
                <h3>Learn on Zoom</h3>
                <p>
                    All sessions happen live over Zoom or similar platforms —
                    flexible and personal.
                </p>
            </div>
            <div class="step-connector">→</div>
            <div class="step">
                <div class="step-num">04</div>
                <h3>Land Your Career</h3>
                <p>
                    With industry-aligned skills and portfolio projects, step
                    into IT confidently.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- CTA BANNER -->
<section class="section cta-section">
    <div class="container">
        <div class="cta-card">
            <div
                class="glow-orb"
                style="width:300px;height:300px;background:#6c63ff;top:-80px;left:10%;"
            ></div>
            <div class="cta-content">
                <h2>Ready to Start Your Journey?</h2>
                <p>
                    Join dozens of students who've already made the leap from
                    campus to career.
                </p>
                <div class="hero-actions">
                    <a href="/contact" class="btn-primary" id="cta-contact-btn"
                        >Get Started Free →</a
                    >
                    <a href="/courses" class="btn-outline" id="cta-courses-btn"
                        >Browse Courses</a
                    >
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    /* Pro Teaser */
    .pro-teaser {
        background: linear-gradient(
            180deg,
            rgba(108, 99, 255, 0.05) 0%,
            transparent 100%
        );
        border-top: 1px solid var(--color-border);
    }

    .pro-teaser-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    .badge-pro {
        background: rgba(162, 155, 254, 0.12);
        color: #a29bfe;
        border: 1px solid rgba(162, 155, 254, 0.25);
    }

    .pro-highlight-card {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
    }

    .pro-highlight-card h3 {
        font-size: 1.05rem;
        font-weight: 700;
    }

    .pro-highlight-card p {
        color: var(--color-muted);
        font-size: 0.875rem;
        line-height: 1.65;
    }

    /* Hero */
    .hero {
        position: relative;
        padding: 7rem 0 5rem;
        overflow: hidden;
    }

    .hero-inner {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
    }

    .hero-content {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .hero-title {
        font-family: "Outfit", sans-serif;
        font-size: clamp(2.5rem, 5vw, 3.75rem);
        font-weight: 900;
        line-height: 1.1;
        letter-spacing: -0.02em;
    }

    .hero-desc {
        color: var(--color-muted);
        font-size: 1.1rem;
        line-height: 1.75;
        max-width: 480px;
    }

    .hero-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .hero-visual {
        position: relative;
        height: 440px;
    }

    .floating-card {
        position: absolute;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        padding: 0.7rem 1.2rem;
        border-radius: 0.9rem;
        font-size: 0.85rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: float 3s ease-in-out infinite alternate;
        backdrop-filter: blur(8px);
        white-space: nowrap;
    }

    @keyframes float {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-12px);
        }
    }

    .hero-badge-stack {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        background: radial-gradient(
            circle,
            rgba(108, 99, 255, 0.15) 0%,
            rgba(0, 201, 167, 0.05) 100%
        );
        border: 1px solid rgba(108, 99, 255, 0.3);
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
    }

    .stack-icon {
        font-size: 2.5rem;
    }
    .stack-label {
        font-family: "Outfit", sans-serif;
        font-size: 1.3rem;
        font-weight: 800;
    }
    .stack-sub {
        font-size: 0.7rem;
        color: var(--color-muted);
    }

    /* Stats */
    .stats-section {
        padding: 3rem 0;
        border-top: 1px solid var(--color-border);
        border-bottom: 1px solid var(--color-border);
        background: var(--color-surface);
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        text-align: center;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .stat-value {
        font-family: "Outfit", sans-serif;
        font-size: 2.25rem;
        font-weight: 800;
    }

    .stat-label {
        color: var(--color-muted);
        font-size: 0.85rem;
        font-weight: 500;
    }

    /* Offerings */
    .offerings {
        background: radial-gradient(
            ellipse at top,
            rgba(108, 99, 255, 0.06) 0%,
            transparent 60%
        );
    }

    .offering-card {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        text-decoration: none;
    }

    .offering-icon {
        width: 52px;
        height: 52px;
        border-radius: 0.9rem;
        border: 1px solid;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .offering-card h3 {
        font-size: 1.1rem;
        font-weight: 700;
    }

    .offering-card p {
        color: var(--color-muted);
        font-size: 0.9rem;
        line-height: 1.65;
        flex: 1;
    }

    .offering-arrow {
        font-size: 0.85rem;
        font-weight: 600;
        transition: gap 0.2s;
    }

    /* How it works */
    .how-it-works {
        background: var(--color-surface);
    }

    .steps {
        display: flex;
        align-items: flex-start;
        gap: 0;
        flex-wrap: wrap;
        justify-content: center;
    }

    .step {
        flex: 1;
        min-width: 180px;
        max-width: 240px;
        text-align: center;
        padding: 1.5rem;
    }

    .step-num {
        font-family: "Outfit", sans-serif;
        font-size: 2rem;
        font-weight: 900;
        color: var(--color-accent);
        opacity: 0.6;
        margin-bottom: 0.75rem;
    }

    .step h3 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .step p {
        font-size: 0.85rem;
        color: var(--color-muted);
        line-height: 1.6;
    }

    .step-connector {
        font-size: 1.5rem;
        color: var(--color-border);
        align-self: center;
        padding-bottom: 3rem;
    }

    /* CTA */
    .cta-card {
        position: relative;
        overflow: hidden;
        background: linear-gradient(
            135deg,
            rgba(108, 99, 255, 0.12) 0%,
            rgba(0, 201, 167, 0.06) 100%
        );
        border: 1px solid rgba(108, 99, 255, 0.25);
        border-radius: 1.5rem;
        padding: 4rem 3rem;
        text-align: center;
    }

    .cta-content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;
    }

    .cta-content h2 {
        font-size: clamp(1.75rem, 3vw, 2.5rem);
        font-weight: 800;
    }

    .cta-content p {
        color: var(--color-muted);
        font-size: 1.05rem;
    }

    @media (max-width: 900px) {
        .hero-inner {
            grid-template-columns: 1fr;
        }
        .hero-visual {
            display: none;
        }
        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 600px) {
        .steps {
            flex-direction: column;
            align-items: center;
        }
        .step-connector {
            transform: rotate(90deg);
            padding: 0;
        }
    }
</style>
