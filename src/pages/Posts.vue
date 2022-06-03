<script setup lang="ts">
import { PostBlock, PostType } from '~/types';
const postBlocks: PostBlock[] = [
  {
    type: PostType.LATEST,
    label: 'Latest',
    url: '',
    limit: 0
  },
]
</script>

<template>
  <div class="w-full h-full relative flex flex-col items-center overflow-y-auto overflow-x-hidden">
    <a class="cursor-pointer mt-10 text-xl text-theme font-italic" href="/">DonaldxDonald</a>
    <div class="max-w-lg main-layout flex flex-col items-center justify-center">
      <div
        class="posts-block mt-5 w-full"
        v-for="(block, index) in postBlocks"
        :key="index"
      >
        <div class="block-header px-4 py-2 mb-5 hover:bg-theme/25 transition-all flex justify-between items-center rounded-md text-theme">
          <span class="block-title text-2xl font-italic">{{ block.label }}</span>
          <mdi-waves></mdi-waves>
        </div>
        <div class="block-body my-5">
          <PostList :post-type="block.type" :limit="block.limit" />
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
