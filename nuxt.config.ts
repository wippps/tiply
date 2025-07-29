// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  extends: ["app/modules/home", "app/modules/donation", "app/modules/author"],

  css: ["./app/assets/styles/fonts.css", "./app/assets/styles/main.scss",],

  modules: ["@nuxt/icon", "@nuxt/image"],
});