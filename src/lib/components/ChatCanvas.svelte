<script>
  import { onMount } from "svelte";

  import ChatBubble from "$lib/components/ChatBubble.svelte";
  import QueryBox from "$lib/components/QueryBox.svelte";

  let query='';
  let chats = [];
  export let data;

  const openingText = [
    {
      speaker: "bot",
      text: "Hello! What can I help you cook tonight?",
    },
    {
      speaker: "bot",
      text: "You can type 'all recipes' to browse them directly.",
    },    
  ];

  const emptyText = {
    speaker: "bot",
    text: "I'm sorry you entered an empty query.  Please try again."
  }

  onMount(() => {
    chats = [...chats, ...openingText];
  });

  function handleQuery() {
    if (query.trim() === "") {
      chats = [...chats,emptyText]
    } else {
      chats = [...chats, { speaker: "user", text: query }];
      let response = data.idx.search(query);
      console.log(response);
    };
    query = '';
  }
</script>

<div class="canvas">
  <div class="chatSpace">
    {#each chats as chat}
      <ChatBubble speaker={chat.speaker} text={chat.text} />
    {/each}
  </div>
  <div class="queryContainer">
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

  .queryContainer {
    flex: 10%;
    width: 100%;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    .queryContainer {
      width: 450px;
    }
  }
</style>
