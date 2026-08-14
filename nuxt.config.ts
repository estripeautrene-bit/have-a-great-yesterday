// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],

  devtools: { enabled: true },

  compatibilityDate: '2024-04-03',

  css: [
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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;900&family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      posthogKey: '',
      posthogHost: 'https://app.posthog.com',
      siteUrl: 'https://haveagreatYesterday.com',
    },
  },
})
