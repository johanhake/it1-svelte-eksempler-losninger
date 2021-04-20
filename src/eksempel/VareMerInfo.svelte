<script>
	// Henter referansen til din database på firestore
	// Merk at vi her må gå opp en mappe ved å bruke ../ forran firebase.js.
	import { db } from "../firebase.js";

	// Handlekurv collectionen
	let handlekurvDB = db.collection("handlekurv");

	// Props
	export let vare = {};
	export let merInfo = "";

	// Antall variabel
	let antall = 0;

	// Funksjon for å legge i handlekurven
	function leggIHandlekurv() {
		// Fortsett her
		console.log("Legger i handlevogn:", vare.data().navn);

		// Lager et nytt objekt i handlekurvdatabasen
		handlekurvDB.doc(vare.id).set({
			antall: antall,
			pris: vare.data().pris,
		});

		antall = 0;
	}

	function velgMerInfo() {
		merInfo = vare.id;
	}
</script>

<article>
	<div on:click={velgMerInfo}>
		<img src="bilder/{vare.data().bilde}" alt="" />
		<h6>
			{vare.data().type}
			{vare.data().navn} <i>{vare.data().pris} kr</i>
		</h6>
	</div>
	<form on:submit|preventDefault={leggIHandlekurv}>
		<input type="number" bind:value={antall} min="1" />
		<button class="button">Legg i Handlekurv</button>
	</form>
</article>

<style>
	article img {
		width: 100%;
	}

	article:hover {
		cursor: pointer;
	}

	article:active {
		filter: brightness(1.25);
	}
</style>
