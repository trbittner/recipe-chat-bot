import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';

const config = {
	kit: {
		adapter: adapter()
	},

  extensions: ['.svelte','.md'],

  preprocess: [
    mdsvex({
      extensions: ['md'],
    })
  ],
};

export default config;
