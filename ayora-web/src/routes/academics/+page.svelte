<script lang="ts">
    // --- FROM COURSES ---
    const courseCategories = [
        {
            icon: "🎓",
            tag: "Academics",
            tagColor: "#6c63ff",
            title: "Syllabus Courses",
            desc: "Subject-by-subject coverage of your college/university syllabus with concise explanations and exam-focused notes.",
            features: [
                "1-on-1 tutoring available",
                "Topic-wise breakdowns",
                "Exam preparation",
                "Notes & materials",
            ],
        },
        {
            icon: "💡",
            tag: "Engineering",
            tagColor: "#00c9a7",
            title: "Full Course Programs",
            desc: "Comprehensive one-to-one learning paths covering full subjects from introduction to advanced mastery.",
            features: [
                "Custom learning pace",
                "Flexible scheduling",
                "Doubt clearing sessions",
                "Progress tracking",
            ],
        },
        {
            icon: "🖥️",
            tag: "Career Prep",
            tagColor: "#ff9f43",
            title: "Bridging Modules",
            desc: "Practical modules for students to bridge the gap between theory and industry requirements.",
            features: [
                "Git & CLI basics",
                "Linux environment",
                "Frontend fundamentals",
                "Backend principles",
            ],
        },
    ];

    const subjects = [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management",
        "Computer Networks",
        "Software Engineering",
        "Web Technologies",
        "Python Programming",
        "Java Basics",
        "C/C++",
        "Discrete Mathematics",
        "Computer Architecture",
        "Compiler Design",
    ];

    // --- FROM PROJECTS ---
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

    const projectProcess = [
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
    <title>Academics — YuvvoLabs</title>
    <meta
        name="description"
        content="Syllabus-aligned courses and end-to-end academic project support with AI integration at YuvvoLabs."
    />
</svelte:head>

<section class="page-header">
    <div
        class="glow-orb"
        style="width:500px;height:500px;background:#6c63ff;top:-200px;left:-150px;"
    ></div>
    <div
        class="glow-orb"
        style="width:400px;height:400px;background:#00c9a7;bottom:-100px;right:-50px;"
    ></div>
    <div class="container">
        <div class="badge">Academic Support</div>
        <h1 class="section-title" style="text-align:left;margin-bottom:0.75rem">
            Excel in Your <br /><span class="gradient-text"
                >Studies & Projects</span
            >
        </h1>
        <p
            style="color:var(--color-muted);max-width:580px;font-size:1.1rem;line-height:1.7"
        >
            From university syllabus tutoring to final-semester academic
            projects. Everything a student needs to succeed, all delivered live
            via Zoom.
        </p>
        <div style="margin-top:1.5rem;display:flex;gap:1rem;flex-wrap:wrap">
            <a href="#courses" class="btn-primary">Tutoring & Courses ↓</a>
            <a href="#projects" class="btn-outline">Academic Projects ↓</a>
        </div>
    </div>
</section>

<!-- COURSES SECTION -->
<section class="section" id="courses">
    <div class="container">
        <div class="badge">Tutoring</div>
        <h2 class="section-title">University Courses</h2>
        <p class="section-subtitle">
            One-on-one sessions aligned with your specific university
            curriculum.
        </p>

        <div class="grid-3" style="margin-bottom:4rem">
            {#each courseCategories as cat}
                <div class="card cat-card">
                    <div class="cat-top">
                        <div class="cat-icon">{cat.icon}</div>
                        <span
                            class="tag"
                            style="background:{cat.tagColor}18;color:{cat.tagColor};border:1px solid {cat.tagColor}30"
                            >{cat.tag}</span
                        >
                    </div>
                    <h2>{cat.title}</h2>
                    <p>{cat.desc}</p>
                    <ul class="feat-list">
                        {#each cat.features as f}
                            <li><span class="check">✓</span> {f}</li>
                        {/each}
                    </ul>
                    <a
                        href="/contact?interest=academics-syllabusprojects"
                        class="btn-outline"
                        style="margin-top:auto">Enquire Now →</a
                    >
                </div>
            {/each}
        </div>

        <!-- Subjects Grid -->
        <h3
            class="section-title-small"
            style="text-align:center;margin-bottom:1.5rem"
        >
            Subjects We Cover
        </h3>
        <div class="subjects-grid">
            {#each subjects as s}
                <div class="subject-pill">{s}</div>
            {/each}
        </div>
    </div>
</section>

<!-- PROJECTS SECTION -->
<section class="section alt-bg" id="projects">
    <div class="container">
        <div class="badge">Support</div>
        <h2 class="section-title">Academic Projects</h2>
        <p class="section-subtitle">
            AI-powered projects for undergrad and postgrad submissions with
            end-to-end guidance.
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

        <!-- Hosting Highlight -->
        <div class="hosting-band">
            <div class="hosting-left">
                <div class="hosting-icon">🚀</div>
                <div>
                    <h3>Free Project Hosting Included</h3>
                    <p>
                        We help you deploy your final project live using
                        Cloudflare or Vercel so you have a production URL for
                        your demo.
                    </p>
                </div>
            </div>
            <a
                href="/contact?interest=academics-syllabusprojects"
                class="btn-primary">Start Your Project →</a
            >
        </div>

        <!-- Project Process -->
        <h2 class="section-title" style="margin-top:4rem">
            How Project Support Works
        </h2>
        <div class="proj-steps">
            {#each projectProcess as p}
                <div class="proj-step">
                    <div class="pstep-num">{p.num}</div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- UNIFIED NOTE -->
<section class="section">
    <div class="container">
        <div class="note-card">
            <div class="note-icon">💬</div>
            <div>
                <strong>All sessions are live via Zoom</strong>
                <p>
                    We don't host automated classes. Every session is a live
                    interaction with a mentor dedicated to your success.
                </p>
            </div>
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
            rgba(0, 201, 167, 0.05) 0%,
            transparent 100%
        );
        border-top: 1px solid var(--color-border);
        border-bottom: 1px solid var(--color-border);
    }

    /* Course Cards */
    .cat-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .cat-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .cat-icon {
        font-size: 2rem;
    }
    .cat-card h2 {
        font-size: 1.15rem;
        font-weight: 700;
    }
    .cat-card p {
        color: var(--color-muted);
        font-size: 0.9rem;
        line-height: 1.65;
        flex: 1;
    }
    .feat-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .feat-list li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: var(--color-muted);
    }
    .check {
        color: var(--color-accent-2);
        font-weight: 700;
    }

    /* Subjects */
    .subjects-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: center;
        margin-bottom: 2rem;
    }
    .subject-pill {
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        padding: 0.4rem 1rem;
        border-radius: 999px;
        font-size: 0.82rem;
        color: var(--color-muted);
    }

    /* Project Cards */
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
        font-size: 1.05rem;
        font-weight: 700;
    }
    .ex-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
    }
    .ex-list li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: var(--color-muted);
    }

    /* Hosting Band */
    .hosting-band {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        background: linear-gradient(
            135deg,
            rgba(0, 201, 167, 0.1) 0%,
            rgba(108, 99, 255, 0.1) 100%
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
        line-height: 1.6;
    }

    /* Project Steps */
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
    }
    .pstep-num {
        font-family: "Outfit", sans-serif;
        font-size: 2rem;
        font-weight: 900;
        color: var(--color-accent);
        opacity: 0.5;
        margin-bottom: 0.5rem;
    }

    /* Note Card */
    .note-card {
        display: flex;
        gap: 1.25rem;
        background: rgba(108, 99, 255, 0.08);
        border: 1px solid rgba(108, 99, 255, 0.2);
        border-radius: 1rem;
        padding: 2rem;
    }
    .note-icon {
        font-size: 2rem;
        flex-shrink: 0;
    }
    .note-card strong {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }
    .note-card p {
        color: var(--color-muted);
        font-size: 0.9rem;
        line-height: 1.65;
    }
</style>
