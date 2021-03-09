<script>
	// Henter referansen til din database på firestore
	// Merk at vi her må gå opp en mappe ved å bruke ../ forran firebase.js.
	import { db } from "../firebase.js";

	// Handlekurv collectionen
	let handlekurvDB = db.collection("handlekurv");

	// Props
	export let vare = {};

	// Antall variabel
	let antall = 0;

	// Funksjon for å legge i handlekurven
	function leggIHandlekurv() {
		// Fortsett her
		console.log("Legger i handlevogn:", vare.data().navn)
	}
</script>

<article>

	<img src="bilder/legg inn bilde data her" alt="" />
	<h6>Legg inn vare og pris her</h6>
	<form>
		<input type="number" bind:value={antall} min="1" />
		<button class="button">Legg i Handlekurv</button>
	</form>
</article>

<style>
	article img {
		width: 100%;
	}
</style>
