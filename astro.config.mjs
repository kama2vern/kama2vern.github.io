// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kama2vern.github.io',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },
});