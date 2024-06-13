<script>
  export let value;
  export let type;

  export function empty() {
    value = "";
  }

  $: console.log(value);
</script>

<input {type} {value} />
