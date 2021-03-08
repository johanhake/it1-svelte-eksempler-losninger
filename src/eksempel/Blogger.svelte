<script>
	// Henter blogger og bloggerDB som props
	export let navn = "";
	export let følgere = "";
	export let id = "";
	export let bloggereDB = "";

	// Variabler til endring av blogger
	let visEndring = false;

	// Sletter documentet til denne bloggeren
	function slettBlogger() {
		console.log("sletter", navn);
		bloggereDB.doc(id).delete();
	}

	function endreBlogger() {
		bloggereDB.doc(id).set({
			navn: navn,
			følgere: følgere
		});
		visEndring = false;
	}

	function endreVisEndring() {
		visEndring = !visEndring;
	}
</script>

<li>
	{#if !visEndring}
		{navn} : {følgere}
		<span on:click={slettBlogger}>&#x2716;</span>
		<span on:click={endreVisEndring}>&#x270F;</span>
	{:else}
		<form on:submit|preventDefault={endreBlogger}>
			<input type="text" bind:value={navn} /> :
			<input type="number" bind:value={følgere} />
			<button>Endre</button>
		</form>
	{/if}
</li>

<style>
	span {
		font-size: 0.8em;
		display: inline-block;
	}

	span:hover {
		cursor: pointer;
		transform: scale(1.1);
		color: red;
	}

	span:active {
		transform: scale(1);
	}
</style>
