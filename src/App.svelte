<script>
	import Product from "./Product.svelte";
	import Modal from "./Modal.svelte";

	/** @type {{id: string; title: string; price: number;}[]}*/
	const products = [
		{
			id: "p1",
			title: "A Book",
			price: 9.99,
		},
	];

	let showModal = false;

	/** @param {CustomEvent} event */
	const addToCart = (event) => {
		console.log(event.detail);
	};

	const delete_ = (event) => {
		console.log(event);
	};
</script>

{#each products as product (product.id)}
	<Product {...product} on:add-to-cart={addToCart} on:delete={delete_} />
{/each}

<button on:click={() => (showModal = true)}>Show Modal</button>

{#if showModal}
	<Modal
		on:cancel={() => (showModal = false)}
		on:close={() => (showModal = false)}
	>
		<h1 slot="header">Hello!</h1>
		<p>This works!</p>
		<button slot="footer">Confirm</button>
	</Modal>
{/if}
