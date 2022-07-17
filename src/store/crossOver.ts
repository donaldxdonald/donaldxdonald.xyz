import { acceptHMRUpdate, defineStore } from "pinia"
import { ref } from "vue"
import { CrossOverItem, CrossOverType } from "~/types"

export const useCrossOverStore = defineStore('crossOver', () => {
  const crossOverItems = ref<CrossOverItem[]>([
    {
      type: CrossOverType.DONALD,
      href: '/',
    },
    {
      type: CrossOverType.BLOG,
      href: '/posts',
    },
    {
      type: CrossOverType.WEEKLY,
      href: '/weekly',
    },
  ])

  const crossingItem = ref<CrossOverItem>(crossOverItems.value[0])

  function setCrossingItem(item: CrossOverItem) {
    crossingItem.value = item
  }

  return {
    crossOverItems,
    crossingItem,
    setCrossingItem,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCrossOverStore, import.meta.hot))
}
