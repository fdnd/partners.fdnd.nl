<script>
	import { getFullName } from '$lib/utils/getFullName';

	export let title
	export let repo
	export let sprint
	export let students
</script>

<article class="rounded blue-on-purple">
	<h3>
		{title}
		<small>sprint {sprint}</small>
	</h3>
	

	<ul>
		{#each students as student}
		<li>
			<a href="{repo}" target="_blank" rel="noopener noreferrer">{getFullName(student)}</a>
		</li>
		{/each}
	</ul>
	<ul class="test">
		<li>
			<a href={repo} target="_blank" rel="noopener noreferrer">Github Reposity</a>
		</li>
	</ul>
	
	
</article>

<style>
	article {
		padding: 2rem;
		border-radius: 0.5em;
		position: relative;
		margin: 0 0 2rem;
		max-width: 25rem;
	}
	
	h3 {
		font-size: 1.25rem;
		display:flex;
		margin-bottom: 0;
		flex-direction: column;
	}

	small {
		font-size: .8rem;
		white-space: nowrap;
		border-radius:0 .5rem 0 0;
		margin: .5rem 0;
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

	li {
		list-style: none;
		margin-right: .5rem;
		white-space:nowrap
	}
	a {
		color: inherit;
	}
</style>
