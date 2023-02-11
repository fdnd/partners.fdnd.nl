<script lang="ts">
	import StudentWork from '$lib/components/StudentWork.svelte';
	import { getFullName } from '$lib/utils/getFullName';
	import type { PageData } from './$types';

	export let data: PageData;

	function isPlural(groupOfPeople: any[], suffix: string) {
		return groupOfPeople.length > 1 ? suffix : '';
	}
</script>
<div class="wrapper">
	<section id="information">
		<h2>{data.project.title}</h2>

		<section class="rounded green-on-blue">
			<h3>Teamleden</h3>
			<ul>
				<li><span>Opdrachtgever</span> <a href="/">{data.project.clients[0].title}</a></li>
				<li>
					<span>Product owner{isPlural(data.project.productOwners, 's')}</span>  
					{#each data.project.productOwners as productOwner, i}
						<a href="/" target="_blank" rel="noopener noreferrer">{getFullName(productOwner)}</a>
					{/each}
				</li>

				<li>
					<span>Coach{isPlural(data.project.coaches, 'es')}</span>
					{#each data.project.coaches as coach, i}
						<a href="/" target="_blank" rel="noopener noreferrer">{getFullName(coach)}</a>
					{/each}
				</li>

				{#if data.project.teamLeads.length > 0 }
				<li>
					<span>Team lead{isPlural(data.project.teamLeads, 's')}</span>
					{#each data.project.teamLeads as teamlead}
						<a href="/" target="_blank" rel="noopener noreferrer">{getFullName(teamlead)}</a>
					{/each}
				</li>
				{/if}		
			</ul>


			<h4>Studenten</h4>
			<ul>
				{#each data.project.students as student}
					<li><a href="/" target="_blank" rel="noopener noreferrer">{getFullName(student)}</a></li>
				{/each}
			</ul>
		</section>

		<section class="rounded green-on-blue">
			<h3 class="visually-hidden">Omschrijving</h3>
			{#if data.project.visual.url}
				<img src="{data.project.visual.url}" alt="{data.project.clients[0].title}" width="250">
			{/if}
			<div class="body">
				{@html data.project.description.html}
			</div>
		</section>
	</section>
</div>

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
	.wrapper {

	}
	section {
		position: relative;
		align-items: end;
	}
	section section {
		padding: 2rem;
		margin-bottom: 2rem;
		position: relative;
	}
	img {
		border-radius:1rem;
		background-color: var(--turquoise);
		padding:1rem;
		margin-bottom: 1rem;
		border:1px solid var(--turquoise);
		width:150px;
	}
	h2 {
		margin: 1rem 2rem;

		font-weight: normal;
		grid-column:1 / -1;
	}
	h3, h4 {
		font-weight: normal;
		margin-top: 0;
		margin-bottom: 1.5rem;
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
		margin-bottom: 1rem;
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

	div.scroll {
		display:flex;
		overflow-x:scroll;
		gap:2rem;
		margin: 3rem -1rem;
		align-items:flex-start;
	}
	section#work h2 {
		margin-left: 1rem;
	}

	@media (min-width: 50em) {
		.wrapper {
			margin:0;
		}
		img {
			right:-2rem;
			top:-2rem;
			width:250px;
		}
		section#information {
			display:grid;
			grid-template-columns: 1fr 1fr;
			gap:2rem;
		}

		section#work {
			grid-column: 1 / -1;
		}
	}
	
	@media (min-width: 80em) {
		img {
			right:2rem;
			top:2rem;
		}

	}

	
</style>
