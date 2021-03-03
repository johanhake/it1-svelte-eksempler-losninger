<script>
	export let navn = "";
	export let melding = "";
	export let id = "";
	export let meldingerDB = "";

	// Variabel for å vise et skjema
	let visSkjema = false;

	function slettMelding(){
		console.log("sletter", melding);
		meldingerDB.doc(id).delete();
	}

	function endreVisSkjema(){
		visSkjema = true;
	}

	function endreMelding(){
		meldingerDB.doc(id).update({
			melding: melding
		})
		visSkjema = false;
	}

</script>
<article>
	<h6>{navn}
		<span on:click={slettMelding}>&#x2716;</span>
		<span on:click={endreVisSkjema}>&#x270F;</span>
	</h6>
	{#if visSkjema}
	<form on:submit|preventDefault={endreMelding}>
		<input type="text" bind:value={melding}>
		<button>Endre</button>
	</form>
	{:else}
	<p> - {melding}</p>
	{/if}
</article>
<style>
	article h6, article p{
		font-size: 1em;
		margin: 0;
	}

	article p{
		font-style: italic;
		margin-left: 5px;
	}

	article{
		margin-bottom: 10px;
	}

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