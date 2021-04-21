<script>
	// Props med infor om meldingen
	export let meldingDoc = "";

	// Henter ut navn og melding fra documentet
	let navn = meldingDoc.data().navn;
	let melding = meldingDoc.data().melding;

</script>

<article>
	<h6>{navn}</h6>
	<p> - {melding}</p>
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
</style>