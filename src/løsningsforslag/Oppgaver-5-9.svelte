<script>
    let likerIt = false;
    let alder = "";
    let varer = ["Smør", "Mel", "Salt", "Melk", "Honning"];
    let filmer = [
        {
            år: 2015,
            vinner: "Sportlight",
            regissør: "Tomas McCarthy",
        },
        {
            år: 2014,
            vinner: "Birdman",
            regissør: "Tomas Alejandro Gonzáles Iñárritu",
        },
        {
            år: 2013,
            vinner: "12 years of slave",
            regissør: "Steve McQueen",
        },
        {
            år: 2012,
            vinner: "Argo",
            regissør: "Ben Affleck",
        },
        {
            år: 2011,
            vinner: "The Artist",
            regissør: "Michael Hazanavicius",
        },
    ];
    let a = 2;
    let b = 3;
    let c = 4;
</script>

<h1>Oppgave 5</h1>
<label
    >Liker du IT?
    <input type="checkbox" bind:checked={likerIt} />
</label>

{#if likerIt}
    <p>Så bra at du liker IT! Da er du på rett sted!</p>
{:else}
    <p>Ai, ai, ai! Hvis du ikke liker IT er du på feil sted...</p>
{/if}

<h1>Oppgave 6</h1>
<label
    >Skriv inn din alder
    <input type="number" bind:value={alder} placeholder="Alder" />
</label>
{#if alder === ""}
    <p>Alderen er ikke satt. Pris: ?</p>
{:else if alder <= 4}
    <p>Alderen er {alder}. Pris: 0 kr.</p>
{:else if alder <= 16}
    <p>Alderen er {alder}. Pris: 15 kr.</p>
{:else if alder <= 63}
    <p>Alderen er {alder}. Pris: 30 kr.</p>
{:else}
    <p>Alderen er {alder}. Pris: 15 kr.</p>
{/if}

<h1>Oppgave 7</h1>
<h2>Handleliste</h2>
<ol>
    {#each varer as vare}
        <li>{vare}</li>
    {/each}
</ol>

<h1>Oppgave 8</h1>
<table>
    <thead>
        <tr><th>År</th><th>Vinner</th><th>Regissør</th></tr>
    </thead>
    <tbody>
        {#each filmer as film}
            <tr><td>{film.år}</td><td>{film.vinner}</td><td>{film.regissør}</td></tr>
        {/each}
    </tbody>
</table>

<h1>Oppgave 9</h1>
<h2>Løsning av Andregradslikning</h2>
<label>a
    <input type="number" bind:value={a} min="-10" max="10" step="0.1" />
</label>
<label>b
    <input type="number" bind:value={b} min="-10" max="10" step="0.1" />
</label>
<label>c
    <input type="number" bind:value={c} min="-10" max="10" step="0.1" />
</label>
{#if a!=0}
    <!-- Svaret her er litt overkill ;) -->
    <p>{a===1? "" : a}x<sup>2</sup>{b>0 ? " + " : " "}{b===0 ? "" : b===1 ? "x" : b + "x"}{c>0 ? " + " : " "}{c===0 ? "" : c}=0</p>
    {#if b*b-4*a*c<0}
        <p>Likningen har ikke noen løsning!</p>
    {:else if b*b-4*a*c === 0}
        <p>Likningen har en løsning:</p>
        <ul>
            <li>x={-b/(2*a)}</li>
        </ul>
    {:else}
        <p>Likningen har to løsninger:</p>
        <ul>
            <li>x={-(b+Math.sqrt(b*b-4*a*c))/(2*a)}</li>
            <li>x={-(b-Math.sqrt(b*b-4*a*c))/(2*a)}</li>
        </ul>
     {/if}
{:else}
    <p>a kan ikke har verdien 0</p>
{/if}

<style>
    ol {
        list-style-type: upper-roman;
    }

    table {
        border-collapse: collapse;
    }

    thead > tr {
        background-color: aliceblue;
    }

    tbody > tr {
        background-color: papayawhip;
    }

    th {
        text-align: left;
        padding: 7px 14px;
        border: 2px solid olive;
        border-bottom: 4px solid darkolivegreen;
    }

    td {
        padding: 7px 14px;
        border: 2px solid olive;
    }
</style>
