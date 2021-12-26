<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { PostType } from '~/types'
import { formatDate } from '~/utils/utils'
const props = defineProps<{
  postType: PostType
}>()
const router = useRouter()
const routes = router.getRoutes()
  .filter(route => {
    return route.path.startsWith('/post')
    && route.meta.frontmatter?.date
  })
  .sort((a, b) => {
    return +new Date(b.meta.frontmatter?.date as string)
    - +new Date(a.meta.frontmatter?.date as string)
  })
const posts = computed(() => routes.filter(route => {
  return !route.path.endsWith('.html')
  && route.path.startsWith(`/post/${props.postType.toLowerCase()}`)
}))

</script>

<template>
  <div class="mt-5 flex flex-col items-start">
    <router-link
      v-for="post in posts" :key="post.path"
      class="w-1/1 mb-8 flex flex-col items-start"
      :to="post.path"
    >
      <span class="w-1/1 text-l text-dark-400 text-ellipsis">
        {{ post.meta.frontmatter?.title || '' }}
      </span>
      <div class="w-1/1 pt-2 flex items-center justify-between text-sm text-blue-gray-400">
        <span>{{ formatDate(post.meta.frontmatter?.date as string, 'YYYY-MM-DD') }}</span>
      </div>
    </router-link>
  </div>
</template>
