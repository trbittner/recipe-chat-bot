import lunr from "lunr";
import recipeObj from '$lib/data/recipes.json';

export async function load() {
  let idx = lunr(function() {
    this.ref('id');
    this.field('name');
    this.field('ingredients');
    this.field('tags');

    recipeObj.data.forEach(function (recipe) {
      this.add({
        'id':recipe.id,
        'name':recipe.name,
        'ingredients': recipe.ingredients.join(' '),
        'tags': recipe.tags,
      });
    },this);
  });

  let categories = [];
  let recipeLinks = [];

  recipeObj.data.forEach(function (recipe) {
    categories = [...new Set([...categories,...recipe.tags.split(" ")])].sort()
    recipeLinks = [...recipeLinks,{'link':`/recipes/${recipe.id}`,'name':recipe.name}]
  });

  const randomRecipe = Math.floor(Math.random() * recipeObj.data.length);
  return {"idx":idx,"randomRecipe":recipeObj.data[randomRecipe],'categories':categories,'links':recipeLinks};
}
