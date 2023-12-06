<script>
	import { Block, CollapsingColumns } from "@fdnd/components";
	export let data;
</script>

<CollapsingColumns>
	<Block class="blue-on-green rounded title-outset-left" tag="section">
		<h2>Samenwerken</h2>
		<p>
			FDND studenten werken, voor echte opdrachtgevers, aan grote <a href="/projecten">langlopende projecten</a> van meerdere sprints en aan kleine opdrachten van één sprint; de <a href="/mini-meesterproef">mini-meesterproef</a>. 
		</p>
		<p>
			De inzet is altijd een duurzame samenwerking. Projecten krijgen steeds meer betekenis door samen te kijken waar de mogelijkheden voor verdere iteraties liggen, bijvoorbeeld bij andere programma's binnen de HvA.
		</p>
		<p>
			De opdrachtgever kan op meerdere manieren aanhaken bij het onderwijs. Er zijn allerhande mogelijkheden voor <a href="/stage">stages</a>, <a href="/talks">talks</a> en <a href="/co-teaching">co-teaching.</a>
		</p>
	</Block>

	<Block class="rounded green-on-blue title-outset-left" tag="section">
		<h2>Projecten</h2>

		<h3>2022 - 2023</h3>
		<ul>
			{#each data.projects as project}
				<li>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-file-code-2"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M10 12h-1v5h1" />
						<path d="M14 12h1v5h-1" />
						<path d="M14 3v4a1 1 0 0 0 1 1h4" />
						<path
							d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
						/>
					</svg>
					<a
						href="projecten/{project.slug}"
						data-sveltekit-preload-data
					>
						{project.title}
					</a>
				</li>
			{/each}
		</ul>

		<a href="https://github.com/fdnd-agency"
			>Bekijk de projecten op GitHub</a
		>
	</Block>
</CollapsingColumns>
