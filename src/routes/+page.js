import lunr from "lunr";
import recipeObj from '$lib/data/recipes.json';

export async function load({ fetch }) {
  const recipeFiles = import.meta.glob('/src/routes/recipes/*.md')
  for (const path in recipeFiles) {
    const recipePath = path.slice(11,-3)
    const response = await fetch(recipePath)
    const data = await response.text()
    console.log(data)
  }
  
  let idx = lunr(function() {
    this.ref('name');
    this.field('title');
    this.field('ingredients');
    this.field('categories');

    recipeObj.data.forEach(function (recipe) {
        this.add(recipe);
    },this)
  })

  return {idx};
}
