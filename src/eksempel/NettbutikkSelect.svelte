<script>
	import Vare from "./Vare.svelte";
	import Kurv from "./Kurv.svelte";

	// Henter referansen til din database på firestore
	// Merk at vi her må gå opp en mappe ved å bruke ../ forran firebase.js.
	import { db } from "../firebase.js";

	// Referanse til collectioner på firestore!
	let varerDB = db.collection("varer");
	let handlekurvDB = db.collection("handlekurv");

	// Tom liste for alle varer og handlekurven som skal vises
	let varer = [];
	let handlekurv = [];

	// Variabel for total pris
	let totalPris = 0;

	// Variabel for visning av pris
	let visMaksPris = 2600;

	// Viser handlekurven
	let viserKurv = false;

	// Variabel for hvilket plagg som skal vises
	let visPlagg = "alle";

	// Reactiv kode som kjøres hver gang visPlagg endrer seg.
	// Les mer om bruk av $ i Svelte på: https://svelte.dev/tutorial/reactive-statements
	// Hvis du ikke vill ha med pris-sorteringen fjernes den!
	// visPlagg kan ha verdien "alle", "skjorte" eller "bukse"
	$: if (visPlagg === "alle") { // Sjekker først om visPlagg er lik "alle"
		viserKurv = false;

		// Henter alle varene
		varerDB
			.where("pris", "<", visMaksPris)
			.get()
			.then(function (snapshot) {
				varer = snapshot.docs;
			});
		// Hvis ikke visPlagg er "alle" er det enten "skjorte" eller "bukse"
	} else {
		viserKurv = false;

		// Henter alle varene
		varerDB
			.where("pris", "<", visMaksPris)
			.where("plagg", "==", visPlagg)
			.get()
			.then(function (snapshot) {
				varer = snapshot.docs;
			});
	}

	// Henter varene første gangen
	varerDB.get().then(function (snapshot) {
		varer = snapshot.docs;
	});

	// Henter endringer i handlekurven
	handlekurvDB.onSnapshot(function (snapshot) {
		handlekurv = snapshot.docs;
		totalPris = 0;
		for (let vare of handlekurv) {
			totalPris = totalPris + vare.data().pris * vare.data().antall;
		}
	});

	// Viser handlekurven
	function visKurv() {
		console.log("vis kurv");
		viserKurv = true;
	}

	// Tømmer handlekurven
	function tomKurv() {
		console.log("tøm handlekurv");

		for (let vare of handlekurv) {
			handlekurvDB.doc(vare.id).delete();
		}
	}
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.1/css/foundation.min.css"
/>
<header>
	<nav>
		<select bind:value={visPlagg}>
			<option value="alle">Vis alle</option>
			<option value="skjorte">Vis Skjorter</option>
			<option value="bukse">Vis Bukser</option>
		</select>
		<button class="button success" on:click={visKurv}>Handlekurv</button>
		<button class="button warning" on:click={tomKurv}>Tøm handlekurv</button
		>
		<label
			><input
				type="range"
				min="100"
				max="2600"
				step="100"
				bind:value={visMaksPris}
			/>{visMaksPris} kr</label
		>
	</nav>
</header>
{#if viserKurv}
	<sidebar id="txtHandlekurv">
		<h3>Handlekurv</h3>
		<!-- Går igjennom alle varene i handlekurven -->
		{#each handlekurv as kurvVare}
			<Kurv {kurvVare} />
		{/each}

		<article><b>Total pris:</b></article>
		<article><b>{totalPris} kr</b></article>
	</sidebar>
{:else}
	<main>
		<!-- Går igjennom alle varene i listen varer-->
		{#each varer as vare}
			<Vare {vare} />
		{/each}
	</main>
{/if}

<style>
	header nav {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	main {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 10px;
	}

	@media (max-width: 1100px) {
		main {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media (max-width: 900px) {
		main {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 700px) {
		main {
			grid-template-columns: 1fr;
		}
		header nav {
			grid-template-columns: 1fr;
		}

		header nav button {
			margin: 0;
		}
	}

	/* Vil bare brukes hvis handlekurv er med */
	#txtHandlekurv {
		display: grid;
		grid-template-columns: 3fr 1fr;
		width: 400px;
	}

	#txtHandlekurv h3 {
		grid-column: span 2;
	}
</style>
