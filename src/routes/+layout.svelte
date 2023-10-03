<script>
	import { Header, Nav } from '@fdnd/components';

	const nav = {
		Menu: {
			Home: '/',
			Projecten: '/projecten'
		}
	};
</script>

<svelte:head>
	<title>Frontend Design & Development | Agency</title>
</svelte:head>

<Header title="Partners" />
<!-- <Nav data="nav" /> -->

<nav class="main">
	<div>
		<h2>Menu</h2>
		<ul>
			<li><a href="/" class="active">Home</a></li>
			<li><a href="/projecten">Projecten</a></li>
			<li><a href="/mini-meesterproef">Mini meesterproef</a></li>
			<li><a href="/stage">Stage</a></li>
			<li><a href="/co-teaching">Co-teaching</a></li>
			<li><a href="/talks">Talks</a></li>
		</ul>
	</div>
</nav>

<main>
	<slot />
</main>

<style>
	:global(body) nav {
		align-self: flex-start;
		width: 100%;
	}
</style>
