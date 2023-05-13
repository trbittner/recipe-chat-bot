<script>
  import BouncingDots from "$lib/components/BouncingDots.svelte";
  import ChatCanvas from "../lib/components/ChatCanvas.svelte";

  export let data;
  
</script>

<h1>Hello RecipeBot</h1>

<div class='container'>
  <ChatCanvas data={data} />
</div>
<BouncingDots />

<style>
  .container {
    display: flex;
    justify-content: center;
  }
</style>
