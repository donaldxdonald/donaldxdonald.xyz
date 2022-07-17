<script setup lang="ts">
import DonaldxHeader from '~/components/DonaldxHeader.vue'
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
    <DonaldxHeader />
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
