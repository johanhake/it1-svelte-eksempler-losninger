<script>
    import Success from "./Success.svelte";
    import Dyr from "./Dyr.svelte";
    let navn = "Henrik";
    let dyrListe = [
        {
            bilde: "ekorn",
            dyr: "Ekorn",
        },
        {
            bilde: "kanin",
            dyr: "Kanin",
        },
        {
            bilde: "kattunge",
            dyr: "Kattunge",
        },
        {
            bilde: "krokodille",
            dyr: "Krokodille",
        },
        {
            bilde: "firfisle",
            dyr: "Firfisle",
        },
        {
            bilde: "fugl",
            dyr: "Blåmeis",
        },
    ];
</script>

<h1>Oppgave 10</h1>

<label
    >Elev
    <input type="text" bind:value={navn} />
</label>
<h2>Hva sier {navn}?</h2>
<Success {navn} />

<h1>Oppgave 11</h1>
<main>
    <h3>Dyr for alle!</h3>
    {#each dyrListe as dyr}
        <Dyr {dyr} />
    {/each}
</main>

<style>
    h2 {
        color: red;
    }

    h3 {
        font-size: 2em;
        text-align: center;
        grid-column: span 4;
    }

    main {
        max-width: 1000px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        background-color: lightgray;
    }

    @media(max-width: 800px){
            main {
                grid-template-columns: repeat(3, 1fr);
            }

            h3{
                grid-column: span 3;
            }
        }


        @media(max-width: 600px){
            main {
                grid-template-columns: repeat(2, 1fr);
            }

            h3{
                grid-column: span 2;
            }
        }

</style>
