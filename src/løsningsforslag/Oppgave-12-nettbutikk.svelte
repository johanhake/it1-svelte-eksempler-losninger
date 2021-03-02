<script>
	import Vare from "./Vare.svelte";
	let varer = [
		{
			bilde: "bukse_0000.jpg",
			navn: "Hullete",
			plagg: "bukse",
			pris: 490,
			type: "Olabukse",
		},
		{
			bilde: "bukse_0001.jpg",
			navn: "Snasen",
			plagg: "bukse",
			pris: 580,
			type: "Finbukse",
		},
		{
			bilde: "bukse_0002.jpg",
			navn: "Strechy",
			plagg: "bukse",
			pris: 640,
			type: "Olebukse",
		},
		{
			bilde: "bukse_0003.jpg",
			navn: "Straight",
			plagg: "bukse",
			pris: 530,
			type: "Finbukse",
		},
		{
			bilde: "skjorte_0003.jpg",
			navn: "Stripete",
			plagg: "skjorte",
			pris: 380,
			type: "Hverdags",
		},
		{
			bilde: "bukse_0004.jpg",
			navn: "Lommerusk",
			plagg: "bukse",
			pris: 280,
			type: "Olabukse",
		},
		{
			bilde: "bukse_0005.jpg",
			navn: "Hullete 2",
			plagg: "bukse",
			pris: 540,
			type: "Olabukse",
		},
		{
			bilde: "bukse_0006.jpg",
			navn: "Trendy",
			plagg: "bukse",
			pris: 740,
			type: "Finbukse",
		},
		{
			bilde: "skjorte_0002.jpg",
			navn: "Vit",
			plagg: "skjorte",
			pris: 350,
			type: "Tennis",
		},
		{
			bilde: "bukse_0007.jpg",
			navn: "Fargete",
			plagg: "bukse",
			pris: 440,
			type: "Olabukse",
		},
		{
			bilde: "bukse_0008.jpg",
			navn: "Brettet",
			plagg: "bukse",
			pris: 630,
			type: "Finbukse",
		},
		{
			bilde: "bukse_0009.jpg",
			navn: "Komfort",
			plagg: "bukse",
			pris: 840,
			type: "Finbukse",
		},
		{
			bilde: "skjorte_0001.jpg",
			navn: "Straight",
			plagg: "skjorte",
			pris: 450,
			type: "Finskjorte",
		},
	];
	let plagg = "alle";
</script>
<header>
	<h1>Nettbutikken Lummerusk</h1>
</header>
<select bind:value={plagg}>
	<option value="alle">Alle</option>
	<option value="skjorte">Skjorter</option>
	<option value="bukse">Bukser</option>
</select>
<main>
	<!-- Går igjennom alle varene i listen varer-->
	{#each varer as vare}
		<!-- Hvis verdien til variabelen plagg er satt til "alle" -->
		{#if plagg === "alle"}
			<Vare vare={vare}/>
		<!-- Ellers vises bare de plaggene som har samme verdi som variabelen: plagg -->
		{:else if plagg === vare.plagg}
			<Vare vare={vare}/>
		{/if}
	{/each}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 10px;
	}
</style>
