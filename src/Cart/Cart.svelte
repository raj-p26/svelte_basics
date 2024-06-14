<script>
  import { onDestroy } from "svelte";
  import cartItems from "./cart-store.js";
  import CartItem from "./CartItem.svelte";
  import { timer } from "../Products/timer-store.js";

  // let items;

  const unsubscribe = timer.subscribe((count) => {
    console.log("Cart: " + count);
  });

  // const unsubscribe = cartItems.subscribe((its) => {
  //   console.log(its);
  //   items = its;
  // });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
</script>

<section>
  <h1>Cart</h1>
  <ul>
    <!-- Shorthand syntax for autosubscribing and unsubscribing
        to the store. -->
    {#each $cartItems as item (item.id)}
      <CartItem id={item.id} title={item.title} price={item.price} />
    {:else}
      <p>No items in cart yet!</p>
    {/each}
  </ul>
</section>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
    border-bottom: 2px solid #ccc;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
