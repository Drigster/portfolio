<header class="sticky z-50 flex w-full justify-end">
	<nav class="navbar">
		<ul class="nav-list">
			<li class="nav-item"><a class="nav-link" href="/">home</a></li>
			<li class="nav-item"><a class="nav-link" href="/homelab">homelab</a></li>
			<li class="nav-item">
				<a class="nav-link" href="/projects">projects</a>
			</li>
			<li class="nav-item"><a class="nav-link" href="/cv">cv</a></li>
		</ul>
	</nav>
</header>

<style>
	.navbar {
		--_gap: 3rem;

		padding: 0.5rem;
		margin: 0.5rem 0;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 1.5rem;
	}

	.nav-list {
		display: flex;
	}

	.nav-item {
		position: relative;
		overflow: hidden;
		padding: 0.5rem calc(var(--_gap) / 2);
	}

	.navbar .nav-item::after {
		content: '';
		position: absolute;
		inset-inline: 0;
		inset-block-end: 0;
		block-size: 3px;
		background-color: var(--accent);

		translate: var(--_translate, 0);
		scale: var(--_scale, 0) 1;
		transition:
			scale 200ms var(--_scale-delay, 0ms),
			translate 200ms;
	}

	.navbar .nav-item:hover ~ .nav-item {
		--_translate: -100%;
		--_scale-delay: 200ms;
	}

	.navbar:hover .nav-item {
		--_translate: 100%;
		--_scale-delay: 200ms;
	}

	.navbar .nav-item:hover {
		--_scale: 1;
		--_translate: 0;
		--_scale-delay: 0ms;
	}
</style>
