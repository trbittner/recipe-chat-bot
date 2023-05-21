<script>
  import BouncingDots from "$lib/components/BouncingDots.svelte";
  import ChatCanvas from "$lib/components/ChatCanvas.svelte";
  import Recipe from "$lib/components/Recipe.svelte";
  export let data;
</script>

<div class="viewport-grid">
  <div class="left-spacer"></div>
  <div class="content">
    <div class="hero-image"></div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">About Us</a></li>      
      </ul>
    </nav>
    <div class="main-content">
      <div class="left-rail"></div>
      <div class="center-rail">
        <h1 class="call-to-action">Try Me!</h1>
        <Recipe recipe={data.randomRecipe} />
      </div>
      <div class="right-rail"></div>
    </div>
      
    <div class='chat-container'>
      <ChatCanvas data={data.idx} />
    </div>
    
    
  </div>
  <div class="right-spacer"></div>
  <BouncingDots />
</div>

<style>
  @import url('https://fonts.googleapis.com/css?family=Mallanna');
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  @import url('https://fonts.googleapis.com/css?family=Tenor+Sans');

  .call-to-action {
    font-family: 'Tenor Sans',sans-serif;
    text-align: center;
  }

  .viewport-grid {
    display: grid;
    grid-template-columns: auto 1080px auto;
  }

  .main-content {
    display: grid;
    grid-template-columns: 250px 580px 250px;
  }
  
  .chat-container {
    display: flex;
    justify-content: center;
  }

  .hero-image {
    background-image: url('/images/todds-bistro-logo.png');
    background-size: cover; 
    background-position: center;
    height: 300px;
    position: relative;
  }

  nav {
    font-family: "Mallanna", sans-serif;
    font-size: 1.25em;
    border-top: 5px solid;
    border-bottom: 5px solid;
    background-color: #fbeaab;
    margin: 5px 0px;
  }

  nav a {
    text-decoration: none;
  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }

  nav ul li a {
    color: #454545;
    font-weight: bold;
    transition: color 0.5s ease;
  }

  nav ul li a:hover {
    color: gold;
  }
</style>
