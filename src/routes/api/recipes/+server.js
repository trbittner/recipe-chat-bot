import { json } from '@sveltejs/kit';

export const GET = () => {
  const recipe = 'chicken';

  return json(recipe);
};
