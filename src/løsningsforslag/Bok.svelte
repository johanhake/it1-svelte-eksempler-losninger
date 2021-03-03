<script>
	export let tittel = "";
	export let forfatter = "";
	export let forlag = "";
	export let utgitt = "";
	export let id = "";
	export let bøkerDB = "";

	function slettBok() {
		console.log("sletter:", id, tittel);
		bøkerDB.doc(id).delete();
	}
</script>

<tr>
	<td>{tittel}</td><td>{forfatter}</td><td>{forlag}</td><td>{utgitt}</td>
	<td class="endre">
		<span on:click={slettBok}>&#x2716;</span>
	</td>
</tr>

<style>
	td {
		border: solid black 1px;
		width: 150px;
	}

	.endre {
		width: 50px;
		border: 0px;
	}

	span {
		font-size: 0.9em;
		display: inline-block;
	}

	span:hover {
		cursor: pointer;
		transform: scale(1.1);
		color: red;
	}

	span:active {
		transform: scale(1);
	}
</style>
