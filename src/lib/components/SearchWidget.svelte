<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let queryInput = "";

  function sendQuery() {
    dispatch("sendQuery");
  }
</script>

<div class="search-widget">
  <input type="text" 
    class="search-input" 
    bind:value={queryInput}
    placeholder="Search...">
  <button class="search-btn" type="submit" on:click={sendQuery}>
      <i class="bi bi-search"></i>
  </button>
</div>

<style>
.search-widget {
    display: flex;
    align-items: center;
    width: 300px;
    border: 1px solid #454545;
    border-radius: 4px;
    overflow: hidden;
  }

  .search-input {
    flex: 1;
    border: none;
    padding: 8px;
    font-size: 16px;
  }

  .search-btn {
    border: none;
    background-color: #f8f9fa;
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .search-btn:hover {
    background-color: #e9ecef;
  }
  </style>
  