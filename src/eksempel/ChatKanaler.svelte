<script>
	// Henter Svelte komponenten Melding
	import Melding from "./MeldingChatkanal.svelte";

	// Henter referansen til din database på firestore
	// Merk at vi her må gå opp en mappe ved å bruke ../ forran firebase.js.
	import { db, Timestamp } from "../firebase.js";

	// Referanse til meldinger og bok-collectionen på firestore!
	let meldingerDB = db.collection("meldinger-chatkanaler");
	let chatkanalerDB = db.collection("chatkanaler");

	// Variabler for hente og sende inn meldinger
	let navn = "";
	let melding = "";
	let meldinger = [];
	let chatkanalId = "";
	let visChatkanalId = "";
	let chatkanaler = [];

	// Funksjon: Kode som er lagret og kjøres når den kalles.
	function sendinnMelding() {
		console.log(navn, melding);

		// Legger til document med autogenerert primærnøkkel
		meldingerDB.add({
			navn: navn,
			melding: melding,
			kanalId: chatkanalId,
			timestamp: Timestamp.fromDate(new Date()),
		});

		// Sletter meldingen.
		// Beholder navn da du sikkert vil hete det samme på neste melding
		melding = "";
	}


	// Funksjon som kjører når man bytter chatkanal som skal vises
	function viseChatkanal(){

		// Sletter gamle meldinger (må til for at siden skal legge inn nye meldinger)
		meldinger = [];

		if (visChatkanalId === "alleKanaler"){
			// Henter meldingene fra alle kanalene
			meldingerDB.orderBy("timestamp").onSnapshot(function (snapshot) {
				meldinger = snapshot.docs;
			});
		}else{

			// Henter meldingene hver gang noe forandrer seg sortert etter de ulike kanalene
			meldingerDB.orderBy("timestamp").where("kanalId", "==", visChatkanalId).onSnapshot(function (snapshot) {
				meldinger = snapshot.docs;
			});
		}
	}

	// Henter chatkanalene fra firestore (Kan bruke get også)
	chatkanalerDB.onSnapshot(function (snapshot) {
		chatkanaler = snapshot.docs;
	});

</script>

<h1>Chatkanaler</h1>
<main>
	<form on:submit|preventDefault={sendinnMelding}>
		<h3>Skriv en melding</h3>
		<label>Navn:
			<input type="text" bind:value={navn} placeholder="Navn" required />
		</label>
		<label>Kanal
			<select bind:value={chatkanalId}>
				<option value="">Velg kanal</option>
				{#each chatkanaler as chatkanalDoc}
					<option value={chatkanalDoc.id}>
						{chatkanalDoc.data().kanal}
					</option>
				{/each}
			</select>
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
		<select bind:value={visChatkanalId} on:change={viseChatkanal}>
			<option value="">Velg kanal</option>
			<option value="alleKanaler">Alle kanaler</option>
			{#each chatkanaler as chatkanalDoc}
				<option value={chatkanalDoc.id}>
					{chatkanalDoc.data().kanal}
				</option>
			{/each}
		</select>
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