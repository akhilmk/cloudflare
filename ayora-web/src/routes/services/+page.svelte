<svelte:head>
	<title>Services — YuvvoLabs</title>
	<meta
		name="description"
		content="Professional website development packages for all businesses. Choose from Basic, Growth, or Pro plans tailored to help you scale online."
	/>
</svelte:head>

<div class="services-page">
	<!-- Hero -->
	<section class="hero">
		<div class="glow-orb orb-1"></div>
		<div class="glow-orb orb-2"></div>
		<div class="container hero-inner">
			<span class="badge">Website Development Packages</span>
			<h1 class="hero-title">
				Bring Your Business
				<span class="gradient-text"> Online</span>
			</h1>
			<p class="hero-sub">
				Tailored website solutions for businesses of all sizes — from
				local shops to growing enterprises. Pick the plan that fits
				where you are today.
			</p>
			<div class="hero-cta">
				<a
					href="#packages"
					class="btn-primary"
					id="hero-view-packages-btn">View Packages →</a
				>
			</div>
		</div>
	</section>

	<!-- Packages -->
	<section class="section container" id="packages">
		<p class="section-subtitle">
			Three clear tiers — everything you need to grow your business
			online.
		</p>

		<div class="packages-grid">
			<!-- ── BASIC ── -->
			<div class="pkg-card" id="pkg-basic">
				<div class="pkg-header">
					<span class="pkg-icon">📦</span>
					<div>
						<div class="pkg-label">Basic</div>
						<div class="pkg-tagline">"Get Online"</div>
					</div>
				</div>

				<div class="pkg-price">
					<span class="amount">₹10K - ₹20K</span>
					<span class="period">Per Year</span>
				</div>

				<p class="pkg-desc">
					Everything a local business needs to establish a
					professional online presence and start receiving customers.
				</p>

				<ul class="feature-list">
					<li class="feature-item">
						<span class="fi-icon">🏢</span>
						<div>
							<strong>About Us page</strong>
							<span>Business intro, story &amp; values</span>
						</div>
					</li>
					<li class="feature-item">
						<span class="fi-icon">🛍️</span>
						<div>
							<strong>Products / Services page</strong>
							<span>List with photos and descriptions</span>
						</div>
					</li>
					<li class="feature-item">
						<span class="fi-icon">🖼️</span>
						<div>
							<strong>Gallery</strong>
							<span>Product photos and videos showcase</span>
						</div>
					</li>
					<li class="feature-item">
						<span class="fi-icon">⭐</span>
						<div>
							<strong>Customer Reviews / Testimonials</strong>
							<span>Build trust with real feedback</span>
						</div>
					</li>
					<li class="feature-item">
						<span class="fi-icon">📍</span>
						<div>
							<strong>Contact Details + Google Maps</strong>
							<span>Address, phone, email and map embed</span>
						</div>
					</li>
					<li class="feature-item">
						<span class="fi-icon">💬</span>
						<div>
							<strong>One-click contact buttons</strong>
							<span>WhatsApp, Telegram, Phone call</span>
						</div>
					</li>
					<li class="feature-item">
						<span class="fi-icon">🕐</span>
						<div>
							<strong>Business hours display</strong>
							<span
								>Opening &amp; closing times, clearly shown</span
							>
						</div>
					</li>
					<li class="feature-item">
						<span class="fi-icon">📱</span>
						<div>
							<strong>Mobile-friendly design</strong>
							<span>Responsive for all screen sizes</span>
						</div>
					</li>
					<li class="feature-item">
						<span class="fi-icon">💚</span>
						<div>
							<strong>WhatsApp chat widget</strong>
							<span>Floating button on every page</span>
						</div>
					</li>
					<li class="feature-item">
						<span class="fi-icon">🔒</span>
						<div>
							<strong>SSL Certificate setup</strong>
							<span>https:// secure site</span>
						</div>
					</li>
					<li class="feature-item">
						<span class="fi-icon">🔗</span>
						<div>
							<strong>Social media links</strong>
							<span>Instagram, Facebook, YouTube</span>
						</div>
					</li>
				</ul>

				<a
					href="/contact?interest=software-development"
					class="btn-primary pkg-cta"
					id="basic-contact-btn">Enquire Now →</a
				>
			</div>

			<!-- ── GROWTH (highlighted) ── -->
			<div class="pkg-card pkg-featured" id="pkg-growth">
				<div class="featured-tag">Most Popular</div>
				<div class="pkg-header">
					<span class="pkg-icon">⭐</span>
					<div>
						<div class="pkg-label">Growth</div>
						<div class="pkg-tagline">"Grow Your Business"</div>
					</div>
				</div>

				<div class="pkg-price">
					<span class="amount">₹20K - ₹50K</span>
					<span class="period">Per Year</span>
				</div>

				<p class="pkg-desc">
					Everything in Basic, plus lead capture, a rich product
					catalogue, and professional email to fuel consistent growth.
				</p>

				<div class="feature-group">
					<div class="fg-title">
						<span>📬</span> Lead &amp; Enquiry
					</div>
					<ul class="feature-list">
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong
									>Contact form with Telegram notification</strong
								>
								<span
									>Instant alert to you when a lead arrives</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong>Enquiry entries to Google Sheet</strong>
								<span
									>Auto-saved, visible in your Google account</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong>"Request a Callback" button</strong>
								<span
									>Customers book a call at their convenience</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong>Direct product enquiry button</strong>
								<span
									>On every product card for faster leads</span
								>
							</div>
						</li>
					</ul>
				</div>

				<div class="feature-group">
					<div class="fg-title">
						<span>🛍️</span> Product Catalogue
					</div>
					<ul class="feature-list">
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong>Categorised product listing</strong>
								<span
									>Organised by type, collection or category</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong>Product detail page</strong>
								<span
									>Zoom photos, description, price range</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong>Stock labels &amp; search bar</strong>
								<span
									>"Available / Out of Stock" + quick search</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong>Product filtering</strong>
								<span>By category and price range</span>
							</div>
						</li>
					</ul>
				</div>

				<div class="feature-group">
					<div class="fg-title">
						<span>📣</span> Marketing &amp; Trust
					</div>
					<ul class="feature-list">
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong>Promotional banner section</strong>
								<span>Offer of the month, seasonal deals</span>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong>Google Reviews embed</strong>
								<span
									>Show real reviews directly on your site</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong>Google Analytics integration</strong>
								<span>See who visits your site and when</span>
							</div>
						</li>
					</ul>
				</div>

				<div class="feature-group">
					<div class="fg-title">
						<span>📧</span> Professional Email
					</div>
					<ul class="feature-list">
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong>Business email setup</strong>
								<span>e.g. owner@yourshop.com</span>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot"></span>
							<div>
								<strong>Up to 3 email accounts</strong>
								<span
									>sales@, info@, support@ — works on Gmail</span
								>
							</div>
						</li>
					</ul>
				</div>

				<a
					href="/contact?interest=software-development"
					class="btn-primary pkg-cta"
					id="growth-contact-btn">Enquire Now →</a
				>
			</div>

			<!-- ── PRO ── -->
			<div class="pkg-card pkg-pro" id="pkg-pro">
				<div class="pkg-header">
					<span class="pkg-icon">🚀</span>
					<div>
						<div class="pkg-label">Pro</div>
						<div class="pkg-tagline">
							"Manage Your Business Online"
						</div>
					</div>
				</div>

				<div class="pkg-price">
					<span class="amount">₹50K+</span>
					<span class="period">Per Year (Customised)</span>
				</div>

				<p class="pkg-desc">
					The full suite — admin panel, staff logins, multi-branch
					management, SEO, and more. Built for businesses ready to
					scale.
				</p>

				<div class="feature-group">
					<div class="fg-title"><span>🔐</span> Admin Panel</div>
					<ul class="feature-list">
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Secure owner login</strong>
								<span>Manage everything from one dashboard</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Add / Edit / Delete products</strong>
								<span>No developer needed — ever</span>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Promotional banner management</strong>
								<span>Update offers anytime, instantly</span>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>View &amp; manage all enquiries</strong>
								<span
									>Mark Resolved / Pending from dashboard</span
								>
							</div>
						</li>
					</ul>
				</div>

				<div class="feature-group">
					<div class="fg-title"><span>👥</span> Staff Accounts</div>
					<ul class="feature-list">
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong
									>Staff login with controlled access</strong
								>
								<span
									>Staff enter data only — no settings access</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Log customer enquiries</strong>
								<span
									>Name, phone, requirement, follow-up date</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Record daily sales entries</strong>
								<span>Item, qty, amount, customer info</span>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Multiple staff accounts</strong>
								<span>Each branch gets its own staff login</span
								>
							</div>
						</li>
					</ul>
				</div>

				<div class="feature-group">
					<div class="fg-title">
						<span>📦</span> Order &amp; Activity Management
					</div>
					<ul class="feature-list">
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Order status pipeline</strong>
								<span
									>Received → Processing → Ready → Delivered</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Instant admin notifications</strong>
								<span
									>Telegram + Email on every new order/enquiry</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Multi-branch activity sync</strong>
								<span>All branches visible in one place</span>
							</div>
						</li>
					</ul>
				</div>

				<div class="feature-group">
					<div class="fg-title"><span>📊</span> Admin Dashboard</div>
					<ul class="feature-list">
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Unified multi-store overview</strong>
								<span
									>Enquiries, orders, sales across all
									branches</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Monthly summary reports</strong>
								<span>Exportable to Excel / CSV</span>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Staff activity log</strong>
								<span>See who added what and when</span>
							</div>
						</li>
					</ul>
				</div>

				<div class="feature-group">
					<div class="fg-title">
						<span>🔍</span> SEO &amp; Online Visibility
					</div>
					<ul class="feature-list">
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Advanced SEO setup</strong>
								<span>All pages optimised for Google</span>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Google Business Profile setup</strong>
								<span>Appear in Maps and local searches</span>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong>Local SEO &amp; Schema markup</strong>
								<span
									>Rich results on Google, "near me"
									visibility</span
								>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong
									>XML Sitemap + page speed optimisation</strong
								>
								<span>Faster site = higher Google rank</span>
							</div>
						</li>
					</ul>
				</div>

				<div class="feature-group">
					<div class="fg-title">
						<span>🔒</span> Security &amp; Reliability
					</div>
					<ul class="feature-list">
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong
									>Secure database + automated backups</strong
								>
								<span>Your data is always safe</span>
							</div>
						</li>
						<li class="feature-item">
							<span class="fi-dot pro"></span>
							<div>
								<strong
									>High-availability cloud infrastructure</strong
								>
								<span
									>99.9% uptime, enterprise-grade hosting</span
								>
							</div>
						</li>
					</ul>
				</div>

				<a
					href="/contact?interest=software-development"
					class="btn-primary pkg-cta"
					id="pro-contact-btn">Enquire Now →</a
				>
			</div>
		</div>
	</section>

	<!-- Add-ons -->
	<section class="section addons-section" id="addons">
		<div class="container">
			<span class="badge">Flexible Add-ons</span>
			<h2 class="section-title">Available for Any Package</h2>
			<p class="section-subtitle">
				Extend your package with any of these additional services — no
				matter which plan you choose.
			</p>

			<div class="addons-grid">
				<div class="addon-card" id="addon-domain">
					<div class="addon-icon">🌐</div>
					<div class="addon-text">
						<strong>Domain Registration</strong>
						<span>Your business owns the domain — always</span>
					</div>
				</div>
				<div class="addon-card" id="addon-content">
					<div class="addon-icon">📝</div>
					<div class="addon-text">
						<strong>Content Writing</strong>
						<span
							>About Us &amp; product descriptions crafted for you</span
						>
					</div>
				</div>
				<div class="addon-card" id="addon-multilang">
					<div class="addon-icon">🌍</div>
					<div class="addon-text">
						<strong>Multi-language Support</strong>
						<span>English + regional language of your choice</span>
					</div>
				</div>
				<div class="addon-card" id="addon-qr">
					<div class="addon-icon">📱</div>
					<div class="addon-text">
						<strong>QR Code for Website</strong>
						<span
							>Print on visiting cards, banners, and packaging</span
						>
					</div>
				</div>
				<div class="addon-card" id="addon-maintenance">
					<div class="addon-icon">🔄</div>
					<div class="addon-text">
						<strong>Ongoing Maintenance</strong>
						<span>Monthly content updates &amp; support</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Custom CTA -->
	<section class="section cta-section">
		<div class="container cta-inner">
			<div class="glow-orb cta-orb"></div>
			<span class="badge">Custom Work</span>
			<h2 class="cta-title">Need Something Specific?</h2>
			<p class="cta-sub">
				From automation to custom software — we cover it all. If it's
				digital, we build it. Just reach out and tell us what you need.
			</p>
			<a
				href="/contact?interest=software-development"
				class="btn-primary"
				id="cta-contact-btn">Talk to Us →</a
			>
		</div>
	</section>
</div>

<style>
	/* ─── Page wrapper ─── */
	.services-page {
		min-height: 100vh;
	}

	/* ─── Hero ─── */
	.hero {
		position: relative;
		padding: 6rem 0 5rem;
		text-align: center;
		overflow: hidden;
	}
	.orb-1 {
		width: 600px;
		height: 600px;
		background: var(--color-accent);
		top: -200px;
		left: -150px;
		opacity: 0.12;
	}
	.orb-2 {
		width: 500px;
		height: 500px;
		background: var(--color-accent-2);
		bottom: -100px;
		right: -100px;
		opacity: 0.1;
	}
	.hero-inner {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
	}
	.hero-title {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 800;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}
	.hero-sub {
		color: var(--color-muted);
		font-size: 1.1rem;
		max-width: 580px;
		line-height: 1.7;
	}
	.hero-cta {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 0.5rem;
	}

	/* ─── Packages grid ─── */
	.packages-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1.75rem;
		align-items: start;
	}

	/* ─── Package card ─── */
	.pkg-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 1.5rem;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		position: relative;
		transition:
			transform 0.3s,
			box-shadow 0.3s,
			border-color 0.3s;
	}
	.pkg-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
		border-color: rgba(108, 99, 255, 0.4);
	}

	/* Featured (Growth) */
	.pkg-featured {
		border-color: var(--color-accent);
		box-shadow:
			0 0 0 1px rgba(108, 99, 255, 0.3),
			0 20px 60px rgba(108, 99, 255, 0.15);
		background: linear-gradient(145deg, #0d1117 0%, #111827 100%);
	}
	.pkg-featured:hover {
		box-shadow:
			0 0 0 1px rgba(108, 99, 255, 0.5),
			0 30px 80px rgba(108, 99, 255, 0.25);
	}
	.featured-tag {
		position: absolute;
		top: -14px;
		left: 50%;
		transform: translateX(-50%);
		background: linear-gradient(135deg, var(--color-accent), #9f97ff);
		color: #fff;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		padding: 0.3rem 1.1rem;
		border-radius: 999px;
		white-space: nowrap;
	}

	/* Pro */
	.pkg-pro {
		border-color: rgba(0, 201, 167, 0.3);
	}
	.pkg-pro:hover {
		border-color: rgba(0, 201, 167, 0.6);
		box-shadow: 0 24px 60px rgba(0, 201, 167, 0.12);
	}

	/* ─── Package header ─── */
	.pkg-header {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.pkg-icon {
		font-size: 2.2rem;
		line-height: 1;
	}
	.pkg-label {
		font-family: "Outfit", sans-serif;
		font-size: 1.5rem;
		font-weight: 800;
		color: #fff;
	}
	.pkg-tagline {
		font-size: 0.82rem;
		color: var(--color-accent-2);
		font-weight: 500;
		margin-top: 0.1rem;
	}
	.pkg-desc {
		color: var(--color-muted);
		font-size: 0.9rem;
		line-height: 1.65;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--color-border);
	}

	.pkg-price {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}
	.pkg-price .amount {
		font-family: "Outfit", sans-serif;
		font-size: 1.65rem;
		font-weight: 800;
		color: #fff;
		letter-spacing: -0.01em;
	}
	.pkg-price .period {
		font-size: 0.72rem;
		color: var(--color-accent-2);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	/* ─── Feature group ─── */
	.feature-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.fg-title {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-muted);
		margin-bottom: 0.25rem;
	}

	/* ─── Feature list ─── */
	.feature-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}
	.feature-item {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
	}
	.fi-icon {
		font-size: 1rem;
		flex-shrink: 0;
		margin-top: 0.1rem;
	}
	.fi-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--color-accent);
		flex-shrink: 0;
		margin-top: 0.5rem;
	}
	.fi-dot.pro {
		background: var(--color-accent-2);
	}
	.feature-item strong {
		display: block;
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--color-text);
		line-height: 1.3;
	}
	.feature-item span {
		font-size: 0.78rem;
		color: var(--color-muted);
		line-height: 1.4;
	}

	.pkg-cta {
		margin-top: auto;
		width: 100%;
		justify-content: center;
	}

	/* ─── Add-ons ─── */
	.addons-section {
		background: var(--color-surface);
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}
	.addons-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
	.addon-card {
		background: var(--color-surface-2);
		border: 1px solid var(--color-border);
		border-radius: 1rem;
		padding: 1.5rem 1.25rem;
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		transition: all 0.3s;
	}
	.addon-card:hover {
		border-color: rgba(108, 99, 255, 0.4);
		transform: translateY(-3px);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
	}
	.addon-icon {
		font-size: 1.6rem;
		flex-shrink: 0;
	}
	.addon-text strong {
		display: block;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: 0.25rem;
	}
	.addon-text span {
		font-size: 0.78rem;
		color: var(--color-muted);
		line-height: 1.5;
	}

	/* ─── Custom CTA section ─── */
	.cta-section {
		position: relative;
		overflow: hidden;
	}
	.cta-orb {
		width: 500px;
		height: 500px;
		background: var(--color-accent);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0.08;
	}
	.cta-inner {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1.25rem;
	}
	.cta-title {
		font-size: clamp(1.8rem, 4vw, 2.75rem);
		font-weight: 800;
		color: #fff;
	}
	.cta-sub {
		color: var(--color-muted);
		font-size: 1rem;
		max-width: 520px;
		line-height: 1.7;
	}

	/* ─── Responsive ─── */
	@media (max-width: 768px) {
		.packages-grid {
			grid-template-columns: 1fr;
		}
		.hero {
			padding: 4rem 0 3rem;
		}
		.hero-cta {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
