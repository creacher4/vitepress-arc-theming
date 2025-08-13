import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'ARC',
  description: 'Vite & Vue powered static site template for testing theme and components.',
  base: '/vitepress-arc-theming',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Example', link: '/example' },
        ],
      },
    ],
  },
});
