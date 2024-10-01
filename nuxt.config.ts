// nuxt.config.ts

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Ajout des variables d'environnement
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },

  // Ajout du plugin Supabase
  plugins: [
    '~/plugins/supabase.js'
  ]
})
