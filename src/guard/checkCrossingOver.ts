import { Router } from "vue-router"
import { useCrossOverStore } from "~/store/crossOver"

export const setup = (router: Router) => {
  const crossOver = useCrossOverStore()

  router.beforeEach((to, from, next) => {
    for (const item of crossOver.crossOverItems) {
      if (item.href === to.path) {
        crossOver.setCrossingItem(item)
        break
      }
    }
    next()
  })
}
