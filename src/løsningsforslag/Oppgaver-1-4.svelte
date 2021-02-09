<script>
	let antall = 4;
	let pris = 20.5;
	let varer = ["Smør", "Mel", "Salt", "Melk", "Honning"];
	let navn = ""; // Deklarerer variablene uten å gi de noen verdi
	let isSmak = "";
	let antallKuler = 0;
	let a=2;
	let b=3;
	let c=4;
	let x=0;
</script>

<main>
	<h1>Oppgave 1</h1>
	<p>
		Du kjøper {antall} Monster brus for {pris} kr stk. Du må betale: {antall *
			pris}
	</p>
	<ul>
		<li>Hva skjer innenfor den siste {{}}-parentesen?</li>
		<li>
			Her ganges verdiene til antall og pris sammen og resultatet vises i
			HTMLen.
		</li>
	</ul>

	<h1>Oppgave 2</h1>
	<ol>
		<li>{varer[0]}</li>
		<li>{varer[1]}</li>
		<li>{varer[2]}</li>
		<li>{varer[3]}</li>
		<li>{varer[4]}</li>
	</ol>

	<h1>Oppgave 3</h1>
	<label>Navn
		<input
			type="text"
			bind:value={navn}
			placeholder="Skriv inn navnet ditt"
		/>
	</label>
	<label>Smak
		<input
			type="text"
			bind:value={isSmak}
			placeholder="Skriv inn is-smaken"
		/>
	</label>
	<label
		>Smak
		<input type="number" bind:value={antallKuler} />
	</label>

	<h2>Bestilling</h2>
	<p>Velkommen {navn}. Du bestilte {antallKuler} kuler med {isSmak}.</p>

	<h1>Oppgave 4</h1>
	<h2>Andregradsfunksjon</h2>
	<label>a
		<input type="number" bind:value={a} min="0" max="10" step="0.1" />
	</label>
	<label>b
		<input type="number" bind:value={b} min="0" max="10" step="0.1" />
	</label>
	<label>c
		<input type="number" bind:value={c} min="0" max="10" step="0.1" />
	</label>
	<p>f(x)={a}x<sup>2</sup>+{b}x+{c}</p>
	<p>f'(x)={2 * a}x + {b}</p>
	<label>Skriv inn x-verdien:
		<input type="number" bind:value={x} min="-10" max="10" step="0.1" />
		<input type="range" bind:value={x} min="-10" max="10" step="0.1" />
	</label>

	<p>f({x})={a * x * x + b * x + c}</p>
	<p>f'({x})={2 * a * x + b}</p>

</main>

<style>
	ol {
		list-style-type: upper-roman;
	}
</style>
