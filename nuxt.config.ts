// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'nuxt-viewport',
    '@nuxt/icon'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  icon: {
    clientBundle: {
      // list of icons to include in the client bundle
      icons: [
        'icon-park-outline:more-three',
        'icon-park-outline:close'
      ],
    },
  },
  compatibilityDate: '2024-11-10'
})