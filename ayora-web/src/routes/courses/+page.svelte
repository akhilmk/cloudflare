<script lang="ts">
    const categories = [
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
            tag: "Career",
            tagColor: "#ff9f43",
            title: "Professional Skills",
            desc: "Practical courses for passout students: Git, Linux, Frontend, Backend & Networking for IT career readiness.",
            features: [
                "Git & Version Control",
                "Linux fundamentals",
                "Frontend basics",
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
</script>

<svelte:head>
    <title>Courses — Ayora</title>
    <meta
        name="description"
        content="Browse syllabus-aligned courses, one-on-one tutoring and professional skill programs at Ayora."
    />
</svelte:head>

<!-- PAGE HEADER -->
<section class="page-header">
    <div
        class="glow-orb"
        style="width:500px;height:500px;background:#6c63ff;top:-200px;left:-150px;"
    ></div>
    <div class="container">
        <div class="badge">Our Courses</div>
        <h1 class="section-title" style="text-align:left;margin-bottom:0.75rem">
            Learn at Your Pace,<br /><span class="gradient-text"
                >On Your Terms</span
            >
        </h1>
        <p style="color:var(--color-muted);max-width:560px;font-size:1.05rem">
            From college syllabus to professional skills — structured programs
            taught live over Zoom. No self-paced videos, just real mentorship.
        </p>
    </div>
</section>

<!-- CATEGORIES -->
<section class="section">
    <div class="container">
        <div class="grid-3" style="margin-bottom:4rem">
            {#each categories as cat}
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
                        href="/contact"
                        class="btn-outline"
                        style="margin-top:auto"
                        id="course-{cat.tag.toLowerCase()}-cta">Enquire Now →</a
                    >
                </div>
            {/each}
        </div>

        <!-- Subjects -->
        <div class="badge">Topics Covered</div>
        <h2 class="section-title">What Subjects We Cover</h2>
        <p class="section-subtitle">
            We align with your university curriculum. Can't see your subject?
            Just ask!
        </p>
        <div class="subjects-grid">
            {#each subjects as s}
                <div class="subject-pill">{s}</div>
            {/each}
        </div>

        <!-- Note -->
        <div class="note-card">
            <div class="note-icon">💬</div>
            <div>
                <strong>All sessions are over Zoom or similar platforms</strong>
                <p>
                    We don't host classes on this website. Once you register,
                    we'll schedule a session and send you the meeting link.
                </p>
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
        font-size: 1.25rem;
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
        font-size: 0.875rem;
        color: var(--color-muted);
    }

    .check {
        color: var(--color-accent-2);
        font-weight: 700;
    }

    .subjects-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: center;
        margin-bottom: 3rem;
    }

    .subject-pill {
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        padding: 0.5rem 1.1rem;
        border-radius: 999px;
        font-size: 0.85rem;
        color: var(--color-muted);
        transition: all 0.2s;
        cursor: default;
    }

    .subject-pill:hover {
        border-color: var(--color-accent);
        color: var(--color-text);
    }

    .note-card {
        display: flex;
        gap: 1.25rem;
        align-items: flex-start;
        background: rgba(108, 99, 255, 0.06);
        border: 1px solid rgba(108, 99, 255, 0.2);
        border-radius: 1rem;
        padding: 1.5rem;
    }

    .note-icon {
        font-size: 1.75rem;
        flex-shrink: 0;
    }

    .note-card strong {
        display: block;
        margin-bottom: 0.4rem;
        font-size: 1rem;
    }

    .note-card p {
        color: var(--color-muted);
        font-size: 0.875rem;
        line-height: 1.6;
    }
</style>
