
<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { formatDate } from '~/utils/utils'

const router = useRouter()

const routes = router.getRoutes()
  .filter(route => {
    return route.path.startsWith('/weekly') && route.meta.frontmatter?.date
  })
  .sort((a, b) => {
    return +new Date(b.meta.frontmatter?.date as string) -
    +new Date(a.meta.frontmatter?.date as string)
  })

const weeklyPosts = computed(() => routes)

</script>

<template>
  <div class="main-layout max-w-xl mx-auto h-full relative overflow-y-auto overflow-x-hidden">
    <DonaldxHeader />
    <div class="flex flex-col items-center justify-center">
      <div class="w-full my-5">
        <router-link
          v-for="post in weeklyPosts"
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
      </div>
    </div>
  </div>
</template>
