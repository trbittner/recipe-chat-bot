<script>
  import Recipe from "$lib/components/Recipe.svelte";
  import SearchWidget from "$lib/components/SearchWidget.svelte";
  export let data;

  let queryInput = "";
  function handleQuery() {
    console.log(queryInput);
    queryInput = "";
  }
</script>

<nav class="hamburger-menu">
  <button class="navbar-toggler" type="button" data-toggle="collapse"
    data-target="#navbarCollapse">
    <span class="navbar-toggler-icon"></span>  
  </button>
</nav>

<div class="container">
    <div class="hero">
      <button class="menu-icon">
        <i class="bi bi-list"></i>
      </button>
    </div>
    
  <div class="search-widget">
    <SearchWidget bind:queryInput on:sendQuery={handleQuery} />
  </div>
  <div class="spotlight">
    <h1 class="header">Try me!</h1>
    <Recipe recipe={data.randomRecipe} />
  </div>
</div>



<!-- 
<div class="viewport-grid">
  <div class="left-spacer" />
  <div class="content">
    <div class="hero-image" />
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><SearchWidget bind:queryInput on:sendQuery={handleQuery} /></li>
      </ul>
    </nav>
    <div class="main-content">
      <div class="left-rail">
        <h1 class="header">Categories</h1>
        {#each data.categories as category}
          <div class="link">
            <a href="#">{category[0].toUpperCase() + category.substring(1)}</a>
          </div>
        {/each}
      </div>
      <div class="center-rail">
        <h1 class="header">Try Me!</h1>
        <Recipe recipe={data.randomRecipe} />
      </div>
      <div class="right-rail">
        <h1 class="header">Recipes</h1>
        {#each data.links as link}
          <div class="link"><a href={link.link}>{link.name}</a></div>
        {/each}
      </div>
    </div>
  </div>
  <div class="right-spacer" />
</div>
-->

<style>
  @import url("https://fonts.googleapis.com/css?family=Mallanna");
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  @import url("https://fonts.googleapis.com/css?family=Tenor+Sans");

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero {
    height: 38vh;
    width: 100%;
    background-image: url("/images/todds-bistro-logo.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 10px;
  }

  .menu-icon {
    position: absolute;
    top: 20px;
    right: 10px;
    height: 40px;
    width:40px;
    border: none;
    background-color: #fbeaab;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 25px;
  }

  .menu-icon:hover {
    background-color: #e9ecef;
  }

  .header {
    font-family: "Tenor Sans", sans-serif;
    text-align: center;
  }

  .viewport-grid {
    display: flex;
  }

  .left-spacer {
    flex: 3;
  }

  .right-spacer {
    flex: 3;
  }

  .content {
    flex: 6 768px;
  }

  .main-content {
    display: grid;
    grid-template-columns: 250px 580px 250px;
  }

  .hero-image {
    background-image: url("/images/todds-bistro-logo.png");
    background-size: cover;
    background-position: center;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  /* nav {
    font-family: "Mallanna", sans-serif;
    font-size: 1.25em;
    border-top: 5px solid;
    border-bottom: 5px solid;
    background-color: #fbeaab;
    margin: 5px 0px;
    padding: 5px 15px;
  }

  a {
    text-decoration: none;
  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  a {
    color: #454545;
    font-weight: bold;
    transition: color 0.5s ease;
  }

  a:hover {
    color: gold;
  } */

  .link {
    font-family: "Montserrat", sans-serif;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    .viewport-grid {
      grid-template-columns: 1;
    }

    nav {
      display: none;
    }

    .left-spacer {
      display: none;
    }

    .right-spacer {
      display: none;
    }

    .main-content {
      grid-template-columns: 1;
    }

    .left-rail {
      display: none;
    }

    .right-rail {
      display: none;
    }

    .hero-image {
      width: 100vw;
    }
  }
</style>
