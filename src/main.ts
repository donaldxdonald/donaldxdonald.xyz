// register vue composition api globally
import generatedRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import { RouterScrollBehavior } from 'vue-router'
import App from './App.vue'

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { top: 0 }
  }
}

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes: generatedRoutes,
    scrollBehavior,
  },
)
