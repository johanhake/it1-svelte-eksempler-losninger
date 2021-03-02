<script>
    // Importerer Svelte komponeneter
    import Success from "./Success.svelte";
    import Rad from "./Rad.svelte";

    // Variabler
    let navn = "Henrik";

    let bøker = [
        {
            isbn: 9788292185114,
            forfatter: "James Joyce",
            forlag: "Cappelen Damm",
            tittel: "Ullysses",
            utgitt: 1922,
        },
        {
            isbn: 9788202325145,
            forfatter: "J.M. Coetzee",
            forlag: "Cappelen Damm",
            tittel: "Sommer",
            utgitt: 2010,
        },
        {
            isbn: 9788202309596,
            forfatter: "Vigdis Hjort",
            forlag: "Cappelen Damm",
            tittel: "Hjulskift",
            utgitt: 2007,
        },
        {
            isbn: 9788203400841,
            forfatter: "Lars Nersveen",
            forlag: "Aschehoug",
            tittel: "Informasjonsteknologi 2",
            utgitt: 2017,
        },
    ];
</script>

<h2>Hva sier {navn}?</h2>
<Success />

<h3>Bok-tabell</h3>
<table>
    <thead>
        <tr><th>Tittel</th><th>Forfatter</th><th>Forlag</th></tr>
    </thead>
    <tbody>
        {#each bøker as bok}
        <Rad bok={bok}/>
        {/each}
    </tbody>
</table>

<style>
    h2 {
        color: red;
    }
</style>
