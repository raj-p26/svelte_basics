<script>
  // import { onMount } from "svelte";
  import hobbyStore from "./hobby-store";
  let hobbies = [];
  let hobbyInput;
  let isLoading = false;

  // onMount(() => {
  //   isLoading = true;
  let getHobbies = fetch(
    "https://svelte-course-4f415-default-rtdb.firebaseio.com/hobbies.json"
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("failed");
      }

      return res.json();
    })
    .then((data) => {
      // hobbies = Object.values(data);
      hobbyStore.setHobbies(Object.values(data));
      let keys = Object.keys(data);

      console.log(keys);
      isLoading = false;

      return hobbies;
    })
    .catch((err) => {
      isLoading = false;
      console.log(err);
    });
  // });

  const addHobby = () => {
    // hobbies = [...hobbies, hobbyInput.value];
    hobbyStore.addHobby(hobbyInput.value);

    isLoading = true;
    fetch(
      "https://svelte-course-4f415-default-rtdb.firebaseio.com/hobbies.json",
      {
        method: "POST",
        body: JSON.stringify(hobbyInput.value),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        isLoading = false;
        if (!res.ok) {
          throw new Error("failed");
        }

        // alert("data saved");
        // res.json() => Promise with an Object.
      })
      .catch((err) => {
        isLoading = false;
        console.log(err);
      });
  };
</script>

<label for="hobby">Hobby</label>
<input type="text" bind:this={hobbyInput} id="hobby" />
<button on:click={addHobby}>Add Hobby</button>

{#if isLoading}
  <p>Loading...</p>
{:else}
  <ul>
    {#each $hobbyStore as hobby}
      <li>{hobby}</li>
    {/each}
  </ul>
{/if}

<!-- alternative -->
<!-- {#await getHobbies}
  <p>Loading...</p>
{:then hobbyData}
  <ul>
    {#each hobbies as hobby}
      <li>{hobby}</li>
    {/each}
  </ul>
{:catch err}
  <p>{err.message}</p>
{/await} -->
