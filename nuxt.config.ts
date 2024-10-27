// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.scss',
    '@/assets/styles/table.scss',
    '@/assets/styles/grid.scss',
    '@/assets/styles/_buttons.scss',
  ]
})
