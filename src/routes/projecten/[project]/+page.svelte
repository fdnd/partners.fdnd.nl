<script>
	import { Block, CollapsingColumns } from '@fdnd/components';
	import StudentWork from '$lib/components/StudentWork.svelte'
	import { getFullName } from '$lib/utils/getFullName'

	export let data

	function isPlural(groupOfPeople, suffix) {
		return groupOfPeople.length > 1 ? suffix : '';
	}
</script>

<h2>{data.project.title}</h2>

<CollapsingColumns>
	<Block class="rounded green-on-blue">
		<section>
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
	</Block>

	<Block class="rounded green-on-blue">
		<section>
			<h3 class="visually-hidden">Omschrijving</h3>
			{#if data.project.visual.url}
				<img src="{data.project.visual.url}" alt="{data.project.clients[0].title}" width="250">
			{/if}
			<div class="body">
				{@html data.project.description.html}
			</div>
		</section>
	</Block>

	<Block class="rounded green-on-blue">
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
	</Block>
</CollapsingColumns>
