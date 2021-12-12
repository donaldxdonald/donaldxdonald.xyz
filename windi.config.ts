import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Futura LT Book', 'Source Han Sans SC VF', 'sans-serif'],
        serif: ['Consolas', 'serif'],
        highlight: ['Futura LT Medium', 'Source Han Sans SC VF', 'sans-serif'],
        title: ['Agency FB', 'Bahnschrift Light', 'sans-serif'],
      },
    },
  },
})
