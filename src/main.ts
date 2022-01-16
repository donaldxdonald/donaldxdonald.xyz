// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'pages-generated'
import App from './App.vue'

// your custom styles here
import './styles/main.css'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes: generatedRoutes, scrollBehavior: () => { return { top: 0 } } },
  ctx => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
