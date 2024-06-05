<script>
	import ContactCard from "./ContactCard.svelte";

	let userName = "John";
	let jobTitle = "";
	let image = "";
	let description = "";
	let age = 20;

	$: uppercaseName = userName.toUpperCase();

	$: console.log(userName);

	$: if (userName == "Jonathan") {
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
<input type="text" bind:value={userName} />
<input type="text" bind:value={jobTitle} />
<input type="text" bind:value={image} />
<textarea rows="3" bind:value={description}></textarea>

<ContactCard {userName} {jobTitle} {description} {image} />

<style>
	h1 {
		color: purple;
	}
</style>
