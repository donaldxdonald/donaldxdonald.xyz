module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Jost', 'Source Han Sans SC VF Regular', 'Microsoft YaHei UI', 'sans-serif'],
      serif: ['Consolas', 'serif'],
      highlight: ['Jost', 'Source Han Sans SC VF Regular', 'Microsoft YaHei UI', 'sans-serif'],
      title: ['Agency FB', 'Bahnschrift Light', 'sans-serif'],
      italic: ['Cascadia Code PL Italic', 'sans-serif'],
      code: ['Cascadia Code PL', 'Source Han Sans SC VF Regular', 'Microsoft YaHei UI', 'sans-serif'],
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
            p: {
              textAlign: 'justify',
            },
            code: {
              fontWeight: '300',
              fontFamily: theme('fontFamily.code').join(', '),
            },
            li: {
              fontWeight: '300',
            },
            a: {
              textDecoration: 'none',
              fontWeight: '300',
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
