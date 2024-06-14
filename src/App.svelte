<script>
  // import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { cubicIn } from "svelte/easing";
  import { fade, fly, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  // import Spring from "./Spring.svelte";

  // just a store but has animations.
  const progress = tweened(0, {
    delay: 0,
    duration: 700,
    easing: cubicIn,
  });
  let boxInput;

  setTimeout(() => {
    progress.set(0.5);
  }, 1500);

  let boxes = [];
  let showParagraph = false;

  function addBox() {
    boxes = [boxInput.value, ...boxes];
  }

  function discard(box) {
    boxes = boxes.filter((elem) => elem != box);
  }
</script>

<!-- <progress value={$progress} /> -->
<!-- <Spring /> -->

<button on:click={() => (showParagraph = !showParagraph)}> Toggle </button>

{#if showParagraph}
  <!-- Cannot be cancelled like transition animation can be -->
  <p in:fade out:fly={{ x: 300 }}>Can you seem me?</p>
{/if}

<hr />

<input type="text" bind:this={boxInput} />
<button on:click={addBox}>Add</button>

{#if showParagraph}
  {#each boxes as box (box)}
    <!-- <div transition:fly={{ duration: 500, easing: cubicIn, y: -100, x: 100 }}>
    {box}
  </div> -->
    <!-- animates individual elements -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      transition:scale
      on:click={() => discard(box)}
      on:introstart={() => console.log("intro started")}
      on:introend={() => console.log("intro ended")}
      on:outrostart={() => console.log("removing element started")}
      on:outroend={() => console.log("removing element ended")}
      animate:flip={{
        duration: 300,
      }}
    >
      {box}
    </div>

    <!-- animates whole collection. -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- <div transition:scale|local on:click={() => discard(box)}>{box}</div> -->
  {/each}
{/if}

<style>
  div {
    width: 10rem;
    height: 10rem;
    background-color: #ccc;
    margin: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    padding: 1rem;
  }
</style>
