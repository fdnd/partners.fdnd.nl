<script>
	import { Block, CollapsingColumns } from "@fdnd/components";
	import StudentWork from "$lib/components/StudentWork.svelte";
</script>

<CollapsingColumns>
	<Block class="blue-on-green rounded title-outset-left" tag="section">
		<h2>Samenwerken</h2>
		<p>
			FDND studenten werken, voor echte opdrachtgevers, aan grote <a href="/projecten">langlopende projecten</a> van meerdere sprints en aan kleine opdrachten van één sprint; de <a href="/design-challenge">design challenge</a>. 
		</p>
		<p>
			De inzet is altijd een duurzame samenwerking. Projecten krijgen steeds meer betekenis door samen te kijken waar de mogelijkheden voor verdere iteraties liggen, bijvoorbeeld bij andere programma's binnen de HvA.
		</p>
		<p>
			De opdrachtgever kan op meerdere manieren aanhaken bij het onderwijs. Er zijn allerhande mogelijkheden voor <a href="/stage">stages</a>, <a href="/talks">talks</a> en <a href="/co-teaching">co-teaching.</a>
		</p>
	</Block>
</CollapsingColumns>

<StudentWork />