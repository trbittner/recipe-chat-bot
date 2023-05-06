<script>
  import BouncingDots from "$lib/components/BouncingDots.svelte";
  import QueryBox from "$lib/components/QueryBox.svelte";

  let query = '';

  function handleQuery() {
    console.log(data.idx.search(query))
  }

  export let data;
</script>

<h1>Hello Sveltekit</h1>

<div class="chatbot-bubble bot">Hello</div>
<div class="chatbot-bubble user">Hi there</div>
<BouncingDots />
<QueryBox bind:queryInput={query} on:sendQuery={handleQuery}/>

<style>
  .chatbot-bubble {
    max-width: 80%;
    border-radius: 20px;
    padding: 10px 15px;
    font-size: 16px;
    line-height: 1.5;
    display: inline-block;
  }

  .chatbot-bubble.user {
    background-color: #007bff;
    color: #fff;
    float: right;
    margin-bottom: 10px;
  }

  .chatbot-bubble.bot {
    background-color: yellow;
    color: #000;
    float: left;
    margin-bottom: 10px;
  }
</style>
