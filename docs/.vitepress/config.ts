import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'ARC',
  description: 'Vite & Vue powered static site template for testing theme and components.',
  base: '/vitepress-arc-theming/',

  markdown: {
    theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
    lineNumbers: true
  },

  themeConfig: {
    nav: [{ text: 'Example', link: '/example' },],
    sidebar: [{ items: [{ text: 'Example', link: '/example' },
      { text: 'Content Manager', link: '/content-manager' }
    ] }],
    outline: [2, 3]
  }
})
