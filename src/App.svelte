<script>
	import ContactCard from "./ContactCard.svelte";

	let name = "John";
	let age = 20;

	$: uppercaseName = name.toUpperCase();

	$: console.log(name);

	$: if (name == "Jonathan") {
		age = 21;
	}

	let incrementAge = () => (age += 1);

	/*
	/**
	 * @param {InputEvent} e
	 * /
	let changeName = (e) => {
		name = e.target.value;
	};
	*/
</script>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click={incrementAge}>Change Age</button>
<!-- <button on:click={changeName}>Change Name</button> -->

<!-- <input type="text" value={name} on:input={changeName} /> -->
<!-- Shortcut for above. -->
<input type="text" bind:value={name} />

<ContactCard userName={name} />

<style>
	h1 {
		color: purple;
	}
</style>
