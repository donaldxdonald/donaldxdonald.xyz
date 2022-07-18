// register vue composition api globally
import generatedRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import { Router, RouterScrollBehavior } from 'vue-router'
import { UserModule } from '~/types'
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
  ctx => {
    ctx.router.addRoute('/', {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    })

    Object.values(import.meta.globEager<{ install: UserModule }>('./modules/*.ts'))
      .forEach(m => m.install(ctx))

    Object.values(import.meta.globEager<{ setup: (router: Router) => void }>('./guard/*.ts'))
      .forEach(m => m.setup(ctx.router))
  },
)
