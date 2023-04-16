<div id="form">
  <input
    id="query"
    placeholder="Type your message here"
    rows="1"
    contenteditable
  />
  <button id="send" class="bi bi-send-fill"></button>
</div>

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

  }
</style>
