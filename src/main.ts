// register vue composition api globally
import generatedRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes: generatedRoutes,
    scrollBehavior: () => {
      return { top: 0 }
    },
  },
)
