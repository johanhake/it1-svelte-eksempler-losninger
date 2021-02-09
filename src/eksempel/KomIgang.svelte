<script>
	let lærer = "Johan";
	let elev = "Petter Smart";
	let pris = 34.5;
	let erMyndig = true;
	let varer = ["Smør", "Mel", "Salt", "Melk", "Honning"];
	let bok = {
		forfatter: "Vigdis Hjort",
		forlag: "Cappelen Damm",
		tittel: "Sommer",
		utgitt: 2007,
	};
</script>

<main>
	<h1>Hei {elev}!</h1>
	<p>Nå skal {lærer} hjelpe deg å lære deg lage fete nettsider i Svelte.</p>
	<img
		src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
		alt="Svelte-logo"
	/>
	<p>{lærer} kjøper en Snickers for {pris} kr.</p>
	<p>Handleliste:</p>
	<ul>
		<li>{varer[0]}</li>
		<li>{varer[1]}</li>
		<li>{varer[2]}</li>
		<li>{varer[3]}</li>
		<li>{varer[4]}</li>
	</ul>
	<p>Boken {bok.tittel}</p>
	<table>
		<tr> 
			<th>Tittel</th><th>Forfatter</th><th>Forlag</th>
		</tr>
		<tr>
			<td>{bok.tittel}</td><td>{bok.forfatter}</td><td>{bok.forlag}</td>
		</tr>
	</table>
</main>

<footer>
	Besøk <a href="https://svelte.dev/tutorial">Svelte tutorial</a> for å bli
	kjent med <i>Svelte</i>.
</footer>

<style>
	ul {
		text-align: left;
		width: 200px;
		margin: 0 auto;
	}

	main,
	footer {
		text-align: center;
		padding: 1em;
		max-width: 640px;
		margin: 0 auto;
	}

	main img {
		width: 200px;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
