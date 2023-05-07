<script>
  import { onMount } from 'svelte';
  
  import ChatBubble from "$lib/components/ChatBubble.svelte";
  import QueryBox from "$lib/components/QueryBox.svelte";

  let query = '';

  let chats = [];

  onMount(() => {
    let welcome = {'speaker':'bot',
              'text':'Hello! What can I help you cook tonight?'};
    let help = {'speaker':'bot',
               'text':'You can always type /recipes to browse them directly.'}
    chats = [...chats,welcome,help]
  });

  function handleQuery() {
    chats = [...chats,{'speaker':'user','text':query}]
  };
</script>

<div class='canvas'>
  {#each chats as chat}
    <ChatBubble speaker={chat.speaker} text={chat.text} />
  {/each}
  <div class="queryBox">
    <QueryBox bind:queryInput={query} on:sendQuery={handleQuery}/>
  </div>
</div>

<style>
  .canvas {
    padding: 0.5em;
    background-color: darkslategray;
    height: 75vh;
    width: 75vw;
    border-radius: .5em;
  }
</style>
