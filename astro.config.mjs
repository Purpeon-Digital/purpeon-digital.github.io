import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  output: 'static',
  integrations: [vue()],
  site: 'https://purpeon.com',
  i18n: {
    defaultLocale: 'no',
    locales: ['en', 'no'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
