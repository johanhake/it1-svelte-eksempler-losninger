<script>
	// Importerer Vare-komponenten
	import Vare from "./VareFinal.svelte";
	import Kurv from "./KurvFinal.svelte";

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

	// Viser handlekurven
	let viserKurv = false;

	// Henter varene første gangen
	varerDB.get().then(function(snapshot) {
		varer = snapshot.docs;
	});

	// Henter endringer i handlekurven
	handlekurvDB.onSnapshot(function(snapshot){
		handlekurv = snapshot.docs;
		totalPris = 0;
		for (let vare of handlekurv){
			totalPris += vare.data().antall*vare.data().pris;
		}
	});

	// Viser alle varene
	function visAlleVarer() {
		console.log("vis alle varer");
		viserKurv = false;
		varerDB.get().then(function (snapshot) {
			varer = snapshot.docs;
		});
	}

	// Viser bare bukser
	function visBukser() {
		console.log("vis bukser");
		viserKurv = false;
		varerDB
			.where("plagg", "==", "bukse")
			.get()
			.then(function (snapshot) {
				varer = snapshot.docs;
			});
	}

	// Viser bare skjorter
	function visSkjorter() {
		console.log("vis skjorter");
		viserKurv = false;
		varerDB
			.where("plagg", "==", "skjorte")
			.get()
			.then(function (snapshot) {
				varer = snapshot.docs;
			});
	}

	// Viser handlekurven
	function visKurv() {
		console.log("vis kurv");
		viserKurv = true;
	}

	// Tømmer handlekurven
	function tomKurv() {
		console.log("tøm handlekurv");
		for(let vare of handlekurv){
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
		<button class="button" on:click={visAlleVarer}>Alle varer</button>
		<button class="button success" on:click={visBukser}>Bukser</button>
		<button class="button" on:click={visSkjorter}>Skjorter</button>
		<button class="button success" on:click={visKurv}>Handlekurv</button>
		<button class="button warning" on:click={tomKurv}>Tøm handlekurv</button
		>
	</nav>
</header>
{#if viserKurv}
	<sidebar id="txtHandlekurv">
		<h3>Handlekurv</h3>
		{#each handlekurv as kurvVare}
			<Kurv kurvVare={kurvVare}/>
		{/each}
		<article><b>Total pris:</b></article><article><b>{totalPris} kr</b></article>
	</sidebar>
{:else}
	<main>
		<!-- Går igjennom alle varene i listen varer-->
		{#each varer as vare}
			<Vare vare={vare} />
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
