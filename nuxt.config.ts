// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Creo",
      meta: [
        { name: "description", content: "Creative digital agency" }
      ]
    }
  },
  components: [
    {
      path: '../components',
      pathPrefix: false,
    },
  ],
  css: ['../assets/styles/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss']
})