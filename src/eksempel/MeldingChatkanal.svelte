<script>
	// Henter chatkanal databasen
	import { db } from "../firebase.js";

	// Henter chatkanal-collectionen
	let chatkanalerDB = db.collection("chatkanaler");

	// Props med infor om meldingen
	export let meldingDoc = "";

	let navn = meldingDoc.data().navn;
	let melding = meldingDoc.data().melding;
	let chatkanal = "";
	console.log("melding id:", meldingDoc.id)

	// Bruker primærnøkkelen til chatkanalen til å hente ut navnet til chatkanalen
	chatkanalerDB.doc(meldingDoc.data().kanalId).get().then(function(doc){
		chatkanal = doc.data().kanal;
	});

</script>

<article>
	<h6>{navn} - {chatkanal}</h6>
	<p> - {melding}</p>
</article>

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