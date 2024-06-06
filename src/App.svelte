<script>
	import ContactCard from "./ContactCard.svelte";

	let userName = "John";
	let jobTitle = "";
	let image = "";
	let description = "";
	let formState = "empty";
	/** @type {{
		id: number;
		userName: string;
		jobTitle: string;
		image: string;
		description: string;
	}[]} */
	let createdContacts = [];
	// let age = 20;

	// $: uppercaseName = userName.toUpperCase();

	// $: console.log(userName);

	// $: if (userName == "Jonathan") {
	// 	age = 21;
	// }

	// let incrementAge = () => (age += 1);

	/*
	/**
	 * @param {InputEvent} e
	 * /
	let changeName = (e) => {
		name = e.target.value;
	};
	*/

	const addContact = () => {
		if (
			userName.trim().length == 0 ||
			jobTitle.trim().length == 0 ||
			image.trim().length == 0 ||
			description.trim().length == 0
		) {
			formState = "invalid";
			return;
		}

		createdContacts = [
			...createdContacts,
			{
				id: Math.random(),
				userName,
				jobTitle,
				image,
				description,
			},
		];
		formState = "done";
	};

	const deleteFirst = () => {
		createdContacts = createdContacts.slice(1);
	};
	const deleteLast = () => {
		createdContacts = createdContacts.slice(0, -1);
	};
</script>

<!-- <h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click={incrementAge}>Change Age</button> -->
<!-- <button on:click={changeName}>Change Name</button> -->

<!-- <input type="text" value={name} on:input={changeName} /> -->
<!-- Shortcut for above. -->
<div id="form">
	<div class="form-control">
		<label for="username">Username</label>
		<input type="text" bind:value={userName} id="username" />
	</div>
	<div class="form-control">
		<label for="jobTitle">Job Title</label>
		<input type="text" bind:value={jobTitle} id="jobTitle" />
	</div>
	<div class="form-control">
		<label for="image">Image URL</label>
		<input type="text" bind:value={image} id="image" />
	</div>
	<div class="form-control">
		<label for="desc">Description</label>
		<textarea rows="3" bind:value={description} id="desc" />
	</div>
</div>

<button on:click={addContact}>Add Contact Card</button>
<button on:click={deleteFirst}>Delete First</button>
<button on:click={deleteLast}>Delete Last</button>

{#if formState == "invalid"}
	<p>Form is invalid</p>
{:else}
	<p>Enter some data and hit the button!</p>
{/if}

{#each createdContacts as contact, idx (contact.id)}
	<h2># {idx + 1}</h2>
	<ContactCard
		userName={contact.userName}
		jobTitle={contact.jobTitle}
		image={contact.image}
		description={contact.description}
	/>
{:else}
	<p>Please start adding some contacts.</p>
{/each}

<style>
	/* h1 {
		color: purple;
	} */

	#form {
		width: 30rem;
		max-width: 100%;
	}
</style>
