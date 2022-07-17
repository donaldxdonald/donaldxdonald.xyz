<script setup lang="ts">
import { ref } from 'vue'
import DonaldxHeader from '~/components/DonaldxHeader.vue'
import { PostBlock, PostType } from '~/types'

const postBlock = ref<PostBlock>(
  {
    type: PostType.LATEST,
    label: PostType.LATEST,
    url: '',
    limit: 0,
  })
</script>

<template>
  <div class="main-layout max-w-xl mx-auto h-full relative overflow-y-auto overflow-x-hidden">
    <DonaldxHeader />
    <div class="flex flex-col items-center justify-center">
      <div class="w-full px-4 py-2 mb-5 bg-theme/10 text-theme">
        <span class="block-title text-xl font-sans">{{ postBlock.label }}</span>
      </div>
      <div class="w-full">
        <PostList
          :post-type="postBlock.type"
          :limit="postBlock.limit"
        />
      </div>
    </div>
  </div>
</template>
