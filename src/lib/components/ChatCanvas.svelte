<script>
  import { onMount,tick } from "svelte";

  import ChatBubble from "$lib/components/ChatBubble.svelte";
  import QueryBox from "$lib/components/QueryBox.svelte";

  let query = 'bar';
  let chats = [];
  export let data;

  onMount(() => {
    let welcome = {
      speaker: "bot",
      text: "Hello! What can I help you cook tonight?",
    };
    let help = {
      speaker: "bot",
      text: "You can type 'all recipes' to browse them directly.",
    };
    chats = [...chats, welcome, help];
  });

  function handleQuery() {
    if (query.trim() !== "") {
      chats = [...chats, { speaker: "user", text: query }];
      response = data.idx.search(query);
    }
  }
</script>

<div class="canvas">
  <div class="chatSpace">
    {#each chats as chat}
      <ChatBubble speaker={chat.speaker} text={chat.text} />
    {/each}
  </div>
  <div class="queryBox">
    <QueryBox bind:queryInput={query} on:sendQuery={handleQuery} />
  </div>
</div>

<style>
  .canvas {
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    background-color: darkslategray;
    height: 75vh;
    width: 75vw;
    border-radius: 0.5em;
  }

  .chatSpace {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    flex: 90%;
    margin-bottom: 0.25em;
  }

  .queryBox {
    flex: 10%;
    width: 100%;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    .queryBox {
      width: 450px;
    }
  }
</style>
