<script>
    import Header from "$lib/components/Header.svelte"
    import Footer from "$lib/components/Footer.svelte"
    import Subscribe from "$lib/components/Subscribe.svelte"
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>

<Header />

<main>
	{@render children?.()}

	<Subscribe />
</main>

<Footer />
