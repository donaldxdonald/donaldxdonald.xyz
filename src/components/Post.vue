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
      <a
        class="link title-text"
        href="/"
      >Donald</a>
      <span class="title-text cursor-default font-code"> x </span>
      <a
        class="link title-text"
        href="/posts"
      >Posts</a>
    </div>
    <h1>
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p
      v-if="frontmatter.date"
      class="text-slate-600 font-code border-b border-dashed border-theme pb-5 text-sm"
    >
      {{ formatDate(frontmatter.date, 'YYYY/MM/DD HH:mm') }}
    </p>
  </div>
  <article
    ref="content"
    class="prose m-auto pb-32"
    :class="frontmatter.display ? 'main-layout': 'prose-layout'"
  >
    <slot />
  </article>
</template>

<style scoped>
.link {
  @apply cursor-pointer font-italic text-theme;
}

.title-text {
  @apply font-bold text-xl;
}
</style>
