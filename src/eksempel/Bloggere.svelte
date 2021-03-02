<script>
	// Henter referansen til din database på firestore
	// Merk at vi her må gå opp en mappe ved å bruke ../ forran firebase.js.
	import { db } from "../firebase.js";


	// Referanse til blogger-collectionen på firestore!
	let bloggereDB = db.collection("bloggere");

	let navn = ""
	let følgere = ""

	// Funksjon: Kode som er lagret og kjøres når den kalles.
	function sendinnBlogger() {
		console.log(navn, følgere);

		// Legger til document med autogenerert primærnøkkel
		bloggereDB.add({
			navn: navn,
			følgere: følgere
		});

		/*
		// Legger til document med gitt primærnøkkel
		bloggereDB.doc(navn).set({
			navn: navn,
			følgere: følgere
		});
		*/

		// Sletter dataene
		navn = "";
		følgere = "";
	}
</script>

<form on:submit|preventDefault={sendinnBlogger}>
	<h3>Legg til en blogger</h3>
	<label
		>Navn:
		<input type="text" bind:value={navn} placeholder="Navn" required />
	</label>
	<label>Følgere:
		<input
			type="number"
			bind:value={følgere}
			placeholder="Følgere"
			required
		/>
	</label>
	<button>Registrer</button>
</form>

