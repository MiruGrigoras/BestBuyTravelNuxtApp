// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@ant-design-vue/nuxt'
  ],
  css: ['~/assets/css/main.css']
})
