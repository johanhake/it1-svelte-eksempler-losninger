<script>
	// Henter Svelte komponenten Melding
	import Melding from "./Melding.svelte";

	// Henter referansen til din database på firestore
	// Merk at vi her må gå opp en mappe ved å bruke ../ forran firebase.js.
	import { db, Timestamp } from "../firebase.js";

	// Referanse til meldinger collectionen på firestore!
	let meldingerDB = db.collection("meldinger");

	// Variabler for hente og sende inn meldinger
	let navn = "";
	let melding = "";
	let meldinger = [];

	// Funksjon: Kode som er lagret og kjøres når den kalles.
	function sendinnMelding() {
		console.log(navn, melding);

		// Legger til document med autogenerert primærnøkkel
		meldingerDB.add({
			navn: navn,
			melding: melding,
			timestamp: Timestamp.fromDate(new Date()),
		});

		// Sletter meldingen.
		// Beholder navn da du sikkert vil hete det samme på neste melding
		melding = "";
	}

	// Henter alle meldingene hver gang en melding blir lagt til meldings-collectionen
	meldingerDB.orderBy("timestamp").onSnapshot(function (snapshot) {
		meldinger = snapshot.docs;
	});

</script>

<h1>Chatkanaler</h1>
<main>
	<form on:submit|preventDefault={sendinnMelding}>
		<h3>Skriv en melding</h3>
		<label>Navn:
			<input type="text" bind:value={navn} placeholder="Navn" required />
		</label>
		<label>Melding:
			<input
				type="text"
				bind:value={melding}
				placeholder="Melding"
				required
			/>
		</label>
		<button>Send inn</button>
	</form>
	<section>
		<h3>Chatten</h3>
		{#each meldinger as meldingDoc}
			<Melding {meldingDoc} />
		{/each}
	</section>
</main>

<style>
	main{
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>