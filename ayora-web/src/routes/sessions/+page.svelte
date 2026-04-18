<script lang="ts">
    const sessionTypes = [
        {
            icon: "🎬",
            tag: "Recorded",
            tagColor: "#ff9f43",
            title: "ML Recorded Sessions",
            desc: "Watch at your own pace. All recorded sessions are shared as YouTube links covering beginner to intermediate ML topics.",
            topics: [
                "Python for ML",
                "NumPy & Pandas",
                "Scikit-Learn",
                "Linear & Logistic Regression",
                "Decision Trees",
                "Neural Networks intro",
            ],
        },
        {
            icon: "🔴",
            tag: "Live",
            tagColor: "#ff6b6b",
            title: "Live Group Sessions",
            desc: "Interactive live sessions over Zoom with Q&A. Small groups ensure everyone gets attention and doubts resolved in real time.",
            topics: [
                "Deep Learning with PyTorch",
                "Computer Vision basics",
                "NLP with transformers",
                "Model deployment",
                "Kaggle walkthroughs",
                "Real-world ML projects",
            ],
        },
    ];

    const upcomingSessions = [
        {
            date: "Apr 20, 2025",
            topic: "Intro to Machine Learning",
            type: "Live",
            time: "6:00 PM IST",
            spots: 12,
        },
        {
            date: "Apr 27, 2025",
            topic: "Neural Networks from Scratch",
            type: "Live",
            time: "6:00 PM IST",
            spots: 10,
        },
        {
            date: "May 4, 2025",
            topic: "Model Deployment with Flask",
            type: "Live",
            time: "7:00 PM IST",
            spots: 15,
        },
    ];
</script>

<svelte:head>
    <title>Sessions — YuvvoLabs</title>
    <meta
        name="description"
        content="Join live and recorded ML sessions at YuvvoLabs. Interactive group learning for all skill levels."
    />
</svelte:head>

<section class="page-header">
    <div
        class="glow-orb"
        style="width:500px;height:500px;background:#ff9f43;top:-200px;right:-100px;"
    ></div>
    <div class="container">
        <div class="badge">Learning Sessions</div>
        <h1 class="section-title" style="text-align:left;margin-bottom:0.75rem">
            Master Machine Learning <br /><span class="gradient-text"
                >Live & Recorded</span
            >
        </h1>
        <p style="color:var(--color-muted);max-width:560px;font-size:1.05rem">
            Whether you prefer watching in your own time or engaging in live
            group sessions — we've got both. All over Zoom and YouTube.
        </p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="grid-2" style="margin-bottom:4rem">
            {#each sessionTypes as st}
                <div class="card session-card">
                    <div class="session-top">
                        <span class="ses-icon">{st.icon}</span>
                        <span
                            class="tag"
                            style="background:{st.tagColor}18;color:{st.tagColor};border:1px solid {st.tagColor}30"
                            >{st.tag}</span
                        >
                    </div>
                    <h2>{st.title}</h2>
                    <p>{st.desc}</p>
                    <h4>Topics Covered</h4>
                    <ul class="topic-list">
                        {#each st.topics as t}
                            <li><span class="dot"></span>{t}</li>
                        {/each}
                    </ul>
                    <a
                        href="/contact?interest=ml-live-sessions"
                        class="btn-outline"
                        id="session-{st.tag.toLowerCase()}-cta"
                        >Register Interest →</a
                    >
                </div>
            {/each}
        </div>

        <!-- Upcoming sessions table -->
        <div class="badge">Calendar</div>
        <h2 class="section-title">Upcoming Live Sessions</h2>
        <p class="section-subtitle">
            Sessions run on weekends. Register early — spots are limited to keep
            groups small.
        </p>

        <div class="sessions-table">
            <div class="session-row header-row">
                <span>Date</span>
                <span>Topic</span>
                <span>Time</span>
                <span>Spots Left</span>
                <span></span>
            </div>
            {#each upcomingSessions as s, i}
                <div class="session-row" id="session-row-{i}">
                    <span class="s-date">{s.date}</span>
                    <span class="s-topic">{s.topic}</span>
                    <span class="s-time">{s.time}</span>
                    <span class="s-spots">
                        <span class="spots-badge">{s.spots} left</span>
                    </span>
                    <a
                        href="/contact?interest=ml-live-sessions"
                        class="btn-primary"
                        style="padding:0.45rem 1rem;font-size:0.8rem"
                        id="session-register-{i}">Register</a
                    >
                </div>
            {/each}
        </div>

        <!-- YouTube section -->
        <div class="yt-section">
            <div class="yt-icon">▶️</div>
            <div>
                <h3>Find Recorded Sessions on YouTube</h3>
                <p>
                    All past sessions and standalone lectures are uploaded to
                    our YouTube channel — free to watch anytime.
                </p>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener"
                    class="btn-outline"
                    id="yt-channel-btn"
                    style="margin-top:1rem">Visit Channel →</a
                >
            </div>
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

    .session-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .session-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .ses-icon {
        font-size: 2rem;
    }

    .session-card h2 {
        font-size: 1.25rem;
        font-weight: 700;
    }

    .session-card p {
        color: var(--color-muted);
        font-size: 0.9rem;
        line-height: 1.65;
    }

    .session-card h4 {
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--color-muted);
    }

    .topic-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
        flex: 1;
    }

    .topic-list li {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        font-size: 0.875rem;
        color: var(--color-muted);
    }

    .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--color-accent);
        flex-shrink: 0;
    }

    /* Sessions table */
    .sessions-table {
        border: 1px solid var(--color-border);
        border-radius: 1rem;
        overflow: hidden;
        margin-bottom: 3rem;
    }

    .session-row {
        display: grid;
        grid-template-columns: 140px 1fr 130px 110px 120px;
        align-items: center;
        padding: 1rem 1.5rem;
        gap: 1rem;
        border-bottom: 1px solid var(--color-border);
        transition: background 0.2s;
    }

    .session-row:last-child {
        border-bottom: none;
    }

    .session-row:not(.header-row):hover {
        background: rgba(108, 99, 255, 0.04);
    }

    .header-row {
        background: var(--color-surface);
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--color-muted);
    }

    .s-date {
        color: var(--color-muted);
        font-size: 0.875rem;
    }
    .s-topic {
        font-weight: 600;
        font-size: 0.925rem;
    }
    .s-time {
        color: var(--color-muted);
        font-size: 0.85rem;
    }

    .spots-badge {
        display: inline-block;
        background: rgba(0, 201, 167, 0.1);
        color: var(--color-accent-2);
        border: 1px solid rgba(0, 201, 167, 0.25);
        border-radius: 999px;
        padding: 0.2rem 0.7rem;
        font-size: 0.75rem;
        font-weight: 600;
    }

    /* YouTube */
    .yt-section {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
        background: rgba(255, 159, 67, 0.06);
        border: 1px solid rgba(255, 159, 67, 0.2);
        border-radius: 1.25rem;
        padding: 2rem;
    }

    .yt-icon {
        font-size: 2.5rem;
        flex-shrink: 0;
    }

    .yt-section h3 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 0.4rem;
    }

    .yt-section p {
        color: var(--color-muted);
        font-size: 0.875rem;
        line-height: 1.65;
    }

    @media (max-width: 768px) {
        .session-row {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
        }
        .header-row {
            display: none;
        }
    }
</style>
