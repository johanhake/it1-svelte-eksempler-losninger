<script>
	// Henter referansen til din database på firestore
	// Merk at vi her må gå opp en mappe ved å bruke ../ forran firebase.js.
	import { db } from "../firebase.js";


	// Referanse til meldinger og bok-collectionen på firestore!
	let bøkerDB = db.collection("bøker");

	// Liste med bøker
	let bøker = [];

	// Variabler for oppgave 14 å sende inn meldinger
	let tittel = "";
	let ISBN = "";
	let forlag = "";
	let utgitt = "";
	let forfatter = "";

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

	// Henter alle bøkene som er registrert
	bøkerDB.orderBy("utgitt").get().then(function(snapshot){
		bøker = snapshot.docs;
	});

</script>

<h1>Oppgave 15</h1>
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
<h2>Bøker</h2>
<table>
    <thead>
        <tr><th>Tittel</th><th>Forfatter</th><th>Forlag</th><th>Utgitt</th></tr>
    </thead>
    <tbody>
        {#each bøker as bok}
        <tr><td>{bok.data().tittel}</td><td>{bok.data().forfatter}</td><td>{bok.data().forlag}</td><td>{bok.data().utgitt}</td></tr>
        {/each}
    </tbody>
</table>
<style>
	table{
		border-collapse: collapse;
	}

	td, th{
		border: solid black 1px;
		width: 150px;
	}

	th{
		background-color: azure;
	}
</style>
