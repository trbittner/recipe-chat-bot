import recipeObj from '$lib/data/recipes.json';

export function load({ params }) {
  console.log(params.slug)
  for (let i = 0; i < recipeObj.data.length; i++) {
    if (recipeObj.data[i].id === params.slug) {
      return recipeObj.data[i];
    }
  }
}
