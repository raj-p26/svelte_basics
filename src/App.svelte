<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";
  import { isValidEmail } from "./validation.js";

  let value = "John";
  let price = 0;
  let selectedOption = 1;
  let agreed;
  //   let favColor = "red";
  let favColor = ["red"];
  let singleFavColor = "red";
  let enteredEmail = "";
  let username;
  let customInput;
  let formIsValid = false;

  $: if (isValidEmail(enteredEmail)) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  $: console.log(value);
  $: console.log(price);
  $: console.log(selectedOption);
  $: console.log(agreed);
  $: console.log(favColor);
  $: console.log(singleFavColor);
  $: console.log(customInput);

  const saveData = () => {
    console.log(username.value);
    console.dir(username);
    // Not an Ideal Way!!
    customInput.empty();
  };
</script>

<!-- <input type="text" bind:value /> -->

<CustomInput type="text" bind:value bind:this={customInput} />

<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price} />

<label>
  Agree to Terms
  <input type="checkbox" bind:checked={agreed} />
</label>

<!-- Radio Button Example -->
<!-- <label>
<input type="radio" name="color" value="red" bind:group={favColor} />
  Red
</label>

<label>
  <input type="radio" name="color" value="green" bind:group={favColor} />
  Green
</label>

<label>
  <input type="radio" name="color" value="blue" bind:group={favColor} />
  Blue
</label> -->

<!-- Checkbox example -->
<label>
  <input type="checkbox" name="color" value="red" bind:group={favColor} />
  Red
</label>

<label>
  <input type="checkbox" name="color" value="green" bind:group={favColor} />
  Green
</label>

<label>
  <input type="checkbox" name="color" value="blue" bind:group={favColor} />
  Blue
</label>

<select bind:value={singleFavColor}>
  <option value="green">Green</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>

<hr />

<!-- * make reference of this element to another variable -->
<input type="text" bind:this={username} />
<button on:click={saveData}>Save</button>

<hr />

<form on:submit|preventDefault>
  <input
    type="email"
    bind:value={enteredEmail}
    class={isValidEmail(enteredEmail) ? "" : "invalid"}
  />
  <button type="submit" disabled={!formIsValid}>Save</button>
</form>

<style>
  .invalid {
    border: 1px solid red;
  }
</style>
