<script>
  export let recipe;
</script>

<div class='recipe-card'>
  <h1 class='recipe-title'>{recipe.name}</h1>
  <p class='recipe-info'>{recipe.description}</p>
  <h3 class='section-title'>Ingredients</h3>
  <ul class='ingredients-list'>
  {#each recipe.ingredients as ingredient}
    <li>{ ingredient }</li>
  {/each}
  </ul>
  <h3 class='section-title'>Instructions</h3>
  <ol class='instructions-list'>
  {#each recipe.instructions as instruction}
    <li>{ instruction }</li>
  {/each}
  </ol>
</div>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  @import url('https://fonts.googleapis.com/css?family=Tenor+Sans');

  .recipe-card { 
    padding: 20px;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 0 2px 5px rgba(0,0,0,0.85);
    max-width: 450px;
    margin: 0 auto;
    background-color: #fbeaab;
  }

  .recipe-title {
    font-size: 24px;
    margin-bottom: 10px;
    font-family: 'Tenor Sans',sans-serif;
  }

  .recipe-info {
    padding: 0;
    margin-bottom: 20px;
  }

  .section-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .ingredients-list, .instructions-list {
    list-style-type: decimal;
    padding-left: 20px;
  }

  .ingredients-list li,
  .instructions-list li {
    margin-bottom: 5px;
  }
</style>
