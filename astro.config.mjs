// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import remarkLinkCard from 'remark-link-card-plus';

// https://astro.build/config
export default defineConfig({
  site: 'https://kama2vern.github.io',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    remarkPlugins: [
      [
        remarkLinkCard, {
          cache: false,
          shortenUrl: true,
          thumbnailPosition: "right",
        },
      ],
    ],
  },
});