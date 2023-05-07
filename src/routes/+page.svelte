<script>
  import BouncingDots from "$lib/components/BouncingDots.svelte";
  import ChatCanvas from "../lib/components/ChatCanvas.svelte";

  let query = '';

  function handleQuery() {
    console.log(data.idx.search(query))
  }

  export let data;
</script>

<h1>Hello RecipeBot</h1>

<div class='container'>
  <ChatCanvas />
</div>
<BouncingDots />

<style>
  .container {
    display: flex;
    justify-content: center;
  }
</style>
