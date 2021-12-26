<script setup lang="ts">
import { Frontmatter } from '~/types'
import { formatDate } from '~/utils/utils'
defineProps<{
  frontmatter: Frontmatter
}>()
</script>

<template>
  <div v-if="frontmatter.display ?? frontmatter.title" class="prose mx-auto mt-15 mb-8 main-layout">
    <h1>
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p v-if="frontmatter.date" class="opacity-50 mt-2">
      {{ formatDate(frontmatter.date, 'YYYY-MM-DD hh:mm') }}
    </p>
  </div>
  <article
    ref="content" class="prose m-auto pb-1/10"
    :class="frontmatter.display ? 'prose-layout': 'main-layout'"
  >
    <slot />
  </article>
</template>
