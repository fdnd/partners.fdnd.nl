<script lang="ts">
	import { getFullName } from '$lib/utils/getFullName';

	export let title: string;
	export let repo: string;
	export let website: string;
	export let sprint: string | number;
	export let students: any[];
</script>

<article class="rounded purple-on-blue">
	<small class="blue-on-purple">sprint {sprint}</small>
	<h3>{title}</h3>

	<ul>
		{#each students as student}
		<li>
			<a href="{repo}" target="_blank" rel="noopener noreferrer">{getFullName(student)}</a>
		</li>
		{/each}
	</ul>
	<ul>
		<li>
			<a href={repo} target="_blank" rel="noopener noreferrer">Github Reposity</a>
		</li>
		<li><a href={website} target="_blank" rel="noopener noreferrer">View Live</a></li>
	</ul>
	
	
</article>

<style>
	article {
		padding: 2rem;
		border-radius: 0.5em;
		position: relative;
		margin: 0 0 2rem;
		max-width:30rem
	}
	h3 {
		font-size: 1.25rem;
		display:flex;
		margin-bottom: .5rem;
	}

	small {
		font-size: .8rem;
		white-space: nowrap;
		position:absolute;
		right:0;
		top:0;
		padding:.25rem;
		border-radius:0 .5rem 0 0
	}
	ul {
		margin: 0 0 2rem;
		display:flex;
		flex-wrap:wrap;
		min-width:20rem;
	}

	ul:last-of-type {
		margin-bottom: 0;
		font-size: .8em;
	}
	ul:first-of-type li:not(:last-child):after {
		content:","
	}
	li {
		list-style: none;
		margin-right: .5rem;
		white-space:nowrap
	}
	a {
		color: inherit;
	}


</style>
