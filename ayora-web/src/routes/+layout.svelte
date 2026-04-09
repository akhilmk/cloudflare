<script lang="ts">
	import "./layout.css";
	import { page } from "$app/stores";

	let { children } = $props();

	let mobileOpen = $state(false);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/courses", label: "Courses" },
		{ href: "/projects", label: "Projects" },
		{ href: "/sessions", label: "Sessions" },
		{ href: "/career", label: "Career" },
		{ href: "/professionals", label: "Professionals" },
		{ href: "/contact", label: "Contact" },
	];

	function isActive(href: string) {
		return $page.url.pathname === href;
	}
</script>

<svelte:head>
	<meta name="theme-color" content="#05070f" />
</svelte:head>

<!-- NAV -->
<header class="nav-wrapper">
	<nav class="nav-inner container">
		<a href="/" class="brand">
			<span class="brand-icon">⚡</span>
			<span>Ayora<span class="brand-labs"> Labs</span></span>
		</a>

		<!-- Desktop links -->
		<ul class="nav-links">
			{#each navLinks as link}
				<li>
					<a
						href={link.href}
						class="nav-link {isActive(link.href) ? 'active' : ''}"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="nav-actions">
			<a href="/contact" class="btn-primary" id="nav-cta-btn"
				>Get Started →</a
			>
			<button
				class="burger"
				id="mobile-menu-btn"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Toggle menu"
			>
				<span class:open={mobileOpen}></span>
				<span class:open={mobileOpen}></span>
				<span class:open={mobileOpen}></span>
			</button>
		</div>
	</nav>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="mobile-menu">
			{#each navLinks as link}
				<a
					href={link.href}
					class="mobile-link {isActive(link.href) ? 'active' : ''}"
					onclick={() => (mobileOpen = false)}
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</header>

<main>
	{@render children()}
</main>

<!-- FOOTER -->
<footer class="footer">
	<div class="container">
		<div class="footer-grid">
			<div class="footer-brand">
				<a href="/" class="brand">
					<span class="brand-icon">⚡</span>
					<span>Ayora<span class="brand-labs"> Labs</span></span>
				</a>
				<p>
					Bridging students to professional IT careers through quality
					mentorship and real-world learning.
				</p>
			</div>
			<div class="footer-links-group">
				<h4>Platform</h4>
				<ul>
					<li><a href="/courses">Courses</a></li>
					<li><a href="/projects">Projects</a></li>
					<li><a href="/sessions">Sessions</a></li>
				</ul>
			</div>
			<div class="footer-links-group">
				<h4>Explore</h4>
				<ul>
					<li><a href="/career">Career Guide</a></li>
					<li><a href="/professionals">For Professionals</a></li>
					<li><a href="/contact">Contact Us</a></li>
				</ul>
			</div>
			<div class="footer-links-group">
				<h4>Links</h4>
				<ul>
					<li>
						<a
							href="https://youtube.com"
							target="_blank"
							rel="noopener">YouTube Channel</a
						>
					</li>
					<li>
						<a href="https://zoom.us" target="_blank" rel="noopener"
							>Join a Session</a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer-bottom">
			<p>© 2025 Ayora Labs. All rights reserved.</p>
			<p class="footer-tagline">Empowering the next generation 🚀</p>
		</div>
	</div>
</footer>

<style>
	.nav-wrapper {
		position: sticky;
		top: 0;
		z-index: 100;
		background: rgba(5, 7, 15, 0.85);
		backdrop-filter: blur(16px);
		border-bottom: 1px solid var(--color-border);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 68px;
		gap: 2rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: "Outfit", sans-serif;
		font-size: 1.4rem;
		font-weight: 800;
		letter-spacing: -0.01em;
		text-decoration: none;
		color: #fff;
	}

	.brand-labs {
		font-size: 0.75em;
		font-weight: 500;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-accent-2);
		-webkit-text-fill-color: var(--color-accent-2);
		opacity: 0.9;
		vertical-align: middle;
	}

	.brand-icon {
		font-size: 1.3rem;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: 0.25rem;
	}

	.nav-link {
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--color-muted);
		padding: 0.4rem 0.9rem;
		border-radius: 0.6rem;
		transition: all 0.2s;
	}

	.nav-link:hover,
	.nav-link.active {
		color: var(--color-text);
		background: rgba(255, 255, 255, 0.06);
	}

	.nav-link.active {
		color: var(--color-accent);
	}

	.nav-actions {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.burger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.4rem;
	}

	.burger span {
		display: block;
		width: 22px;
		height: 2px;
		background: var(--color-text);
		border-radius: 2px;
		transition: all 0.3s;
	}

	.mobile-menu {
		display: flex;
		flex-direction: column;
		padding: 1rem 1.5rem;
		gap: 0.25rem;
		border-top: 1px solid var(--color-border);
		background: var(--color-surface);
	}

	.mobile-link {
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--color-muted);
		padding: 0.6rem 0.75rem;
		border-radius: 0.6rem;
		transition: all 0.2s;
	}

	.mobile-link:hover,
	.mobile-link.active {
		color: var(--color-accent);
		background: rgba(108, 99, 255, 0.08);
	}

	/* Footer */
	.footer {
		padding: 4rem 0 2rem;
		background: var(--color-surface);
		border-top: 1px solid var(--color-border);
		margin-top: 4rem;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 2fr repeat(3, 1fr);
		gap: 3rem;
		margin-bottom: 3rem;
	}

	.footer-brand p {
		margin-top: 1rem;
		color: var(--color-muted);
		font-size: 0.9rem;
		line-height: 1.7;
		max-width: 280px;
	}

	.footer-brand .brand {
		margin-bottom: 0.5rem;
	}

	.footer-links-group h4 {
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-muted);
		margin-bottom: 1rem;
	}

	.footer-links-group ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.footer-links-group ul a {
		color: var(--color-text);
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.footer-links-group ul a:hover {
		color: var(--color-accent);
	}

	.footer-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 2rem;
		border-top: 1px solid var(--color-border);
		font-size: 0.85rem;
		color: var(--color-muted);
	}

	@media (max-width: 768px) {
		.nav-links {
			display: none;
		}
		.burger {
			display: flex;
		}
		.nav-actions .btn-primary {
			display: none;
		}
		.footer-grid {
			grid-template-columns: 1fr 1fr;
		}
		.footer-bottom {
			flex-direction: column;
			gap: 0.5rem;
			text-align: center;
		}
	}

	@media (max-width: 480px) {
		.footer-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
