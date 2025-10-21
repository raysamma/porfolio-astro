// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Use your GitHub username
  site: 'https://raysamma.github.io', 
  
  // Use your repository name, starting with a slash
  base: '/porfolio-astro', 
  
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});

