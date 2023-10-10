// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  pinia: {
    autoImports: ["useMainStore", ["useMainStore", "useMainStore"]],
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.VITE_BASE_URL,
    },
  },
});
