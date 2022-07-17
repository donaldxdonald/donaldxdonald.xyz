const sansBase = ['system-ui', '—apple-system', 'Segoe UI', 'Rototo', 'Emoji', 'Helvetica', 'Arial', 'sans-serif']
const serifBase = ['Georgia', 'Cambria', "Times New Roman", 'Times', 'serif']

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Jost', 'Noto Sans', ...sansBase],
      serif: ['Consolas', ...serifBase],
      title: ['Agency FB', 'Bahnschrift Light', ...sansBase],
      italic: ['Cascadia Code PL Italic', ...sansBase],
      mono: ['PT Mono', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
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
