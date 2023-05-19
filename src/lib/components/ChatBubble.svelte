<script>
  import { fly } from "svelte/transition";
  export let speaker;
  export let text;
  export let links = [];

  let x_val;
  x_val = speaker === 'bot' ? -50 : 50;
</script>

<div class="chatbot-bubble {speaker}"
  in:fly="{{x: x_val, duration: 500}}">
  {#if links && links.length}
    {#each links as link}
      <div><a href='/recipes/{ link.id }'>{ link.name }</a></div>
    {/each}
  {:else}
    {text}
  {/if}
</div>

<style>
  .chatbot-bubble {
    max-width: 80%;
    border-radius: 20px;
    padding: 10px 15px;
    font-size: 16px;
    line-height: 1.5;
    display: inline-block;
    width: fit-content;
  }

  .chatbot-bubble.user {
    background-color: #007bff;
    color: #fff;
    margin-left: auto;
    margin-bottom: 10px;
  }

  .chatbot-bubble.bot {
    background-color: yellow;
    color: #000;
    margin-bottom: 10px;
  }
</style>
