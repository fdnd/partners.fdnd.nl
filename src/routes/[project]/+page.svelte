<script lang="ts">
	import StudentWork from '$lib/components/StudentWork.svelte';
	import { getFullName } from '$lib/utils/getFullName';
	import type { PageData } from './$types';

	export let data: PageData;

	function isPlural(groupOfPeople: any[], suffix: string) {
		return groupOfPeople.length > 1 ? suffix : '';
	}
</script>

<section id="information">
	<h2>{data.project.title}</h2>

	<section class="rounded green-on-blue">
		<ul>
			<li><span>Opdrachtgever</span> <a href="/">{data.project.clients[0].title}</a></li>
			<li>
				<span>Product owner{isPlural(data.project.productOwners, 's')}:</span>  
				{#each data.project.productOwners as productOwner, i}
					<a href="/" target="_blank" rel="noopener noreferrer">{getFullName(productOwner)}</a>
				{/each}
			</li>

			<li>
				<span>Coach{isPlural(data.project.coaches, 'es')}:</span>
				{#each data.project.coaches as coach, i}
					<a href="/" target="_blank" rel="noopener noreferrer">{getFullName(coach)}</a>
				{/each}
			</li>

			{#if data.project.teamLeads.length > 0 }
			<li>
				<span>Team lead{isPlural(data.project.teamLeads, 's')}:</span>
				{#each data.project.teamLeads as teamlead}
					<a href="/" target="_blank" rel="noopener noreferrer">{getFullName(teamlead)}</a>
				{/each}
			</li>
			{/if}		
		</ul>


		<h3>Studenten</h3>
		<ul>
			{#each data.project.students as student}
				<li><a href="/" target="_blank" rel="noopener noreferrer">{getFullName(student)}</a></li>
			{/each}
		</ul>
	</section>

	<section class="rounded green-on-blue">
		<h2>Omschrijving</h2>
		<div class="body">
			{@html data.project.description.html}
		</div>
	</section>
</section>

<section id="work">

	<h2>Studentenwerk</h2>

	<div class="scroll">
		{#each data.project.studentwork as studentwork}
			<StudentWork
				title={studentwork.title}
				sprint={studentwork.sprint}
				repo={studentwork.repository}
				website={studentwork.website}
				students={studentwork.students}
			/>
		{/each}
	</div>

</section>


<style>

	h2 {
		margin-bottom: 2rem;
		font-weight: normal;
		grid-column:1 / -1
	}
	ul {
		margin:0 0 2rem;
		display:flex;
		flex-wrap:wrap;
	}
	ul:first-of-type li {
		min-width:100%
	}
	ul:last-of-type {
		display:flex;
		flex-wrap:wrap;
	}
	ul:first-of-type li {
		flex-direction: column;
	}
	ul:first-of-type li a {
		margin-right: .5rem;
	}
	ul:first-of-type li a:not(:last-of-type):after,
	ul:last-of-type li:not(:last-child):after {
		content:","
	}
	
	li {
		list-style:none;
		display:flex;
		
		margin-right: .5rem;
		flex-wrap:wrap;
	}
	li > * {
		white-space: nowrap;
	}
	li span {
		width:10rem;
	}

	section section {
		padding: 2rem;
		margin-bottom: 2rem;
	}

	div.scroll {
		display:flex;
		overflow-x:scroll;
		gap:2rem;
		margin: 0 -1rem;
		align-items:flex-start;
	}

	@media (min-width: 50em) {
		section#information {
			display:grid;
			grid-template-columns: 1fr 1fr;
			gap:2rem;
		}

		section#work {
			grid-column: 1 / -1;
		}
	}
	

	
</style>
