<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let queryInput = "";

  function sendQuery() {
    dispatch("sendQuery");
  }
</script>

<div class="queryBox">
  <input
    class="queryInput"
    bind:value={queryInput}
    placeholder="Type your message here"
  />
  <button on:click={sendQuery} class="send">
    <i class="bi bi-send-fill" />
  </button>
</div>

<style>
  /* A cellphone on the smaller side is 640px x 360px */
  .queryBox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 6px;
    background: hsla(231, 10%, 90%, 0.8);
  }

  .queryInput {
    padding: 5px;
    font-size: 1em;
    background: rgba(0, 0, 0, 0.15);
    min-height: 1.5em;
    max-height: 10vh;
    font-style: italic;
    outline: none;
    border: none;
    flex-basis: 90%;
  }

  .send {
    font-size: 1.5em;
    border: 0;
    background: 0;
    cursor: pointer;
  }

  .send:hover {
    background: white;
  }
</style>
