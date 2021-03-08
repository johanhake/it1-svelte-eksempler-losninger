<script>
	import Blogger from "./BloggerFasit.svelte";

	// Henter referansen til din database på firestore
	// Merk at vi her må gå opp en mappe ved å bruke ../ forran firebase.js.
	import { db } from "../firebase.js";

	// Referanse til blogger-collectionen på firestore!
	let bloggereDB = db.collection("bloggere");

	let navn = ""
	let følgere = ""

	// Tom liste med bloggere
	let bloggere = [];

	/*
	// Henter data fra firestore når siden lastes
	bloggereDB.get().then(function(snapshot){
		bloggere = snapshot.docs;
	});
	*/

	// Henter data fra firestore når noe endrer seg
	bloggereDB.orderBy("følgere","desc").onSnapshot(function(snapshot){
		bloggere = snapshot.docs;
	});

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
<h2>Bloggere</h2>
<ol>
    {#each bloggere as blogger}
	<Blogger navn={blogger.data().navn}
			 følgere={blogger.data().følgere}
			 id={blogger.id}
			 bloggereDB={bloggereDB}/>
	{/each}
</ol>
