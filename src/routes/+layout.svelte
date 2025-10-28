<script>
    import Header from "$lib/components/Header.svelte"
    import Footer from "$lib/components/Footer.svelte"
    import Subscribe from "$lib/components/Subscribe.svelte"
</script>

<Header />

<main>
	<slot />

	<Subscribe />
</main>

<Footer />
