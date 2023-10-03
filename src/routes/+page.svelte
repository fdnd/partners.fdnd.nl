<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section class="rounded green-on-blue" id="duurzame-samenwerking">
    <h2>Samenwerken met FDND</h2>
    <p>FDND studenten werken aan kleine opdrachten, ook wel <a href="/mini-meesterproef">mini-meesterproef</a> en aan grote <a href="/projecten">langlopende projecten</a>. De inzet is altijd een duurzame samenwerking.</p>
    <p>Projecten krijgen steeds meer betekenis door samen te kijken waar de mogelijkheden voor voor verdere iteraties liggen, bijvoorbeeld bij andere programma's of opleidingen binnen de HvA.</p>
    <p>De opdrachtgever kan op meerdere manieren aanhaken bij het onderwijs. Er zijn allerhande mogelijkheden voor <a href="/stage">stages</a>, <a href="/talks">talks</a> en <a href="/co-teaching">co-teaching.</a></p>
    <p>In een langere samenwerking op meerdere vlakken ontstaat een betekenisvolle, duurzame samenwerking.</p>
</section>

<section class="rounded green-on-blue">
	<h2>Projecten 2023 - 2024</h2>
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
			<a href="projecten/{project.slug}" data-sveltekit-preload-data>
				{project.title}
			</a>
		</li>
		{/each}
	</ul>

	<a href="https://github.com/fdnd-agency">Bekijk de projecten op GitHub</a>
</section>

<style>
	section {
		min-height:auto;
		padding: 1rem 2rem;
		margin-bottom: 2rem;
	}
	
	section > a {
		font-size: .9rem;
		display:block;
		margin-top:2rem
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
