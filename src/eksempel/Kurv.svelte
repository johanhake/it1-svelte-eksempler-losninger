<script>
	// Henter referansen til din database på firestore
	// Merk at vi her må gå opp en mappe ved å bruke ../ forran firebase.js.
	import { db } from "../firebase.js";

	// Handlekurv collectionen
	let varerDB = db.collection("varer");

	// Props
	export let kurvVare = "";

	let navn = "";
	let type = "";
	let antall = "";
	let pris = ""

	// Henter vare med en gitt primærnøkkel
	varerDB.doc(kurvVare.id).get().then(function(doc){
		// Fortsett her
		console.log("Henter vare:", navn, kurvVare.id)
	});

</script>

<article>
	{type}
	{navn}
</article>
<article><i>{antall}x{pris} kr</i></article>
