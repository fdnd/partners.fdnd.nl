<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<header>
	<h2>FDND Agency</h2>
</header>

<section class="rounded green-on-blue">
	<h3>Projecten 2022 - 2023</h3>
	<ul>
		{#each data.projects as project}
		<li>
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-code-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<path d="M10 12h-1v5h1" />
				<path d="M14 12h1v5h-1" />
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
			</svg>
			<a href="/{project.slug}" data-sveltekit-preload-data>
				{project.title}
			</a>
		</li>
		{/each}
	</ul>

	<a href="https://github.com/fdnd-agency">Bekijk de projecten op GitHub</a>
</section>

<section class="rounded blue-on-green">
	<h3>Echte projecten voor echte opdrachtgevers</h3>
	<p>Studenten werken bij FDND aan echte opdrachten voor echte opdrachtgevers. Dit doen ze in een studiomodel aan de hand van agile ontwikkelmethodes, onder begeleiding van docenten/coaches én experts uit het vakgebied. Een rijke, praktijke gerichte leeromgeving, waarin de studenten worden voorbereid op het werken als Frontender.</p>
	<a href="/samenwerken">Lees meer over de FDND werkwijze</a>
</section>


<style>
	header {
		margin-bottom: 2rem;
		padding:1rem 2rem;
		
		grid-area:auto;
		grid-column: 1 / -1;
	}
	section {
		min-height:auto;
		padding: 1rem 2rem;
		max-width:40rem;
		margin-bottom: 2rem;
	}
	
	section > a {
		font-size: .9rem;
		display:block;
		margin-top:2rem
	}
	h2 {
		margin-bottom: 0;
		margin-left: 0;
		font-weight: normal;
	}
	ul {
		margin:0;
	}
	@media (min-width: 40rem) {
		ul {
			display:grid;
			grid-template-columns: repeat(2, 1fr);
			gap:1rem
		}
	}
	li {
		list-style: none;
		white-space:nowrap;
		border-radius:.5rem;
	}
	a {
		font-weight: 600;
		white-space:nowrap
	}
	svg {
		transform:translateY(3px)
	}
</style>
