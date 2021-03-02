<script>
	// Henter referansen til din database på firestore
	// Merk at vi her må gå opp en mappe ved å bruke ../ forran firebase.js.
	import { db } from "../firebase.js";


	// Referanse til meldinger og bok-collectionen på firestore!
	let meldingerDB = db.collection("meldinger");
	let bøkerDB = db.collection("bøker");

	// Variabler for oppgave 13 å sende inn meldinger
	let navn = ""
	let melding = ""

	// Variabler for oppgave 14 å sende inn meldinger
	let tittel = "";
	let ISBN = "";
	let forlag = "";
	let utgitt = "";
	let forfatter = "";

	// Funksjon: Kode som er lagret og kjøres når den kalles.
	function sendinnMelding() {
		console.log(navn, melding);

		// Legger til document med autogenerert primærnøkkel
		meldingerDB.add({
			navn: navn,
			melding: melding
		});

		// Sletter meldingen.
		// Beholder navn da du sikkert vil hete det samme på neste melding
		melding = "";
	}

	// Funksjon: Kode som er lagret og kjøres når den kalles.
	function registrerBok() {
		console.log(ISBN, tittel, forfatter, utgitt, forlag);

		// Legger til document med ISBN som primærnøkkel
		// NB!! Vi må gjøre om ISBN fra Numer til String!
		bøkerDB.doc(String(ISBN)).set({
			tittel: tittel,
			utgitt: utgitt,
			forfatter: forfatter,
			forlag: forlag
		});

		// Sletter registreringene.
		tittel = "";
		utgitt = "";
		forfatter = "";
		forlag = "";
		ISBN = "";
	}

</script>

<h1>Oppgave 13</h1>
<form on:submit|preventDefault={sendinnMelding}>
	<h3>Skriv en melding</h3>
	<label>Navn:
		<input type="text" bind:value={navn} placeholder="Navn" required />
	</label>
	<label>Følgere:
		<input
			type="text"
			bind:value={melding}
			placeholder="Melding"
			required
		/>
	</label>
	<button>Send inn</button>
</form>

<h1>Oppgave 14</h1>
<form on:submit|preventDefault={registrerBok}>
	<h3>Registrer en bok</h3>
	<label>ISBN:
		<input type="number" bind:value={ISBN} placeholder="ISBN" required />
	</label>
	<label>Tittel:
		<input type="text" bind:value={tittel} placeholder="Tittel" required />
	</label>
	<label>Forfatter:
		<input type="text" bind:value={forfatter} placeholder="Forfatter" required />
	</label>
	<label>Forlag:
		<input type="text" bind:value={forlag} placeholder="Forlag" required />
	</label>
	<label>Utgitt:
		<input type="number" bind:value={utgitt} placeholder="Utgitt" required />
	</label>
	<button>Registrer</button>
</form>
