import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site:"htts://cu8code.github.io",
  base:"cu8code.github.io"
});