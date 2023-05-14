export async function load({ params }) {
  const recipe = await import(`../${params.slug}.md`);
  const { name, description, servings, 
         ingredients, instructions, tags} = recipe.metadata;

  return {
    name,
    description,
    servings,
    ingredients,
    instructions,
    tags,
  }
}
