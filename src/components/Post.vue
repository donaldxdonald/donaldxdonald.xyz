<script setup lang="ts">
import { Frontmatter } from '~/types'
import { formatDate } from '~/utils/utils'
defineProps<{
  frontmatter: Frontmatter
}>()
</script>

<template>
  <div
    v-if="frontmatter.display ?? frontmatter.title"
    class="prose mx-auto mt-16 mb-8"
    :class="frontmatter.display ? 'main-layout': 'prose-layout'"
  >
    <div class="w-full text-center my-8">
      <a class="cursor-pointer text-xl text-theme font-italic" href="/">DonaldxDonald</a>
    </div>
    <h1>
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p v-if="frontmatter.date" class="text-gray-400 border-b pb-5">
      {{ formatDate(frontmatter.date, 'YYYY-MM-DD hh:mm') }}
    </p>
  </div>
  <article
    ref="content" class="prose m-auto pb-32"
    :class="frontmatter.display ? 'main-layout': 'prose-layout'"
  >
    <slot />
  </article>
</template>
