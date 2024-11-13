// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'nuxt-viewport'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-11-10'
})