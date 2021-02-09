<script>
    let erMyndig = true;
    let send = false;
    let varer = ["Smør", "Mel", "Salt", "Melk", "Honning", "Monster", "Cola"];
        let bøker = [
        {
            isbn: 9788292185114,
            forfatter: "James Joyce",
            forlag: "Cappelen Damm",
            tittel: "Ullysses",
            utgitt: 1922
        },
        {
            isbn: 9788202325145,
            forfatter: "J.M. Coetzee",
            forlag: "Cappelen Damm",
            tittel: "Sommer",
            utgitt: 2010
        },
        {
            isbn: 9788202309596,
            forfatter: "Vigdis Hjort",
            forlag: "Cappelen Damm",
            tittel: "Sommer",
            utgitt: 2007
        },
        {
            isbn: 9788203400841,
            forfatter: "Lars Nersveen",
            forlag: "Aschehoug",
            tittel: "Informasjonsteknologi 2",
            utgitt: 2017
        }
    ];
</script>

<h3>Myndig?</h3>
<label for="myndig">
    <input id="myndig" type="checkbox" bind:checked={erMyndig} />Er du myndig?
</label>
{#if erMyndig}
    <p>Du er myndig og kan ta lappen!</p>
    <img src="/bilder/successkid.jpg" alt="Success" />
{:else}
    <p>Du er ikke myndig og kan ikke ta lappen!</p>
{/if}

<h3>Spam?</h3>
<label>
    <input type="checkbox" bind:checked={send} />
    Ja! Send gjerne mange spam-eposter
</label>

{#if send}
    <p>
        Takk! Vi kommer å bombardere din innboks og selge dine personlige data!
    </p>
{:else}
    <p>Du må svare ja for å fortsette!</p>
{/if}

<button disabled={!send}> Send inn </button>

<h3>Vareliste</h3>
<ul>
    {#each varer as vare}
        <li>{vare}</li>
    {/each}
</ul>

<h3>Tabell</h3>
<table>
	    <tr><th>Tittel</th><th>Forfatter</th><th>Forlag</th></tr>
	    {#each bøker as bok}
	    <tr><td>{bok.tittel}</td><td>{bok.forfatter}</td><td>{bok.forlag}</td></tr>
	    {/each}
</table>


<style>
    img {
        width: 300px;
    }
</style>
