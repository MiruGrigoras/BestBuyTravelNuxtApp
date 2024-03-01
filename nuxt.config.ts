// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    baseURL: '/BestBuyTravelNuxtApp/', 
    buildAssetsDir: "/_nuxt/",
  },
  vite: {
    base: '/BestBuyTravelNuxtApp/_nuxt/',
  },
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@ant-design-vue/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    mailerSendApiKey: '',
  }
})
