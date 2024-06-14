<script>
  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";
  import Button from "./UI/Button.svelte";
  import { timer } from "./Products/timer-store.js";

  let showCard = true;
</script>

<Button on:click={() => (showCard = !showCard)}>Toggle Card</Button>
{#if showCard}
  <Cart />
{/if}
<Products />

<p>Count: {$timer}</p>
