<script>
  import BouncingDots from "$lib/components/BouncingDots.svelte";
  import QueryBox from "$lib/components/QueryBox.svelte";
  import ChatBubble from "$lib/components/ChatBubble.svelte";
import ChatCanvas from "../lib/components/ChatCanvas.svelte";

  let query = '';

  function handleQuery() {
    console.log(data.idx.search(query))
  }

  export let data;
</script>

<h1>Hello Sveltekit</h1>

<div class='container'>
  <ChatCanvas />
</div>
<BouncingDots />
<QueryBox bind:queryInput={query} on:sendQuery={handleQuery}/>

<style>
  .container {
    display: flex;
    justify-content: center;
  }
</style>