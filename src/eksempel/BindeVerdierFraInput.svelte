<script>
    let lærer = "Johan";
    let elev = "Petter Smart";
    let a = 1;
    let b = 2;
    let c = 3;
    let x=0;
</script>

<h2>Binde verdier fra input</h2>
<label for="">Elev</label>
<input type="text" bind:value={elev} />
<label for="">Lærer</label>
<input type="text" bind:value={lærer} />

<p>
    Lærer {lærer} synes eleven {elev} er dyktig!
</p>

<h2>Binde verdier fra flere input-felt</h2>
<label>Tall a
    <input type="number" bind:value={a} min="0" max="10" step="0.1" />
    <input type="range" bind:value={a} min="0" max="10" step="0.1" />
</label>
<label>Tall b
    <input type="number" bind:value={b} min="0" max="10" />
    <input type="range" bind:value={b} min="0" max="10" />
</label>
<p>{a} + {b} = {a * b}</p>
