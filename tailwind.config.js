/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './node_modules/preline/preline.js',
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  plugins: [require('@tailwindcss/forms'), require('preline/plugin'), require('@tailwindcss/typography')]
}
  
  