<script>
  import BouncingDots from "$lib/BouncingDots.svelte";
  import QueryBox from "$lib/QueryBox.svelte";

  function handleQuery(event) {
    console.log(event.detail.data);
  }
  
</script>

<h1>Hello Sveltekit</h1>
<p>This is a dead simple sveltekit template.</p>

<BouncingDots />
<QueryBox on:querySubmit="{handleQuery}"/>
