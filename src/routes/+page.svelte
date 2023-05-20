<script>
  import BouncingDots from "$lib/components/BouncingDots.svelte";
  import ChatCanvas from "$lib/components/ChatCanvas.svelte";

  export let data;
</script>

<div class="main-grid">
  <div class="left-rail"></div>
  <div class="main-content">
    <main>
      <section class="hero">
        <div class="hero-image"></div>
      </section>
        
      <section>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>      
          </ul>
        </nav>  
      </section>
    </main>

    <div class='container'>
      <ChatCanvas data={data} />
    </div>
    <BouncingDots />
  </div>
  <div class="right-rail"></div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css?family=Mallanna');

  .main-grid {
    display: grid;
    grid-template-columns: auto 800px auto;
  }
  
  .container {
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
