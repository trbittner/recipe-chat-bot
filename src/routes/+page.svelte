<script>
  import BouncingDots from "$lib/components/BouncingDots.svelte";
  import QueryBox from "$lib/components/QueryBox.svelte";
  import ChatBubble from "$lib/components/ChatBubble.svelte";

  let query = '';

  function handleQuery() {
    console.log(data.idx.search(query))
  }

  export let data;
</script>

<h1>Hello Sveltekit</h1>

<ChatBubble speaker="bot" text="Hello" />
<ChatBubble speaker="user" text="Hi there" />
<BouncingDots />
<QueryBox bind:queryInput={query} on:sendQuery={handleQuery}/>
