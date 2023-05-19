<script>
  import { onMount } from "svelte";

  import ChatBubble from "$lib/components/ChatBubble.svelte";
  import QueryBox from "$lib/components/QueryBox.svelte";

  import recipeObj from '$lib/data/recipes.json';

  let query='';
  let chats = [];
  export let data;

  const openingText = [
    {
      speaker: "bot",
      text: "Hello! What can I help you cook today?",
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

  const noResult = {
    speaker: "bot",
    text: "I'm sorry.  I couldn't find anything."
  }

  onMount(() => {
    chats = [...chats, ...openingText];
  });

  function getRecipeLinks(query) {
    let response = data.idx.search(query);
    let linkResults = []
    response.forEach(function (result) {
      for (let recipe of recipeObj.data) {
        if (recipe.id === result.ref) {
          linkResults = [...linkResults,{id:recipe.id,name:recipe.name}]
        }
      }
    });
    return linkResults;
  }

  function constructSearchResult(linkResults) {
    let searchResult;
    if (linkResults.length > 0) {
      searchResult = {
        speaker: "bot",
        links: linkResults,
      };
    } else {
      searchResult = noResult;
    }
    return searchResult;
  }

  function handleQuery() {
    if (query.trim() === "") {
      chats = [...chats,emptyText]
    } else {
      chats = [...chats, { speaker: "user", text: query }];
      let linkResults = getRecipeLinks(query);
      let searchResult = constructSearchResult(linkResults);
      chats = [...chats,searchResult];
    }
    query = '';
  }
</script>

<div class="canvas">
  <div class="chatSpace">
    {#each chats as chat}
      <ChatBubble speaker={chat.speaker} text={chat.text} links={chat.links} />
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
