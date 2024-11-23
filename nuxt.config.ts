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
      
      // scan all components in the project and include icons 
      scan: true,

      // include all custom collections in the client bundle
      includeCustomCollections: true, 

      // guard for uncompressed bundle size, will fail the build if exceeds
      sizeLimitKb: 256,
    },
  },
  compatibilityDate: '2024-11-10'
})