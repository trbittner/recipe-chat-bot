<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  function queryInput(e) {
    const formData = new FormData(e.target)
    const data = {}
    for (let field of formData) {
      const [key,value] = field;
      data[key] = value;
    }
    dispatch('querySubmit',{'data': data['query']});
  }
</script>

<form id="form" on:submit|preventDefault="{queryInput}">
  <input
    name="query"
    id="query"
    placeholder="Type your message here"
  />
  <button type="submit" id="send"><i class="bi bi-send-fill"></i></button>
</form>

<style>
  /* A cellphone on the smaller side is 640px x 360px */
  #form {
    width: 360px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 6px;
    background: hsla(231, 10%, 90%, 0.8);
  }

  #query {
    padding: 5px;
    font-size: 1em;
    background: rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.45);
    min-height: 1.5em;
    max-height: 10vh;
    font-style: italic;
    outline: none;
    border: none;
    flex-basis: 90%;
  }

  #send {
    font-size: 1.5em;
    border: 0;
    background: 0;
    cursor: pointer;
  }

  #send:hover {
    background: white;
  }
</style>
