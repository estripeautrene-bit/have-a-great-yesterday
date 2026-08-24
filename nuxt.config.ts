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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
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
      posthogHost: 'https://us.i.posthog.com',
      siteUrl: 'http://localhost:3000',
    },
  },
})
