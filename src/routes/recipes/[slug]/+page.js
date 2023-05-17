import recipeObj from '$lib/data/recipes.json';

export function load({ params }) {
  console.log(params.slug)
  for (let recipe of recipeObj.data) {
    if (recipe.id === params.slug) {
      return recipe;
    }
  }
}
