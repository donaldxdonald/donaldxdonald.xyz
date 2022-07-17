<script setup lang="ts">
import { useCrossOverStore } from '~/store/crossOver'

const crossOver = useCrossOverStore()

</script>

<template>
  <header class="flex items-center justify-between mt-10 mb-3 text-theme">
    <div>
      <router-link
        class="link title-text"
        to="/"
      >
        Donald
      </router-link>
      <span class="title-text cursor-default font-mono"> x </span>
      <router-link
        class="link title-text"
        :to="crossOver.crossingItem.href"
      >
        {{ crossOver.crossingItem.type }}
      </router-link>
    </div>
    <a href="./feed.xml">
      <mdi-rss class="mx-1" />
    </a>
  </header>
</template>

<style scoped>
.link {
  @apply cursor-pointer font-italic text-theme;
}

.title-text {
  @apply font-bold text-xl;
}
</style>
