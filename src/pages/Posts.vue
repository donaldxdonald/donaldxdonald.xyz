<script setup lang="ts">
import { PostBlock, PostType } from '~/types'
const postBlocks: PostBlock[] = [
  {
    type: PostType.LATEST,
    label: PostType.LATEST,
    url: '',
    limit: 0,
  },
]
</script>

<template>
  <div class="main-layout max-w-xl mx-auto h-full relative overflow-y-auto overflow-x-hidden">
    <header class="mt-10 px-6 flex items-center justify-between text-theme">
      <a
        class="cursor-pointer text-2xl font-italic"
        href="/"
      >DonaldxDonald</a>
      <a href="./feed.xml">
        <mdi-rss class="mx-1" />
      </a>
    </header>
    <div class="flex flex-col items-center justify-center">
      <div
        v-for="(block, index) in postBlocks"
        :key="index"
        class="posts-block mt-5"
      >
        <div class="px-4 py-2 mb-5 bg-theme/10 text-theme">
          <span class="block-title text-xl font-sans">{{ block.label }}</span>
        </div>
        <div class="block-body my-5">
          <PostList
            :post-type="block.type"
            :limit="block.limit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-title.active {
  @apply text-theme font-bold text-3xl;
}
</style>
