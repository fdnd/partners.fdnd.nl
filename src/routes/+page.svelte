<script>
    export let data

    const {repos} = data
</script>

{#each repos as repo}
    <h2>{repo.name}</h2>
{/each}
