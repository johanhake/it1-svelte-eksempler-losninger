<script>
	export let vare = {};
</script>

<article>
	<img src="bilder/{vare.bilde}" alt="">
	<h6>{vare.type} {vare.navn}</h6>
	<i>Pris {vare.pris} kr</i>
	<button class="button">Legg i Handlekurv</button>
</article>

<style>
	article > img {
		width: 100%;
	}
</style>