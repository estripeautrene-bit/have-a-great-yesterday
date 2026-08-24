// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],

  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  compatibilityDate: '2024-04-03',

  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/tokens.css',
    '~/assets/css/base.css',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  nitro: {
    prerender: {
      ignore: ['/design-system'],
      routes: ['/sitemap.xml', '/robots.txt'],
    },
  },

  runtimeConfig: {
    public: {
      posthogKey: '',
      posthogHost: 'https://app.posthog.com',
      siteUrl: 'http://localhost:3000',
    },
  },
})
