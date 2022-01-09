<script setup lang="ts">
import { ref, computed } from 'vue'
import { PostTitleItem } from '~/types'
const blogTypes: PostTitleItem[] = [
  {
    type: 'PROGRAMMING',
    content: 'Programming',
  },
  {
    type: 'FILM',
    content: 'Film',
  },
]
const currentPostTypeIndex = ref(0)
const currentPostTitleItem = computed(() => blogTypes[currentPostTypeIndex.value])
</script>

<template>
  <div class="w-1/1 h-1/1 relative flex flex-col items-center overflow-y-auto overflow-x-hidden">
    <a class="cursor-pointer mt-10 text-xl text-theme" href="/">DonaldxDonald</a>
    <div class="w-1/1 flex flex-col items-start">
      <div class="mt-10 h-20">
        <span
          v-for="(item, index) in blogTypes" :key="item.type"
          class="blog-title mx-3 text-3xl text-purple-300 cursor-pointer"
          :class="currentPostTypeIndex === index && 'active'"
          @click="currentPostTypeIndex = index"
        >{{ item.content }}</span>
      </div>
      <PostList :post-type="currentPostTitleItem.type" />
    </div>
  </div>
</template>

<style scoped>
.blog-title.active {
  transition: all 200ms ease-in-out;
  @apply text-theme font-bold;
}
</style>
