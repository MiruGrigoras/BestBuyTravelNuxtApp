// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    baseURL: '/', 
  },
  // vite: {
  //   base: '/BestBuyTravelNuxtApp/',
  // },
  generate:{
    nojekyll: true, //not working on this version
    fallback: '404.html',
  },
  devtools: { enabled: true },
  ssr: false,
  target: "static",
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
