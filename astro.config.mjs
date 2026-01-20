import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://medellineroticmassage.com',
  output: 'static',
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  // Prefetch links for better UX
  prefetch: {
    prefetchAll: true
  },
  // Compress HTML output
  compressHTML: true,
  // SEO-friendly trailing slashes
  trailingSlash: 'never'
});