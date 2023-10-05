<script>
	import { Branding, Header, Nav, Wrapper } from "@fdnd/components"

	const nav = {
		Menu: {
			Home: "/",
			Projecten: "/projecten",
			"Mini meesterproef": "/mini-meesterproef",
			Stage: "/stage",
			"Co-teaching": "/co-teaching",
			Talks: "/talks",
		},
	}
</script>

<svelte:head>
	<title>Frontend Design & Development | Partners in Education</title>
</svelte:head>

<Branding>
	<Wrapper>
		<Header
			title="Hoe werken wij samen met de praktijk?"
			punchline="In ons Partners in Education programma werken wij samen met échte opdrachtgevers aan échte opdrachten. Professionals uit het werkveld dragen in de studio hun kennis over aan de studenten."
		/>

		<Nav data={nav} />

		<main>
			<slot />
		</main>
	</Wrapper>
</Branding>

<style>
	:global(body) {
		padding:2rem;
	}
	:global(body > div > div:first-of-type) {
		translate:-1rem -1rem
	}

	:global(.payoff) {
		translate:-1rem 1rem
	}
	:global(a) {
		color: currentColor;
	}
	:global(ul) {
		list-style:none;
	}
	:global(nav ul) {
		margin-left: 0.5rem;
	}
	:global(main ul) {
		padding:0;
	}
	:global(h2, h3, h4, p) {
		margin-bottom: 1rem;
	}
	:global(.wrapper) {
		margin: 2rem 0;
	}
	:global(header) {
		max-width: 45rem;
		padding:0 2rem;
	}
	:global(header svg) {
		width: 8rem;
		translate:-23px -1rem;
		fill: var(--color-green) !important;
		height: auto !important;
	}
	:global(.logo-background) {
		fill: var(--color-green) !important;
	}
	:global(.logo-background:nth-last-of-type(1)) {
		fill: var(--color-blue) !important;
	}
	:global(h1) {
		color: var(--color-green);
		font-weight: normal;
	}
	:global(h1 abbr) {
		display: none;
	}
	:global(.collapsing-columns) {
		align-items: start;
		margin-bottom: 2rem;
	}
	:global(figure) {
		margin:2rem 0 0
	}
	:global(figcaption) {
		font-size: .9rem;
		font-style: italic;
	}
	:global(main > header) {
        margin-bottom: var(--component-padding);
    }
</style>
