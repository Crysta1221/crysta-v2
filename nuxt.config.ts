import Sitemap from "vite-plugin-sitemap";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width',
      title: 'CrystaWorld',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
      ],
      htmlAttrs: {
        lang: 'ja'
      },
    }
  },
  css: ['~/assets/css/style.scss'],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/color-mode", "@vueuse/nuxt", "@nuxt/content"],
  tailwindcss: {
    cssPath: "~/assets/css/style.scss",
    configPath: 'tailwind.config.js',
  },
  plugins: ['~/plugins/preline.client.ts'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
  },
  googleFonts: {
    families: {
      'Noto+Sans+JP': true,
      'Inter': true
    }
  }
})