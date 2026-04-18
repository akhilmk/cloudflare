<script lang="ts">
    const projectTypes = [
        {
            icon: "🤖",
            title: "AI / ML Projects",
            color: "#6c63ff",
            examples: [
                "Sentiment Analysis Tool",
                "Image Classification App",
                "Chatbot with NLP",
                "Recommendation System",
                "Fraud Detection Model",
            ],
        },
        {
            icon: "🌐",
            title: "Web Development",
            color: "#00c9a7",
            examples: [
                "Full-Stack Portfolio",
                "REST API Backend",
                "E-Commerce Site",
                "Real-Time Chat App",
                "Student Mgmt System",
            ],
        },
        {
            icon: "📊",
            title: "Data Science",
            color: "#ff9f43",
            examples: [
                "Data Visualization Dashboard",
                "Predictive Analytics",
                "EDA Reports",
                "COVID Data Analysis",
                "Stock Price Forecasting",
            ],
        },
        {
            icon: "📱",
            title: "Other Tech",
            color: "#ff6b6b",
            examples: [
                "IoT Sensor Dashboard",
                "Blockchain Voting",
                "Compiler Design",
                "OS Simulation",
                "Network Packet Analyzer",
            ],
        },
    ];

    const process = [
        {
            num: "01",
            title: "Submit Your Idea",
            desc: "Tell us your topic, domain, and deadline via our contact form.",
        },
        {
            num: "02",
            title: "We Plan Together",
            desc: "Our mentor helps you finalize scope, tech stack, and architecture.",
        },
        {
            num: "03",
            title: "Build & Guide",
            desc: "You build it; we guide step-by-step over Zoom sessions.",
        },
        {
            num: "04",
            title: "Host & Deploy",
            desc: "We help you host the final project for free — live demo ready!",
        },
    ];
</script>

<svelte:head>
    <title>Academic Projects — YuvvoLabs</title>
    <meta
        name="description"
        content="Get end-to-end academic project support with AI integration and free hosting at YuvvoLabs."
    />
</svelte:head>

<section class="page-header">
    <div
        class="glow-orb"
        style="width:500px;height:500px;background:#00c9a7;top:-200px;right:-100px;"
    ></div>
    <div class="container">
        <div class="badge">Academic Projects</div>
        <h1 class="section-title" style="text-align:left;margin-bottom:0.75rem">
            AI-Powered Projects <br /><span class="gradient-text"
                >With Free Hosting</span
            >
        </h1>
        <p style="color:var(--color-muted);max-width:560px;font-size:1.05rem">
            Got a project deadline? We help you ideate, build, and even host
            your academic project — end to end. No more stress.
        </p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="badge">Project Domains</div>
        <h2 class="section-title">What Kind of Projects?</h2>
        <p class="section-subtitle">
            We support a wide range of domains suitable for undergrad and
            postgrad submissions.
        </p>

        <div class="grid-2" style="margin-bottom:4rem">
            {#each projectTypes as pt}
                <div class="card proj-card">
                    <div class="proj-header">
                        <span class="proj-icon">{pt.icon}</span>
                        <h3 style="color:{pt.color}">{pt.title}</h3>
                    </div>
                    <ul class="ex-list">
                        {#each pt.examples as ex}
                            <li>
                                <span style="color:{pt.color}">▸</span>
                                {ex}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>

        <!-- Hosting highlight -->
        <div class="hosting-band">
            <div class="hosting-left">
                <div class="hosting-icon">🚀</div>
                <div>
                    <h3>Free Project Hosting Included</h3>
                    <p>
                        We don't just help you build — we deploy it live using
                        Cloudflare, Vercel, or GitHub Pages so you have a real
                        URL to share.
                    </p>
                </div>
            </div>
            <a
                href="/contact?interest=academic-project-support"
                class="btn-primary"
                id="projects-hosting-cta">Request Project Help →</a
            >
        </div>

        <!-- Process -->
        <div class="badge" style="margin-top:4rem">Our Process</div>
        <h2 class="section-title">How It Works</h2>
        <div class="proj-steps">
            {#each process as p}
                <div class="proj-step">
                    <div class="pstep-num">{p.num}</div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
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

    .proj-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .proj-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .proj-icon {
        font-size: 1.75rem;
    }

    .proj-header h3 {
        font-size: 1.1rem;
        font-weight: 700;
    }

    .ex-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .ex-list li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: var(--color-muted);
    }

    .hosting-band {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        background: linear-gradient(
            135deg,
            rgba(0, 201, 167, 0.08) 0%,
            rgba(108, 99, 255, 0.08) 100%
        );
        border: 1px solid rgba(0, 201, 167, 0.25);
        border-radius: 1.25rem;
        padding: 2rem 2.5rem;
        flex-wrap: wrap;
    }

    .hosting-left {
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;
        flex: 1;
    }

    .hosting-icon {
        font-size: 2.5rem;
        flex-shrink: 0;
    }

    .hosting-left h3 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 0.4rem;
    }

    .hosting-left p {
        color: var(--color-muted);
        font-size: 0.875rem;
        line-height: 1.65;
    }

    .proj-steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
    }

    .proj-step {
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 1rem;
        padding: 1.5rem;
        transition: border-color 0.3s;
    }

    .proj-step:hover {
        border-color: rgba(108, 99, 255, 0.4);
    }

    .pstep-num {
        font-family: "Outfit", sans-serif;
        font-size: 2rem;
        font-weight: 900;
        color: var(--color-accent);
        opacity: 0.5;
        margin-bottom: 0.75rem;
    }

    .proj-step h4 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.4rem;
    }
    .proj-step p {
        color: var(--color-muted);
        font-size: 0.85rem;
        line-height: 1.6;
    }
</style>
