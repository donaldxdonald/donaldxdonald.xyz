import { Router } from "vue-router"

export const setup = (router: Router) => {
  router.beforeEach((to, from, next) => {
    let target: string = to.path

    if (target.startsWith('/post/')) {
      if (target.endsWith('/')) {
        target = target.slice(0, -1)
      }
      const postName = target.split('/').pop() || ''

      if (postName.toLowerCase().includes('weekly')) {
        return next(`/weekly/${postName}`)
      }

      return next(`/blog/${postName}`)
    }

    if (target.startsWith('/posts')) {
      return next('/blog')
    }

    next()
  })
}
