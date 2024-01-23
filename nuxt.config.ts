import { readFileSync, readdirSync } from 'node:fs';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
      ],
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        { property: 'og:image', content: '/CrystaWorld.png' },
        { property: 'theme-color', content: '#79ADA7'}
      ]
    }
  },
  css: ['~/assets/css/style.scss'],
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt", 
    "@nuxtjs/seo",
    "@nuxt/image",
  ],
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
      'Source+Code+Pro': [400],
    }
  },
  site: {
    url: "https://crystaworld1221.com",
    name: "CrystaWorld",
    description: "Welcome to CrystaWorld!",
    defaultLocale: "ja",
  },
})