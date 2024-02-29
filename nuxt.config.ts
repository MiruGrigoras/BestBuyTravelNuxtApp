// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    baseURL: 'https://mirugrigoras.github.io/repository/', 
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
