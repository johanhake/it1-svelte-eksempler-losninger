<script>
	// Henter referansen til din database på firestore
	// Merk at vi her må gå opp en mappe ved å bruke ../ forran firebase.js.
	import { db, Timestamp} from "../firebase.js";


	// Referanse til meldinger og bok-collectionen på firestore!
	let meldingerDB = db.collection("meldinger-timestamp");

	// Variabler for oppgave 16 å sende inn meldinger
	let navn = ""
	let melding = ""
	let meldinger = [];

	// Funksjon: Kode som er lagret og kjøres når den kalles.
	function sendinnMelding() {
		console.log(navn, melding);

		// Legger til document med autogenerert primærnøkkel
		meldingerDB.add({
			navn: navn,
			melding: melding,
			timestamp: Timestamp.fromDate(new Date())
		});

		// Sletter meldingen.
		// Beholder navn da du sikkert vil hete det samme på neste melding
		melding = "";
	}

	// Henter meldingene hver gang noe forandrer seg i de
	meldingerDB.orderBy("timestamp").onSnapshot(function(snapshot){
		meldinger = snapshot.docs;
	});

</script>

<h1>Oppgave 16</h1>
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
<main>
	{#each meldinger as melding}
		<article>
			<h6>{melding.data().navn}</h6>
			<p> - {melding.data().melding}</p>
		</article>
	{/each}
</main>
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