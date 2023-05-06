import lunr from "lunr";
import recipeObj from '$lib/data/recipes.json';

export function load() {
  let idx = lunr(function() {
    this.ref('name');
    this.field('title');
    this.field('ingredients');
    this.field('categories');

    recipeObj.recipes.forEach(function (recipe) {
        this.add(recipe);
    },this)
  })

  return {idx};
}
