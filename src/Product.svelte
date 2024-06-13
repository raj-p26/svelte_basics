<script>
    import { createEventDispatcher } from "svelte";

    /** @type {string} */
    export let title;
    /** @type {string} */
    export let price;
    /** @type {boolean} */
    export let bestseller = false;

    const dispatch = createEventDispatcher();

    const addToCart = () => {
        dispatch("add-to-cart", { id: "p1" });
    };
</script>

<article>
    <h1>{title}</h1>
    <h2>$ {price}</h2>
    {#if bestseller}
        <h3>BEST-SELLER</h3>
    {/if}
    <button on:click={addToCart}>Add to Cart</button>
    <button on:click={() => dispatch("delete")}>Delete</button>
</article>
