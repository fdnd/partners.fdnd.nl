<script>
	import { Block, CollapsingColumns } from '@fdnd/components';
	import StudentWork from '$lib/components/StudentWork.svelte'
	import { getFullName } from '$lib/utils/getFullName'

	export let data

	function isPlural(groupOfPeople, suffix) {
		return groupOfPeople.length > 1 ? suffix : '';
	}
</script>



<CollapsingColumns>
	<Block class="blue-on-green rounded title-outset-left" tag="section">
			<h2>{data.project.title}</h2>
			{#if data.project.visual.url}
				<img src="{data.project.visual.url}" alt="{data.project.clients[0].title}" width="250">
			{/if}
			<div class="body">
				{@html data.project.description.html}
			</div>
	</Block>

	<Block class="rounded green-on-blue title-outset-left" tag="section">
		<h2>Teamleden</h2>

		<h3>Opdrachtgever</h3> 
		<a href="/">{data.project.clients[0].title}</a>

		<h3>Product owner{isPlural(data.project.productOwners, 's')}</h3>  
		<ul>
		{#each data.project.productOwners as productOwner, i}
			<li>
				<a href="/" target="_blank" rel="noopener noreferrer">{getFullName(productOwner)}</a>
			</li>
		{/each}
		</ul>

		<h3>Coach{isPlural(data.project.coaches, 'es')}</h3>
		<ul>
			{#each data.project.coaches as coach, i}
				<li>
					<a href="/" target="_blank" rel="noopener noreferrer">{getFullName(coach)}</a>
				</li>
			{/each}
		</ul>
		


		{#if data.project.teamLeads.length > 0 }

		<h3>Team lead{isPlural(data.project.teamLeads, 's')}</h3>
		<ul>
		{#each data.project.teamLeads as teamlead}
			<li>
				<a href="/" target="_blank" rel="noopener noreferrer">{getFullName(teamlead)}</a>
			</li>
		{/each}
		</ul>
		{/if}		

	
		<h3>Studenten</h3>
		<ul>
		{#each data.project.students as student}
			<li><a href="/" target="_blank" rel="noopener noreferrer">{getFullName(student)}</a></li>
		{/each}
		</ul>
	</Block>
</CollapsingColumns>

<Block class="rounded green-on-blue title-outset-left" tag="section">
		<h2 id="work">Studentenwerk</h2>

		<p><br><br></p><!-- Hack: fix in component library-->

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
</Block>

<style>
	h3 {
		margin-bottom: .5rem !important;

	}
	ul {
		display:flex;
		justify-content: start;
		align-items:start;
		gap:.5rem;
		flex-wrap: wrap;
	}
	img {
		float:right;
	}
</style>