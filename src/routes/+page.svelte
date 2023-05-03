<script>
  import BouncingDots from "$lib/BouncingDots.svelte";
  import QueryBox from "$lib/QueryBox.svelte";

  let query = '';

  function handleQuery(event) {
    fetch 
  }
</script>

<h1>Hello Sveltekit</h1>
<p>This is a dead simple sveltekit template.</p>

<BouncingDots />
<QueryBox bind:queryInput={query} on:sendQuery={handleQuery}/>
