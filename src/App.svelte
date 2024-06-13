<script>
  import { tick } from "svelte";
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
  let closable = false;
  let text = "This is some dummy text";

  /** @param {CustomEvent} event */
  const addToCart = (event) => {
    console.log(event.detail);
  };

  const delete_ = (event) => {
    console.log(event);
  };

  const transform = (event) => {
    if (event.which !== 9) {
      return;
    }
    event.preventDefault();

    const selectionStart = event.target.selectionStart;
    const selectionEnd = event.target.selectionEnd;
    const value = event.target.value;

    text =
      value.slice(0, selectionStart) +
      value.slice(selectionStart, selectionEnd).toUpperCase() +
      value.slice(selectionEnd);

    tick().then(() => {
      event.target.selectionStart = selectionStart;
      event.target.selectionEnd = selectionEnd;
    });
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
    let:didAgree={closable}
  >
    <h1 slot="header">Hello!</h1>
    <p>This works!</p>
    <button
      slot="footer"
      disabled={!closable}
      on:click={() => (showModal = false)}
    >
      Confirm
    </button>
  </Modal>
{/if}

<textarea rows="5" value={text} on:keydown={transform}></textarea>
