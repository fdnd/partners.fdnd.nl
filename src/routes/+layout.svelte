<script>
	import { Branding, Footer, Header, Nav, Wrapper } from "@fdnd/components"

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

		<Footer />
	</Wrapper>

	
</Branding>

<style>
	:global(:root) {
		--component-padding:1rem !important;
		scroll-behavior: smooth;
	}
	:global(a) {
		color: currentColor;
	}
	:global(a.active) {
		--highlight: var(--color-green) !important;
	}
	:global(ul) {
		list-style:none;
	}
	:global(nav ul) {
		margin-left: 0.5rem;
		margin-top: 0;
	}
	:global(h2) {
		font-weight: 200;
		padding-left:1rem !important;
		padding-right:1rem !important;
	}
	:global(h3) {
		font-weight: normal;
	}
	:global(h2, h3, h4, p) {
		margin-bottom: 1rem !important;
	}
	:global(.wrapper) {
		margin: 2rem 0;
	}
	:global(header) {
		max-width: 45rem;
		padding: 0 1rem;
		position: relative;
	}
	:global(header svg) {
		width: 8rem;
		translate:-23px -1rem;
		fill: var(--color-green) !important;
		height: auto !important;
		position:absolute;
		right:-1rem;
		top:-3rem;
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
		margin-top: 2rem !important;
		margin-bottom: .5rem !important;
	}
	:global(h1 abbr) {
		display: none;
	}
	:global(main ul) {
		padding:0;
		margin:0 0 1rem;
	}
	:global(main ul li) {
		display:flex;
		align-items:center;
		margin-bottom: .5rem;
		gap:.25rem
	}
	:global(.collapsing-columns) {
		align-items: start;
		margin-bottom: 2rem;
	}
	:global(section figure) {
        margin: 0 0 2rem
    }

	:global(figcaption) {
		font-size: .9rem;
		font-style: italic;
	}
	:global(main > header) {
        margin-bottom: var(--component-padding);
    }

	:global(ul.gallery) {
        display:flex;
        overflow-x: scroll;
        margin-bottom: 0;
        gap:2rem
    }
    :global(ul.gallery img) {
        min-width:20rem;
        aspect-ratio: 2/1;
    }
	:global(.no-spacing) {
		padding:0 !important
	}
	:global(.no-spacing h2) {
		margin-left:2rem
	}
	:global(img.rounded) {
		border:none;
	}
	:global(.bleed) {
		margin-bottom: 2rem;
		max-width:50rem;
	}
	@media (min-width:40rem) {
		:global(body) {
			/padding:2rem;
		}
		:global(header) {
			/padding:0 2rem
		}
		:global(.payoff) {
			/translate:-1rem -1rem;
		}
	}
</style>
