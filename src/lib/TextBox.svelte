<div id="form">
  <div
    id="message"
    placeholder="Type your message here"
    rows="1"
    contenteditable
  />
  <div><button id="send" class="bi bi-send-fill" /></div>
</div>

<style>
  /* A cellphone on the smaller side is 640px x 360px */
  #form {
    width: 360px;
    display: grid;
    grid-template-columns: 90% 1fr;
    padding: 6px;
    grid-template-rows: auto 1fr;
    background: hsla(231, 10%, 90%, 0.8);
  }

  #message {
    padding: 5px;
    font-size: 1em;
    background: rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.45);
    min-height: 25px;
    max-height: 25vh;
    font-style: italic;
    outline: none;
    resize: none;
  }

  #send {
    font-size: 1.5em;
    width: 100%;
    border: 0;
    background: 0;
  }
</style>
