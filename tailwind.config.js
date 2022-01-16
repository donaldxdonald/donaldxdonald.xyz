module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Source Han Sans SC VF', 'sans-serif'],
      serif: ['Consolas', 'serif'],
      menu: ['Futura LT Book', 'Source Han Sans SC VF', 'sans-serif'],
      highlight: ['Futura LT Medium', 'Source Han Sans SC VF', 'sans-serif'],
      title: ['Agency FB', 'Bahnschrift Light', 'sans-serif'],
      italic: ['Cascadia Code PL Italic', 'sans-serif'],
      code: ['Cascadia Code PL', 'Source Han Sans SC VF', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '393px',
      },
      colors: {
        theme: '#7d4bde',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.theme'),
            'p': {
              textAlign: 'justify',
            },
            'code': {
              fontFamily: theme('fontFamily.code').join(', '),
            },
            'a': {
              textDecoration: 'none',
              fontWeight: 'normal',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
