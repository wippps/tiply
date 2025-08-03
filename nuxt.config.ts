// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  typescript: {
    shim: false,
    strict: true
  },

  future: {
    compatibilityVersion: 4,
  },

  extends: ["app/modules/home", "app/modules/donation", "app/modules/author",'app/modules/auth'],

  css: ["./app/assets/styles/fonts.css", "./app/assets/styles/main.scss",],

  modules: ["@nuxt/icon", "@nuxt/image", "@pinia/nuxt"],

  runtimeConfig: {
    public: {
      API_BASE_URL: "https://api.playpay.top/donat",
    },
  },
});