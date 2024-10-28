// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.scss',
    '@/assets/styles/table.scss',
    '@/assets/styles/grid.scss',
    '@/assets/styles/_buttons.scss',
    '@/assets/styles/_card.scss',
    '@/assets/styles/_switch.scss',
    '@/assets/styles/_form.scss',
  ],
  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  },
});
