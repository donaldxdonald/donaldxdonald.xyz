<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { PostType } from '~/types'
import { formatDate } from '~/utils/utils'
const props = defineProps<{
  postType: PostType
  limit: number
}>()
const router = useRouter()
const routes = router.getRoutes()
  .filter(route => {
    return route.path.startsWith('/blog') &&
    route.meta.frontmatter?.date
  })
  .sort((a, b) => {
    return +new Date(b.meta.frontmatter?.date as string) -
    +new Date(a.meta.frontmatter?.date as string)
  })
const posts = computed(() => routes.filter((route, index) => {
  const isLatest = props.postType === PostType.LATEST
  // const matchPath = (!route.path.endsWith('.html') && route.path.startsWith(`/post/${props.postType.toLowerCase()}`))
  const matchIndex = props.limit ? index < props.limit : true
  return isLatest && matchIndex
}))

</script>

<template>
  <router-link
    v-for="post in posts"
    :key="post.path"
    class="mx-1 mb-8 flex flex-col items-start prose-p px-4 py-2 hover:outline-dashed hover:outline-theme transition-all"
    :to="post.path"
  >
    <span class="w-full pb-3 text-ellipsis whitespace-nowrap overflow-hidden text-slate-600">
      {{ post.meta.frontmatter?.title || '' }}
    </span>
    <div class="pt-3 flex border-t items-center justify-between text-sm text-slate-400">
      <span>{{ formatDate(post.meta.frontmatter?.date as string, 'YYYY-MM-DD') }}</span>
    </div>
  </router-link>
</template>
