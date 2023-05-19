import recipeObj from '$lib/data/recipes.json';

export function load({ params }) {
  for (let recipe of recipeObj.data) {
    if (recipe.id === params.slug) {
      return recipe;
    }
  }
}
