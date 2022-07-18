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
    <a
      v-if="crossOver.crossingItem.rssFeedName"
      :href="`/${crossOver.crossingItem.rssFeedName}.xml`"
      class="hover:bg-theme hover:text-white py-1 bg-white rounded transition-all"
    >
      <mdi-rss class="mx-1" />
    </a>
  </header>
</template>

<style scoped>
.link {
  @apply cursor-pointer font-mono italic text-theme/80 hover:border-b-2 hover:border-theme transition-all;
}

.title-text {
  @apply font-bold text-xl;
}
</style>
